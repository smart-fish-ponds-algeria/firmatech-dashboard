"use client";
import { Eye } from "lucide-react";

export default function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      message: "Temperature Exceeded 28°C Threshold",
      pond: "Pond Gamma",
      time: "2 min ago",
      borderColor: "border-red-500",
      checkboxColor: "border-red-500",
    },
    {
      id: 2,
      message: "Temperature Exceeded 28°C Threshold",
      pond: "Pond Gamma",
      time: "2 min ago",
      borderColor: "border-red-500",
      checkboxColor: "border-red-500",
    },
    {
      id: 3,
      message: "Temperature Exceeded 28°C Threshold",
      pond: "Pond Gamma",
      time: "2 min ago",
      borderColor: "border-red-500",
      checkboxColor: "border-red-500",
    },
    {
      id: 4,
      message: "Scheduled Feeding Time Approaching",
      pond: "Pond Alpha",
      time: "2 hours ago",
      borderColor: "border-green-500",
      checkboxColor: "border-green-500",
    },
    {
      id: 5,
      message: "PH Level Dropped To 6.2",
      pond: "Pond Alpha",
      time: "2 hours ago",
      borderColor: "border-orange-400",
      checkboxColor: "border-orange-400",
    },
    {
      id: 6,
      message: "PH Level Dropped To 6.2",
      pond: "Pond Alpha",
      time: "2 hours ago",
      borderColor: "border-orange-400",
      checkboxColor: "border-orange-400",
    },
    {
      id: 7,
      message: "PH Level Dropped To 6.2",
      pond: "Pond Alpha",
      time: "2 hours ago",
      borderColor: "border-orange-400",
      checkboxColor: "border-orange-400",
    },
  ];

  return (
    <div className="py-6 font-sans">
      <div className="max-w-md mx-auto border bg-white border-gray-300 rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-normal text-black">Recent Alerts</h2>
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-black text-sm font-semibold hover:bg-gray-50"
          >
            <Eye className="w-4 h-4" />
            View all
          </button>
        </div>

        {/* Scrollable alerts box */}
        <div className="h-[400px] overflow-y-auto space-y-4 pr-2">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`rounded-md p-4 flex flex-col gap-1 border ${alert.borderColor}`}
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className={`w-5 h-5 ${alert.checkboxColor} border-2 rounded-md`}
                />
                <span className="text-black text-base font-normal">{alert.message}</span>
              </label>
              <div className="flex gap-4 text-gray-400 text-sm font-normal pl-[34px]">
                <span>{alert.pond}</span>
                <span>{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}