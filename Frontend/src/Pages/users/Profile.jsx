"use client"
import React, { useState } from 'react'
import { ExternalLink, Check } from 'lucide-react'
import Header from "./Header";

export default function Profile() {
  // Add state for managing checkbox values
  const [availableDays, setAvailableDays] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true
  })

  const handleDayToggle = (day) => {
    setAvailableDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }))
  }

  const skills = [
    "Assessment and Evaluation",
    "Creativity",
    "Organization",
    "Classroom Management",
    "Communication",
    "Empathy",
    "Subject Expertise",
    "Adaptability",
    "Problem Solving",
    "Collaboration"
  ]

  const workHistory = [
    {
      role: "Language Instructor",
      school: "Hampton High School - Hampshire",
      period: "2021 - 2022"
    },
    {
      role: "French Teacher",
      school: "London Memorial School - London",
      period: "2022 - 2024"
    }
  ]

  const education = [
    {
      school: "Greenfield High",
      qualification: "A Level",
      period: "2020-2016"
    }
  ]

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
      <>
        <Header/>
    <div className="min-h-screen bg-[#ECF0FA] p-6">
      <div className="max-w-3xl mx-auto space-y-4 ">
        {/* SchoolProfile Header */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <div className="relative">
            <div className="flex flex-col items-start">
              <div className="relative w-fit">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-21%20234547-10D5DLrL80fLYA5En2D0XV5JInFFWv.png"
                  alt="Anna Hathaway"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <button 
                  className="absolute -bottom-1 -right-4 bg-white rounded-full hover:bg-gray-50"
                  aria-label="Change profile picture"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-5 h-5 text-[#404040]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" 
                    fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-2xl font-semibold mt-3 border border-[#C5BEBE]">Anna Hathaway</h1>
              <div className="flex items-center gap-1 text-sm text-[#404040] mt-1">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-4 h-4 text-[#404040]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
                </svg>
                <span>London, United Kingdom- 1:0am local time</span>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 px-4 py-2 bg-[#2B7A0B] text-white rounded-md text-sm hover:bg-[#236508] transition-colors flex items-center gap-2">
              Edit profile <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Bio</h2>
          <p className="text-[#404040]">
            I am a passionate French teacher with a warm heart and a love for kids. She brings energy and creativity to every lesson, making learning fun and engaging. Her patience and dedication inspire young learners to embrace the beauty of the French language.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#E9F7F7] text-gray-700 rounded-full border border-[#C5BEBE] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work History */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Work History</h2>
          <div className="space-y-4">
            {workHistory.map((work, index) => (
              <div key={index}>
                <h3 className="font-medium">{work.role}</h3>
                <div className="text-sm text-[#404040]">
                  <p>• {work.school}</p>
                  <p>• {work.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="text-sm text-[#404040]">
                  <p>• {edu.school}</p>
                  <p>• {edu.qualification}</p>
                  <p>• {edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Availability</h2>
          <div className="flex gap-3">
            <span className="px-3 py-2 border border-[#C5BEBE] text-gray-700 rounded-lg text-sm">
              Available from 23/11/2024
            </span>
            <span className="px-3 py-2 border border-[#C5BEBE] text-gray-700 rounded-lg text-sm">
              Available to 23/12/2024
            </span>
          </div>
        </div>

        {/* Days available for work */}
        <div className="bg-white rounded-lg p-6 border border-[#C5BEBE]">
          <h2 className="text-2xl font-semibold mb-3">Days available for work</h2>
          <div className="grid grid-cols-7 gap-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="flex flex-col items-center">
                <span className="mb-2 text-lg font-normal">{day}</span>
                <button 
                  onClick={() => handleDayToggle(day)}
                  className="w-12 h-12 rounded-2xl border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                >
                  {availableDays[day] && (
                    <Check className="w-7 h-7 text-gray-400" strokeWidth={2} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

