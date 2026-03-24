import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Wrench, FileCheck2, Award, Zap, Building2, Snowflake, PaintBucket, Hammer, Droplets } from "lucide-react";
import { Link } from "wouter";
import { contacts } from "@/data/contacts";

const trustBadges = [
  { icon: Wrench, title: "Expert Technicians", desc: "Licensed & certified trade specialists" },
  { icon: Award, title: "35+ Years Experience", desc: "Serving Vancouver since 1989" },
  { icon: ShieldCheck, title: "Licensed & Certified", desc: "Gas Contractor & WorkSafeBC" },
  { icon: FileCheck2, title: "Comprehensive Reports", desc: "Detailed inspection documents" },
  { icon: Zap, title: "Safety First", desc: "CO detection & ventilation testing" },
  { icon: Building2, title: "Strata Specialists", desc: "We know Strata bylaws & processes" },
];

const quickServices = [
  { name: "Gas Fireplaces", slug: "hvac", icon: Zap },
  { name: "Snow Removal", slug: "snow-removal", icon: Snowflake },
  { name: "Roofing", slug: "roofing", icon: Building2 },
  { name: "Siding", slug: "siding", icon: Hammer },
  { name: "Painting", slug: "painting", icon: PaintBucket },
  { name: "Plumbing", slug: "plumbing", icon: Droplets },
  { name: "Renovations", slug: "condo-renovations", icon: Wrench },
];

export function HeroSection() {
  return (
    <>
      <header className="relative bg-secondary text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-property-services.png`}
            alt="Strata Property Services Vancouver" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Serving Vancouver & Lower Mainland
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Strata Property <br/>
              <span className="text-primary">Services</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-xl font-medium leading-relaxed">
              Your complete Strata property maintenance partner. Gas fireplaces, HVAC, roofing, siding, painting, renovations, landscaping & more — all under one roof since 1989.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {quickServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:border-primary transition-all">
                  <s.icon className="w-3.5 h-3.5" />
                  {s.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-accent hover:-translate-y-1 transition-all flex justify-center items-center gap-2 text-lg"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${contacts.colin.phoneTel}`}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all flex justify-center items-center text-lg"
              >
                Call {contacts.colin.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="bg-primary text-white py-4 px-6 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base font-bold uppercase tracking-widest text-center">
          <span>Est. 1989</span>
          <span className="hidden md:inline">•</span>
          <span>Licensed & Bonded</span>
          <span className="hidden md:inline">•</span>
          <span>WorkSafeBC Insured</span>
          <span className="hidden lg:inline">•</span>
          <span>13 Trade Divisions</span>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Why Choose Strata Property Services?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">One trusted partner for every building maintenance and improvement need — 13 trade divisions, 35+ years of experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border-2 border-border p-8 rounded-2xl text-center hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <badge.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{badge.title}</h3>
                <p className="text-muted-foreground">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
