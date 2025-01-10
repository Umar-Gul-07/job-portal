import {Search, ChevronDown, Check, Paperclip, Mic, Send, LogOut} from 'lucide-react'
import {Avatar, AvatarFallback, AvatarImage} from "../../components/ui/avatar"
import {Button} from "../../components/ui/button"
import {Input} from "../../components/ui/input"
import {ScrollArea} from "../../components/ui/scroll-area"
import {Card} from "../../components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import React, {useState} from 'react'
import Header from "./Header";
import {Link} from "react-router-dom";

export default function SchoolJobs() {
    const [message, setMessage] = useState('')

    const conversations = [
        {
            id: 1,
            name: "Bj Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "4 min ago",
            avatar: "/placeholder.svg",
            unread: true,
            unreadCount: 1
        },
        {
            id: 2,
            name: "Jane Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "8 min ago",
            avatar: "/placeholder.svg",
            read: true
        },
        {
            id: 3,
            name: "John Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "9 min ago",
            avatar: "/placeholder.svg",
            read: true
        },
        {
            id: 4,
            name: "Mister Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "15 min ago",
            avatar: "/placeholder.svg",
            read: true
        },
        {
            id: 5,
            name: "Mister Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "15 min ago",
            avatar: "/placeholder.svg",
            read: true
        },
        {
            id: 6,
            name: "Mister Doe",
            message: "Yo, what's the update on the item I am expecting?",
            time: "15 min ago",
            avatar: "/placeholder.svg",
            read: true
        }
    ]

    const jobs = [
        {
            title: "French Cover Teacher- Park High School",
            subtitle: "30 days cover",
            coverFrom: "14-03-21",
            coverTo: "14-04-21",
            payPerDay: 180,
            jobId: 3429,
            peopleApplied: 16
        },
        {
            title: "French Cover Teacher- Park High School",
            subtitle: "30 days cover",
            coverFrom: "14-03-21",
            coverTo: "14-04-21",
            payPerDay: 180,
            jobId: 3429,
            peopleApplied: 16
        },
        {
            title: "French Cover Teacher- Park High School",
            subtitle: "30 days cover",
            coverFrom: "14-03-21",
            coverTo: "14-04-21",
            payPerDay: 180,
            jobId: 3429,
            peopleApplied: 16
        }
    ]

    return (
        <div className="min-h-screen bg-[#FBFBFB] flex flex-col">
            <Header/>
            <main className="flex-1 px-4 sm:px-6 py-4 space-y-4 w-full max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="text-xl font-medium">Hello Park High School,</h1>
                    <Link to='/school-add-job'>

                        <Button
                            variant="ghost" className="flex items-center gap-1 bg-[#ffcc00]">
                            ADD JOB

                        </Button>
                    </Link>
                    <div className="relative w-full sm:w-72">
                        <Input
                            type="search"
                            placeholder="Search Jobs"
                            className="pl-10 bg-[#ECF0FA] rounded-full"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"/>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-bold -mb-6">Jobs</h2>
                    {jobs.map((job, index) => (
                        <div key={index} className="bg-[#FFFFFF] rounded-lg p-4 sm:p-6 drop-shadow-lg">
                            <Link to="/school-jobs-applied">
                                <div className="flex flex-col sm:flex-row justify-between gap-4">
                                    <div className="space-y-1">
                                        <div>
                                            <h3 className="text-base font-semibold leading-none">{job.title}</h3>
                                            <p className="text-sm text-gray-500  mb-2">{job.subtitle}</p>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Cover from: {job.coverFrom} · Cover to: {job.coverTo}
                                        </p>
                                        <p className="text-sm font-semibold">
                                            Pay per day: {job.payPerDay}/day
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Job ID : {job.jobId}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-sm">People Applied</span>
                                        <span
                                            className="bg-[#2B8200] text-white w-12 h-8 flex items-center justify-center rounded-lg text-sm">
                    {job.peopleApplied}
                  </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Chat Section integrated with main content */}
                <div className="mt-16 pt-8">
                    <div className="bg-[#EDF2FA] rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div className="relative w-full sm:w-72">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"/>
                                <Input
                                    className="h-8 w-full pl-9 rounded-lg bg-white text-sm focus-visible:ring-0 border-[#E5E7EB]"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        className="h-8 rounded-lg bg-[#2B8200] px-2 py-2 text-sm font-medium text-white hover:bg-[#236A00]"
                                    >
                                        All
                                        <ChevronDown className="ml-2 h-4 w-4"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>All Messages</DropdownMenuItem>
                                    <DropdownMenuItem>Unread</DropdownMenuItem>
                                    <DropdownMenuItem>Read</DropdownMenuItem>
                                    <DropdownMenuItem>Archived</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <ScrollArea className="h-[400px]">
                            <div className="space-y-4">
                                {conversations.map((chat) => (
                                    <div
                                        key={chat.id}
                                        className="flex items-start gap-3 rounded-xl bg-white p-3 hover:bg-gray-50 min-h-[4.5rem]"
                                    >
                                        <Avatar className="h-11 w-11 flex-shrink-0">
                                            <AvatarImage src={chat.avatar}/>
                                            <AvatarFallback>{chat.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <h3 className="text-sm font-medium">{chat.name}</h3>
                                                    <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                                                </div>
                                                <div className="flex flex-col items-end gap-2 mr-2 ml-2">
                                                    <span className="text-xs text-gray-500">{chat.time}</span>
                                                    {chat.unread ? (
                                                        <div
                                                            className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-[11px] text-white font-medium">
                                                            {chat.unreadCount}
                                                        </div>
                                                    ) : (
                                                        chat.read && (
                                                            <div className="flex -space-x-2">
                                                                <Check className="h-3 w-3 text-[#06E306]"/>
                                                                <Check className="h-3 w-3 text-[#06E306]"/>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Chat input */}
                    <div className="mt-4">
                        <Card className="flex items-center gap-4 p-3 rounded-xl border-[#D3E0F3] bg-white">
                            <Input
                                className="flex-1 border-0 bg-transparent text-sm focus-visible:ring-0 placeholder:text-gray-500"
                                placeholder="New Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Paperclip className="h-4 w-4"/>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Mic className="h-4 w-4"/>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Send className="h-4 w-4"/>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

