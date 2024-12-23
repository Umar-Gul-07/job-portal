import React from 'react'
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    return (
        <nav className="bg-white py-4 px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <ScrollLink
                    to="about-us"
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                    About Us
                </ScrollLink>
                <ScrollLink
                    to="contact-us"
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                    Contact Us
                </ScrollLink>
                <ScrollLink
                    to="pricing"
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                    Pricing
                </ScrollLink>
            </div>

            {/* Login Button */}
            <Link to="/login">
                <button className="bg-[#2B7A0B] text-white px-6 py-2 rounded-md hover:bg-[#236508] transition-colors">
                    Login
                </button>
            </Link>
        </nav>
    )
}

export default Header
