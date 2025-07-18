"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Fish,
  Bell,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import NotificationPopup from "./dashboard/NotificationPopup";

export default function SideBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [showNotif, setShowNotif] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fullName = session?.user?.name || "SOUHAIB";

  const links = [
    { href: "/Dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/Dashboard/farmers", label: "Farmers", icon: Users },
    { href: "/Dashboard/ponds", label: "Ponds Management", icon: Fish },
  ];

  const otherLinks = [
    { href: "/Dashboard/notifications", label: "Notifications", icon: Bell, hasNotif: true },
    { href: "/Dashboard/account", label: "Account", icon: Settings },
    { href: "/Dashboard/help", label: "Help", icon: HelpCircle },
  ];

  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-72 bg-white rounded-r-2xl shadow-xl flex flex-col justify-between overflow-hidden z-50">
        {/* Logo */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-2 px-10 pt-6 pb-8">
            <Image src="/group1171274913.svg" width={150} height={150} alt="Logo" />
          </div>

          {/* Main Links */}
          <nav className="flex flex-col gap-3 px-6">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl py-3 px-5 text-sm font-medium transition ${
                  pathname === href
                    ? "bg-[#E6F0FF] text-[#007AFF] font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} className={`${pathname === href ? "text-[#007AFF]" : "text-gray-500"}`} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-[#E6F0FF] my-6 mx-6" />

          {/* Other Links */}
          <nav className="flex flex-col gap-3 px-6 mb-6">
            {otherLinks.map(({ href, label, icon: Icon, hasNotif }) =>
              href === "/Dashboard/notifications" ? (
                <button
                  key={href}
                  onClick={() => setShowNotif(!showNotif)}
                  className="flex items-center gap-3 relative text-sm py-3 px-5 rounded-xl hover:bg-gray-100 text-left w-full transition"
                >
                  <Icon size={20} className="text-gray-600" />
                  <span>{label}</span>
                  {hasNotif && (
                    <span className="absolute left-3 top-2 w-2.5 h-2.5 bg-[#FF6B00] rounded-full" />
                  )}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 text-sm py-3 px-5 rounded-xl hover:bg-gray-100 transition"
                >
                  <Icon size={20} className="text-gray-600" />
                  <span>{label}</span>
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 w-full bg-[#F5F8FF] rounded-b-2xl px-6 py-5 hover:bg-[#e8f0ff] transition"
          >
            <Image
              src="/profile-placeholder.png"
              alt="User"
              width={40}
              height={40}
              className="rounded-full object-cover bg-gray-200"
            />
            <div className="flex flex-col text-xs text-gray-500">
              <span className="text-xs">Welcome 👋</span>
              <span className="font-bold text-black text-sm">{fullName}</span>
            </div>
            <ChevronDown size={18} className="ml-auto text-black" />
          </button>

          {isOpen && (
            <div className="absolute bottom-20 left-6 right-6 bg-white rounded-xl shadow-xl border mt-2 overflow-hidden animate-fadeIn">
              <Link
                href="/Dashboard/account"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                Account Settings
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Notification Popup */}
      {showNotif && <NotificationPopup />}
    </>
  );
}
