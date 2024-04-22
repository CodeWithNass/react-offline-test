import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// import "./EnergyMixChart.css";

type EnergyMixChartProps = {
  data: {
    from: Date;
    to: Date;
    generationmix: { fuel: string; perc: number }[];
  };
};
// EnergyMixChart.js

function EnergyMixChart({ data }: EnergyMixChartProps) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const { from, to, generationmix } = data;
  // Extract fuel types and percentages from data
  const fuelTypes = generationmix.map((item) => item.fuel);
  const percentages = generationmix.map((item) => item.perc);
  const fromDate = new Date(from);
  const fromTime = `${fromDate.getHours()}:${
    fromDate.getMinutes() === 0 ? "00" : fromDate.getMinutes()
  }`;

  const toDate = new Date(to);
  const toTime = `${toDate.getHours()}:${
    toDate.getMinutes() === 0 ? "00" : toDate.getMinutes()
  }`;

  // Chart data
  const chartData = {
    labels: fuelTypes,
    datasets: [
      {
        label: "Percentage",
        backgroundColor: "rgb(0, 171, 171)",
        borderColor: "rgb(0, 171, 171)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(0, 138, 138)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: percentages,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div>
      <h2 className="header-2">
        {`From ${daysOfWeek[fromDate.getDay()]} ${fromTime} to ${
          daysOfWeek[toDate.getDay()]
        } ${toTime}`}
      </h2>
      <div>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default EnergyMixChart;
