import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md text-white py-4 px-6 shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-display font-black text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          STRATA<span className="text-primary">FIREPLACE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#safety" className="hover:text-primary transition-colors">Safety</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <a 
          href="tel:+16047658424" 
          className="bg-primary hover:bg-accent px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now:</span> 604-765-8424
        </a>
      </div>
    </nav>
  );
}
