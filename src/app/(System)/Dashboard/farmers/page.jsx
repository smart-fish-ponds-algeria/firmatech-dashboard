"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import FarmersList from "@/components/farmerManagment/FarmersList";
import AddFarmerModal from "@/components/farmerManagment/AddFarmerModal";
import DashboardCards from "@/components/farmerManagment/DashboardCards";

export default function FarmersPage() {
  const { data: session } = useSession();
  
  const [farmers, setFarmers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchFarmers = async () => {
    try {
      const res = await fetch("http://localhost:8080/users", {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      const data = await res.json();
      setFarmers(data?.data || []);
    } catch (err) {
      console.error("Failed to fetch farmers", err);
    }
  };

  const handleDelete = async () => {
    if (!session?.user?.token) return;
    if (!deleteId) return;

    setDeleteLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/users/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to delete farmer");

      setConfirmDelete(false);
      setDeleteId(null);
      fetchFarmers();
    } catch (err) {
      console.error(err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const onDelete = (id) => {
    setDeleteId(id);
    setConfirmDelete(true);
  };

  useEffect(() => {
    if (session?.user?.token) fetchFarmers();
  }, [session]);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Farmers Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-[#0575E6] text-white rounded-md"
        >
          + Add Farmer
        </button>
      </div>
      <DashboardCards
  total={farmers.length}
  working={farmers.filter(f => f.role === 'farmer').length}
  nonWorking={farmers.filter(f => f.role !== 'farmer').length}
/>


      <FarmersList
        farmers={farmers}
        refresh={fetchFarmers}
        onDelete={onDelete}
      />

      {showModal && (
        <AddFarmerModal
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setShowModal(false);
            fetchFarmers();
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] space-y-4 shadow-lg text-center">
            <h2 className="text-xl font-bold text-red-600">Confirm Deletion</h2>
            <p>Are you sure you want to delete this farmer?</p>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setConfirmDelete(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className={`px-4 py-2 rounded-md text-white ${
                  deleteLoading
                    ? "bg-red-300"
                    : "bg-red-600 hover:bg-red-700"
                }`}
                disabled={deleteLoading}
              >
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
