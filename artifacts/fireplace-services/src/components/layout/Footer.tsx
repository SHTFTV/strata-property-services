import { Link } from "wouter";
import { cities } from "@/data/cities";

export function Footer() {
  return (
    <footer className="bg-secondary text-slate-400 py-16 px-6 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="font-display font-black text-3xl mb-4 tracking-tighter text-white">
            STRATA<span className="text-primary">FIREPLACE</span>
          </div>
          <p className="mb-6 max-w-md text-slate-300">
            Professional gas fireplace inspection, maintenance, and safety services. 
            Serving the entire Lower Mainland since 1989.
          </p>
          <div className="space-y-1 text-sm">
            <p><strong>Class B Gas Fitter:</strong> #CGA0100182243</p>
            <p><strong>Gas Contractor License:</strong> #LGA0041068</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-lg font-display tracking-wide">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/areas/${city.slug}`} className="hover:text-primary transition-colors">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 text-lg font-display tracking-wide">Contact Us</h4>
          <address className="not-italic space-y-2 mb-4 text-slate-300">
            <p>311-1643 East 3rd Avenue</p>
            <p>Vancouver, BC V5N 5R6</p>
          </address>
          <a href="mailto:beewarmh@gmail.com" className="text-primary hover:text-accent transition-colors">
            beewarmh@gmail.com
          </a>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-lg font-display tracking-wide">24/7 Service</h4>
          <a 
            href="tel:+16047658424" 
            className="text-3xl font-black font-display text-primary hover:text-accent transition-colors block mb-4"
          >
            604-765-8424
          </a>
          <p className="text-sm font-medium">Established 1989</p>
          <p className="text-sm">Serving the Lower Mainland</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Gas Fireplace Services Vancouver. All rights reserved.</p>
        <p>Licensed • Bonded • WorkSafeBC Insured</p>
      </div>
    </footer>
  );
}
