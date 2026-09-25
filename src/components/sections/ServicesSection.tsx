import { motion } from "framer-motion";
import { ArrowRight, Building2, FileCheck2, Hammer, PaintBucket, Snowflake, Wrench } from "lucide-react";
import { Link } from "wouter";

const services = [
  { icon: Snowflake, title: "Strata Snow & Ice", slug: "snow-removal", desc: "Fixed seasonal contracts, capacity-managed routes, de-icing and documented storm response through PlowWow." },
  { icon: PaintBucket, title: "Rental Turnover Painting", slug: "rental-turnover-painting", desc: "Month-end suite repaints, drywall patching and move-in-ready scheduling for managed rental portfolios." },
  { icon: Building2, title: "Roofing & Building Envelope", slug: "roofing", desc: "Inspections, leak response, planned replacement and maintenance for flat and pitched strata roofs." },
  { icon: Wrench, title: "HVAC & Gas Fireplaces", slug: "hvac", desc: "Licensed gas fitting, annual fireplace programs, heating, cooling and ventilation service." },
  { icon: Hammer, title: "Renovations & Repairs", slug: "condo-renovations", desc: "Common areas, occupied suites and coordinated multi-trade improvements completed around strata requirements." },
  { icon: FileCheck2, title: "Drainage & Plumbing", slug: "perimeter-drain", desc: "Drainage investigation, perimeter systems, plumbing repairs and documented maintenance planning." },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="font-bold uppercase tracking-[0.2em] text-primary text-sm mb-3">Integrated strata maintenance</p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-5">The building work strata councils need—coordinated in one place</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">SPS connects property managers and councils with the right service division, a clear scope and documented follow-through. Start with the urgent problem or build a recurring maintenance program around the property.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.article key={service.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all">
              <service.icon className="w-9 h-9 text-primary mb-5" />
              <h3 className="text-xl font-black mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent">Explore the service <ArrowRight className="w-4 h-4" /></Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
