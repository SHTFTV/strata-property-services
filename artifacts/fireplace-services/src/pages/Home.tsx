import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DiagnosticGallery } from "@/components/sections/DiagnosticGallery";
import { SafetyAndFAQSection } from "@/components/sections/SafetyAndFAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://stratapropertyservices.com/gas-fireplace-services#organization",
    "name": "Gas Fireplace Annual Services Vancouver",
    "description": "Professional gas fireplace inspection, maintenance, and safety services. Class B Gas Fitter certified. Annual maintenance and repairs for Vancouver homes and buildings.",
    "telephone": "+16047658424",
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

      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <DiagnosticGallery />
        <SafetyAndFAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
