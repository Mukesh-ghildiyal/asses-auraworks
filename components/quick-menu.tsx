import type React from "react"
import { ClipboardList, FileText } from "lucide-react"
import Link from "next/link"

export default function QuickMenu() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Quick Menu</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <QuickMenuItem
          icon={<ClipboardList className="h-6 w-6 text-indigo-400" />}
          title="Treatment Records"
          description="Access patient treatment records"
          bgColor="bg-indigo-50"
        />

        <QuickMenuItem
          icon={<FileText className="h-6 w-6 text-amber-400" />}
          title="Register Treatment"
          description="Add new treatment records"
          bgColor="bg-amber-50"
        />
      </div>
    </div>
  )
}

interface QuickMenuItemProps {
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
}

function QuickMenuItem({ icon, title, description, bgColor }: QuickMenuItemProps) {
  return (
    <Link
      href="#"
      className={`flex items-start rounded-lg border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md ${bgColor}`}
    >
      <div className="mr-4 rounded-full bg-white p-3">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  )
}
