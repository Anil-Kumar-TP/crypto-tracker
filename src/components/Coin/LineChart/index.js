import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, scales } from 'chart.js/auto';
import { convertNumbers } from '../../../functions/convertNumbers';

function LineChart ({ chartData, priceType, multiAxes }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxes ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        if(priceType === "prices")  return '$' + value.toLocaleString();
                        else {
                            return '$' + convertNumbers(value);
                       }
                    },
                },
            },
        },
    };
  return <Line data={chartData} options={options}/>
}

export default LineChart;