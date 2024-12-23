import React from 'react'
import {ChevronLeft, ChevronRight, Bookmark, Clock} from 'lucide-react'

export default function JobsNearBy() {
    return (
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <h2 className="text-[36px] font-bold mb-2">Jobs Nearby</h2>

                {/* Cards Grid */}
                <div className="grid grid-flow-col auto-cols-max gap-12 mt-12 mb-2">
                    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-[#ECF0FA] rounded-t-2xl">
                            <h3 className="font-semibold text-[17px] text-gray-900">French Teacher</h3>
                            <button className="text-gray-800 hover:text-gray-600">
                                <Bookmark className="w-5 h-5"/>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3.5">
                            {/* School Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <img
                                        src="https://via.placeholder.com/200"
                                        alt="Classroom"
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[15px] text-gray-900">Birmingham High School</p>
                                    <p className="text-sm text-gray-500">6 days cover</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                <span
                    className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Part-time</span>
                                <span className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Senior level</span>
                            </div>

                            {/* Posted Time */}
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 pt-5 ">
                                <Clock className="w-4 h-4"/>
                                <span>5 days ago</span>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pb-9">
                                <span className="font-bold text-xl">$30/hr</span>
                                <button
                                    className="bg-[#2B7A0B] text-white px-4 py-2 rounded-md text-sm hover:bg-[#236508] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-[#ECF0FA] rounded-t-2xl">
                            <h3 className="font-semibold text-[17px] text-gray-900">French Teacher</h3>
                            <button className="text-gray-800 hover:text-gray-600">
                                <Bookmark className="w-5 h-5"/>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3.5">
                            {/* School Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <img
                                        src="https://via.placeholder.com/200"
                                        alt="Classroom"
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[15px] text-gray-900">Birmingham High School</p>
                                    <p className="text-sm text-gray-500">6 days cover</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                <span
                    className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Part-time</span>
                                <span className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Senior level</span>
                            </div>

                            {/* Posted Time */}
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 pt-5 ">
                                <Clock className="w-4 h-4"/>
                                <span>5 days ago</span>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pb-9">
                                <span className="font-bold text-xl">$30/hr</span>
                                <button
                                    className="bg-[#2B7A0B] text-white px-4 py-2 rounded-md text-sm hover:bg-[#236508] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-[#ECF0FA] rounded-t-2xl">
                            <h3 className="font-semibold text-[17px] text-gray-900">French Teacher</h3>
                            <button className="text-gray-800 hover:text-gray-600">
                                <Bookmark className="w-5 h-5"/>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3.5">
                            {/* School Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <img
                                        src="https://via.placeholder.com/200"
                                        alt="Classroom"
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[15px] text-gray-900">Birmingham High School</p>
                                    <p className="text-sm text-gray-500">6 days cover</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                <span
                    className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Part-time</span>
                                <span className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Senior level</span>
                            </div>

                            {/* Posted Time */}
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 pt-5 ">
                                <Clock className="w-4 h-4"/>
                                <span>5 days ago</span>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pb-9">
                                <span className="font-bold text-xl">$30/hr</span>
                                <button
                                    className="bg-[#2B7A0B] text-white px-4 py-2 rounded-md text-sm hover:bg-[#236508] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-[#ECF0FA] rounded-t-2xl">
                            <h3 className="font-semibold text-[17px] text-gray-900">French Teacher</h3>
                            <button className="text-gray-800 hover:text-gray-600">
                                <Bookmark className="w-5 h-5"/>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3.5">
                            {/* School Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative">
                                    <img
                                        src="https://via.placeholder.com/200"
                                        alt="Classroom"
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[15px] text-gray-900">Birmingham High School</p>
                                    <p className="text-sm text-gray-500">6 days cover</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                <span
                    className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Part-time</span>
                                <span className="px-3 py-1.5 bg-[#efeff0] rounded-[6px] text-sm text-gray-600">Senior level</span>
                            </div>

                            {/* Posted Time */}
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 pt-5 ">
                                <Clock className="w-4 h-4"/>
                                <span>5 days ago</span>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pb-9">
                                <span className="font-bold text-xl">$30/hr</span>
                                <button
                                    className="bg-[#2B7A0B] text-white px-4 py-2 rounded-md text-sm hover:bg-[#236508] transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                   
                    {/* Duplicate or Add More Cards */}
                </div>


                {/* Navigation */}
                <div className="flex justify-center gap-5">
                    <button
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 bg-white">
                        <ChevronLeft className="w-5 h-5 text-gray-600"/>
                    </button>
                    <button
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 bg-white">
                        <ChevronRight className="w-5 h-5 text-gray-600"/>
                    </button>
                </div>
            </section>

    )
}

