import {useState, useEffect} from "react";
import {Mic, Paperclip, Send} from "lucide-react";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Avatar, AvatarImage, AvatarFallback} from "../../components/ui/avatar";
import {Card, CardContent} from "../../components/ui/card";
import Header from "../users/Header";
import {Link} from "react-router-dom";
import api from "../../Utils/Axios";

// Job Card Component
const JobCard = ({
                     title,
                     schoolName,
                     coverFrom,
                     coverTo,
                     payPerDay,
                     payPerHour,
                     currency,
                     description,
                     paymentMethod,
                     location,
                     qualifications,
                     backgroundChecks,
                     jobDurationDays,
                     jobDurationType,
                     timeStart,
                     timeEnd
                 }) => (
    <Link
        to={{
            pathname: `/user/job-detail`,
        }}
        state={{
            job: {
                title,
                schoolName,
                coverFrom,
                coverTo,
                payPerDay,
                payPerHour,
                currency,
                description,
                paymentMethod,
                location,
                qualifications,
                backgroundChecks,
                jobDurationDays,
                jobDurationType,
                timeStart,
                timeEnd
            }
        }}
    >
        <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm">
            <div className="flex gap-4">
                <div className="relative">
                    <Avatar className="h-14 w-14 rounded-full border-[1px] border-black">
                        <AvatarImage
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-01%20202231-FVjv9TGizfnSdARH7nPOukiU2MkI2b.png" // Placeholder for school logo
                            alt={schoolName}
                            className="object-cover"
                        />
                        <AvatarFallback>{schoolName[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-1 space-y-1">
                    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-500 text-xs">{schoolName}</p>
                    <div className="space-y-1">
                        <p className="text-gray-500 text-xs">Cover from: {new Date(coverFrom).toLocaleDateString()}</p>
                        <p className="text-gray-500 text-xs">Cover to: {new Date(coverTo).toLocaleDateString()}</p>
                        <p className="text-gray-500 text-xs">
                            Pay: {payPerDay ? `${payPerDay} ${currency}/day` : `${payPerHour} ${currency}/hour`}
                        </p>
                    </div>
                    <p className="text-gray-600 font-semibold text-xs pt-0.5">{description}</p>
                </div>
            </div>
        </div>
    </Link>);

// Info Card Component
const InfoCard = ({title, createdOn, lastUpdated}) => (
    <Card className="bg-white border border-[#C5BEBE]">
        <CardContent className="p-6 space-y-1">
            {title && <h3 className="font-medium text-sm pb-1">{title}</h3>}
            {createdOn && <p className="text-xs text-gray-600 pb-1">Created on {createdOn}</p>}
            {lastUpdated && <p className="text-xs text-gray-600 pb-1">last updated {lastUpdated}</p>}
        </CardContent>
    </Card>
);

export default function JobListings() {
    const [message, setMessage] = useState("");
    const [jobsAvailable, setJobsAvailable] = useState([]);
    const [jobsApplied, setJobsApplied] = useState([]);

    // Fetch jobs data
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get("/school/get/job"); // Update with your API URL
                console.log(response)
                const jobs = response.data || []; // Adjust structure if needed
                setJobsAvailable(jobs);
                setJobsApplied(jobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <main className="max-w-6xl mx-auto px-6 py-8 pb-32">
                <div className="space-y-8 mb-8">
                    <Link to="/user/job-search">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full bg-[#2b8200] hover:bg-[#2b8200] text-white"
                        >
                            SEARCH JOB
                        </Button>
                    </Link>
                    <section>
                        <h2 className="text-lg font-semibold mb-3">Jobs Available</h2>
                        <Link to="/user/job-detail">
                            <div className="grid gap-6 md:grid-cols-2">
                                {jobsAvailable.map((job) => (
                                    <JobCard key={job._id} {...job} />
                                ))}
                            </div>
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">Jobs Applied</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {jobsApplied.map((job) => (

                                <JobCard {...job} />

                            ))}
                        </div>
                    </section>

                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-2 rounded-xl bg-white border border-[#D3E0F3]">
                        <Input
                            className="flex-1 border-0 bg-transparent text-sm focus-visible:ring-0 px-0 h-8"
                            placeholder="Type here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
                                <Paperclip className="h-5 w-5 text-gray-500"/>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
                                <Mic className="h-5 w-5 text-gray-500"/>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Send className="h-5 w-5"/>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-7">
                        <InfoCard title="Parkhouse High" createdOn="24-08-24" lastUpdated="13-04-24"/>
                        <InfoCard title="Doha"/>
                        <InfoCard/>
                    </div>
                </div>
            </main>
        </div>
    );
}
