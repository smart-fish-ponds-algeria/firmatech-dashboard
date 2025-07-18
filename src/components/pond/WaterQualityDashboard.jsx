import React from 'react';

const WaterQualityDashboard = () => {
  return (
    <div className="bg-gray-50 p-6 font-sans">
      <div className="max-w-[1280px] mx-auto space-y-6">

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Temperature */}
          <div className="border border-orange-400 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-black text-sm">Temperature</h3>
              <i className="fas fa-thermometer-half text-orange-400 text-lg"></i>
            </div>
            <div className="mt-2">
              <p className="text-orange-600 font-extrabold text-3xl leading-none">
                27.0<span className="text-xl">°C</span>
              </p>
              <p className="text-orange-600 text-xs mt-1 flex items-center gap-1">
                <i className="fas fa-exclamation-triangle"></i>
                Above threshold (26°C)
              </p>
            </div>
          </div>

          {/* pH Level */}
          <div className="border border-yellow-400 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-black text-sm">pH Level</h3>
              <i className="fas fa-tint text-yellow-400 text-lg"></i>
            </div>
            <div className="mt-2">
              <p className="text-yellow-700 font-extrabold text-3xl leading-none">6.9</p>
              <p className="text-yellow-700 text-xs mt-1 flex items-center gap-1">
                <i className="fas fa-exclamation-triangle"></i>
                Below optimal (7.0–8.5)
              </p>
            </div>
          </div>

          {/* Dissolved O2 */}
          <div className="border border-red-400 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-black text-sm">
                Dissolved O<sub>2</sub>
              </h3>
              <i className="fas fa-wind text-cyan-400 text-lg"></i>
            </div>
            <div className="mt-2">
              <p className="text-red-600 font-extrabold text-3xl leading-none">
                7.1 <span className="text-xl">mg/L</span>
              </p>
              <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                <i className="fas fa-circle"></i>
                Below threshold (7.5 mg/L)
              </p>
            </div>
          </div>

          {/* Fish Count */}
          <div className="border border-green-400 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-black text-sm">Fish Count</h3>
              <i className="fas fa-fish text-green-400 text-lg"></i>
            </div>
            <div className="mt-2">
              <p className="text-green-700 font-extrabold text-3xl leading-none">1,247</p>
              <p className="text-green-700 text-xs mt-1 flex items-center gap-1">
                <i className="fas fa-check-square"></i>
                Healthy population
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Current Thresholds & Alerts */}
          <section className="bg-white rounded-lg p-6 space-y-6 shadow-sm border border-transparent">
            <h2 className="text-2xl font-extrabold text-black">Current Thresholds &amp; Alerts</h2>

            <div className="space-y-4">

              {/* Temperature Alert */}
              <div className="bg-red-100 border border-red-300 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-red-700 font-semibold text-base">Temperature Alert</h3>
                  <p className="text-red-600 text-sm">Current: 27.0°C | Threshold: 26.0°C</p>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full select-none">
                  Active
                </span>
              </div>

              {/* Oxygen Warning */}
              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-yellow-700 font-semibold text-base">Oxygen Warning</h3>
                  <p className="text-yellow-700 text-sm">Current: 7.1 mg/L | Threshold: 7.5 mg/L</p>
                </div>
                <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full select-none">
                  Active
                </span>
              </div>

            </div>

            <div>
              <h4 className="font-semibold text-black text-lg mb-2">Threshold Settings</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-1 text-sm text-black">
                <p>Temperature: 22°C - 26°C</p>
                <p>pH: 7.0 - 8.5</p>
                <p>Oxygen: ≥ 7.5 mg/L</p>
                <p>Ammonia: ≤ 0.5 mg/L</p>
              </div>
            </div>
          </section>

          {/* System Status */}
          <section className="bg-white rounded-lg p-6 space-y-6 shadow-sm border border-transparent">
            <h2 className="text-2xl font-extrabold text-black">System Status</h2>
            <ul className="space-y-4 text-base text-black">
              <li className="flex justify-between items-center">
                <span>Sensor Network</span>
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                  <i className="fas fa-circle text-[10px]"></i> Online
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>AI Camera System</span>
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                  <i className="fas fa-circle text-[10px]"></i> Active
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Data Sync</span>
                <span className="flex items-center gap-1 text-yellow-600 font-semibold">
                  <i className="fas fa-circle text-[10px]"></i> 3 min delay
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>Alert System</span>
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                  <i className="fas fa-circle text-[10px]"></i> Operational
                </span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default WaterQualityDashboard;
