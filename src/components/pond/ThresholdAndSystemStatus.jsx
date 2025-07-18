"use client";
import React from "react";

const ThresholdAndSystemStatus = () => {
  return (
    <div className="bg-white p-6 font-sans ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <section className="bg-white rounded-lg p-6 shadow-sm ">
          <h2 className="text-2xl font-extrabold mb-6">Current Thresholds & Alerts</h2>

          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg">Temperature Alert</h3>
              <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full select-none">
                Active
              </span>
            </div>
            <p className="text-sm">Current: 27.0°C | Threshold: 26.0°C</p>
          </div>

          <div className="mb-6 rounded-md  border-yellow-200 bg-yellow-50 p-4 text-yellow-700">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg">Oxygen Warning</h3>
              <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full select-none">
                Active
              </span>
            </div>
            <p className="text-sm">Current: 7.1 mg/L | Threshold: 7.5 mg/L</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Threshold Settings</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-base">
              <p>Temperature: 22°C - 26°C</p>
              <p>pH: 7.0 - 8.5</p>
              <p>Oxygen: ≥ 7.5 mg/L</p>
              <p>Ammonia: ≤ 0.5 mg/L</p>
            </div>
          </div>
        </section>

        {/* Right Card */}
        <section className="bg-white rounded-lg p-6 shadow-sm ">
          <h2 className="text-2xl font-extrabold mb-6">System Status</h2>

          <ul className="space-y-6 text-base font-normal">
            <li className="flex justify-between items-center">
              <span>Sensor Network</span>
              <span className="flex items-center space-x-2 text-green-600 font-medium">
                <i className="fas fa-circle text-[10px]"></i>
                <span>Online</span>
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>AI Camera System</span>
              <span className="flex items-center space-x-2 text-green-500 font-medium">
                <i className="fas fa-circle text-[10px]"></i>
                <span>Active</span>
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>Data Sync</span>
              <span className="flex items-center space-x-2 text-yellow-600 font-semibold">
                <i className="fas fa-circle text-[10px]"></i>
                <span>3 min delay</span>
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>Alert System</span>
              <span className="flex items-center space-x-2 text-green-600 font-medium">
                <i className="fas fa-circle text-[10px]"></i>
                <span>Operational</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ThresholdAndSystemStatus;
