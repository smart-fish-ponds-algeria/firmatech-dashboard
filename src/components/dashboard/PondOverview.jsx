"use client";
import { useEffect, useState } from "react";
import { Thermometer, Droplets, Wind, Eye } from "lucide-react";
import Link from "next/link";

export default function PondOverview() {
  const [ponds, setPonds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPonds() {
      try {
        const res = await fetch("http://localhost:8080/waterTanks");
        const data = await res.json();
        if (data.status === "success") {
          const sorted = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPonds(sorted.slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to fetch ponds", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPonds();
  }, []);

  return (
    <div className="font-sans flex py-6 ">
      <div className=" ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-black mb-4 sm:mb-0">Pond Overview</h1>
          <Link href="/Dashboard/ponds">
            <button
              type="button"
              className="flex items-center gap-2 bg-[#D9FF00] text-black font-semibold text-sm rounded px-4 py-2 hover:brightness-90 transition"
            >
              <Eye className="w-4 h-4" />
              View all ponds
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="text-gray-500">Loading ponds...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ponds.map((pond) => (
              <div key={pond._id} className="border bg-white border-gray-300 rounded-lg p-5">
                <h2 className="text-lg font-semibold text-black mb-1">
                  Pond {pond._id.slice(-4)}
                </h2>
                <p className="text-gray-400 mb-4">
                  Volume: {pond.details?.volume} m³
                </p>

                <div className="flex items-center gap-6 mb-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                    <span>{pond.latestTemperature || "--"}°C</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span>pH {pond.latestPh || "--"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="w-4 h-4 text-[#D9FF00]" />
                    <span>{pond.latestOxygen || "--"} mg/L</span>
                  </div>
                </div>

                <Link href={`/Dashboard/ponds/${pond._id}`}>
                  <button
                    type="button"
                    className="w-full border border-gray-300 rounded-md py-2 text-sm font-semibold text-black hover:bg-gray-50 transition"
                  >
                    View details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
