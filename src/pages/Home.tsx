import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { SEO } from "@/components/SEO";

export default function Home() {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.stratapropertyservices.com/#organization",
      "name": "Strata Property Services",
      "url": "https://www.stratapropertyservices.com",
      "description": "Strata Property Services — Vancouver's complete property maintenance partner. Snow removal, roofing, painting, rental turnovers, HVAC, plumbing, drainage, renovations and building maintenance.",
      "telephone": "+16047611518",
      "email": "info@stratapropertyservices.com",
      "image": "https://www.stratapropertyservices.com/opengraph.jpg",
      "foundingDate": "1989",
      "priceRange": "$$",
      "address": { "@type": "PostalAddress", "streetAddress": "19906 32 Ave", "addressLocality": "Langley", "addressRegion": "BC", "postalCode": "V3A 4T1", "addressCountry": "CA" },
      "geo": { "@type": "GeoCoordinates", "latitude": 49.1993, "longitude": -122.7456 },
      "areaServed": [
        { "@type": "City", "name": "Vancouver" }, { "@type": "City", "name": "Burnaby" }, { "@type": "City", "name": "Surrey" }, { "@type": "City", "name": "Coquitlam" }, { "@type": "City", "name": "Langley" }, { "@type": "City", "name": "North Vancouver" }, { "@type": "City", "name": "West Vancouver" }, { "@type": "City", "name": "New Westminster" }, { "@type": "City", "name": "Richmond" }, { "@type": "City", "name": "Port Coquitlam" }, { "@type": "City", "name": "Port Moody" }, { "@type": "City", "name": "Maple Ridge" }, { "@type": "City", "name": "Delta" }, { "@type": "City", "name": "White Rock" }, { "@type": "City", "name": "Abbotsford" }, { "@type": "City", "name": "Mission" }, { "@type": "City", "name": "Chilliwack" }
      ],
      "contactPoint": { "@type": "ContactPoint", "telephone": "+16047611518", "contactType": "customer service", "areaServed": "CA", "availableLanguage": "English" },
      "hasCertification": ["Class B Gas Fitter CGA0100182243", "Gas Contractor License LGA0041068"],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "13:00" }
      ],
      "sameAs": ["https://buildershaus.com", "https://beewarm.ca", "https://steelstud.ca", "https://plowwow.com", "https://strataroofers.com"]
    },
    { "@context": "https://schema.org", "@type": "WebSite", "url": "https://www.stratapropertyservices.com", "name": "Strata Property Services", "description": "Vancouver's complete property maintenance partner since 1989." }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      {schemaMarkup.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <SEO title="Strata Property Maintenance Vancouver & Lower Mainland" description="One coordinated partner for strata snow removal, roofing, painting, rental turnovers, HVAC, plumbing, drainage, renovations and building maintenance across Metro Vancouver." />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
