import React from "react";
import { Line, Bar, Scatter, Doughnut } from "react-chartjs-2";

const Chart = ({variant, data, labels, title}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],

    options:
      variant === "Scatter"
        ? {
            scales: {
              xAxes: [
                {
                  type: "linear",
                  position: "bottom",
                },
              ],
            },
          }
        : {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
  };

  switch (variant) {
    case "Bar":
      return <Bar data={chartData} />;
    case "Line":
      return <Line data={chartData} />;
    case "Scatter":
      return <Scatter data={chartData} />;
    case "Doughnut":
      return <Doughnut data={chartData} />;
    default:
      return <p>Must specific variant</p>;
  }
};

export default Chart;
