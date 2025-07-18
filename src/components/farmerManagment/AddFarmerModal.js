"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react"; // Optional: You can use other icons

export default function AddFarmerModal({ onClose, onSuccess }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to create farmer");
      }

      setSuccess(true);
      onSuccess();
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] space-y-4 shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold text-center text-[#0575E6]">Add New Farmer</h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-100 p-2 rounded-md">{error}</p>
        )}

        {success && (
          <div className="flex items-center justify-center space-x-3 bg-green-100 text-green-700 rounded-md p-3 animate-fade-in">
            <CheckCircle size={28} strokeWidth={2.5} />
            <span className="font-semibold">Farmer created successfully!</span>
          </div>
        )}

        {!success && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="border w-full p-2 rounded-md focus:outline-[#0575E6]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border w-full p-2 rounded-md focus:outline-[#0575E6]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-2 rounded-md focus:outline-[#0575E6]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-2 rounded-md focus:outline-[#0575E6]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className={`px-4 py-2 rounded-md text-white ${
                  loading ? "bg-[#6AA9E9]" : "bg-[#0575E6] hover:bg-[#0560C6]"
                }`}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
