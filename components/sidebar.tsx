import type React from "react"
import Link from "next/link"
import { LucideHome, Users, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AIortho
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        <div className="mb-4">
          <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-gray-500">Main Menu</h3>
          <SidebarItem icon={<LucideHome size={20} />} label="Home" active />
        </div>

        <div className="mb-4">
          <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-gray-500">Patient Management</h3>
          <SidebarItem icon={<Users size={20} />} label="Patient List" />
        </div>

        <div className="mb-4">
          <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-gray-500">System Settings</h3>
          <SidebarItem icon={<Settings size={20} />} label="Account Settings" />
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-auto border-t p-4 text-xs text-gray-500">
        <p>© 2025 AIortho</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <Link
      href="#"
      className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  )
}
