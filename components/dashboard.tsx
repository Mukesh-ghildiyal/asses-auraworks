"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import ProfileSection from "./profile-section"
import QuickMenu from "./quick-menu"
import TreatmentHistory from "./treatment-history"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Bell, User, ExternalLink } from "lucide-react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile unless toggled */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Navbar with notification and profile icons */}
        <div className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow-sm">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded p-1 text-gray-600 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {isMobile && <div className="text-lg font-semibold text-blue-600">AIortho</div>}

          <div className="ml-auto flex items-center space-x-4">
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <User size={20} />
            </button>
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <ExternalLink size={20} />
            </button>
          </div>
        </div>

        {/* Overlay to close sidebar on mobile */}
        {sidebarOpen && isMobile && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
        )}

        <main className="p-4 md:p-8">
          <ProfileSection />
          <QuickMenu />
          <TreatmentHistory />
        </main>
      </div>
    </div>
  )
}
