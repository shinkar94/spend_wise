import React, {useEffect, useRef} from 'react';
import {S} from './rightDiagrams.style'
import {useSumTransactions} from "@/helper/sumResult";
import {useAppSelector} from "@/hok/hoks";
import {OperationsType} from "@/reducer/allStateReducer";
import {Chart} from "chart.js/auto";

export const RightDiagrams = () => {
    const outcome = useSumTransactions('outcome')
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
        percentage: ((expense.value / outcome) * 100).toFixed(2),
    }));
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: expensePercentages.map((expense) => expense.category),
                    datasets: [
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
            return () => {
                chart.destroy();
            };
        }
    }, [expensePercentages]);
    return (
        <S.DiagramsWrapper>
            <div>
                <h3>Аналитика раходов</h3>
            </div>
            <S.Diagram>
                <canvas ref={chartRef}/>
            </S.Diagram>
        </S.DiagramsWrapper>
    );
};










