import React, {useEffect, useMemo, useRef} from "react";
import {useAppSelector} from "@/hok/hoks";
import {ChartConfiguration, ChartType, registerables} from "chart.js";
import {Chart} from "chart.js/auto";

Chart.register(...registerables);
type DataType = {
    labels: string[],
    values: number[]
}
export const LeftDiagrams = React.memo(function LeftDiagrams() {
    const chartRef = useRef<HTMLCanvasElement>(null); // Используем useRef с типом элемента
    const state = useAppSelector(state => state.allState)
    const stateOutcome = state.filter(el => el.type === 'outcome')


    const arr: Array<number[]> = Array.from({length: 12}, () => []);
    stateOutcome.forEach(({date, value}) => {
        const month = Number(date.split("-")[1]) - 1;
        arr[month].push(value);
    });
    const arr2 = arr.map(subarr => subarr.reduce((acc, el) => acc + el, 0));


    // const myData: DataType = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //     values: arr2
    // }
    const myData: DataType = useMemo(() => ({
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        values: arr2
    }), [arr2]);

    useEffect(() => {
        // Проверяем, что элемент canvas существует
        if (chartRef && chartRef.current) {
            const Utils = {
                CHART_COLORS: {
                    red: 'rgb(255, 0, 0)',
                    blue: 'rgb(0, 0, 255)',
                    green: 'rgb(0, 255, 0)',
                    violet: 'rgba(125,73,112,0.6)',
                    staticViolet: 'rgb(125,73,112)'
                },
                transparentize: (color:string) => {
                    // Преобразование цвета в формат rgba и установка значения альфа-канала для достижения прозрачности
                    const rgbaColor = color.replace('rgb', 'rgba').replace(')', ', 0.5)');
                    return rgbaColor;
                },
            };

            const gradient = (context: CanvasRenderingContext2D | null) => {
                if (context !== null){
                    const gradient = context.createLinearGradient(0, 0, 0, 450);
                    gradient.addColorStop(0, 'rgba(125,73,112,0.6)');
                    gradient.addColorStop(1, 'rgba(61,56,146, 0.3)');
                    return gradient;
                }
            }

            const context: CanvasRenderingContext2D | null | undefined = chartRef.current?.getContext('2d');

            const data = {
                labels: myData.labels,
                datasets: [
                    {
                        label: 'Outcome',
                        data: myData.values,
                        borderColor: Utils.CHART_COLORS.violet,
                        backgroundColor: gradient(context),
                        pointBackgroundColor: Utils.CHART_COLORS.staticViolet,
                        cubicInterpolationMode: 'monotone',
                        fill: true
                    }
                ]
            };
            const config: ChartConfiguration<ChartType, number[], string> = {
                type: 'line',
                data: data,
                options: {
                    plugins: {
                        filler: {
                            propagate: false,
                        },
                        title: {
                            display: true,
                        }
                    },
                    interaction: {
                        intersect: false,
                    },
                    maintainAspectRatio: false,
                },
            };

            // Получаем контекст для рисования на холсте
            const chartCanvas = chartRef.current.getContext("2d");
            if (!chartCanvas) return;

            // Создаем новый график
            const chart = new Chart(chartCanvas, config);

            return () => chart.destroy(); // Уничтожаем график при размонтировании компонента
        }
    }, [myData]);

    return <canvas ref={chartRef} />; // Используем типизированный ref для элемента canvas
});