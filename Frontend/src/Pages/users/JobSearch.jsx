"use client"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Bookmark } from 'lucide-react'
import Header from "../users/Header";
import {Link} from "react-router-dom";

// Job Card Component
function JobCard({ title, cover, startDate, endDate, duration, pay }) {
  return (
    <div className="bg-white rounded p-6 mb-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-4 relative pr-48">
        <img
          src="/placeholder.svg?height=64&width=64"
          alt="Building"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="flex-1 pr-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold mb-0.5">{title}</h3>
              <p className="text-gray-500 text-sm mb-1">Cover: {cover}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-0 right-0 h-6 w-6"
            >
              <Bookmark className="h-5 w-5 stroke-black fill-white" />
            </Button>
          </div>
          <div className="space-y-0.5 text-gray-500 text-sm">
            <p>Start: {startDate}    End: {endDate}</p>
            <p>Time: {duration}    Pay: {pay}</p>
          </div>
        </div>
        <Button className="bg-[#2b7a0b] text-white text-md hover:bg-[#236508] py-4 px-9 absolute bottom-0 right-0">
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default function JobSearch() {
  const jobs = [
    {
      title: "French Teacher at St. Petersburg",
      cover: "Supervisor",
      startDate: "14-03-21",
      endDate: "14-04-21",
      duration: "6 days",
      pay: "180/day"
    },
    {
      title: "French Teacher at St. Petersburg",
      cover: "Supervisor",
      startDate: "14-03-21",
      endDate: "14-04-21",
      duration: "6 days",
      pay: "180/day"
    },
    {
      title: "French Teacher at St. Petersburg",
      cover: "Supervisor",
      startDate: "14-03-21",
      endDate: "14-04-21",
      duration: "6 days",
      pay: "180/day"
    },
    {
      title: "French Teacher at St. Petersburg",
      cover: "Supervisor",
      startDate: "14-03-21",
      endDate: "14-04-21",
      duration: "6 days",
      pay: "180/day"
    }
  ]

  return (
      <>
        <Header/>
        <div className="w-full max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-lg font-semibold mb-6">Job Search</h1>

          {/* Search Form */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="location" className="text-sm text-gray-600 mb-1.5 block">Location</label>
                <Input
                    id="location"
                    type="text"
                    className="w-full h-11 text-base px-3 border-gray-200 focus:border-gray-300 focus:ring-0"
                    placeholder="Enter location"
                />
              </div>
              <div>
                <label htmlFor="coverDuration" className="text-sm text-gray-600 mb-1.5 block">Cover Duration</label>
                <Input
                    id="coverDuration"
                    type="text"
                    className="w-full h-11 text-base px-3 border-gray-200 focus:border-gray-300 focus:ring-0"
                />
              </div>
              <div>
                <label htmlFor="organization" className="text-sm text-gray-600 mb-1.5 block">Organization</label>
                <Select>
                  <SelectTrigger
                      id="organization"
                      className="w-full h-11 text-base px-3 border-gray-200 focus:border-gray-300 focus:ring-0"
                  >
                    <SelectValue placeholder="please choose"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="org1">Organization 1</SelectItem>
                    <SelectItem value="org2">Organization 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="area" className="text-sm text-gray-600 mb-1.5 block">Area</label>
                <Select>
                  <SelectTrigger
                      id="area"
                      className="w-full h-11 text-base px-3 border-gray-200 focus:border-gray-300 focus:ring-0"
                  >
                    <SelectValue placeholder="Choose area"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="area1">Area 1</SelectItem>
                    <SelectItem value="area2">Area 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="dailyRate" className="text-sm text-gray-600 mb-1.5 block">Daily Rate</label>
                <Input
                    id="dailyRate"
                    type="text"
                    className="w-full h-11 text-base px-3 border-gray-200 focus:border-gray-300 focus:ring-0"
                />
              </div>
              <div className="pt-6">
                <Button
                    variant="outline"
                    className="w-full h-11 text-base border-[#2b7a0b] text-[#2b7a0b] hover:bg-[#2b7a0b] hover:text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Search Jobs</h2>
            <div>
              {jobs.map((job, index) => (
                  <Link to={`/user/job-detail`}>
                  <JobCard key={index} {...job} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}

