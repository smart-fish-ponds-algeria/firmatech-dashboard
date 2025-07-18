"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/Dashboard");
    }
  };

  return (
    <div className="h-full w-full flex items-center bg-white">
      {/* Left Side - Branding */}
      <div className="w-[60%] min-h-screen flex justify-center items-center bg-gradient-to-r from-[#021B79] via-[#02298A] to-[#0575E6] p-6 text-white">
        <div className="flex flex-col h-screen justify-center items-center text-center px-10 space-y-6">
          <h1 className="text-5xl font-bold">FirmaTech</h1>
          <p className="text-2xl">Smart Aquaculture Management Dashboard</p>
          <p className="text-lg opacity-90">Monitor your ponds, receive alerts, and optimize farm performance.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-[40%] justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-xl shadow-xl w-96 space-y-5 p-8"
        >
          <h1 className="text-3xl font-bold text-center text-[#02298A]">Welcome Back</h1>

          {error && (
            <p className="text-red-500 text-center text-sm">{error}</p>
          )}

          {/* Email Field */}
          <div className="flex items-center border rounded-full px-4">
            <Mail className="text-[#02298A] mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 outline-none text-black rounded-full"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded-full px-4">
            <Lock className="text-[#02298A] mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 outline-none text-black rounded-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#02298A]"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0575E6] hover:bg-[#0568c6] text-white p-4 rounded-full font-semibold transition"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
