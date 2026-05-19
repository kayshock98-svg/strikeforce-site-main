import Link from "next/link";
import {
  Phone, Shield, Leaf, Clock, Star, CheckCircle2, ArrowRight,
  Home, CarFront, Umbrella, TreePine, Droplets, Building2, MapPin, Sparkles,
} from "lucide-react";
import { services, faqs, neighborhoods, PHONE, PHONE_LINK } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-7 h-7" />,
  CarFront: <CarFront className="w-7 h-7" />,
  Umbrella: <Umbrella className="w-7 h-7" />,
  TreePine: <TreePine className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
};

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 5);

  return (
    <>
      {/* ========= HERO ========= */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-sf-dark overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(42,82,152,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(212,168,67,0.3) 0%, transparent 40%)`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sf-gold/10 border border-sf-gold/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-sf-gold" />
              <span className="text-sf-gold text-xs font-semibold tracking-wide uppercase">Serving Durham, NC & the Triangle</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Restore Your Home's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sf-gold to-sf-gold-light">
                Curb Appeal
              </span>{" "}
              in Durham, NC
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Restore your home&apos;s curb appeal with expert soft washing and pressure washing.
              Eco-friendly solutions, professional results, 100% satisfaction guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-quote"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-sf-gold/20 hover:scale-[1.02] transition-all"
              >
                Get An Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-sf-gold" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Leaf className="w-4 h-4 text-green-400" /> Eco-Friendly</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> Same-Week Service</span>
            </div>
          </div>

          {/* Hero visual - dramatic before/after concept */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/3]">
              <div className="absolute inset-0 flex">
                {/* "Before" side */}
                <div className="w-1/2 relative overflow-hidden rounded-l-2xl">
                  <img
                    src="/jphotos/IMG_5010.JPEG"
                    alt="Before"
                    width={900}
                    height={720}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gray-900/40" /> */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                    <span className="text-white text-sm font-medium uppercase tracking-wider">Before</span>
                  </div>
                </div>
                {/* "After" side */}
                <div className="w-1/2 relative overflow-hidden rounded-r-2xl">
                  <img
                    src="/jphotos/IMG_5057.JPEG"
                    alt="After"
                    width={900}
                    height={720}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                    <span className="text-white text-sm font-medium uppercase tracking-wider">After</span>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="absolute left-1/2 top-0 bottom-6 w-1 bg-sf-gold -translate-x-1/2 z-10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-sf-gold flex items-center justify-center z-20 shadow-lg">
                <ArrowRight className="w-5 h-5 text-sf-dark" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-3">
              <div className="flex text-sf-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sf-gold" />)}
              </div>
              <div className="text-xs"><span className="font-bold text-sf-dark">Vinyl siding house washing results Durham NC</span> <span className="text-gray-500"></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SERVICES ========= */}
      <section className="py-20 bg-sf-gray" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sf-gold font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sf-dark mt-2 mb-4">
              Pressure Washing Services in Durham, NC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From house washing to commercial cleaning, we have the equipment and expertise to
              handle any exterior cleaning job in the Durham-Triangle area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-sf-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-sf-blue/5 group-hover:bg-sf-gold/10 flex items-center justify-center mb-5 text-sf-blue group-hover:text-sf-gold transition-colors">
                  {iconMap[s.icon]}
                </div>
                <h3 className="text-xl font-bold text-sf-dark mb-2 group-hover:text-sf-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{s.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sf-gold font-bold text-sm">{s.price}</span>
                  <span className="text-sf-blue-light text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========= WHY CHOOSE US ========= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sf-gold font-semibold text-sm uppercase tracking-wider">Why StrikeForce</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sf-dark mt-2 mb-6">
                Why Durham Homeowners Choose StrikeForce
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;re not just another pressure washing company. We understand Durham&apos;s unique
                challenges — from red clay stains and pine pollen to the mold that thrives in our
                humid climate. Here&apos;s why our customers trust us.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Professional-Grade Equipment", desc: "Commercial surface cleaners and soft wash systems deliver results consumer equipment simply can't match." },
                  { title: "Eco-Friendly Solutions", desc: "Biodegradable, plant-safe cleaning solutions that are tough on grime but gentle on your landscaping and the environment." },
                  { title: "Durham Climate Experts", desc: "We know exactly how to tackle the mold, algae, red clay, and pollen that Durham's climate throws at your home." },
                  { title: "100% Satisfaction Guaranteed", desc: "If you're not completely happy with the results, we'll come back and make it right — no questions asked." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-sf-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sf-dark mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "100%", label: "Satisfaction Guarantee", icon: "🛡️" },
                { num: "5.0", label: "Star Rating", icon: "⭐" },
                { num: "Same Week", label: "Service Available", icon: "⚡" },
                { num: "Eco", label: "Friendly Solutions", icon: "🌿" },
              ].map((stat, i) => (
                <div key={i} className="bg-sf-gray rounded-2xl p-7 text-center">
                  <span className="text-3xl mb-3 block">{stat.icon}</span>
                  <div className="text-2xl md:text-3xl font-extrabold text-sf-dark">{stat.num}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= PROCESS ========= */}
      <section className="py-20 bg-gradient-to-br from-sf-dark to-sf-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sf-gold font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
              Getting Started Takes Less Than 60 Seconds
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Request a Free Quote", desc: "Fill out our quick form or call us at (919) 358-8306. We'll ask about your property and what you need cleaned." },
              { step: "02", title: "We Clean Your Property", desc: "Our team shows up on time with professional equipment. We use the right method for every surface — pressure or soft wash." },
              { step: "03", title: "Love Your Results", desc: "Walk around and inspect everything. If any spot doesn't meet your expectations, we'll re-clean it on the spot. Guaranteed." },
            ].map((item, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <span className="text-5xl font-black text-sf-gold/20 absolute top-4 right-6">{item.step}</span>
                <div className="w-12 h-12 rounded-xl bg-sf-gold flex items-center justify-center mb-5">
                  <span className="text-sf-dark font-black text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= SERVICE AREAS ========= */}
      <section className="py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sf-gold font-semibold text-sm uppercase tracking-wider">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sf-dark mt-2 mb-4">
              Pressure Washing Across Durham & the Triangle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve these Durham neighborhoods and surrounding Triangle communities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <span key={n} className="bg-sf-gray px-4 py-2 rounded-full text-sm font-medium text-sf-dark border border-gray-200 hover:border-sf-gold hover:bg-sf-gold/5 transition-colors">
                {n}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/areas-we-serve" className="text-sf-blue-light font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========= FAQ ========= */}
      <section className="py-20 bg-sf-gray" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sf-gold font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sf-dark mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-sf-dark hover:text-sf-blue transition-colors">
                  {faq.q}
                  <span className="text-sf-gold ml-4 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-sf-blue-light font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========= FAQ Schema ========= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
