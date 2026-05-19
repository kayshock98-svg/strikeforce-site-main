"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { PHONE, PHONE_LINK } from "@/lib/data";

const serviceLinks = [
  { href: "/services/house-washing-durham", label: "House Washing" },
  { href: "/services/driveway-cleaning-durham", label: "Driveway Cleaning" },
  { href: "/services/roof-cleaning-durham", label: "Roof Cleaning" },
  { href: "/services/deck-patio-cleaning-durham", label: "Deck & Patio" },
  { href: "/services/gutter-cleaning-durham", label: "Gutter Cleaning" },
  { href: "/services/commercial-pressure-washing-durham", label: "Commercial" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-sf-dark text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">Serving Durham, Chapel Hill, Cary & the Triangle</span>
          <a href={PHONE_LINK} className="flex items-center gap-1.5 font-semibold hover:text-sf-gold transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-30 h-30 rounded-lg bg-gradient-to-br from-sf-white to-sf-white flex items-center justify-center">
              
              <img src="/jphotos/logo.png" alt="Strikeforce Logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-sf-dark text-sm tracking-tight block">Durham's</span>
              <span className="text-[12px] tracking-widest text-sf-blue-light uppercase">Asset Maintenance Partner</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors flex items-center gap-1">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56">
                  {serviceLinks.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 hover:bg-sf-gray text-sm text-gray-700 hover:text-sf-blue transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/gallery" className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors">Gallery</Link>
            <Link href="/areas-we-serve" className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors">Areas</Link>
            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors">About</Link>
            <Link href="/faq" className="px-3 py-2 rounded-lg hover:bg-sf-gray transition-colors">FAQ</Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/free-quote"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              INSTANT QUOTE
            </Link>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
            <Link href="/" className="block px-4 py-3 rounded-lg hover:bg-sf-gray font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left px-4 py-3 rounded-lg hover:bg-sf-gray font-medium flex items-center justify-between">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-sf-blue rounded-lg hover:bg-sf-gray" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/gallery" className="block px-4 py-3 rounded-lg hover:bg-sf-gray font-medium" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/areas-we-serve" className="block px-4 py-3 rounded-lg hover:bg-sf-gray font-medium" onClick={() => setMobileOpen(false)}>Areas We Serve</Link>
            <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-sf-gray font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/faq" className="block px-4 py-3 rounded-lg hover:bg-sf-gray font-medium" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/free-quote" className="block text-center bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold py-3 rounded-full mt-3" onClick={() => setMobileOpen(false)}>
              GET YOUR FREE QUOTE
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
