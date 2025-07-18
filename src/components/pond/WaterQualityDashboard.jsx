"use client";
import React, { useEffect, useState } from "react";
import ThresholdAndSystemStatus from "./ThresholdAndSystemStatus";

const WaterQualityDashboard = ({ tankId }) => {
  const [measurements, setMeasurements] = useState(null);
  const [fishCount, setFishCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch measurements
        const res1 = await fetch(`http://localhost:8080/measurements/tankWater/latest/${tankId}`);
        const result1 = await res1.json();

        if (result1.status === "success") {
          setMeasurements(result1.data);
        }

        // Fetch fish count
        const res2 = await fetch(`http://localhost:8080/waterTanks/id`);
        const result2 = await res2.json();

        if (result2.status === "success") {
          const totalFish = result2.data.reduce(
            (acc, tank) => acc + (tank.fishDetails?.total_fish_count || 0),
            0
          );
          setFishCount(totalFish);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tankId]);

  if (loading) return <div className="p-6">Loading dashboard...</div>;
  if (!measurements) return <div className="p-6 text-red-600">No measurements found!</div>;

  const { temperature, pH, dissolvedOxygen } = measurements;

  return (
    <div>

    <div className="bg-gray-50 p-6 font-sans">
      <div className="max-w-[1280px] mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatusCard
            title="Temperature"
            value={`${temperature}°C`}
            color="orange"
            note="Ideal: 22-26°C"
          />

          <StatusCard
            title="pH Level"
            value={pH}
            color="yellow"
            note="Ideal: 7.0–8.5"
          />

          <StatusCard
            title="Dissolved O₂"
            value={`${dissolvedOxygen} mg/L`}
            color="cyan"
            note="Min: 7.5 mg/L"
          />

          <StatusCard
            title="Fish Count"
            value={fishCount}
            color="green"
            note="Total fish in all tanks"
          />
        </div>
      </div>

    </div>
<ThresholdAndSystemStatus/>

</div>
  );
};

function StatusCard({ title, value, color, note }) {
  const colorMap = {
    orange: "border-orange-400 text-orange-600",
    yellow: "border-yellow-400 text-yellow-700",
    cyan: "border-cyan-400 text-cyan-700",
    green: "border-green-400 text-green-700",
  };

  return (
    <div className={`border ${colorMap[color]} rounded-lg p-5 flex flex-col`}>
      <h3 className="font-semibold text-black text-sm">{title}</h3>
      <p className={`font-extrabold text-3xl mt-2 ${colorMap[color]}`}>{value}</p>
      <p className={`text-xs mt-1 ${colorMap[color]}`}>{note}</p>
    </div>
  );
}

export default WaterQualityDashboard;
