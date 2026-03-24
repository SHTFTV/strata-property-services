import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, Sparkles, Wind, Wrench, CalendarClock } from "lucide-react";

const services = [
  { icon: ShieldAlert, title: "Annual Safety Inspection", desc: "Comprehensive inspection of all fireplace components, burner operation, and ventilation systems to ensure safe operation." },
  { icon: Sparkles, title: "Professional Cleaning", desc: "Deep cleaning of burners, pilot light assembly, and fireplace interior. Removes buildup and ensures optimal efficiency." },
  { icon: Wind, title: "Ventilation Testing", desc: "Complete system inspection and testing to verify proper draft and exhaust flow. Essential for carbon monoxide prevention." },
  { icon: ShieldAlert, title: "Carbon Monoxide Detection", desc: "Safety testing with calibrated CO detection equipment. Identifies potential carbon monoxide leaks early." },
  { icon: Wrench, title: "Repair & Maintenance", desc: "Prompt repair of identified issues. From pilot light problems to major component replacement, we handle it all." },
  { icon: CalendarClock, title: "Maintenance Plans", desc: "Flexible annual service packages designed to keep your fireplace in peak condition with priority scheduling." },
];

const benefits = [
  "🏡 Home Safety: Detects potential hazards before they become dangerous.",
  "💰 Cost Savings: Prevents costly repairs by identifying minor issues early.",
  "⚡ Energy Efficiency: Ensures your fireplace runs efficiently, reducing costs.",
  "✓ Warranty Protection: Maintains manufacturer warranty coverage.",
  "🔥 Optimal Performance: Ensures consistent heat output and reliable ignition.",
  "⚖️ Code Compliance: Maintains compliance with BC Building Code requirements."
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Our Gas Fireplace Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive maintenance and safety testing by certified professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border-l-4 border-l-primary shadow-lg shadow-black/5 hover:-translate-y-2 transition-transform duration-300"
              >
                <srv.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{srv.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Benefits & Pricing */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-black mb-8">Why Annual Service Matters</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div>
            <h2 className="text-3xl font-black mb-8">Service Tiers</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-5 font-bold">Service Level</th>
                    <th className="p-5 font-bold text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5">
                      <strong className="block text-lg mb-1">Single Residential</strong>
                      <span className="text-sm text-slate-500">Annual cleaning & safety check</span>
                    </td>
                    <td className="p-5 text-right font-bold text-primary">Contact for Quote</td>
                  </tr>
                  <tr className="bg-orange-50 hover:bg-orange-100 transition-colors border-l-4 border-l-primary">
                    <td className="p-5">
                      <strong className="block text-lg mb-1 text-orange-900">Strata Multi-Unit (5+)</strong>
                      <span className="text-sm text-orange-700">Bulk safety inspections & logbooks</span>
                    </td>
                    <td className="p-5 text-right font-bold text-primary">Preferred Rates</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5">
                      <strong className="block text-lg mb-1">Consultation</strong>
                      <span className="text-sm text-slate-500">Venting audits & upgrades</span>
                    </td>
                    <td className="p-5 text-right font-bold text-slate-700">Custom Quote</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-5 bg-slate-50 text-sm text-slate-600 text-center border-t border-slate-200">
                All services include a Technical Safety BC compliant inspection record. <br/>
                Serving: Vancouver, Langley, Surrey, Burnaby, Coquitlam, North Shore, New West.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
