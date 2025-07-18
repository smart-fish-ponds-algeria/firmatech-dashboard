"use client";
import { motion } from "framer-motion";
import {
  Fish,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  ArrowUpWideNarrow,
} from "lucide-react";

export default function SummaryCards({ total, healthy, warning, critical }) {
  const Card = ({ title, value, icon, color, bgColor, highlight = false, trend }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`p-5 rounded-2xl ${
        highlight
          ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
          : "bg-white text-gray-800 border border-gray-200"
      } shadow-md hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <div className={`text-4xl ${highlight ? "opacity-80" : `${color}`}`}>
          {icon}
        </div>
      <h3 className={`text-base font-semibold  ${highlight ? "" : "text-gray-700"}`}>
        {title}
      </h3>
      </div>

      <p className={`text-3xl font-bold ${highlight ? "" : "text-black"}`}>
        {value}
      </p>
      {trend && (
        <p className={`flex items-center gap-1 text-sm mt-2 ${highlight ? "opacity-90" : "text-gray-500"}`}>
          <ArrowUpWideNarrow size={16} />
          {trend}
        </p>
      )}
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card
        title="Healthy Ponds"
        value={healthy}
        icon={<CheckCircle2 />}
        color="text-green-500"
        trend="+5 this month"
      />
      <Card
        title="Warning Ponds"
        value={warning}
        icon={<AlertTriangle />}
        color="text-yellow-500"
        trend="+1 this month"
      />
      <Card
        title="Critical Ponds"
        value={critical}
        icon={<AlertOctagon />}
        color="text-red-500"
        trend="+3 this month"
      />
      <Card
        title="Total Ponds"
        value={total}
        icon={<Fish />}
        highlight
        trend="+2 this month"
      />
    </div>
  );
}
