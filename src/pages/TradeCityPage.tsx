import { useParams, Link } from "wouter";
import { trades } from "@/data/trades";
import { cities } from "@/data/cities";
import { tradeContentMap } from "@/data/tradeContent";
import { getTradeContact } from "@/data/contacts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, Phone, CheckCircle2, MapPin, ArrowLeft, Award, ShieldCheck, FileCheck2, ClipboardList, Lightbulb, BookOpen, HelpCircle, Star, Home, ChevronRight } from "lucide-react";

const PLOWWOW_CITY_ASSET_BY_SLUG: Record<string, string> = {
  abbotsford: "abbotsford", burnaby: "burnaby", chilliwack: "chilliwack",
  coquitlam: "coquitlam", delta: "delta", langley: "langley",
  "maple-ridge": "maple-ridge", mission: "mission", "new-westminster": "new-westminster",
  "north-vancouver": "north-vancouver", "port-coquitlam": "port-coquitlam",
  "port-moody": "port-moody", richmond: "richmond", surrey: "surrey",
  vancouver: "vancouver", "west-vancouver": "west-vancouver", "white-rock": "white-rock",
  "port-kells": "surrey", "campbell-heights": "surrey",
  "walnut-grove": "langley", willoughby: "langley", "fort-langley": "langley",
};

function getTradeCityImage(tradeSlug: string, citySlug: string, fallback: string) {
  if (tradeSlug !== "snow-removal") return fallback;
  const imageCity = PLOWWOW_CITY_ASSET_BY_SLUG[citySlug] || "all";
  return `https://plowwow.com/blog-images/_neighborhoods/city-${imageCity}__tag-strata.jpg`;
}

