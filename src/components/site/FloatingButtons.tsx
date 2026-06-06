import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/brand";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="Call"
        className="w-14 h-14 rounded-full bg-gradient-royal text-white grid place-items-center shadow-xl hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
