import { ArrowLeft, Printer, Shield, CheckCircle, AlertTriangle, Phone } from "lucide-react";
import { Link } from "wouter";

const checklistItems = [
  { item: "Fuel System Integrity", note: "Gas line pressure tested at valve; no leaks detected." },
  { item: "Ventilation System", note: "Termination clear; flue draft verified; no blockages." },
  { item: "Combustion Air", note: "Adequate air supply for safe burner operation." },
  { item: "Glass Door Gasket", note: "Seal intact; no cracks or thermal stress noted." },
  { item: "Safety Shut-off", note: "Thermocouple/Pilot millivolt output within spec." },
  { item: "Ignition System", note: "Pilot light stable; burner ignites without delay." },
];

const maintenanceItems = [
  "Burner and orifice cleaned of dust/debris.",
  "Pilot assembly vacuumed and inspected.",
  "Glass cleaned with manufacturer-approved conditioner.",
  "Logs repositioned to factory specifications to prevent carbon buildup.",
];

export default function SampleReport() {
  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      <div className="sticky top-0 z-50 bg-secondary text-white py-3 px-6 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Site
        </Link>
        <div className="flex items-center gap-4">
          <a href="tel:+16047658424" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition">
            <Phone className="w-4 h-4" />
            604-765-8424
          </a>
          <button
            onClick={() => window.print()}
            className="bg-primary hover:bg-accent px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="max-w-[850px] mx-auto my-8 print:my-0 bg-white shadow-xl print:shadow-none">
        <div className="bg-secondary text-white p-8 print:p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Sample Document</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Annual Gas Fireplace<br />
                <span className="text-primary">Inspection Report</span>
              </h1>
            </div>
            <div className="text-right text-sm text-slate-400 hidden sm:block">
              <p className="font-bold text-white text-base">STRATA<span className="text-primary">FIREPLACE</span></p>
              <p className="mt-1">Class B Gas Fitter</p>
              <p>#CGA0100182243</p>
              <p className="mt-1">Gas Contractor License</p>
              <p>#LGA0041068</p>
            </div>
          </div>
        </div>

        <div className="p-8 print:p-6 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 print:bg-white">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Building Name</label>
              <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400 italic">Sample Building</div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Strata Plan</label>
              <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400 italic">BCS-XXXX</div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Service Date</label>
              <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400 italic">March 23, 2026</div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Technician</label>
              <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400 italic">Licensed Tech</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-white text-xs font-black px-3 py-1 rounded-md">1</span>
              <h2 className="text-lg font-bold text-slate-900">Unit Identification</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 print:bg-white">
              {[
                { label: "Suite Number", value: "___" },
                { label: "Manufacturer", value: "___" },
                { label: "Model", value: "___" },
                { label: "Serial Number", value: "___" },
                { label: "Input BTU", value: "___" },
                { label: "Vent Type", value: "___" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{field.label}</label>
                  <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400">{field.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-white text-xs font-black px-3 py-1 rounded-md">2</span>
              <h2 className="text-lg font-bold text-slate-900">Safety & Compliance Checklist</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left p-3 font-bold text-xs uppercase tracking-wider">Inspection Item</th>
                    <th className="text-center p-3 font-bold text-xs uppercase tracking-wider w-28">Status</th>
                    <th className="text-left p-3 font-bold text-xs uppercase tracking-wider">Technical Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistItems.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-800">{row.item}</td>
                      <td className="p-3 text-center">
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold">
                          <CheckCircle className="w-3 h-3" /> Pass
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-white text-xs font-black px-3 py-1 rounded-md">3</span>
              <h2 className="text-lg font-bold text-slate-900">Combustion Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-green-50 rounded-xl border border-green-200 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1">Ambient CO Level</div>
                <div className="text-3xl font-black text-green-800">0 <span className="text-sm font-bold">ppm</span></div>
                <div className="text-xs text-green-600 mt-1 font-semibold">Safe</div>
              </div>
              <div className="p-5 bg-green-50 rounded-xl border border-green-200 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1">Exhaust CO Level</div>
                <div className="text-3xl font-black text-green-800">__ <span className="text-sm font-bold">ppm</span></div>
                <div className="text-xs text-green-600 mt-1 font-semibold">Target: &lt; 100 ppm</div>
              </div>
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700 mb-1">Flame Pattern</div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-blue-800">Crisp Blue</span>
                </div>
                <div className="text-xs text-blue-600 mt-1">Normal Operation</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-white text-xs font-black px-3 py-1 rounded-md">4</span>
              <h2 className="text-lg font-bold text-slate-900">Maintenance Performed</h2>
            </div>
            <div className="space-y-2">
              {maintenanceItems.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 print:bg-white">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secondary text-white text-xs font-black px-3 py-1 rounded-md">5</span>
              <h2 className="text-lg font-bold text-slate-900">Technician's Findings & Recommendations</h2>
            </div>
            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-700" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700">Overall Status</span>
                  <div className="text-2xl font-black text-green-800">COMPLIANT</div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Notes</label>
                <p className="text-sm text-slate-500 italic mt-1">All systems operating within safe parameters. Annual service complete. Recommend continued annual maintenance schedule.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Signature</label>
                  <div className="mt-1 border-b-2 border-slate-300 pb-4"></div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Date</label>
                  <div className="mt-1 border-b-2 border-dashed border-slate-300 pb-1 text-sm text-slate-400 italic">March 23, 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-white text-center print:bg-slate-100 print:text-slate-800 print:border print:border-slate-300">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-primary print:text-slate-600" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 print:text-slate-600">[SAMPLE DOCUMENT]</p>
            <p className="text-sm text-slate-300 max-w-lg mx-auto print:text-slate-600">
              This is a sample report format. Actual reports include unit-specific data, photographic documentation via EyeSpyR visual reasoning, and full Technical Safety BC compliance records.
            </p>
            <div className="mt-4 text-xs text-slate-400 print:text-slate-500">
              Gas Fireplace Annual Services Vancouver &bull; Class B Gas Fitter #CGA0100182243 &bull; Gas Contractor License #LGA0041068
            </div>
          </div>
        </div>

        <div className="p-6 bg-primary text-white text-center print:hidden">
          <p className="font-bold text-lg mb-2">Ready to protect your building?</p>
          <p className="text-sm text-white/80 mb-4">Get this level of documentation for every unit in your Strata.</p>
          <a href="tel:+16047658424" className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition">
            Call 604-765-8424
          </a>
        </div>
      </div>

      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { margin: 0.5in; size: letter; }
        }
      `}</style>
    </div>
  );
}
