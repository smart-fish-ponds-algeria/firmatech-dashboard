"use client";
import React, { useState, useEffect } from "react";

export default function CreatePondModal() {
  const [open, setOpen] = useState(false);
  const [farmers, setFarmers] = useState([]);
  const [loadingFarmers, setLoadingFarmers] = useState(false);

  const [form, setForm] = useState({
    length: "",
    width: "",
    volume: "",
    responsible: "",
    isActive: true,
    total_fish_count: "",
    total_fish_sick: "",
    fish_lenght: "",
    fish_weight: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Fetch Farmers
  useEffect(() => {
    const fetchFarmers = async () => {
      setLoadingFarmers(true);
      try {
        const res = await fetch("http://localhost:8080/users");
        const data = await res.json();
        if (data.status === "success") {
          setFarmers(data.data); // Adjust according to your API response
        }
      } catch (err) {
        console.error("Failed to fetch farmers:", err);
      } finally {
        setLoadingFarmers(false);
      }
    };

    if (open) fetchFarmers();
  }, [open]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      details: {
        length: parseFloat(form.length),
        width: parseFloat(form.width),
        volume: parseFloat(form.volume),
      },
      responsible: form.responsible,
      isActive: form.isActive,
      fishDetails: {
        total_fish_count: parseInt(form.total_fish_count) || 0,
        total_fish_sick: parseInt(form.total_fish_sick) || 0,
        fish_lenght: parseFloat(form.fish_lenght) || 0,
        fish_weight: parseFloat(form.fish_weight) || 0,
      },
    };

    try {
      const res = await fetch("http://localhost:8080/waterTanks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success || data.status === "success") {
        setMessage("✅ Pond created!");
        setTimeout(() => {
          setOpen(false);
          setForm({
            length: "",
            width: "",
            volume: "",
            responsible: "",
            isActive: true,
            total_fish_count: "",
            total_fish_sick: "",
            fish_lenght: "",
            fish_weight: "",
          });
          setMessage("");
        }, 2000);
      } else {
        setMessage(data.message || "❌ Error creating pond.");
      }
    } catch (err) {
      setMessage("❌ Request failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[Inter]">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold"
      >
        + Add Pond
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg space-y-4 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-black mb-2">Create Pond</h2>

            {message && (
              <p
                className={`font-semibold ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  name="length"
                  type="number"
                  placeholder="Length"
                  value={form.length}
                  onChange={handleChange}
                  required
                  className="flex-1 border rounded-md p-2"
                />
                <input
                  name="width"
                  type="number"
                  placeholder="Width"
                  value={form.width}
                  onChange={handleChange}
                  required
                  className="flex-1 border rounded-md p-2"
                />
              </div>
              <input
                name="volume"
                type="number"
                placeholder="Volume"
                value={form.volume}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />

              {/* ✅ Farmer Dropdown */}
              <select
                name="responsible"
                value={form.responsible}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              >
                <option value="">Select Responsible Farmer</option>
                {loadingFarmers ? (
                  <option>Loading farmers...</option>
                ) : (
                  farmers.map((farmer) => (
                    <option key={farmer._id} value={farmer._id}>
                      {farmer.firstName + ' '+ farmer.lastName}
                    </option>
                  ))
                )}
              </select>

              <div className="flex items-center space-x-2">
                <input
                  name="isActive"
                  type="checkbox"
                  checked={form.isActive}
                  onChange={handleChange}
                />
                <label className="text-black">Active</label>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  name="total_fish_count"
                  type="number"
                  placeholder="Total Fish"
                  value={form.total_fish_count}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
                <input
                  name="total_fish_sick"
                  type="number"
                  placeholder="Sick Fish"
                  value={form.total_fish_sick}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
                <input
                  name="fish_lenght"
                  type="number"
                  placeholder="Fish Length"
                  value={form.fish_lenght}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
                <input
                  name="fish_weight"
                  type="number"
                  placeholder="Fish Weight"
                  value={form.fish_weight}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-bold"
                >
                  {loading ? "Creating..." : "Create Pond"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
