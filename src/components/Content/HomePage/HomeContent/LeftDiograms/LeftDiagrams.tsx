import React, {useEffect, useRef} from "react";
import {useAppSelector} from "@/hok/hoks";
import {DataType} from "csstype";
import {ChartOptions, LineControllerDatasetOptions, registerables} from "chart.js";
import {Chart} from "chart.js/auto";
Chart.register(...registerables);
type DataType = {
    labels: string[],
    values: number[]
}
export const LeftDiagrams = () => {
    const chartRef = useRef<HTMLCanvasElement>(null); // Используем useRef с типом элемента
    const state = useAppSelector(state => state.allState)
    const stateOutcome = state.filter(el => el.type === 'outcome')


    const arr: Array<number[]> = Array.from({length: 12}, () => []);
    stateOutcome.forEach(({date, value}) => {
        const month = Number(date.split("-")[1]) - 1;
        // console.log(month)
        arr[month].push(value);
    });
    const arr2 = arr.map(subarr => subarr.reduce((acc, el) => acc + el, 0));


    const data: DataType = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        values: arr2
    }

    useEffect(() => {
        // Проверяем, что элемент canvas существует
        if (chartRef && chartRef.current) {


            const gradient = (context: CanvasRenderingContext2D | null) => {
                if (!context) return null;
                const gradient = context.createLinearGradient(0, 0, 0, 450);
                gradient.addColorStop(0, 'rgba(125,73,112,0.6)');
                gradient.addColorStop(1, 'rgba(61,56,146, 0.3)');
                return gradient;
            }

            const context: CanvasRenderingContext2D | null | undefined = chartRef.current?.getContext('2d');
            // if (!context) return null; // если значение context равно undefined, вернуть null

            // @ts-ignore
            const config: ChartOptions<"line", LineControllerDatasetOptions[], string> = {
                type: "line",
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: "outcome",
                            data: data.values,
                            borderColor: "blue",
                            fill: "start",
                            borderWidth: 0.2,
                            pointBackgroundColor: "rgb(125,73,112)",
                            backgroundColor: gradient(context),
                            cubicInterpolationMode: 'monotone',
                        }
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                type: "time",
                                time: {
                                    unit: "day",
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                },
                            }
                        ]
                    },
                },
            }


            // Получаем контекст для рисования на холсте
            const chartCanvas = chartRef.current.getContext("2d");
            if (!chartCanvas) return;

            // Создаем новый график
            const chart = new Chart(chartCanvas, config);

            return () => chart.destroy(); // Уничтожаем график при размонтировании компонента
        }
    }, [data]);

    return <canvas ref={chartRef}/>; // Используем типизированный ref для элемента canvas
};