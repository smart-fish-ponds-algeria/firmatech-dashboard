import React from "react";

export default function FishAnalysisDashboard() {
  return (
    <main className="bg-gray-50  font-sans max-w-7xl mx-auto space-y-6">
      {/* Main Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Fish Analysis */}
        <section
          aria-labelledby="live-fish-analysis-title"
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          <h2
            id="live-fish-analysis-title"
            className="text-lg font-extrabold flex items-center gap-2 mb-6 text-gray-900"
          >
            <i className="fas fa-fish text-blue-600 text-xl"></i>
            Live Fish Analysis
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div
              className="flex-1 bg-blue-50 rounded-lg p-6 text-center sm:text-left"
              style={{ minWidth: "140px" }}
            >
              <p className="text-2xl font-extrabold text-blue-700 leading-none">
                1,247
              </p>
              <p className="text-sm font-semibold text-gray-900">Fish Count</p>
              <p className="text-xs text-green-600 font-semibold mt-1">
                +12 from yesterday
              </p>
            </div>

            <div
              className="flex-1 bg-green-50 rounded-lg p-6 text-center sm:text-left"
              style={{ minWidth: "140px" }}
            >
              <p className="text-2xl font-extrabold text-green-700 leading-none">
                425 <span className="text-lg font-semibold">kg</span>
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Total Biomass
              </p>
              <p className="text-xs text-green-600 font-semibold mt-1">
                +8.2% growth
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 text-gray-900 mb-6">
            <div className="flex justify-between">
              <dt className="font-normal">Average Weight</dt>
              <dd className="font-semibold">341g</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-normal">Growth Rate</dt>
              <dd className="font-semibold text-green-600">+2.3% weekly</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-normal">Last AI Scan</dt>
              <dd className="font-semibold">5 minutes ago</dd>
            </div>
          </dl>

          <button
            type="button"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2"
          >
            <i className="fas fa-camera"></i> Capture New Analysis
          </button>
        </section>

        {/* Health Detection */}
        <section
          aria-labelledby="health-detection-title"
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          <h2
            id="health-detection-title"
            className="text-lg font-extrabold flex items-center gap-2 mb-6 text-gray-900"
          >
            <i className="far fa-heart text-red-500 text-xl"></i>
            Health Detection
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="bg-green-50 rounded-lg py-3 px-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <i className="fas fa-check-circle"></i>
                <span>Healthy Fish</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                98.2%
              </span>
            </li>
            <li className="bg-yellow-50 rounded-lg py-3 px-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-yellow-700 font-semibold">
                <i className="fas fa-exclamation-triangle"></i>
                <span>Abnormal Behavior</span>
              </div>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                1.5%
              </span>
            </li>
            <li className="bg-red-50 rounded-lg py-3 px-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <i className="fas fa-times-circle"></i>
                <span>Disease Detected</span>
              </div>
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                0.3%
              </span>
            </li>
          </ul>

          <div>
            <p className="font-semibold text-gray-900 mb-1">Activity Score</p>
            <div className="flex items-center gap-3">
              <div
                className="w-full h-2 rounded-full bg-gray-300 overflow-hidden relative"
                role="progressbar"
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="h-2 bg-green-600"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <span className="font-semibold text-gray-900">78%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Normal activity level</p>
          </div>
        </section>
      </section>

      {/* AI Detection Alerts */}
      <section
        aria-labelledby="ai-detection-alerts-title"
        className="bg-white rounded-lg p-6 shadow-sm"
      >
        <h2
          id="ai-detection-alerts-title"
          className="text-lg font-extrabold mb-4 text-gray-900"
        >
          AI Detection Alerts
        </h2>

        <ul className="space-y-4">
          <li className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-start gap-3 text-yellow-700">
              <i className="fas fa-exclamation-triangle mt-1"></i>
              <div>
                <p className="font-semibold">Abnormal Swimming Pattern</p>
                <p className="text-sm font-semibold text-yellow-800">
                  18 fish showing circular swimming behavior in northeast
                  section
                </p>
                <p className="text-xs text-gray-500 mt-1">Detected 2 hours ago</p>
              </div>
            </div>
            <span className="mt-3 sm:mt-0 inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              Monitoring
            </span>
          </li>

          <li className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-start gap-3 text-red-600">
              <i className="fas fa-times-circle mt-1"></i>
              <div>
                <p className="font-semibold">Skin Discoloration</p>
                <p className="text-sm font-semibold text-red-600">
                  4 fish with white spots detected - possible fungal infection
                </p>
                <p className="text-xs text-gray-500 mt-1">Detected 6 hours ago</p>
              </div>
            </div>
            <span className="mt-3 sm:mt-0 inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              Action Required
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