export default function TradeCityPage() {
  const params = useParams<{ trade: string; city: string }>();
  const trade = trades.find(t => t.slug === params.trade);
  const city = cities.find(c => c.slug === params.city);
  const content = tradeContentMap[params.trade || ""];

  if (!trade || !city) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <div className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that service or area.</p>
          <Link href="/" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-accent transition">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const contact = getTradeContact(trade.slug);
  const allFaqs = [...trade.faqs, ...(content ? content.extendedFaqs : [])];
  const heroImage = getTradeCityImage(trade.slug, city.slug, trade.image);

  const schemaMarkup = [
    {
      "@context": "https://schema.org", "@type": "ProfessionalService",
      "name": `${trade.name} ${city.name} | Strata Property Services`,
      "url": `https://stratapropertyservices.com/services/${trade.slug}/${city.slug}`,
      "description": `${trade.name} services in ${city.name}, BC. ${trade.metaDescription}`,
      "telephone": contact.phoneTel, "image": heroImage, "foundingDate": "1989", "priceRange": "$$",
      "address": { "@type": "PostalAddress", "addressLocality": city.name, "addressRegion": "BC", "addressCountry": "CA" },
      "geo": { "@type": "GeoCoordinates", "latitude": city.lat, "longitude": city.lng },
      "areaServed": { "@type": "City", "name": city.name },
    },
    {
      "@context": "https://schema.org", "@type": "Service", "name": `${trade.name} in ${city.name}`,
      "description": `${trade.name} services in ${city.name}, BC. ${trade.description}`,
      "url": `https://stratapropertyservices.com/services/${trade.slug}/${city.slug}`,
      "provider": { "@type": "Organization", "name": "Strata Property Services", "url": "https://stratapropertyservices.com" },
      "areaServed": { "@type": "City", "name": city.name }, "serviceType": trade.name,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://stratapropertyservices.com/" },
        { "@type": "ListItem", "position": 2, "name": trade.name, "item": `https://stratapropertyservices.com/services/${trade.slug}` },
        { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://stratapropertyservices.com/services/${trade.slug}/${city.slug}` },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": allFaqs.map(faq => ({
        "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ];

  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 6);
  const otherTrades = trades.filter(t => t.slug !== trade.slug).slice(0, 5);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO title={`${trade.name} in ${city.name}`} description={`${trade.name} services in ${city.name}, BC. ${trade.metaDescription}`} />
      {schemaMarkup.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Navbar />

      <header className="relative bg-secondary text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={`${trade.name} in ${city.name}`} className="w-full h-full object-cover opacity-25 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-1.5 text-sm text-slate-400 flex-wrap">
            <li><Link href="/" className="hover:text-primary transition flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link></li><li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li><Link href={`/services/${trade.slug}`} className="hover:text-primary transition">{trade.name}</Link></li><li><ChevronRight className="w-3.5 h-3.5" /></li><li className="text-slate-300">{city.name}</li>
          </ol></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6"><MapPin className="w-4 h-4 text-primary" />{city.region}</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">{trade.name} in <span className="text-primary">{city.name}</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed">{trade.cityIntro(city.name)}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact-trade-city" className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-1 transition-all flex justify-center items-center gap-2 text-lg">Get a Quote in {city.name} <ArrowRight className="w-5 h-5" /></a>
            <a href={`tel:${contact.phoneTel}`} className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all flex justify-center items-center text-lg">Call {contact.phone}</a>
          </div>
        </div>
      </header>

      <div className="bg-primary text-white py-4 px-6"><div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base font-bold uppercase tracking-widest text-center"><span>Est. 1989</span><span className="hidden md:inline">&#8226;</span><span>Licensed & Bonded</span><span className="hidden md:inline">&#8226;</span><span>WorkSafeBC Insured</span><span className="hidden lg:inline">&#8226;</span><span>Serving {city.name}</span></div></div>

      <main>
        <section className="py-20 px-6"><div className="max-w-7xl mx-auto"><div className="grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2">
          <h2 className="text-3xl font-black text-foreground mb-6">{trade.name} Services in {city.name}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{trade.description}</p>
          {content && <div className="prose prose-slate max-w-none mb-8"><p className="text-muted-foreground leading-relaxed">{content.longDescription}</p></div>}
          <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-xl mb-8"><h3 className="font-bold text-lg text-orange-900 mb-3">Why {city.name} Properties Choose Us:</h3><ul className="space-y-3">{city.localFacts.map((fact, i) => <li key={i} className="flex items-start gap-3 text-sm text-orange-800"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />{fact}</li>)}</ul></div>
          <div className="grid sm:grid-cols-2 gap-6">{trade.features.map((f, i) => <div key={i} className="bg-card p-6 rounded-2xl border-l-4 border-l-primary shadow-sm hover:shadow-lg transition-shadow"><h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>)}</div>
        </div><aside><div className="sticky top-24 space-y-6"><div className="bg-secondary text-white p-8 rounded-2xl shadow-2xl"><h3 className="text-xl font-bold mb-4 text-primary">Why Choose Us?</h3><ul className="space-y-3">{["35+ years of experience since 1989", `Serving all ${city.name} neighborhoods`, "Licensed, bonded & WorkSafeBC insured", "Strata specialists — we know the bylaws", "Transparent pricing — no hidden fees", "Professional crews with clean job sites"].map((item, i) => <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{item}</li>)}</ul></div><div className="bg-card p-6 rounded-2xl border border-border shadow-sm"><h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Credentials</h4><div className="space-y-2 text-sm"><div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /><span>Class B Gas Fitter #CGA0100182243</span></div><div className="flex items-center gap-2"><FileCheck2 className="w-4 h-4 text-primary" /><span>Gas Contractor #LGA0041068</span></div><div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /><span>WorkSafeBC Insured</span></div></div></div></div></aside></div></div></section>

        {content && content.processSteps.length > 0 && <section className="py-20 px-6 bg-slate-50 border-t border-slate-200"><div className="max-w-7xl mx-auto"><div className="flex items-center gap-3 mb-3"><ClipboardList className="w-6 h-6 text-primary" /><h2 className="text-3xl font-black text-foreground">Our {trade.name} Process in {city.name}</h2></div><p className="text-muted-foreground mb-12 max-w-2xl">Every {city.name} project follows our proven process to ensure quality, safety, and client satisfaction.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{content.processSteps.map((step, i) => <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-primary/30 transition-all"><div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black text-lg mb-4">{i + 1}</div><h3 className="text-lg font-bold mb-3">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p></div>)}</div></div></section>}
        {content && content.benefits.length > 0 && <section className="py-20 px-6 bg-background"><div className="max-w-7xl mx-auto"><div className="flex items-center gap-3 mb-3"><Star className="w-6 h-6 text-primary" /><h2 className="text-3xl font-black text-foreground">Benefits of Choosing Us in {city.name}</h2></div><p className="text-muted-foreground mb-12 max-w-2xl">{content.whyChooseContent}</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{content.benefits.map((b, i) => <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm"><h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p></div>)}</div></div></section>}
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200"><div className="max-w-7xl mx-auto"><h2 className="text-2xl font-black text-foreground mb-3">Neighborhoods We Serve in {city.name}</h2><p className="text-muted-foreground mb-8">Our {trade.name.toLowerCase()} team provides on-site service across the entire {city.region}. Whether you're in {city.neighborhoods.slice(0, 3).join(', ')} or anywhere else in {city.name}, our experienced crews are ready to serve your property.</p><div className="flex flex-wrap gap-3">{city.neighborhoods.map(n => <span key={n} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:border-primary hover:text-primary transition">{n}</span>)}</div></div></section>
        {content && content.educationalSections.length > 0 && <section className="py-20 px-6 bg-white border-t border-slate-200"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-3 mb-10"><BookOpen className="w-6 h-6 text-primary" /><h2 className="text-3xl font-black">{trade.name} Resources</h2></div><div className="space-y-10">{content.educationalSections.map((section, i) => <article key={i}><h3 className="text-2xl font-bold mb-4">{section.title}</h3><p className="text-muted-foreground leading-relaxed">{section.content}</p></article>)}</div></div></section>}
        <section className="py-20 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-3 mb-10"><HelpCircle className="w-6 h-6 text-primary" /><h2 className="text-3xl font-black">Frequently Asked Questions</h2></div><div className="space-y-4">{allFaqs.map((faq, i) => <div key={i} className="bg-white p-6 rounded-xl border border-slate-200"><h3 className="font-bold text-lg mb-2">{faq.q}</h3><p className="text-muted-foreground">{faq.a}</p></div>)}</div></div></section>
        <section className="py-16 px-6"><div className="max-w-7xl mx-auto"><h2 className="text-2xl font-black mb-6">{trade.name} in Other Cities</h2><div className="flex flex-wrap gap-3">{otherCities.map(c => <Link key={c.slug} href={`/services/${trade.slug}/${c.slug}`} className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition">{c.name}</Link>)}</div><h2 className="text-2xl font-black mt-12 mb-6">Other Strata Services in {city.name}</h2><div className="flex flex-wrap gap-3">{otherTrades.map(t => <Link key={t.slug} href={`/services/${t.slug}/${city.slug}`} className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition">{t.name}</Link>)}</div></div></section>
        <section id="contact-trade-city" className="py-20 px-6 bg-secondary text-white"><div className="max-w-4xl mx-auto text-center"><h2 className="text-3xl md:text-4xl font-black mb-4">Get a {trade.name} Quote in {city.name}</h2><p className="text-slate-300 mb-8">Tell us about your property and the service you need. Our team will help you plan the next step.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href={`tel:${contact.phoneTel}`} className="bg-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call {contact.phone}</a><Link href="/contact" className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-secondary transition">Request a Quote <ArrowRight className="w-5 h-5 inline ml-1" /></Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
