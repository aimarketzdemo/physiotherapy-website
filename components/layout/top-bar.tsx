"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:+15192088811" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>(519) 208-8811</span>
          </a>
          <a href="mailto:info@familyphysio.ca" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>info@familyphysio.ca</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>1187 Fischer-Hallman Rd #608, Kitchener, ON</span>
        </div>
      </div>
    </div>
  )
}
