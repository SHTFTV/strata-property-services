import { useParams, Link } from "wouter";
import { trades } from "@/data/trades";
import { cities } from "@/data/cities";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, Phone, CheckCircle2, MapPin, ArrowLeft, Award, ShieldCheck, FileCheck2 } from "lucide-react";

export default function TradePage() {
  const params = useParams<{ trade: string }>();
  const trade = trades.find(t => t.slug === params.trade);

  if (!trade) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <div className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find that service.</p>
          <Link href="/" className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-accent transition">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${trade.name} Vancouver | Strata Property Services`,
    "url": `https://stratapropertyservices.com/services/${trade.slug}`,
    "description": trade.metaDescription,
    "telephone": "+16047658424",
    "email": "beewarmh@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "areaServed": cities.map(c => ({ "@type": "City", "name": c.name })),
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO title={`${trade.name} Vancouver & Lower Mainland`} description={trade.metaDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Navbar />

      <header className="relative bg-secondary text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={`${import.meta.env.BASE_URL}${trade.image}`} alt={trade.name} className="w-full h-full object-cover opacity-25 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            <span className="text-primary">{trade.name}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl font-medium">{trade.tagline}</p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl">{trade.heroText}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact-trade" className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-1 transition-all flex justify-center items-center gap-2 text-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+16047658424" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all flex justify-center items-center text-lg">
              Call 604-765-8424
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
          <span>Serving the Lower Mainland</span>
        </div>
      </div>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-foreground mb-6">About Our {trade.name} Services</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">{trade.description}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {trade.features.map((f, i) => (
                    <div key={i} className="bg-card p-6 rounded-2xl border-l-4 border-l-primary shadow-sm hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <aside>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-secondary text-white p-8 rounded-2xl shadow-2xl">
                    <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      {["35+ years of experience since 1989", "Licensed, bonded & WorkSafeBC insured", "Strata specialists — we know the bylaws", "Transparent pricing — no hidden fees", "Professional crews with clean job sites", "Full documentation for Strata records"].map((item, i) => (
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
                      <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /><span>Class B Gas Fitter #CGA0100182243</span></div>
                      <div className="flex items-center gap-2"><FileCheck2 className="w-4 h-4 text-primary" /><span>Gas Contractor #LGA0041068</span></div>
                      <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /><span>WorkSafeBC Insured</span></div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">Common questions about our {trade.name.toLowerCase()} services.</p>
            <div className="grid md:grid-cols-1 gap-4 max-w-3xl">
              {trade.faqs.map((faq, i) => (
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

        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-foreground mb-3">{trade.name} Service Areas</h2>
            <p className="text-muted-foreground mb-8">We provide {trade.name.toLowerCase()} services across the entire Lower Mainland.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {cities.map((c) => (
                <Link key={c.slug} href={`/services/${trade.slug}/${c.slug}`} className="bg-card border border-border p-4 rounded-xl text-center hover:border-primary hover:shadow-md transition-all group">
                  <MapPin className="w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition" />
                  <span className="text-sm font-bold group-hover:text-primary transition">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-trade" className="py-20 px-6 bg-secondary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Get a Free {trade.name} Quote</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">Contact us today for a no-obligation quote on your {trade.name.toLowerCase()} project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16047658424" className="bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> Call 604-765-8424
              </a>
              <Link href="/#contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center justify-center text-lg">
                Request a Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
