import { Helmet } from "react-helmet"
import {ChevronLeft, ChevronRight, Search} from "lucide-react";
import React from "react";
import JobsNearBy from "./include/Jobs-Near-By";
import WhyChooseUs from "./include/Why-Choose-Should-Us";
import Blog from "./Blog";
import Pricing from "./Pricing";
import ContactPage from "./Contact";
import AboutUs from "./About";

function Home() {
    return (
        <>
            <Helmet><title>Home</title></Helmet>
            <div className="relative h-[calc(100vh-80px)] min-h-[600px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-21%20234547-10D5DLrL80fLYA5En2D0XV5JInFFWv.png")',
                        filter: 'brightness(0.7)'
                    }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center px-4">
                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ChevronLeft className="w-6 h-6 text-gray-600"/>
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ChevronRight className="w-6 h-6 text-gray-600"/>
                    </button>

                    {/* Search Content */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
                        Search Temp Cover Jobs
                    </h1>

                    <div
                        className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-[10px] p-8 border border-rgb(250 250 205) shadow-lg">
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <div className="flex-1 space-y-2">
                                <label className="text-white text-sm mb-1 block">Search Keyword</label>
                                <input
                                    type="text"
                                    placeholder="Your Keyword"
                                    className="w-full px-4 py-2.5 rounded-md bg-white border-0 focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <label className="text-white text-sm mb-1 block">Location</label>
                                <input
                                    type="text"
                                    placeholder="Your Location"
                                    className="w-full px-4 py-2.5 rounded-md bg-white border-0 focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                            </div>
                            <button
                                className="md:self-end md:-ml-2 bg-[#2B7A0B] text-white p-2.5 rounded-md hover:bg-[#236508] transition-colors">
                                <Search className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <JobsNearBy/>
            <WhyChooseUs/>
            <Blog/>
            <div id="pricing">
                <Pricing/>
            </div>

            <div id="about-us">
                <AboutUs/>
            </div>
            <div id="contact-us">
            <div className="bg-gray-300 h-[2px] w-full" style={{marginTop:"130px"}}></div>
                <ContactPage/>
            </div>
        </>
    )
}

export default Home