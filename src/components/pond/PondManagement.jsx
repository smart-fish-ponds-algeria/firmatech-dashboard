"use client";
import React, { useEffect, useState } from "react";
import { Edit, Eye, Trash, Menu } from "lucide-react";
import CreatePondForm from "./CreatePondForm";
import Link from "next/link";

export default function PondManagement() {
  const [ponds, setPonds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserName = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`);
      const data = await response.json();
      return data?.data?.firstName + " " + data?.data?.lastName || "Unknown";
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error);
      return "Unknown";
    }
  };

  const fetchPondsWithResponsibleNames = async () => {
    try {
      const response = await fetch("http://localhost:8080/waterTanks");
      const data = await response.json();
      if (data.status === "success") {
        const ponds = data.data;

        // Fetch responsible names
        const pondsWithNames = await Promise.all(
          ponds.map(async (pond) => {
            const responsibleName = pond.responsible
              ? await fetchUserName(pond.responsible)
              : "Not Assigned";
            return { ...pond, responsibleName };
          })
        );

        setPonds(pondsWithNames);
      } else {
        console.error("Failed to fetch ponds");
      }
    } catch (error) {
      console.error("Error fetching ponds:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPondsWithResponsibleNames();
  }, []);

  return (
    <div className="p-6 font-[Inter]">
      <header className="mb-6 flex justify-between items-center space-x-2">
       <div className="flex items-center space-x-2">

      
        <Menu className="w-6 h-6 text-blue-600" />
        <h1 className="text-3xl font-extrabold text-black">Pond Management</h1>
        </div>
      <CreatePondForm/>
      </header>

      <section className="overflow-x-auto bg-white">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-100 text-gray-400">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Volume</th>
              <th className="px-4 py-3">Responsible</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4">Loading...</td>
              </tr>
            ) : (
              ponds.map((pond, index) => (
                <tr key={pond._id} className="border-t border-gray-200">
                  <td className="px-4 py-4 text-black font-bold">Pond {index + 1}</td>
                  <td className="px-4 py-4">{pond.details?.volume} m³</td>
                  <td className="px-4 py-4">{pond.responsibleName}</td>
                  <td className="px-4 py-4">
                    {new Date(pond.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">
                    {pond.isActive ? (
                      <span className="bg-green-300 text-green-800 rounded-md px-3 py-1 text-sm">Active</span>
                    ) : (
                      <span className="bg-gray-300 text-gray-600 rounded-md px-3 py-1 text-sm">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-4 flex space-x-3">
                    <button className="text-black"><Edit className="w-5 h-5" /></button>
                    <Link href={`ponds/${pond._id}`} className="text-black">
  <Eye className="w-5 h-5" />
</Link>
                    <button className="text-red-600"><Trash className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
