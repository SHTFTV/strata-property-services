import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ShieldCheck } from "lucide-react";

const safetyChecks = [
  "Gas line integrity and pressure",
  "Burner operation and flame pattern",
  "Pilot light ignition and stability",
  "Ventilation system function",
  "Carbon monoxide levels",
  "Thermocouple operation",
  "Ignition system components",
  "Glass door seals and fasteners",
  "Control valve function",
  "Clearance from combustibles"
];

const credentials = [
  { title: "Class B Gas Fitter", desc: "#CGA0100182243" },
  { title: "Gas Contractor License", desc: "#LGA0041068" },
  { title: "35+ Years Experience", desc: "Est. 1989" },
  { title: "WorkSafeBC Certified", desc: "Fully insured" },
  { title: "BC Building Code", desc: "Compliant" },
  { title: "Professional Standards", desc: "Assured" }
];

const faqs = [
  {
    q: "How often should I have my gas fireplace serviced?",
    a: "Gas fireplaces should be professionally inspected and serviced annually before the heating season begins. This ensures safe operation, optimal efficiency, and detects any potential hazards early."
  },
  {
    q: "Are you licensed to service gas fireplaces?",
    a: "Yes, we are Class B Gas Fitter certified (CGA0100182243) and hold a Gas Contractor License (LGA0041068). We meet all BC Building Code and WorkSafeBC requirements."
  },
  {
    q: "Can you detect carbon monoxide leaks?",
    a: "Absolutely. Carbon monoxide detection is a critical part of every annual inspection. We use sensitive, calibrated CO detection equipment to identify any leaks long before they become hazardous."
  },
  {
    q: "What's included in an annual fireplace inspection?",
    a: "Our comprehensive inspection includes safety testing, ventilation inspection, burner operation verification, pilot light tuning, full cleaning of internal components, and a detailed report of any necessary maintenance."
  },
  {
    q: "How long have you been in business?",
    a: "We have been proudly serving Vancouver and the Lower Mainland since 1989, bringing over 35 years of specialized experience to every service call."
  }
];

export function SafetyAndFAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="safety" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Safety Split Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <ShieldCheck className="w-5 h-5" /> Safety Standards
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Gas Fireplace Safety is Non-Negotiable
            </h2>
            <div className="space-y-4 text-lg text-slate-600 mb-8 leading-relaxed">
              <p>
                Gas fireplaces are safe when properly maintained and operated. However, like any gas appliance, they require professional inspection to ensure all safety systems are functioning correctly.
              </p>
              <p>
                <strong>Carbon monoxide (CO)</strong> is a serious hazard that can occur if ventilation is compromised or burners are not operating properly. This colorless, odorless gas requires detection by specialized equipment.
              </p>
              <p>
                Annual professional service from a qualified Class B Gas Fitter is the only way to protect your family and ensure your fireplace operates safely through the winter.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-t-primary">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">10-Point Safety Checklist</h3>
            <ul className="space-y-4">
              {safetyChecks.map((check, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-black mb-10">Verified Credentials & Licenses</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {credentials.map((cred, i) => (
              <div key={i} className="bg-white p-4 rounded-xl text-center border border-slate-200 shadow-sm">
                <strong className="block text-primary text-sm mb-1">{cred.title}</strong>
                <span className="text-xs text-slate-500 font-medium">{cred.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${openFaq === idx ? 'border-primary shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
