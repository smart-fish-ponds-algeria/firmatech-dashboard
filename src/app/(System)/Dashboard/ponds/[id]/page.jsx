"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Clock,
  Bell,
  RefreshCcw,
  Camera,
  Thermometer,
  Droplet,
  Wind,
  Fish,
  CheckSquare,
} from "lucide-react";
import EnvironmentalParameters from "@/components/pond/EnvironmentalParameters";
import FishAnalysisDashboard from "@/components/pond/FishAnalysisDashboard";
import LiveAlertTimeline from "@/components/pond/LiveAlertTimeline";
import FeedingDashboard from "@/components/pond/FeedingDashboard";
import WaterQualityDashboard from "@/components/pond/WaterQualityDashboard";

// ✅ Main Dashboard Component
export default function PondDashboard() {
  const { id } = useParams();
  const [pond, setPond] = useState(null);
  const [farmerName, setFarmerName] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Real-Time Status");

  useEffect(() => {
    async function fetchPondAndFarmer() {
      try {
        const res = await fetch(`http://localhost:8080/waterTanks/${id}`);
        const data = await res.json();
        
        if (data.status === "success") {

          setPond(data.data);
          const responsibleId = data.data[0].responsible;

          if (responsibleId) {
            const userRes = await fetch(`http://localhost:8080/users/${responsibleId}`);
            const userData = await userRes.json();

            if (userData.status === "success") {
              const user = userData.data;
              setFarmerName(`${user.firstName} ${user.lastName}`);
            } else setFarmerName("Unknown Farmer");
          } else {
            setFarmerName("Not Assigned");
          }
        }
      } catch (err) {
        console.error("Error:", err);
        setFarmerName("Unknown Farmer");
      } finally {
        setLoading(false);
      }
    }
    fetchPondAndFarmer();
  }, [id]);

  const tabs = [
    "Real-Time Status",
    "Environmental",
    "AI Fish Health",
    "Alerts & Timeline",
    "Feeding Management",
  ];

  if (loading) return <div className="p-6">Loading Dashboard...</div>;
  if (!pond) return <div className="p-6 text-red-500">Pond Not Found!</div>;

  return (
    <div className="text-[#0F172A] font-sans p-6 min-h-screen">
      <Header pond={pond} farmerName={farmerName} />
      <nav className="flex flex-wrap bg-[#F3F4F6] rounded-md text-[#6B7280] text-sm font-semibold mb-6 select-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 ${
              activeTab === tab
                ? "border-b-2 border-[#111827] text-[#111827] font-bold"
                : "hover:text-[#374151]"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "Real-Time Status" && <WaterQualityDashboard tankId={id} />}
      {activeTab === "Environmental" && <EnvironmentalParameters />}
      {activeTab === "AI Fish Health" && <FishAnalysisDashboard />}
      {activeTab === "Alerts & Timeline" && <LiveAlertTimeline />}
      {activeTab === "Feeding Management" && <FeedingDashboard />}
    </div>
  );
}

// ✅ Header Component
function Header({ pond, farmerName }) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-extrabold leading-tight">
          Pond {pond?._id?.slice(-4)}
          <span className="ml-3 inline-flex items-center rounded-full bg-yellow-200 px-4 py-1 text-yellow-800 font-semibold text-sm">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
            {pond?.isActive ? "Active" : "Inactive"}
          </span>
        </h1>
        <p className="text-sm text-[#475569] mt-1">Farmer: {farmerName}</p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <div className="flex items-center text-gray-600 space-x-1">
          <Clock size={16} />
          <span>Last updated: Few minutes ago</span>
        </div>
        <ActionButton icon={<Bell size={16} />} label="Notify Farmer" />
        <ActionButton icon={<RefreshCcw size={16} />} label="Refresh" />
        <ActionButton icon={<Camera size={16} />} label="Live Camera" />
      </div>
    </header>
  );
}

// ✅ Action Button Component
function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-4 py-2 hover:bg-gray-50">
      {icon}
      <span>{label}</span>
    </button>
  );
}
