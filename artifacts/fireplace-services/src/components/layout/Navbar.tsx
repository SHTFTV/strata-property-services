import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { trades } from "@/data/trades";
import { cities } from "@/data/cities";
import { useState, useRef, useEffect } from "react";

function DropdownMenu({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 hover:text-primary transition-colors">
        {label} <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-secondary border border-white/10 rounded-xl shadow-2xl py-2 min-w-[220px] max-h-[400px] overflow-y-auto z-50">
          {children}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md text-white py-4 px-6 shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-display font-black text-2xl tracking-tighter cursor-pointer">
          STRATA<span className="text-primary">PROPERTY</span> <span className="text-white/80 font-bold text-lg">SERVICES</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <DropdownMenu label="Services">
            {trades.map(t => (
              <Link key={t.slug} href={`/services/${t.slug}`} className="block px-4 py-2 hover:bg-white/10 hover:text-primary transition-colors text-sm">
                {t.name}
              </Link>
            ))}
          </DropdownMenu>

          <DropdownMenu label="Areas">
            {cities.map(c => (
              <Link key={c.slug} href={`/areas/${c.slug}`} className="block px-4 py-2 hover:bg-white/10 hover:text-primary transition-colors text-sm">
                {c.name}
              </Link>
            ))}
          </DropdownMenu>

          <a href="/#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="/#safety" className="hover:text-primary transition-colors">Safety</a>
          <a href="/#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+16047658424"
            className="bg-primary hover:bg-accent px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now:</span> 604-765-8424
          </a>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-4 border-t border-white/10 pt-4 pb-2 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2 px-2">Services</p>
            <div className="grid grid-cols-2 gap-1">
              {trades.map(t => (
                <Link key={t.slug} href={`/services/${t.slug}`} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10 hover:text-primary rounded-lg transition-colors">
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2 px-2">Service Areas</p>
            <div className="grid grid-cols-3 gap-1">
              {cities.map(c => (
                <Link key={c.slug} href={`/areas/${c.slug}`} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm hover:bg-white/10 hover:text-primary rounded-lg transition-colors">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4 px-2">
            <a href="/#gallery" onClick={() => setMobileOpen(false)} className="text-sm hover:text-primary transition-colors">Gallery</a>
            <a href="/#safety" onClick={() => setMobileOpen(false)} className="text-sm hover:text-primary transition-colors">Safety</a>
            <a href="/#faq" onClick={() => setMobileOpen(false)} className="text-sm hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
}
