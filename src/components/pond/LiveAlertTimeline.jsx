import React from 'react';

export default function LiveAlertTimeline() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-start justify-center p-4 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-lg p-6 space-y-6 border border-gray-100">
        <h1 className="text-xl font-extrabold text-gray-900">Live Alert Timeline</h1>

        {/* Alert 1 */}
        <section className="border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex items-center justify-center rounded-full bg-red-100 w-10 h-10 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-red-600 text-lg"></i>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 text-sm leading-tight truncate">High Temperature</h2>
              <p className="text-gray-600 text-sm leading-snug">Temperature exceeded 26°C threshold</p>
              <p className="text-blue-700 text-sm font-semibold leading-snug">Temperature: 27.2°C</p>
              <p className="text-gray-500 text-xs mt-1 truncate">2024-01-21 14:53 · 2 minutes ago</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex gap-2 items-center justify-end flex-wrap sm:flex-nowrap">
              <span className="text-xs font-semibold bg-red-500 text-white rounded-full px-3 py-1">critical</span>
              <span className="text-xs font-semibold bg-gray-900 text-white rounded-full px-3 py-1">unresolved</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-gray-900 text-gray-900 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-50">Acknowledge</button>
              <button className="bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800">View Guide</button>
            </div>
          </div>
        </section>

        {/* Alert 2 */}
        <section className="border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex items-center justify-center rounded-full bg-yellow-100 w-10 h-10 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-yellow-600 text-lg"></i>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 text-sm leading-tight truncate">Low Oxygen</h2>
              <p className="text-gray-600 text-sm leading-snug">Oxygen levels below 7.5 mg/L threshold</p>
              <p className="text-blue-700 text-sm font-semibold leading-snug">O₂: 6.9 mg/L</p>
              <p className="text-gray-500 text-xs mt-1 truncate">2024-01-21 14:40 · 15 minutes ago</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex gap-2 items-center justify-end flex-wrap sm:flex-nowrap">
              <span className="text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1">warning</span>
              <span className="text-xs font-semibold bg-gray-900 text-white rounded-full px-3 py-1">unresolved</span>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-gray-900 text-gray-900 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-50">Acknowledge</button>
              <button className="bg-gray-900 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800">View Guide</button>
            </div>
          </div>
        </section>

        {/* Alert 3 */}
        <section className="border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex items-center justify-center rounded-full bg-yellow-100 w-10 h-10 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-yellow-600 text-lg"></i>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 text-sm leading-tight truncate">pH Imbalance</h2>
              <p className="text-gray-600 text-sm leading-snug">pH level below optimal range</p>
              <p className="text-blue-700 text-sm font-semibold leading-snug">pH: 6.7</p>
              <p className="text-gray-500 text-xs mt-1 truncate">2024-01-21 13:55 · 1 hour ago</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-end flex-wrap sm:flex-nowrap max-w-full">
            <span className="text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1">warning</span>
            <span className="text-xs font-semibold bg-green-200 text-green-600 rounded-full px-3 py-1">resolved</span>
          </div>
        </section>

        {/* Alert 4 */}
        <section className="border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-4 flex-1 min-w-0">
            <div className="flex items-center justify-center rounded-full bg-yellow-100 w-10 h-10 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-yellow-600 text-lg"></i>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 text-sm leading-tight truncate">High Ammonia</h2>
              <p className="text-gray-600 text-sm leading-snug">Ammonia levels above 0.5 mg/L threshold</p>
              <p className="text-blue-700 text-sm font-semibold leading-snug">NH₃: 0.9 mg/L</p>
              <p className="text-gray-500 text-xs mt-1 truncate">2024-01-21 12:55 · 2 hours ago</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-end flex-wrap sm:flex-nowrap max-w-full">
            <span className="text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1">warning</span>
            <span className="text-xs font-semibold bg-green-200 text-green-600 rounded-full px-3 py-1">resolved</span>
          </div>
        </section>
      </div>
    </main>
  );
}
