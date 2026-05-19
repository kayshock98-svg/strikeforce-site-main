import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone, Shield, Leaf, Star } from "lucide-react";
import { services, PHONE, PHONE_LINK } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Durham NC`,
    description: `Professional ${service.title.toLowerCase()} in Durham, NC. ${service.shortDesc}. Locally owned, 100% satisfaction guaranteed. Call (919) 358-8306 for a free quote.`,
    alternates: {
      canonical: `https://www.strikeforcepressurewashing.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Link href="/#services" className="text-sf-gold text-sm font-medium mb-4 inline-flex items-center gap-1 hover:underline">
              &larr; All Services
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              {service.title} in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sf-gold to-sf-gold-light">
                Durham, NC
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {service.longDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-quote"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                Get a Free {service.title} Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sf-dark mb-6">
                Why Choose Professional {service.title} in Durham?
              </h2>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sf-gold shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-sf-gray rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 text-sf-blue mx-auto mb-2" />
                  <span className="text-xs font-semibold text-sf-dark">Fully Insured</span>
                </div>
                <div className="bg-sf-gray rounded-xl p-4 text-center">
                  <Leaf className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <span className="text-xs font-semibold text-sf-dark">Eco-Friendly</span>
                </div>
                <div className="bg-sf-gray rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-sf-gold mx-auto mb-2" />
                  <span className="text-xs font-semibold text-sf-dark">5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <span className="text-sf-gold font-bold text-sm uppercase tracking-wider">Starting at</span>
                <div className="text-4xl font-extrabold text-sf-dark mt-1">{service.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Free on-site estimate", "No hidden fees or upsells", "100% satisfaction guarantee", "Same-week scheduling available"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-sf-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-quote"
                className="block w-full text-center bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold py-4 rounded-full text-lg hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                Get Your Free Quote
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">No obligation. Response within 2 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16 bg-sf-gray">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sf-dark mb-8 text-center">
              {service.title} FAQ — Durham, NC
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group" open={i === 0}>
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
          </div>

          {/* FAQ Schema for this service */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>
      )}

      {/* Other services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-sf-dark mb-8 text-center">
            Other Services We Offer in Durham
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-sf-gray rounded-xl p-6 hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100 transition-all group"
              >
                <h3 className="font-bold text-sf-dark group-hover:text-sf-blue transition-colors mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{s.shortDesc}</p>
                <span className="text-sf-gold font-bold text-sm">{s.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} Durham NC`,
            provider: {
              "@type": "ProfessionalService",
              name: "StrikeForce Pressure Washing",
              telephone: "(919) 358-8306",
            },
            areaServed: {
              "@type": "City",
              name: "Durham",
              sameAs: "https://en.wikipedia.org/wiki/Durham,_North_Carolina",
            },
            description: service.longDesc,
          }),
        }}
      />
    </>
  );
}
