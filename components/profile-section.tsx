import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="mb-8 flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center">
      <div className="flex items-center">
        <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
          <Image
            src="/doctor-profile.png"
            alt="Doctor profile"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dr. Smith, Welcome</h1>
          <p className="text-sm text-gray-500">User ID: MED4080901</p>
        </div>
      </div>
    </div>
  )
}
