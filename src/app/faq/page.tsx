import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ — Pressure Washing Questions Durham NC",
  description:
    "Answers to common questions about pressure washing in Durham, NC. Pricing, scheduling, safety, methods & more. Call StrikeForce at (919) 358-8306.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Pressure Washing FAQ — Durham, NC
          </h1>
          <p className="text-gray-300 text-lg">
            Everything Durham homeowners ask about pressure washing — pricing, process, safety, and more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 group"
              open={i === 0}
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-sf-dark hover:text-sf-blue transition-colors">
                {faq.q}
                <span className="text-sf-gold ml-4 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/free-quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sf-gold to-sf-gold-light text-sf-dark font-bold px-8 py-3.5 rounded-full hover:shadow-lg transition-all"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
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
