import React, {FC, useEffect, useRef} from 'react';

import Chart from 'chart.js/auto';

import styled from 'styled-components';
import {useAppSelector} from "@/hok/useAppSelector";
import {OperationsType} from "@/reducer/allStateReducer";


type RightType = {
    totalOutcome: number
}

export const RightDiagrams: FC<RightType> = ({totalOutcome}) => {

    const state = useAppSelector(state => state.allState)

    const expenseAnalytics: OperationsType[] = state.filter(item => item.type === 'outcome')
        .reduce((acc: OperationsType[], {category, value, ...rest}) => {
            const categoryIndex = acc.findIndex(
                (item) => item.category === category
            );
            if (categoryIndex !== -1) {
                acc[categoryIndex].value += value;
            } else {
                acc.push({category, value, ...rest});
            }
            return acc;
        }, []);

    const expensePercentages = expenseAnalytics.map((expense) => ({
        category: expense.category,
        percentage: ((expense.value / totalOutcome) * 100).toFixed(2),
    }));
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        // console.log(chartRef.current)
        /*Это условие проверяет, существует ли объект chartRef и имеет ли он значение current. Это гарантирует,
        что диаграмма создается только в том случае, если доступен элемент DOM, в который она будет отображаться.*/
        if (chartRef && chartRef.current) {

            /*Эта строка создает новый экземпляр библиотеки Chart.js и передает ссылку на DOM-элемент,
            куда будет отрисована диаграмма.*/
            const chart = new Chart(chartRef.current, {

                /*type устанавливает тип диаграммы для отображения в виде doughnut chart.*/
                type: 'doughnut',

                /*Это задает данные, которые будут использоваться для рендеринга диаграммы.*/
                data: {

                    /*labels устанавливает метки для каждого сегмента doughnut chart. Метки получены из массива
                    expensePercentages, который является массивом объектов, содержащих информацию о каждой категории
                    расходов.*/
                    labels: expensePercentages.map((expense) => expense.category),

                    /*datasets задает массив данных, которые будут использоваться для рендеринга диаграммы.*/
                    datasets: [

                        /*Это задает данные для расходов в процентах от общей суммы. Опция label устанавливает метку
                        для набора данных. Опция data устанавливает значения для каждого сегмента doughnut chart.
                        Опция backgroundColor устанавливает цвет фона для каждого сегмента.*/
                        {
                            label: 'Expenses(%)',
                            data: expensePercentages.map((expense) => expense.percentage),
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#8E5EA2',
                                '#3cba9f',
                                '#e8c3b9',
                                '#c45850',
                                '#FF8C00',
                                '#FFD700',
                                '#7CFC00',
                            ],
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                    },

                },
            });

            /*Эта функция возвращается из useEffect hook и вызывается при размонтировании компонента. Она уничтожает
            экземпляр диаграммы, созданный ранее.*/
            return () => {
                chart.destroy();
            };
        }
    }, [expensePercentages]);


    return (
        <DiagramsWrapper>
            <div>
                <h3>Аналитика раходов</h3>
            </div>
            <Diagram>
                <canvas ref={chartRef}/>
            </Diagram>
        </DiagramsWrapper>
    );
};
const DiagramsWrapper = styled.div`
  padding: 20px;

`
const Diagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`










