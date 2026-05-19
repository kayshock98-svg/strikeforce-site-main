import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-sf-dark text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-sf-blue to-sf-blue-light">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Durham Property?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get a free, no-obligation quote in minutes. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-3.5 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
            >
              Get Your Free Quote
            </Link>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sf-blue to-sf-blue-light flex items-center justify-center">
              <span className="text-white font-black text-sm">SF</span>
            </div>
            <span className="font-extrabold text-white text-sm tracking-tight">STRIKEFORCE</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Professional pressure washing & soft washing in Durham, NC. Locally owned, fully insured, 100% satisfaction guaranteed.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/house-washing-durham" className="hover:text-sf-gold transition-colors">House Washing</Link></li>
            <li><Link href="/services/driveway-cleaning-durham" className="hover:text-sf-gold transition-colors">Driveway Cleaning</Link></li>
            <li><Link href="/services/roof-cleaning-durham" className="hover:text-sf-gold transition-colors">Roof Cleaning</Link></li>
            <li><Link href="/services/deck-patio-cleaning-durham" className="hover:text-sf-gold transition-colors">Deck & Patio</Link></li>
            <li><Link href="/services/gutter-cleaning-durham" className="hover:text-sf-gold transition-colors">Gutter Cleaning</Link></li>
            <li><Link href="/services/commercial-pressure-washing-durham" className="hover:text-sf-gold transition-colors">Commercial</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-sf-gold transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-sf-gold transition-colors">Gallery</Link></li>
            <li><Link href="/areas-we-serve" className="hover:text-sf-gold transition-colors">Areas We Serve</Link></li>
            <li><Link href="/faq" className="hover:text-sf-gold transition-colors">FAQ</Link></li>
            <li><Link href="/free-quote" className="hover:text-sf-gold transition-colors">Free Quote</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-sf-gold shrink-0" />
              <a href={PHONE_LINK} className="hover:text-sf-gold transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 text-sf-gold shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-sf-gold transition-colors">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-sf-gold shrink-0" />
              <span>Durham, NC & the Triangle</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-sf-gold shrink-0" />
              <span>Mon-Fri 7am-6pm | Sat 8am-4pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} StrikeForce Pressure Washing. All rights reserved. Serving Durham, Chapel Hill, Cary, Raleigh & the Triangle area.
        </div>
      </div>
    </footer>
  );
}
