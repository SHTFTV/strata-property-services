import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DiagnosticGallery } from "@/components/sections/DiagnosticGallery";
import { SafetyAndFAQSection } from "@/components/sections/SafetyAndFAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { SEO } from "@/components/SEO";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://stratapropertyservices.com/#organization",
    "name": "Strata Property Services",
    "url": "https://stratapropertyservices.com",
    "description": "Strata Property Services — Vancouver's complete property maintenance partner. Gas fireplaces, HVAC, roofing, siding, painting, renovations, landscaping, snow removal & more. Licensed & bonded since 1989.",
    "telephone": "+16047611518",
    "email": "beewarmh@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "311 1643 East 3rd",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V5N 5R6",
      "addressCountry": "CA"
    },
    "hasCertification": [
      "Class B Gas Fitter CGA0100182243",
      "Gas Contractor License LGA0041068"
    ]
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      {/* Injecting SEO Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} 
      />

      <SEO
        title="Strata Property Services Vancouver — Fireplaces, HVAC, Roofing & More"
        description="Strata Property Services — Vancouver's trusted property maintenance company since 1989. Gas fireplaces, HVAC, roofing, siding, painting, renovations, landscaping, plumbing & snow removal. Licensed & bonded. Call 604-761-1518."
      />
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <DiagnosticGallery />
        <SafetyAndFAQSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
