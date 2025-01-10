import React from 'react'
import Header from "./Header";

function ProfileCard({
                         name = "Anne Hathaway",
                         imageUrl = "/placeholder.svg",
                         availability = "Yes",
                         dateFrom = "24/11/2024",
                         dateTo = "24/12/2024",
                         jobsCompleted = 160
                     }) {
    return (
        <div className="flex items-center justify-between py-4 px-6 rounded-lg drop-shadow-sm bg-white w-full">
            <div className="flex items-start gap-4">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-21%20234547-10D5DLrL80fLYA5En2D0XV5JInFFWv.png"
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900">{name}</h3>
                    <div className="space-y-0.5 text-sm">
                        <div className="flex items-center gap-1">
                            <span className="text-gray-500">Availability:</span>
                            <span className="text-gray-700">{availability}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-500">Date Available from:</span>
                            <span className="text-gray-700">{dateFrom}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-500">Date Available to:</span>
                            <span className="text-gray-700">{dateTo}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-500">Jobs Completed:</span>
                            <span className="text-gray-900 font-medium">{jobsCompleted}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="px-16 py-3 bg-[#2B8200] hover:bg-[#2B7A0B] text-white text-sm font-medium rounded-md transition-colors">
                Select
            </button>
        </div>
    )
}

// Mock data for multiple profiles
const profiles = Array(4).fill({
    name: "Anne Hathaway",
    imageUrl: "/placeholder.svg",
    availability: "Yes",
    dateFrom: "24/11/2024",
    dateTo: "24/12/2024",
    jobsCompleted: 160
})

export default function JobsAppliedList() {
    return (
        <>
            <Header/>
            <div className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto p-8">
                    <div className="space-y-7">
                        {profiles.map((profile, index) => (
                            <ProfileCard key={index} {...profile} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
