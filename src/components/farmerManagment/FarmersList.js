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
    <div className="overflow-x-auto rounded-xl  bg-white shadow-md">
      <table className="w-full min-w-[600px] text-sm">
        <thead className="bg-[#F5F5F5] text-gray-700 uppercase text-xs font-semibold tracking-wide">
          <tr>
            <th className="p-4 text-left">Full Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr
              key={farmer._id}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                {farmer.firstName} {farmer.lastName}
              </td>
              <td className="p-4 text-gray-600">{farmer.email}</td>
              <td className="p-4 capitalize text-gray-600">{farmer.role}</td>
              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(farmer)}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#0575E6] hover:bg-[#045cd1] text-white transition-colors text-xs font-medium"
                  >
                    <Pencil size={16} />
                    <span className="hidden md:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => onDelete(farmer._id)}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors text-xs font-medium"
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
