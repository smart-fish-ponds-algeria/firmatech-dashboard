"use client";
import { motion } from "framer-motion";
import { Fish, CheckCircle2, AlertTriangle, AlertOctagon, ArrowUpWideNarrow } from "lucide-react";

export default function SummaryCards({ total, healthy, warning, critical }) {
  const Card = ({ title, value, icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-5 rounded-xl shadow-md flex flex-col space-y-2 bg-white  text-black`}
    >
      <div className="flex flex-row-reverse justify-between items-center space-x-2 text-xl">
        {icon}
        <span className="font-normal">{title}</span>
      </div>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-green-500 flex items-center space-x-1"><ArrowUpWideNarrow /> <span>+2 this month</span></p>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card title="Total Ponds" value={total} icon={<Fish />} color="bg-blue-600" />
      <Card title="Healthy Ponds" value={healthy} icon={<CheckCircle2 />} color="bg-green-600" />
      <Card title="Warning Ponds" value={warning} icon={<AlertTriangle />} color="bg-yellow-500" />
      <Card title="Critical Ponds" value={critical} icon={<AlertOctagon />} color="bg-red-600" />
    </div>
  );
}
