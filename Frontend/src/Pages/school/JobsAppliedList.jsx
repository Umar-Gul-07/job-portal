import React, {useContext, useEffect, useState} from 'react';
import Header from "./Header";
import {useLocation, useParams} from "react-router-dom";
import api from "../../Utils/Axios";
import {Store} from "../../Utils/Store";

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
                    src={imageUrl}
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
    );
}

export default function JobsAppliedList() {
    const {state} = useContext(Store);
    const {UserInfo} = state;
    const [appliedCandidate, setAppliedCandidate] = useState([]); // Applied candidates data
    const [userProfiles, setUserProfiles] = useState([]); // User profiles data
    const {jobId} = useParams() // Get jobId from location state

    useEffect(() => {
        const fetchAppliedCandidates = async () => {
            try {
                const response = await api.get("/school/get/applied-candidate");
                setAppliedCandidate(response.data || []);
            } catch (error) {
                console.error("Error fetching applied candidates:", error);
            }
        };

        fetchAppliedCandidates();

        const fetchAllProfiles = async () => {
            try {
                // Fetch all user profiles
                const response = await api.get("/user/get_user_profile");
                setUserProfiles(response.data || []);
                console.log(userProfiles)
            } catch (error) {
                console.error("Error fetching user profiles:", error);
            }
        };

        // Fetch applied candidates and profiles when the component mounts or jobId changes
        if (jobId) {
            fetchAppliedCandidates();
        }
        fetchAllProfiles();
    }, [jobId, UserInfo.id]); // Re-fetch if jobId or UserInfo.id changes

    // Filter user profiles based on applied candidates
    const filteredProfiles = userProfiles.filter(profile =>
        appliedCandidate.some(candidate => candidate.userId === profile._id)
    );
    console.log(appliedCandidate)
    return (
        <>
            <Header/>
            <div className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto p-8">
                    <div className="space-y-7">
                        {filteredProfiles.length > 0 ? (
                            filteredProfiles.map((profile, index) => (
                                <ProfileCard key={index} {...profile} />
                            ))
                        ) : (
                            <div className="flex items-center justify-center min-h-screen bg-white">
                                <p className="text-red-600 text-xl font-semibold">No candidates have applied for this
                                    job yet.</p>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
