"use client";

import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_LINK } from "@/lib/data";

export default function FreeQuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Get Your Free Pressure Washing Quote
          </h1>
          <p className="text-gray-300 text-lg">
            Takes 60 seconds. No obligation. Most quotes returned within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
  action="https://formspree.io/f/mbdwwbjj"
  method="POST"
  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-5"
>
  <input
    type="hidden"
    name="_redirect"
    value="https://www.strikeforcepressurewashing.com/thank-you"
  />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-sf-dark mb-1.5">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-sf-dark mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all"
                    placeholder="(919) 555-0123"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-sf-dark mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sf-dark mb-1.5">Property Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all"
                  placeholder="123 Main St, Durham, NC"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sf-dark mb-1.5">Service Needed *</label>
                <select
                name="service"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  <option>House Washing</option>
                  <option>Driveway Cleaning</option>
                  <option>Roof Cleaning</option>
                  <option>Deck &amp; Patio Cleaning</option>
                  <option>Gutter Cleaning</option>
                  <option>Commercial Pressure Washing</option>
                  <option>Multiple Services / Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-sf-dark mb-1.5">Anything else we should know?</label>
                <textarea
                name="message"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sf-gold/50 focus:border-sf-gold outline-none transition-all resize-none"
                  placeholder="e.g., approximate square footage, specific problem areas..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold py-4 rounded-full text-lg hover:shadow-xl hover:scale-[1.01] transition-all"
              >
                Get My Free Quote
              </button>
              <p className="text-center text-gray-500 text-xs">
                No spam. No obligation. Just a fair, honest quote.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone CTA */}
            <div className="bg-sf-gray rounded-2xl p-6 text-center">
              <h3 className="font-bold text-sf-dark mb-2">Prefer to Talk?</h3>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sf-blue to-sf-blue-light text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
            </div>

            {/* Trust signals */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
              <h3 className="font-bold text-sf-dark text-center mb-2">Why StrikeForce?</h3>
              {[
                { icon: <Clock className="w-5 h-5 text-sf-blue" />, text: "Quotes returned within 2 hours" },
                { icon: <Shield className="w-5 h-5 text-sf-blue" />, text: "Licensed & fully insured" },
                { icon: <CheckCircle2 className="w-5 h-5 text-sf-gold" />, text: "100% satisfaction guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
