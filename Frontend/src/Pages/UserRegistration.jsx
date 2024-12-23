"use client"

import React, { useState } from 'react'
import { User, Mail, Phone, Lock, Eye, EyeOff, ChevronDown } from 'lucide-react'

export default function UserRegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showVerifyPassword, setShowVerifyPassword] = useState(false)
  const [backgroundChecks, setBackgroundChecks] = useState({
    DBS: false,
    PGCE: false,
    Masters: false,
    'Police Check': false
  })

  const handleCheckboxChange = (check) => {
    setBackgroundChecks(prev => ({
      ...prev,
      [check]: !prev[check]
    }))
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-xl">
      <h1 className="text-2xl font-semibold text-center mb-8">Register as User</h1>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {/* First Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">First Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="First name"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Last Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Last name"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Country */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Country</label>
          <div className="relative">
            <select className="w-full px-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none appearance-none">
              <option value="">Select country</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Area */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Area</label>
          <div className="relative">
            <select className="w-full px-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none appearance-none">
              <option value="">Choose area</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ?
                <EyeOff className="h-5 w-5 text-gray-400" /> :
                <Eye className="h-5 w-5 text-gray-400" />
              }
            </button>
          </div>
        </div>

        {/* Verify Password */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Verify Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showVerifyPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowVerifyPassword(!showVerifyPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showVerifyPassword ?
                <EyeOff className="h-5 w-5 text-gray-400" /> :
                <Eye className="h-5 w-5 text-gray-400" />
              }
            </button>
          </div>
        </div>

        {/* Nationality */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Nationality</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter nationality"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Organization */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Organization</label>
          <div className="relative">
            <select className="w-full px-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none appearance-none">
              <option value="">please choose</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Background Check */}
        <div className="col-span-2 space-y-2">
          <label className="text-sm text-gray-600 font-normal">Background Check</label>
          <div className="flex justify-between max-w-[500px]">
            {Object.keys(backgroundChecks).map((check) => (
              <label key={check} className="flex flex-col items-center cursor-pointer">
                <span className="text-sm text-gray-600 mb-0.5">{check}</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={backgroundChecks[check]}
                    onChange={() => handleCheckboxChange(check)}
                    className="w-8 h-8 rounded-[10px] border-2 border-gray-300 bg-white checked:bg-white checked:border-[#2B7A0B] focus:ring-0 focus:ring-offset-0 appearance-none cursor-pointer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {backgroundChecks[check] && (
                      <svg className="w-6 h-6 text-[#2B7A0B]" fill="none" viewBox="0 3 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Resident Id */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">Resident Id No</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Id"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* DOB */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 font-normal">DOB</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="e.g 02/12/2000"
              className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded-md focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="flex justify-center mt-8">
        <button className="px-16 py-2.5 bg-[#2B7A0B] text-white text-sm rounded-md hover:bg-[#236508] transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  )
}

