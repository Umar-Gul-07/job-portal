import {Avatar, AvatarFallback, AvatarImage} from "../../components/ui/avatar"
import {Button} from "../../components/ui/button"
import {Card} from "../../components/ui/card"
import {LogOut} from 'lucide-react'
import Header from "./Header";
import React from "react";

const JobListing = () => {
    return (
        <>
            <div className="flex h-screen flex-col bg-gray-50">
                {/* Navigation */}
                <Header/>
                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6">
                    <div className="mx-auto max-w-4xl space-y-4">
                        {/* Job Header Card */}
                        <Card className="bg-slate-100 p-4 shadow-sm" style={{width: "100%"}}>
                            <div className="flex gap-4">
                                <div className="h-16 w-16 flex-shrink-0">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full">
                                        <img
                                            src="https://placehold.io/100"
                                            alt="Parkhouse English School"
                                            width={64}
                                            height={64}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </div>

                                </div>
                                <div className="space-y-1">
                                    <h1 className="text-xl font-semibold">Parkhouse English School</h1>
                                    <p className="text-gray-600">Cover Supervisor Required</p>
                                    <p className="font-medium ">Cover : 7 days</p>
                                    <p className="text-sm text-gray-500">Short time cover</p>
                                    <p className="font-medium">$17/hr</p>
                                </div>
                            </div>
                        </Card>

                        {/* Details Card */}
                        <Card className="bg-slate-100 p-4">
                            {/* Date and Time Details */}
                            <div className="grid grid-cols-4 text-sm">
                                <div>
                                    <p>Start Date : 14-09-2024</p>
                                </div>
                                <div>
                                    <p>End Date : 23-09-2024</p>
                                </div>
                                <div>
                                    <p>Start Time : 07:00am</p>
                                </div>
                                <div>
                                    <p>End Time : 14:30 pm</p>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="mt-4 space-y-1">
                                <p className="font-medium">Pay: 350 QR/day</p>
                                <p className="text-sm text-gray-600">Payment Method: Bank Transfer</p>
                            </div>

                            {/* Qualifications */}
                            <div className="mt-4 space-y-2">
                                <h2 className="text-lg font-semibold">Qualifications</h2>
                                <div className="space-y-1">
                                    <p className="text-gray-600">NQT</p>
                                    <p className="text-gray-600">PGCE or Equivalent</p>
                                </div>
                            </div>

                            {/* Background Checks */}
                            <div className="mt-4 space-y-2">
                                <h2 className="text-lg font-semibold">Background Checks</h2>
                                <div className="space-y-1">
                                    <p className="text-gray-600">Police check</p>
                                    <p className="text-gray-600">DBS check</p>
                                </div>
                            </div>
                        </Card>

                        {/* Apply Button */}
                        <div className="flex justify-center">
                            <Button
                                className="w-[400px] bg-[#2B8A0E] hover:bg-[#247A0C] text-white py-2 rounded-md"
                            >
                                Apply for the Job
                            </Button>
                        </div>

                        {/* Payment Options */}
                        <div className="space-y-4 pt-2">
                            <p className="text-center text-[#2B8A0E]">Pay 15.00 QR</p>
                            <div className="flex justify-center gap-4">
                                <Button
                                    variant="outline"
                                    className="flex w-[120px] items-center justify-center gap-2 rounded-md border border-[#C5BEBE] bg-white px-4 py-2 hover:bg-gray-50"
                                >
                                    <img
                                        src="https://img.icons8.com/material-sharp/24/000000/mac-os.png"
                                        alt="Apple Pay"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                    <span className="text-black">Pay</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex w-[120px] items-center justify-center gap-2 rounded-md border border-[#C5BEBE] bg-white px-4 py-2 hover:bg-gray-50"
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/google-logo.png"
                                        alt="Google Pay"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                    <span className="text-black">Pay</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default JobListing