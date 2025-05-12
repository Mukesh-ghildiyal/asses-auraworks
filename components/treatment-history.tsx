import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TreatmentHistory() {
  // Sample table headers
  const headers = [
    "Patient Name",
    "Date",
    "Time",
    "Treatment Type",
    "Notes",
    "Treatment Status",
    "Follow-up Date",
    "Insurance",
    "Billing Status",
  ]

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Treatment History <span className="text-sm font-normal text-gray-500">(Last 30 days)</span>
        </h2>

        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus size={16} />
          Register Treatment
        </Button>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm font-medium text-gray-700">
          Showing results: <span className="font-bold">0</span>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search treatments..."
            className="rounded-md border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Treatment Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {/* Empty state */}
            <tr>
              <td colSpan={headers.length} className="py-16 text-center">
                <p className="mb-4 text-gray-500">No treatment records found.</p>
                <Button
                  variant="outline"
                  className="mx-auto flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Plus size={16} />
                  Register Treatment
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center">
        <nav className="flex items-center space-x-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
            1
          </button>
        </nav>
      </div>
    </div>
  )
}
