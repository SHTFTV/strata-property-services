import { useEffect, useRef, useState } from "react";

export function BeeWarmContactCard() {
  const [open, setOpen] = useState(true);
  const reopen = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  function hide() { setOpen(false); requestAnimationFrame(() => reopen.current?.focus()); }
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") hide(); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return <aside aria-label="BeeWarm service contact" data-brand="beewarm" className="fixed right-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-[9999] max-w-[calc(100vw-2rem)] w-72 rounded-2xl border border-amber-200 bg-white shadow-2xl text-slate-900">
    {open ? <div id="beewarm-contact-panel" className="p-4 max-h-[calc(100dvh-2rem)] overflow-y-auto">
      <div className="flex justify-between gap-3"><div><p className="text-xs font-bold uppercase text-amber-800">Your service contact</p><strong className="text-xl">BeeWarm</strong><p className="text-sm">Robert Hamilton</p></div><button ref={close} type="button" aria-label="Hide BeeWarm contact card" aria-controls="beewarm-contact-panel" aria-expanded={true} className="text-2xl px-3 self-start rounded focus-visible:ring-2 focus-visible:ring-amber-700" onClick={hide}>×</button></div>
      <p className="text-sm my-3">Fireplaces, heating and gas fitting. Confirm scope and availability directly.</p>
      <a href="tel:+16047658424" className="block rounded-lg bg-amber-800 text-white text-center font-bold py-3 mb-2">Call 604-765-8424</a>
      <a href="sms:+16047658424" className="block underline py-2">Text Robert</a>
      <a href="mailto:bee@beewarm.ca" className="block underline py-2">bee@beewarm.ca</a>
      <a href="https://beewarm.ca/fireplace-booking/" className="block underline py-2">Plan fireplace service ↗</a>
    </div> : <button ref={reopen} type="button" className="w-full rounded-2xl p-4 font-bold text-left" aria-expanded={false} aria-controls="beewarm-contact-panel" onClick={() => { setOpen(true); requestAnimationFrame(() => close.current?.focus()); }}>Contact BeeWarm · Robert <span aria-hidden="true">↗</span></button>}
  </aside>;
}
