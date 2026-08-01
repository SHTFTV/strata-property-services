import { useParams, Link } from "wouter";
import { cities } from "@/data/cities";
import { trades } from "@/data/trades";
import { contacts } from "@/data/contacts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, MapPin, Phone, ShieldCheck, CheckCircle2, ArrowLeft, Wrench, Award, FileCheck2, BookOpen, HelpCircle, Home, ChevronRight } from "lucide-react";

const cityMaintenanceGuide = {
  title: "Complete Property Maintenance Guide for Lower Mainland Strata Properties",
  sections: [
    {
      heading: "Understanding Strata Corporation Maintenance Obligations in British Columbia",
      content: "Under the BC Strata Property Act, Strata corporations have a legal obligation to maintain and repair common property, common assets, and the building structure. This obligation extends to all building systems including roofing, exterior cladding, plumbing, HVAC systems, landscaping, drainage infrastructure, and common area finishes. Failure to maintain these systems can result in accelerated deterioration, increased repair costs, safety hazards, and potential legal liability for the Strata corporation and its council members. A proactive maintenance program is the most cost-effective approach to fulfilling these obligations. Rather than waiting for systems to fail — which invariably happens at the worst possible time and at maximum cost — a structured preventive maintenance program addresses issues before they become emergencies, extends the service life of building components, and provides the documentation that demonstrates due diligence in the event of insurance claims, warranty disputes, or legal proceedings. Strata Property Services provides integrated maintenance programs that cover all building trades under a single management structure, ensuring coordination between service divisions and eliminating the gaps that occur when multiple independent contractors each handle a small piece of the building's maintenance needs."
    },
    {
      heading: "Seasonal Property Maintenance Calendar for BC's Climate",
      content: "British Columbia's maritime climate creates distinct seasonal maintenance demands that property managers and Strata councils must address throughout the year. Spring (March-May) is the time for post-winter damage assessment, gutter and drain cleaning, exterior painting preparation, landscape startup including irrigation system activation and fertilization, roof inspection after winter weather, and HVAC system transition from heating to cooling season. Summer (June-August) is the optimal window for exterior projects including painting, siding repair or replacement, roofing work, concrete and hardscape improvements, and major landscape renovation. Gas fireplace annual servicing should be scheduled during summer months while the heating system is not in active use. Fall (September-November) is the critical preparation window for winter, including gutter cleaning, drainage system verification, furnace and fireplace pre-season servicing, irrigation winterization, landscape cleanup and dormant pruning, and snow removal contract activation. Winter (December-February) focuses on snow and ice management, emergency repairs, interior renovation projects, dormant tree pruning, and planning for spring and summer maintenance projects. This seasonal approach ensures that every building system receives attention at the optimal time, maximizing the effectiveness of maintenance dollars and minimizing the risk of weather-related damage or system failure."
    },
    {
      heading: "Building Envelope Maintenance: Protecting Your Most Valuable Asset",
      content: "The building envelope — comprising the roof, exterior walls, windows, doors, and foundation — is the primary system protecting your property from water intrusion, heat loss, and structural deterioration. In the Lower Mainland's heavy rainfall climate, building envelope maintenance is arguably the most important aspect of property care. Annual building envelope inspections should evaluate cladding condition including paint, sealant, and flashing integrity; roof membrane condition and drainage function; window and door seal integrity; balcony and deck waterproofing condition; foundation drainage system performance; and gutter and downspout function. Early detection of building envelope issues allows for targeted repairs at a fraction of the cost of major remediation. A small sealant failure caught early costs a few hundred dollars to repair; the same failure left undetected for several years can result in concealed moisture damage costing tens of thousands of dollars to remediate. Strata Property Services offers comprehensive building envelope maintenance programs that include annual visual inspections, targeted testing (moisture meters, thermal imaging) at identified concern areas, prioritized repair recommendations with cost estimates, and documentation for Strata records and depreciation reports."
    },
    {
      heading: "Reserve Fund Planning and Long-Term Capital Maintenance",
      content: "BC's Strata Property Act requires Strata corporations to maintain a contingency reserve fund for major repair and replacement projects. The fund is supported by a depreciation report — a professional assessment of all building components that estimates remaining service life and replacement costs for each element. Understanding the typical lifespans of major building components helps Strata councils plan effectively. Roofing systems typically last 20-30 years depending on material, exterior paint 8-15 years, siding 20-50 years depending on material, HVAC equipment 15-25 years, perimeter drain systems 25-50 years, landscape infrastructure 15-30 years, flooring in common areas 10-20 years, and elevator systems 20-30 years. Strata Property Services assists Strata councils with capital planning by providing condition assessments, remaining life estimates, and replacement cost projections for the building systems within our trade divisions. These assessments support depreciation report updates and help councils make informed decisions about maintenance investment, repair timing, and reserve fund contributions. The relationship between maintenance quality and component lifespan is significant. Well-maintained systems consistently outlast their predicted service life, while neglected systems fail prematurely. Investing in quality preventive maintenance is the most effective way to maximize the value of your reserve fund dollars."
    },
    {
      heading: "Why Single-Source Property Maintenance Makes Sense for Strata Properties",
      content: "Managing multiple independent contractors for different building maintenance needs — a separate company for landscaping, another for plumbing, another for painting, and so on — creates coordination challenges, accountability gaps, and administrative overhead that many Strata corporations find increasingly difficult to manage. A single-source maintenance provider like Strata Property Services eliminates these challenges by offering all major property maintenance trades under one management structure. The benefits of this integrated approach include single-point accountability for all maintenance issues, coordination between trade divisions for complex projects that involve multiple disciplines, consistent quality standards and safety practices across all services, simplified administration with consolidated invoicing and reporting, and institutional knowledge of your building that improves with each year of service. For example, when a roofing project reveals drainage issues that require excavation work, a single-source provider can coordinate the solution internally rather than requiring the Strata corporation to engage, schedule, and manage a separate drainage contractor. When a painting project identifies siding damage that needs repair before painting, the repair and painting happen seamlessly as part of one coordinated project. This integration delivers better outcomes, faster resolution of issues, and lower total cost of ownership for building maintenance."
    }
  ],
  faqs: [
    { q: "How do I know which property maintenance services my building needs?", a: "We recommend starting with a comprehensive building assessment that evaluates all major systems — roofing, cladding, HVAC, drainage, landscaping, and common area finishes. This assessment identifies immediate repair needs, developing concerns, and long-term replacement planning requirements. We provide this assessment at no cost as part of our service relationship." },
    { q: "Can you handle all of our building's maintenance needs?", a: "Yes, Strata Property Services provides 13 trade divisions covering snow removal, roofing, siding, HVAC and gas fireplaces, painting, flooring, landscaping, perimeter drains, mini excavation, condo renovations, plumbing, drywall, and restoration. This integrated service model eliminates the coordination challenges of managing multiple contractors." },
    { q: "What is the advantage of a maintenance contract vs. calling for service as needed?", a: "Maintenance contracts provide scheduled preventive care that catches problems early, extends equipment life, and prevents emergency failures. Contract clients also receive priority scheduling, preferred pricing, and the documentation needed for Strata records and insurance. Reactive-only service typically costs more over time due to emergency premiums and the higher cost of repairing problems that could have been prevented." },
    { q: "How do you handle emergency maintenance situations?", a: "We provide emergency response for urgent maintenance issues including roof leaks, heating failures, drainage emergencies, and safety hazards. Our operations team is available for emergency dispatch, and we maintain crews and equipment ready for rapid response throughout the Lower Mainland." },
    { q: "Do you provide documentation for Strata council meetings?", a: "Absolutely. Every service visit generates documentation including work performed, conditions observed, photographs, and recommendations. Monthly and annual summary reports are provided for council review. Our documentation systems support AGM reporting, insurance renewals, depreciation report updates, and due diligence records." },
    { q: "What areas do you serve?", a: "We serve the entire Lower Mainland including Vancouver, Burnaby, Surrey, Coquitlam, Langley, North Vancouver, West Vancouver, New Westminster, Richmond, Port Coquitlam, Port Moody, Maple Ridge, Delta, White Rock, Abbotsford, Mission, and Chilliwack." },
    { q: "How long has Strata Property Services been in business?", a: "We were established in 1989 and have been providing property maintenance services throughout the Lower Mainland for over 35 years. Our longevity reflects the quality of our work and the strength of our client relationships — many of our Strata clients have been with us for 15-20+ years." },
    { q: "Are you licensed and insured?", a: "Yes, we maintain all required licenses including Class B Gas Fitter certification (#CGA0100182243) and Gas Contractor License (#LGA0041068). We carry comprehensive general liability insurance and are fully registered with WorkSafeBC. Certificates of insurance are provided to all Strata clients." }
  ]
};

