import { Phone, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import { contacts, getTradeContact } from "../data/contacts";

export function FloatingPhone() {
  const [location] = useLocation();

  let phone = contacts.colin.phone;
  let phoneTel = contacts.colin.phoneTel;

  const tradeMatch = location.match(/^\/services\/([^/]+)/);
  if (tradeMatch) {
    const contact = getTradeContact(tradeMatch[1]);
    phone = contact.phone;
    phoneTel = contact.phoneTel;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <a
        href={`sms:${phoneTel}`}
        className="flex items-center gap-2 bg-white text-secondary font-bold px-4 py-2.5 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-all text-sm"
        aria-label={`Text ${phone}`}
      >
        <MessageCircle className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">Text Us</span>
      </a>
      <a
        href={`tel:${phoneTel}`}
        className="flex items-center gap-2.5 bg-primary hover:bg-accent text-white font-bold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all text-base animate-pulse hover:animate-none"
        aria-label={`Call ${phone}`}
      >
        <Phone className="w-5 h-5" />
        <span>{phone}</span>
      </a>
    </div>
  );
}
