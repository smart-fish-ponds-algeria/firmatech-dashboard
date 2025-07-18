'use client';

import { SessionProvider } from "next-auth/react";
import SideBar from "../../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
   <div className="flex">
      <SideBar />
      <main className="flex-1 ml-72  min-h-screen overflow-auto">{children}</main>
    </div>
    </SessionProvider>
  );
}
