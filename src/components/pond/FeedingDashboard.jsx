import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export default function FeedingDashboard() {
  const feedingHistoryData = {
    labels: ['Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
    datasets: [
      {
        label: 'Feeding (kg)',
        data: [12, 14, 13.5, 15, 16, 14.2, 14],
        backgroundColor: '#22C55E',
        borderRadius: 8,
      },
    ],
  };

  const feedEfficiencyData = {
    labels: ['Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
    datasets: [
      {
        label: 'Feed Efficiency (%)',
        data: [80, 85, 90, 88, 92, 91, 89],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <main className="bg-gray-50 p-6 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Feeding History */}
        <section className="bg-white rounded-lg p-6 shadow-sm  hover:border-gray-200 transition-colors">
          <h2 className="text-xl font-extrabold flex items-center gap-2 mb-4 text-gray-900">
            <i className="fas fa-balance-scale text-green-500" />
            Feeding History
          </h2>
          <Bar data={feedingHistoryData} options={{ responsive: true, plugins: { legend: { display: false } } }} className="mb-6" />
          <dl className="grid grid-cols-2 gap-x-4 text-sm text-gray-900 font-normal mt-4">
            <dt>Today's Total</dt>
            <dd className="font-extrabold text-right">14 kg</dd>
            <dt>Weekly Average</dt>
            <dd className="font-extrabold text-right">14.6 kg/day</dd>
          </dl>
        </section>

        {/* Feed Efficiency */}
        <section className="bg-white rounded-lg p-6 shadow-sm  hover:border-gray-200 transition-colors">
          <h2 className="text-xl font-extrabold flex items-center gap-2 mb-4 text-gray-900">
            <i className="fas fa-chart-line text-blue-600" />
            Feed Efficiency
          </h2>
          <Line data={feedEfficiencyData} options={{ responsive: true, plugins: { legend: { display: false } } }} className="mb-6" />
          <dl className="grid grid-cols-2 gap-x-4 text-sm text-gray-900 font-normal mt-4">
            <dt>Current Efficiency</dt>
            <dd className="font-extrabold text-right text-green-600">89%</dd>
            <dt>Target Efficiency</dt>
            <dd className="font-extrabold text-right">85%</dd>
          </dl>
        </section>

        {/* AI Suggestions */}
        <section className="bg-white rounded-lg p-6 shadow-sm  hover:border-gray-200 transition-colors">
          <h2 className="text-xl font-extrabold mb-4 text-gray-900">AI Smart Feeding Suggestions</h2>
          <div className="bg-blue-100 border border-blue-300 rounded-md p-4 mb-4 text-blue-700 text-sm">
            <div className="flex items-center gap-2 font-semibold mb-1">
              <i className="fas fa-wave-square" />
              Reduce Feeding Amount
            </div>
            <p className="mb-1">Reduce feeding by 15% due to low fish activity (78%) and high water temperature.</p>
            <p className="text-xs text-blue-900">Recommended: 12 kg instead of 14 kg</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800 text-sm">
            <div className="flex items-center gap-2 font-semibold mb-1">
              <i className="far fa-clock" />
              Adjust Timing
            </div>
            <p>Consider feeding earlier (5:30 AM) when water temperature is cooler.</p>
          </div>
        </section>

        {/* Manual Feed Entry */}
        <section className="bg-white rounded-lg p-6 shadow-sm  hover:border-gray-200 transition-colors">
          <h2 className="text-xl font-extrabold mb-4 text-gray-900">Manual Feed Entry</h2>
          <form className="flex flex-col gap-4">
            <label className="text-sm font-semibold text-gray-900" htmlFor="feed-amount">Feed Amount (kg)</label>
            <input id="feed-amount" className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-black" placeholder="Enter amount" />
            <label className="text-sm font-semibold text-gray-900" htmlFor="notes">Notes (optional)</label>
            <textarea id="notes" rows="3" className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 placeholder-gray-400 resize-none focus:ring-2 focus:ring-black" placeholder="Add feeding notes..." />
            <button type="submit" className="bg-gray-900 text-white font-semibold rounded-md py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <i className="fas fa-plus" /> Record Feeding
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
