import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { contacts } from "@/data/contacts";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  address: z.string().min(5, "Property address is required"),
  fireplaceType: z.string().min(1, "Please select a type"),
  serviceType: z.string().min(1, "Please select a service"),
  details: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call for static frontend
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    
    toast({
      title: "Request Received! 🔥",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
    reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-secondary text-white overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/contact-bg-new.png`}
          alt="Technical Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-secondary/95 to-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Schedule Your Service</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Don't wait until the cold hits. Book your annual safety inspection and cleaning today to ensure your fireplace is ready for winter.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`tel:${contacts.colin.phoneTel}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Call Colin Hamilton</div>
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">{contacts.colin.phone}</div>
                </div>
              </a>

              <a href={`tel:${contacts.robert.phoneTel}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Gas & HVAC — Robert Hamilton</div>
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">{contacts.robert.phone}</div>
                </div>
              </a>

              <a href={`mailto:${contacts.robert.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Email Us</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors">{contacts.robert.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium">Main Office</div>
                  <div className="text-lg font-bold">Vancouver, BC</div>
                  <div className="text-sm text-slate-400">Serving the entire Lower Mainland</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Request a Quote / Booking</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input 
                    {...register("name")} 
                    placeholder="Your Name *" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <input 
                    {...register("email")} 
                    placeholder="Email Address *" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input 
                    {...register("phone")} 
                    placeholder="Phone Number *" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>
                <div>
                  <input 
                    {...register("address")} 
                    placeholder="Property Address *" 
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.address ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <select 
                    {...register("fireplaceType")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.fireplaceType ? 'border-red-500' : 'border-slate-200'} text-slate-700 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none`}
                  >
                    <option value="">Fireplace Type *</option>
                    <option value="built-in-gas">Built-in Gas Fireplace</option>
                    <option value="gas-insert">Gas Insert</option>
                    <option value="gas-stove">Gas Fireplace Stove</option>
                    <option value="direct-vent">Direct Vent Fireplace</option>
                    <option value="unsure">Not Sure / Other</option>
                  </select>
                  {errors.fireplaceType && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fireplaceType.message}</p>}
                </div>
                <div>
                  <select 
                    {...register("serviceType")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.serviceType ? 'border-red-500' : 'border-slate-200'} text-slate-700 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none`}
                  >
                    <option value="">Service Needed *</option>
                    <option value="annual-inspection">Annual Inspection & Service</option>
                    <option value="first-service">First Time Service</option>
                    <option value="repair">Repair Service</option>
                    <option value="cleaning">Professional Cleaning</option>
                    <option value="safety-check">Safety Check Only</option>
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1 font-medium">{errors.serviceType.message}</p>}
                </div>
              </div>

              <div>
                <textarea 
                  {...register("details")} 
                  placeholder="Additional details about your fireplace or specific concerns... (Optional)" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-y"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-accent text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Submit Request"} <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
