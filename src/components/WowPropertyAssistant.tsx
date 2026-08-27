import { useState } from "react";

type Topic = "services" | "pricing" | "emergency" | "quote";

const answers: Record<Topic, { title: string; body: string }> = {
  services: {
    title: "Property services",
    body: "We coordinate snow and ice management, landscaping, pressure washing, building maintenance, and property inspections for strata communities across the Lower Mainland.",
  },
  pricing: {
    title: "Straightforward proposals",
    body: "Pricing depends on property size, service frequency, access, and reporting needs. Share your address and priorities and our team will prepare a clear proposal.",
  },
  emergency: {
    title: "Need urgent help?",
    body: "Call us directly for time-sensitive snow, ice, water, or property-safety concerns. We will confirm availability and the fastest response option.",
  },
  quote: {
    title: "Let’s build your service plan",
    body: "Tell us the property address, number of buildings, and the services you need. We’ll follow up with the right next step.",
  },
};

export function WowPropertyAssistant() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<Topic | null>(null);
  const answer = topic ? answers[topic] : null;

  return (
    <div className="fixed bottom-24 right-4 z-[70] sm:bottom-6 sm:right-6">
      {open && (
        <section
          className="mb-3 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          aria-label="Wow property assistant"
        >
          <header className="flex items-center gap-3 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 px-4 py-3 text-white">
            <img
              src="https://plowwow.com/wow-mascot.png"
              alt=""
              aria-hidden="true"
              className="h-14 w-14 rounded-2xl bg-white/10 object-contain p-1"
            />
            <div className="min-w-0">
              <p className="font-bold">Ask Wow</p>
              <p className="text-xs text-blue-100">Your strata property service guide</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-auto rounded-full px-3 py-2 text-lg text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>

          <div className="space-y-4 p-4">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
              {answer ? (
                <>
                  <p className="mb-1 font-bold text-slate-950">{answer.title}</p>
                  <p>{answer.body}</p>
                </>
              ) : (
                <>
                  <p className="mb-1 font-bold text-slate-950">Hi, I’m Wow 👋</p>
                  <p>What can I help your strata or property with today?</p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {([
                ["services", "Our services"],
                ["pricing", "Pricing"],
                ["emergency", "Urgent help"],
                ["quote", "Request a quote"],
              ] as Array<[Topic, string]>).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTopic(key)}
                  className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-left text-sm font-semibold text-blue-900 transition hover:border-blue-400 hover:bg-blue-100"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
              <a
                href="tel:6047611518"
                className="rounded-xl bg-orange-500 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Call 604-761-1518
              </a>
              <a
                href="mailto:wow@plowwow.com?subject=Strata%20Property%20Services%20Quote"
                className="rounded-xl bg-blue-800 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-900"
              >
                Email for a quote
              </a>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto block h-20 w-20 rounded-full border-4 border-white bg-white p-1 shadow-2xl transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label={open ? "Close Wow property assistant" : "Open Wow property assistant"}
        aria-expanded={open}
      >
        <img
          src="https://plowwow.com/wow-mascot.png"
          alt="Open the Wow property assistant"
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
}
