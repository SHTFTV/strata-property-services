import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { contacts } from "@/data/contacts";
import { Link } from "wouter";
import { trades } from "@/data/trades";
import { Phone, Mail, Globe, Award, ShieldCheck, Building2, Wrench, ArrowRight, Users, Calendar, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO
        title="About Us — Strata Property Services Vancouver"
        description="Meet the team behind Strata Property Services. Colin Hamilton, owner of SteelStud.ca, and Robert Hamilton, licensed gas fitter and HVAC specialist. Serving the Lower Mainland since 1989."
      />
      <Navbar />

      <header className="relative bg-secondary text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <Users className="w-4 h-4 text-primary" />
            Our Team
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            About <span className="text-primary">Strata Property Services</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl font-medium leading-relaxed">
            A family-run, multi-trade property maintenance company serving Vancouver and the Lower Mainland since 1989.
          </p>
        </div>
      </header>

      <div className="bg-primary text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base font-bold uppercase tracking-widest text-center">
          <span>Est. 1989</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>Family Operated</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>Licensed & Bonded</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>WorkSafeBC Insured</span>
        </div>
      </div>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Strata Property Services was founded in 1989 with a simple mission: provide reliable, professional property maintenance to Strata corporations and building owners across the Lower Mainland. What began as a focused operation has grown into a comprehensive multi-trade company with over 10 service divisions.
                  </p>
                  <p>
                    Today, we are a family-operated business led by Colin Hamilton and Robert Hamilton. Together, they bring decades of hands-on experience across tenant improvements, gas fitting, HVAC, plumbing, and general property maintenance. Our team of licensed tradespeople serves hundreds of Strata properties, commercial buildings, and residential clients throughout Vancouver, Burnaby, Surrey, and the entire Lower Mainland.
                  </p>
                  <p>
                    We believe in doing things right the first time. Every project — whether it's a complete building re-roof or an annual gas fireplace inspection — receives the same attention to detail, professionalism, and commitment to safety that has defined our company for over 35 years.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">35+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years in Business</div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                    <Wrench className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">11</div>
                    <div className="text-sm text-muted-foreground font-medium">Trade Divisions</div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">19</div>
                    <div className="text-sm text-muted-foreground font-medium">Cities Served</div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">200+</div>
                    <div className="text-sm text-muted-foreground font-medium">Strata Properties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-foreground mb-4 text-center">Meet Our Team</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">The Hamilton family brings decades of combined experience in property maintenance, construction, and specialized trades.</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-secondary text-white p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{contacts.colin.name}</h3>
                      <p className="text-primary font-bold">{contacts.colin.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {contacts.colin.description}
                  </p>
                  <div className="space-y-3">
                    <a href={`tel:${contacts.colin.phoneTel}`} className="flex items-center gap-3 text-foreground hover:text-primary transition group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold">{contacts.colin.phone}</span>
                    </a>
                    <a href={`https://${contacts.colin.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold">{contacts.colin.website}</span>
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Divisions Managed</p>
                    <div className="flex flex-wrap gap-2">
                      {["Snow Removal", "Renovations", "Siding", "Roofing", "Landscaping", "Painting", "Flooring", "Excavation", "Perimeter Drain", "Plumbing"].map((d) => (
                        <span key={d} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-secondary text-white p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{contacts.robert.name}</h3>
                      <p className="text-primary font-bold">{contacts.robert.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {contacts.robert.description}
                  </p>
                  <div className="space-y-3">
                    <a href={`tel:${contacts.robert.phoneTel}`} className="flex items-center gap-3 text-foreground hover:text-primary transition group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold">{contacts.robert.phone}</span>
                    </a>
                    <a href={`mailto:${contacts.robert.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-bold">{contacts.robert.email}</span>
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Certifications</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Class B Gas Fitter #CGA0100182243</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Gas Contractor #LGA0041068</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 mt-4">Divisions Managed</p>
                    <div className="flex flex-wrap gap-2">
                      {["Gas Fitting", "HVAC", "Fireplaces"].map((d) => (
                        <span key={d} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-foreground mb-4 text-center">Our Service Divisions</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">We offer comprehensive property maintenance across 11 trade specializations.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trades.map((t) => (
                <Link key={t.slug} href={`/services/${t.slug}`} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition text-sm">{t.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{t.tagline}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">Ready to Work With Us?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free property maintenance quote. Whether you need a single trade or a comprehensive maintenance package, we have you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-1 transition-all flex justify-center items-center gap-2 text-lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`tel:${contacts.colin.phoneTel}`} className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all flex justify-center items-center text-lg">
                Call {contacts.colin.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
