import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Pressure Washing Before & After Durham NC",
  description:
    "See real before and after pressure washing results from Durham, NC homes. House washing, driveway cleaning, roof cleaning & more by StrikeForce.",
};

const projects = [
    {
    title: "Exterior House Wash — Lynn Hollow, Durham",
    type: "House Washing",
    description: "Soft washed vinyl siding and removed years of algae buildup.",
    before: "/lynn hollow before side.png",
    after: "/lynn hollow after.png",
  },

  {
    title: "Community Cleanup Project — Brightleaf at the Park",
    type: "Neighborhood Cleanup",
    description:"Completed a neighborhood cleanup project and restored concrete surfaces.",
    before: "/brightleaf before pt 2.png",
    after: "/The real after.png",
  },

 {
  title: "House Wash & Gutter Cleaning — Parkwood, Durham",
  type: "House Washing",
  description:
    "Completed a full exterior house wash and gutter cleaning in the Parkwood area of Durham, restoring curb appeal and removing organic buildup from the property.",
  before: "/parkwood-before.jpeg",
after: "/parkwood-after.jpeg",
},
{
  title: "House Wash - Vintage Hill, Durham",
  type: "House Washing",
  description:
    "Completed a full exterior house wash on a two-story home in Vintage Hill, removing dirt, algae, and organic buildup to restore the siding's appearance.",
  before: "/sitsope before.png",
  after: "/Sitsope after.png",
},

{
  title: "Exterior House Wash - Bonsack Creek, Durham",
  type: "House Washing",
  description:
    "Completed a full exterior house wash on a 3,000 sq ft home in Bonsack Creek, improving curb appeal and restoring the home's exterior appearance.",
  before: "/marilyn before.png",
  after: "/marilyn after.png",
},
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sf-dark to-sf-blue text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Work — Durham, NC</h1>
          <p className="text-gray-300 text-lg">
            Real results from real Durham properties. Every project backed by our 100% satisfaction guarantee.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-52 w-full flex">
  <img
    src={p.before}
    alt={`${p.title} before`}
    className="w-1/2 h-full object-cover"
  />

  <img
    src={p.after}
    alt={`${p.title} after`}
    className="w-1/2 h-full object-cover"
  />

  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500"></div>

  <span className="absolute left-4 top-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
    BEFORE
  </span>

  <span className="absolute right-4 top-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
    AFTER
  </span>
</div>
                <div className="p-6">
                  <span className="text-sf-gold text-xs font-bold uppercase tracking-wider">{p.type}</span>
                  
                  <h3 className="font-bold text-sf-dark mt-1 mb-2 group-hover:text-sf-blue transition-colors">{p.title}</h3>
<p className="text-gray-600 text-sm mt-2 leading-relaxed">
  {p.description}
</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-sf-gray rounded-2xl p-10">
            <h2 className="text-2xl font-extrabold text-sf-dark mb-3">Want Results Like These?</h2>
            <p className="text-gray-600 mb-6">Get a free, no-obligation quote for your Durham property.</p>
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
