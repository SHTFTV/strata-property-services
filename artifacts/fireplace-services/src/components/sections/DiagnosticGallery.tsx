import { motion } from "framer-motion";
import { AlertTriangle, Download, Info } from "lucide-react";
import { Link } from "wouter";

const deficiencies = [
  {
    id: 1,
    title: "Sooting & Incomplete Combustion",
    description: "Heavy carbon buildup on logs and glass indicates a poor air-to-fuel ratio.",
    risk: "High",
    riskDetail: "Carbon Monoxide (CO) production and fire hazard.",
    eyeSpyrNote: "AI Analysis detected 85% blockage in primary air shutter."
  },
  {
    id: 2,
    title: "Corroded Thermocouple",
    description: "Oxidation on the safety sensor prevents the pilot from holding.",
    risk: "Medium",
    riskDetail: "Total system failure during cold snaps; no heat.",
    eyeSpyrNote: "Voltage drop detected: 12mV (Required: 25mV+)."
  },
  {
    id: 3,
    title: "Blocked B-Vent Termination",
    description: "Bird nests or debris found in the exterior exhaust cap.",
    risk: "Critical",
    riskDetail: "Immediate CO backup into the living space.",
    eyeSpyrNote: "Visual reasoning identified non-compliant vent cap style."
  },
  {
    id: 4,
    title: "Delayed Ignition (Mini-Explosion)",
    description: "Gas builds up before the spark catches, causing a loud 'thump'.",
    risk: "High",
    riskDetail: "Can shatter ceramic glass and damage burner pan.",
    eyeSpyrNote: "Ignition delay timed at 4.2 seconds via sensor log."
  }
];

export function DiagnosticGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              The EyeSpyR <span className="text-primary">Diagnostic Gallery</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We don't just "check" your fireplace. We document every deficiency using visual reporting 
              to ensure Strata compliance, absolute safety, and full transparency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deficiencies.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col sm:flex-row bg-white"
            >
              {/* Image Placeholder Area */}
              <div className="sm:w-48 bg-slate-100 flex-shrink-0 relative flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-slate-200 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent" />
                <div className="text-center relative z-10">
                  <AlertTriangle className="w-10 h-10 mx-auto text-slate-400 mb-2 opacity-50" />
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Case #{item.id}</div>
                </div>
                
                {/* Risk Badge */}
                <span className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider shadow-sm
                  ${item.risk === 'Critical' ? 'bg-red-600 text-white' : 
                    item.risk === 'High' ? 'bg-orange-500 text-white' : 
                    'bg-yellow-400 text-slate-900'
                  }`}>
                  {item.risk} Risk
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                  
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-4">
                    <span className="text-xs font-bold text-red-700 uppercase block mb-1">Impact:</span>
                    <p className="text-xs text-red-900 font-medium">{item.riskDetail}</p>
                  </div>
                </div>

                {/* Tech Edge */}
                <div className="flex items-start gap-2 text-[11px] font-mono text-blue-800 bg-blue-50 p-2.5 rounded border border-blue-200">
                  <span className="font-bold whitespace-nowrap text-blue-900">[EyeSpyR_AI]:</span>
                  <span>{item.eyeSpyrNote}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 bg-secondary rounded-3xl text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="relative z-10">
            <Info className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Strata Council Member?</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a detailed digital logbook for every unit in your building. Protect your liability and ensure resident safety with our structured reporting.
            </p>
            <Link href="/sample-report" className="bg-primary hover:bg-accent px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Sample Strata Report
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