export default function CityPage() {
  const params = useParams<{ city: string }>();
  const city = cities.find(c => c.slug === params.city);

  if (!city) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <div className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h1 className="text-4xl font-black mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that service area.</p>
          <Link href="/" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-accent transition">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `Property Maintenance Services ${city.name} | Strata Property Services`,
      "url": `https://stratapropertyservices.com/areas/${city.slug}`,
      "description": city.metaDescription,
      "telephone": "+16047611518",
      "email": "info@stratapropertyservices.com",
      "image": "https://stratapropertyservices.com/opengraph.jpg",
      "foundingDate": "1989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.lat,
        "longitude": city.lng
      },
      "areaServed": {
        "@type": "City",
        "name": city.name
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Property Maintenance Services",
        "itemListElement": trades.map(t => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t.name
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://stratapropertyservices.com/" },
        { "@type": "ListItem", "position": 2, "name": city.name, "item": `https://stratapropertyservices.com/areas/${city.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cityMaintenanceGuide.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ];

  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 12);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO title={`Property Maintenance Services ${city.name}`} description={city.metaDescription} />
      {schemaMarkup.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navbar />

      <header className="relative bg-secondary text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-property-services.png`}
            alt={`Property Maintenance Services ${city.name}`}
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-primary transition flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><span className="text-slate-500">Service Areas</span></li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-slate-300">{city.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            {city.region}
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            Property Maintenance Services in <span className="text-primary">{city.name}</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed">
            Your complete Strata property maintenance partner in {city.name}. 13 trade divisions, 35+ years of experience — gas fireplaces, HVAC, roofing, siding, painting, renovations, landscaping, plumbing, drywall, restoration and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact-city"
              className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-1 transition-all flex justify-center items-center gap-2 text-lg"
            >
              Get a Quote in {city.name} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${contacts.colin.phoneTel}`}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all flex justify-center items-center text-lg"
            >
              Call {contacts.colin.phone}
            </a>
          </div>
        </div>
      </header>

      <div className="bg-primary text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base font-bold uppercase tracking-widest text-center">
          <span>Est. 1989</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>Licensed & Bonded</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>WorkSafeBC Insured</span>
          <span className="hidden lg:inline">&#8226;</span>
          <span>13 Trade Divisions</span>
        </div>
      </div>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-black text-foreground mb-6">
                  Professional Property Maintenance Services in {city.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {city.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Strata Property Services has been serving {city.name} property owners and Strata corporations since 1989. As a full-service property maintenance company with 13 trade divisions, we provide every maintenance and improvement service your building needs under one roof — eliminating the coordination challenges and accountability gaps that come with managing multiple contractors. Our {city.name} service team includes licensed gas fitters, certified roofers, experienced painters, skilled renovators, professional landscapers, and specialized drainage and excavation crews, all working under unified management with consistent quality standards and comprehensive documentation for Strata records.
                </p>

                <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                  <h3 className="font-bold text-lg text-orange-900 mb-3">Local Expertise for {city.name}:</h3>
                  <ul className="space-y-3">
                    {city.localFacts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-orange-800">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="lg:col-span-2">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-secondary text-white p-8 rounded-2xl shadow-2xl">
                    <h3 className="text-xl font-bold mb-4 text-primary">Why {city.name} Chooses Us</h3>
                    <ul className="space-y-3">
                      {[
                        "35+ years of experience since 1989",
                        `Serving all ${city.name} neighborhoods`,
                        "13 trade divisions under one roof",
                        "Licensed, bonded & WorkSafeBC insured",
                        "Strata specialists — we know the bylaws",
                        "Transparent pricing — no hidden fees",
                        "Professional crews with clean job sites",
                        "Comprehensive documentation for records",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Credentials</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Class B Gas Fitter #CGA0100182243</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-primary" />
                        <span>Gas Contractor #LGA0041068</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>WorkSafeBC Insured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-black text-foreground">Our Services in {city.name}</h2>
            </div>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Complete property maintenance coverage for {city.name} Strata corporations, commercial buildings, and residential properties. Click any service to learn more.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {trades.map((t) => (
                  <Link key={t.slug} href={`/services/${t.slug}/${city.slug}`} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition">{t.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {t.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">{f.title}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                      View {t.name} in {city.name} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-foreground mb-3">
              Neighborhoods We Serve in {city.name}
            </h2>
            <p className="text-muted-foreground mb-8">
              Our service teams provide on-site property maintenance across the entire {city.region}. Whether your property is in {city.neighborhoods.slice(0, 3).join(', ')} or anywhere else in {city.name}, our experienced crews are ready to serve. We have deep familiarity with the building types, construction methods, and common maintenance challenges found throughout {city.name}'s diverse neighborhoods.
            </p>
            <div className="flex flex-wrap gap-3">
              {city.neighborhoods.map((n) => (
                <span key={n} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:border-primary hover:text-primary transition">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-background border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-black text-foreground">{cityMaintenanceGuide.title}</h2>
            </div>
            <p className="text-muted-foreground mb-12">Expert guidance for {city.name} property owners and Strata councils on maintaining and protecting their buildings.</p>
            <div className="space-y-12">
              {cityMaintenanceGuide.sections.map((section, i) => (
                <article key={i} className="prose prose-slate max-w-none">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-black text-foreground">Frequently Asked Questions About Property Services in {city.name}</h2>
            </div>
            <p className="text-muted-foreground mb-8">Common questions from {city.name} property owners and Strata councils.</p>
            <div className="grid md:grid-cols-1 gap-4 max-w-3xl">
              {cityMaintenanceGuide.faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm group">
                  <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-city" className="py-20 px-6 bg-secondary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Get a Free Property Maintenance Quote in {city.name}
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
              Contact us today for any property maintenance service in {city.name}. 35+ years of trusted service, 13 trade divisions, one call does it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contacts.colin.phoneTel}`}
                className="bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" /> Call {contacts.colin.phone}
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center justify-center text-lg"
              >
                Request a Quote Online
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-black text-foreground mb-6">Other Service Areas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="bg-card border border-border p-4 rounded-xl text-center hover:border-primary hover:shadow-md transition-all group"
                >
                  <MapPin className="w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition" />
                  <span className="text-sm font-bold group-hover:text-primary transition">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
