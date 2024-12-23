import React from 'react'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <span className="text-sm font-medium text-gray-600">Connect</span>
            <h1 className="text-[42px] font-extrabold mt-2 mb-3">Contact Us</h1>
            <p className="text-gray-600 text-lg">We're here to help you with any questions.</p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-10">
            {/* Email */}
            <div>
              <Mail className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-extrabold mb-1">Email</h3>
              <p className="text-gray-600 text-sm mb-1">Reach us anytime.</p>
              <a href="mailto:hello@recruitment.com" className="text-[#2B7A0B] hover:underline">
                hello@recruitment.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <Phone className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-extrabold mb-1">Phone</h3>
              <p className="text-gray-600 text-sm mb-1">Call us for assistance.</p>
              <a href="tel:+1(332)000-0000" className="text-[#2B7A0B] hover:underline">
                +1 (332) 000-0000
              </a>
            </div>

            {/* Office */}
            <div>
              <MapPin className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-extrabold mb-1">Office</h3>
              <p className="text-gray-600 mb-1">234 Sandton street London</p>
              <button className="text-[#2B7A0B] hover:underline inline-flex items-center">
                Get Directions
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-21%20234801-rpQ6kIBlN7fAG06ExZa3UcDsYVAKXK.png"
            alt="Contact support"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

