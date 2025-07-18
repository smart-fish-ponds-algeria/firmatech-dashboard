"use client";
import { Pencil, Trash2 } from "lucide-react";

export default function FarmersList({ farmers, refresh, onEdit, onDelete }) {
  if (!farmers.length)
    return (
      <div className="text-center text-gray-500 py-10">
        <p className="text-lg font-medium">No farmers found.</p>
      </div>
    );

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full min-w-[600px] text-sm rounded-xl overflow-hidden">
        <thead className="bg-[#f9fafb] text-gray-800 text-[13px] font-semibold uppercase tracking-wide border-b border-gray-200">
          <tr>
            <th className="p-5 text-left">Full Name</th>
            <th className="p-5 text-left">Email</th>
            <th className="p-5 text-left">Role</th>
            <th className="p-5 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr
              key={farmer._id}
              className="border-b border-gray-100 hover:bg-gray-50 transition duration-150"
            >
              <td className="p-5 font-medium text-gray-900 whitespace-nowrap">
                {farmer.firstName} {farmer.lastName}
              </td>
              <td className="p-5 text-gray-600">{farmer.email}</td>
              <td className="p-5 capitalize text-gray-600">{farmer.role}</td>
              <td className="p-5">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onEdit(farmer)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0575E6] hover:bg-[#045cd1] text-white transition text-xs font-semibold shadow-sm"
                  >
                    <Pencil size={16} />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => onDelete(farmer._id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition text-xs font-semibold shadow-sm"
                  >
                    <Trash2 size={16} />
                    <span className="hidden md:inline">Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
