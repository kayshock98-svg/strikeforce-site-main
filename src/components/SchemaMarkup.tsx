export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "StrikeForce Pressure Washing",
    image: "https://www.strikeforcepressurewashing.com/logo.png",
    url: "https://www.strikeforcepressurewashing.com",
    telephone: "(919) 358-8306",
    email: "sforcepw@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durham",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.994,
      longitude: -78.8986,
    },
    areaServed: [
      { "@type": "City", name: "Durham", sameAs: "https://en.wikipedia.org/wiki/Durham,_North_Carolina" },
      { "@type": "City", name: "Chapel Hill" },
      { "@type": "City", name: "Cary" },
      { "@type": "City", name: "Raleigh" },
      { "@type": "City", name: "Morrisville" },
      { "@type": "City", name: "Hillsborough" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    description:
      "Professional pressure washing and soft washing services in Durham, NC. Specializing in house washing, driveway cleaning, roof cleaning, and commercial power washing. Locally owned with 100% satisfaction guarantee.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pressure Washing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Soft Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway Pressure Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Soft Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck and Patio Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Pressure Washing" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
