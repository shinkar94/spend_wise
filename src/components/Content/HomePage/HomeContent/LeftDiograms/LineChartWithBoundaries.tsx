import React, {useRef} from "react";
import {Chart, registerables} from 'chart.js';
import {useAppSelector} from "@/hok/hoks";

// Регистрируем необходимые модули
Chart.register(...registerables);

// Определяем типы данных для графика
type DataType = {
    labels: string[],
    values: number[]
}

export const LineChartWithBoundaries = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const state = useAppSelector(state => state.allState);
    const stateOutcome = state.filter(el => el.type === 'outcome');

    return <canvas ref={chartRef} />;
};