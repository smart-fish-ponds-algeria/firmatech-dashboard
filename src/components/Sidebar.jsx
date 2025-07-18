"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Fish,
  BarChart,
  Bell,
  Settings,
  HelpCircle,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function SideBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const fullName = session?.user?.name || "SOUHAIB";
  const role = session?.user?.role || "Client";

  const links = [
    { href: "/Dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/Dashboard/farmers", label: "Farmers", icon: Users },
    { href: "/Dashboard/ponds", label: "Ponds Management", icon: Fish },
  ];

  const otherLinks = [
    { href: "/Dashboard/notifications", label: "Notifications", icon: Bell, hasNotif: true },
    { href: "/Dashboard/Account", label: "account", icon: Settings },
    { href: "/Dashboard/help", label: "Help", icon: HelpCircle },
  ];


    return (
        <aside className="fixed top-0 left-0 h-screen w-72 bg-white rounded-r-[20px] shadow-lg flex flex-col justify-between overflow-hidden z-50">
          <div className="flex flex-col flex-grow">
            <div className="flex items-center gap-2 px-6 pt-6 pb-8">
              <span className="font-extrabold text-black text-lg">FirmaTech</span>
            </div>
    
            <nav className="flex flex-col gap-3 px-6">
              {links.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-full py-2.5 px-5 text-sm transition ${
                    pathname === href
                      ? "bg-[#E6F0FF] text-[#007AFF] font-semibold"
                      : "text-gray-500 hover:bg-gray-100 font-normal"
                  }`}
                >
                  <Icon size={18} className={`${pathname === href ? "text-[#007AFF]" : "text-gray-500"}`} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
    
            <div className="border-t border-[#E6F0FF] my-6 mx-6" />
    
            <nav className="flex flex-col gap-3 px-6 mb-4">
              {otherLinks.map(({ href, label, icon: Icon, hasNotif }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 relative text-sm py-2.5 px-5 rounded-full hover:bg-gray-100"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  {hasNotif && (
                    <span className="absolute left-4 top-2 w-2.5 h-2.5 bg-[#FF6B00] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
    
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-4 w-full bg-[#F5F8FF] rounded-b-[20px] px-6 py-4"
            >
              <Image src="/profile-placeholder.png" alt="User" width={40} height={40} className="rounded-full object-cover bg-gray-200" />
              <div className="flex flex-col text-xs text-gray-500">
                <span className="flex items-center gap-1">Welcome 👋</span>
                <span className="font-extrabold text-black text-sm">{fullName}</span>
              </div>
              <ChevronDown size={18} className="ml-auto text-black" />
            </button>
    
            {isOpen && (
              <div className="absolute bottom-[72px] left-6 right-6 bg-white rounded-xl shadow-lg py-2 border">
                <Link href="/Dashboard/account" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>Account Settings</Link>
                <button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </aside>
      );
    }