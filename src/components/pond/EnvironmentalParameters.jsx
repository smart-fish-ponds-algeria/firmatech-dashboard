"use client";
import { Line } from "react-chartjs-2";
import { Thermometer, Droplet, Wind, Zap } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function EnvironmentalParameters() {
  const [interval, setInterval] = useState("Real-time");

  const temperatureData = {
    labels: ["8:00", "9:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [25.5, 26.0, 27.0, 26.5, 27.5],
        borderColor: "#F97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        fill: true,
      },
    ],
  };

  const phData = {
    labels: ["8:00", "9:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "pH Level",
        data: [7.1, 6.9, 7.0, 6.8, 7.2],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  };

  const oxygenData = {
    labels: ["8:00", "9:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "Dissolved Oxygen (mg/L)",
        data: [7.5, 7.3, 7.1, 7.0, 7.2],
        borderColor: "#14B8A6",
        backgroundColor: "rgba(20, 184, 166, 0.2)",
        fill: true,
      },
    ],
  };

  const ammoniaData = {
    labels: ["8:00", "9:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "Ammonia (mg/L)",
        data: [0.3, 0.4, 0.35, 0.38, 0.32],
        borderColor: "#A78BFA",
        backgroundColor: "rgba(167, 139, 250, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen p-6 font-sans max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-extrabold text-black text-base leading-5">Environmental Parameters</h2>
        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="border border-gray-300 rounded-md text-black text-sm leading-5 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Real-time</option>
          <option>Hourly</option>
          <option>Daily</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Temperature */}
        <Card title="Temperature" icon={<Thermometer className="text-[#F97316]" />} chartData={temperatureData} options={options} />

        {/* pH Level */}
        <Card title="pH Level" icon={<Droplet className="text-[#3B82F6]" />} chartData={phData} options={options} />

        {/* Dissolved Oxygen */}
        <Card title="Dissolved Oxygen" icon={<Wind className="text-[#14B8A6]" />} chartData={oxygenData} options={options} />

        {/* Ammonia */}
        <Card title="Ammonia (NH₃)" icon={<Zap className="text-[#A78BFA]" />} chartData={ammoniaData} options={options} />
      </div>
    </div>
  );
}

function Card({ title, icon, chartData, options }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="flex items-center font-extrabold text-black text-lg leading-6 mb-4 gap-2">
        {icon}
        {title}
      </h3>
      <Line data={chartData} options={options} />
    </div>
  );
}
