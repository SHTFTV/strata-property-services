import { Link } from "wouter";
import { cities } from "@/data/cities";
import { trades } from "@/data/trades";

export function Footer() {
  return (
    <footer className="bg-secondary text-slate-400 py-16 px-6 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="font-display font-black text-2xl mb-4 tracking-tighter text-white">
            STRATA<span className="text-primary">FIREPLACE</span>
          </div>
          <p className="mb-4 text-slate-300 text-sm leading-relaxed">
            Professional Strata property services. Serving the entire Lower Mainland since 1989.
          </p>
          <div className="space-y-1 text-xs">
            <p><strong>Class B Gas Fitter:</strong> #CGA0100182243</p>
            <p><strong>Gas Contractor:</strong> #LGA0041068</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm font-display tracking-wide uppercase">Our Services</h4>
          <ul className="space-y-1.5 text-sm">
            {trades.map((trade) => (
              <li key={trade.slug}>
                <Link href={`/services/${trade.slug}`} className="hover:text-primary transition-colors">
                  {trade.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm font-display tracking-wide uppercase">Service Areas</h4>
          <ul className="space-y-1.5 text-sm">
            {cities.slice(0, 9).map((city) => (
              <li key={city.slug}>
                <Link href={`/areas/${city.slug}`} className="hover:text-primary transition-colors">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm font-display tracking-wide uppercase">More Areas</h4>
          <ul className="space-y-1.5 text-sm">
            {cities.slice(9).map((city) => (
              <li key={city.slug}>
                <Link href={`/areas/${city.slug}`} className="hover:text-primary transition-colors">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-bold mb-3 mt-6 text-sm font-display tracking-wide uppercase">Contact Us</h4>
          <address className="not-italic space-y-1 text-slate-300 text-sm">
            <p>311-1643 East 3rd Ave</p>
            <p>Vancouver, BC V5N 5R6</p>
          </address>
          <a href="mailto:beewarmh@gmail.com" className="text-primary hover:text-accent transition-colors text-sm mt-2 block">
            beewarmh@gmail.com
          </a>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm font-display tracking-wide uppercase">24/7 Service</h4>
          <a
            href="tel:+16047658424"
            className="text-2xl font-black font-display text-primary hover:text-accent transition-colors block mb-4"
          >
            604-765-8424
          </a>
          <p className="text-sm font-medium">Established 1989</p>
          <p className="text-sm">Serving the Lower Mainland</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Strata Property Services Vancouver. All rights reserved.</p>
        <p>Licensed &bull; Bonded &bull; WorkSafeBC Insured</p>
      </div>
    </footer>
  );
}
