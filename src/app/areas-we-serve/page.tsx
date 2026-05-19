import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { neighborhoods, nearbyCities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas We Serve — Pressure Washing Durham NC & Triangle",
  description:
    "StrikeForce Pressure Washing serves Durham NC neighborhoods including Hope Valley, Trinity Park, Forest Hills, plus Chapel Hill, Cary, Raleigh & the Triangle.",
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Areas We Serve
          </h1>
          <p className="text-gray-300 text-lg">
            Professional pressure washing across Durham, NC and the entire Triangle area.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Durham neighborhoods */}
          <h2 className="text-2xl font-extrabold text-sf-dark mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-sf-gold" />
            Durham Neighborhoods
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
            {neighborhoods.map((n) => (
              <div key={n} className="bg-sf-gray rounded-xl px-4 py-3 text-sm font-medium text-sf-dark border border-gray-200 hover:border-sf-gold hover:bg-sf-gold/5 transition-colors text-center">
                {n}
              </div>
            ))}
          </div>

          {/* Nearby cities */}
          <h2 className="text-2xl font-extrabold text-sf-dark mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-sf-blue-light" />
            Nearby Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
            {nearbyCities.map((c) => (
              <div key={c} className="bg-white rounded-xl px-4 py-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-sf-blue/20 transition-all">
                <span className="font-bold text-sf-dark">{c}</span>
                <span className="text-gray-500 text-xs block mt-0.5">NC</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-sf-dark to-sf-blue rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">Don&apos;t See Your Area?</h2>
            <p className="text-gray-300 mb-6">We may still be able to help. Contact us and we&apos;ll let you know!</p>
            <Link
              href="/free-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Request a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
