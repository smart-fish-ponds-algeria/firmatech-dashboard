"use client";
import { Thermometer, Droplets, Wind, Eye } from "lucide-react";

export default function PondOverview() {
  return (
    <div className=" font-sans py-6 pr-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-black mb-4 sm:mb-0">Pond Overview</h1>
          <button
            type="button"
            className="flex items-center gap-2 bg-[#D9FF00] text-black font-semibold text-sm rounded px-4 py-2 hover:brightness-90 transition"
          >
            <Eye className="w-4 h-4" />
            View all ponds
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((pond) => (
            <div key={pond} className="border bg-white border-gray-300 rounded-lg p-5">
              <h2 className="text-lg font-semibold text-black mb-1">Pond Alpha</h2>
              <p className="text-gray-400 mb-4">North Section</p>

              <div className="flex items-center gap-6 mb-4 text-sm text-black">
                <div className="flex items-center gap-1">
                  <Thermometer className="w-4 h-4 text-orange-500" />
                  <span>24.5°C</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span>pH 7.2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wind className="w-4 h-4 text-[#D9FF00]" />
                  <span>8.5 mg/L</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full border border-gray-300 rounded-md py-2 text-sm font-semibold text-black hover:bg-gray-50 transition"
              >
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
