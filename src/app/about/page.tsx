import { Metadata } from "next";
import Link from "next/link";
import { Shield, Leaf, Clock, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About StrikeForce — Durham's Trusted Pressure Washing Team",
  description:
    "Learn about StrikeForce Pressure Washing — Durham's locally owned, fully insured pressure washing company. Eco-friendly solutions, professional results, 100% satisfaction guaranteed.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About StrikeForce</h1>
          <p className="text-gray-300 text-lg">
            Locally owned in Durham, NC. Professional results you can see and trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-extrabold text-sf-dark mb-4">Durham&apos;s Exterior Cleaning Experts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              StrikeForce Pressure Washing was founded with a simple mission: give Durham homeowners
              and businesses access to professional-grade exterior cleaning at fair, transparent prices.
              We saw too many property owners either overpaying for subpar work or risking damage from
              inexperienced operators using the wrong equipment and techniques.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand the unique challenges that Durham&apos;s climate throws at your property. The
              Triangle&apos;s humid summers breed mold and algae, spring brings a relentless blanket of
              pine pollen, and North Carolina&apos;s signature red clay stains everything it touches. Our
              cleaning methods are specifically tailored to handle these local conditions — because
              what works in Arizona doesn&apos;t work in Durham.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every StrikeForce job uses professional-grade equipment and eco-friendly, biodegradable
              cleaning solutions. We match the right method to every surface — high-pressure cleaning
              for concrete and driveways, gentle soft washing for siding, roofs, and delicate materials.
              The result is a deep, lasting clean that protects your investment without causing damage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Licensed & Insured", desc: "Full general liability coverage protects your property on every job." },
              { icon: <Leaf className="w-8 h-8" />, title: "Eco-Friendly", desc: "Biodegradable, plant-safe solutions that are tough on grime but gentle on the earth." },
              { icon: <Clock className="w-8 h-8" />, title: "On Time, Every Time", desc: "We respect your schedule. We show up when we say we will, every single time." },
              { icon: <Award className="w-8 h-8" />, title: "100% Guarantee", desc: "Not satisfied? We'll come back and re-clean at no charge. That's our promise." },
            ].map((item, i) => (
              <div key={i} className="bg-sf-gray rounded-2xl p-6 text-center">
                <div className="text-sf-blue mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-sf-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/free-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
