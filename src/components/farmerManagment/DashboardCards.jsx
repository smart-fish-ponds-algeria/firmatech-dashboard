"use client";
import { Users, UserCheck, UserX } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardCards({ total, working, nonWorking }) {
  const Card = ({ title, value, color, Icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-100 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl p-5  flex flex-col justify-between space-y-3"
    >
      <div className="flex justify-between items-center w-full">
        <div className="text-sm font-medium text-gray-600">{title}</div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card title="Total Farmers" value={total} color="text-[#0575E6]" Icon={Users} />
      <Card title="Working Farmers" value={working} color="text-green-600" Icon={UserCheck} />
      <Card title="Non-Working Farmers" value={nonWorking} color="text-red-600" Icon={UserX} />
    </div>
  );
}
