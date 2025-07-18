"use client";
import React, { useEffect, useState } from "react";
import { Eye, Trash, Menu } from "lucide-react";
import CreatePondForm from "./CreatePondForm";
import Link from "next/link";

export default function PondManagement() {
  const [ponds, setPonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPond, setSelectedPond] = useState(null);


  const fetchUserName = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`);
      const data = await response.json();
      return data?.data?.firstName + " " + data?.data?.lastName || "Unknown";
    } catch {
      return "Unknown";
    }
  };

  const fetchPonds = async () => {
    try {
      const res = await fetch("http://localhost:8080/waterTanks");
      const data = await res.json();
      if (data.status === "success") {
        const pondsWithNames = await Promise.all(
          data.data.map(async (pond) => {
            const responsibleName = pond.responsible
              ? await fetchUserName(pond.responsible)
              : "Not Assigned";
            return { ...pond, responsibleName };
          })
        );
        setPonds(pondsWithNames);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pondId) => {
    try {
      const res = await fetch(`http://localhost:8080/waterTanks/${pondId}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result.status === "success") {
        setPonds((prev) => prev.filter((pond) => pond._id !== pondId));
      } else {
        console.error("Delete failed:", result.message);
      }
    } catch (err) {
      console.error("Error deleting:", err);
    } finally {
      setShowModal(false);
    }
  };

  useEffect(() => {
    fetchPonds();
  }, []);

  return (
    <div className="p-6 font-[Inter]">
      <header className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Menu className="w-6 h-6 text-blue-600" />
          <h1 className="text-3xl font-bold text-black">Pond Management</h1>
        </div>
        <CreatePondForm />
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
                <td colSpan="6" className="p-4 text-center">Loading...</td>
              </tr>
            ) : (
              ponds.map((pond, index) => (
                <tr key={pond._id} className="border-t">
                  <td className="px-4 py-4 font-bold text-black">Pond {index + 1}</td>
                  <td className="px-4 py-4">{pond.details?.volume} m³</td>
                  <td className="px-4 py-4">{pond.responsibleName}</td>
                  <td className="px-4 py-4">{new Date(pond.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-4">
                    {pond.isActive ? (
                      <span className="bg-green-200 text-green-800 rounded-md px-2 py-1 text-xs">Active</span>
                    ) : (
                      <span className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 text-xs">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-4 flex gap-3">
                    <Link href={`ponds/${pond._id}`} className="text-black">
                      <Eye className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedPond(pond);
                        setShowModal(true);
                      }}
                      className="text-red-600"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full space-y-4">
            <h2 className="text-lg font-bold text-black">Confirm Delete</h2>
            <p>Are you sure you want to delete <b>{selectedPond.details?.volume} m³</b> pond?</p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 border rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={() => handleDelete(selectedPond._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
