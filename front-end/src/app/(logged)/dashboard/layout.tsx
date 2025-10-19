"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/appSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
  <div className="flex pt-16"> {/* padding-top igual à altura do header */}
    <AppSidebar />
    <main className="flex-1"></main>
  </div>
</SidebarProvider>

  );
};

export default DashboardLayout;
