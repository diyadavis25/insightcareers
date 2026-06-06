import { ASSETS, CONTACT } from "@/lib/brand";
import { Award, Phone, MessageCircle } from "lucide-react";

export function Consultant() {
  const scroll = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-center bg-gradient-to-br from-[var(--royal-deep)] to-[var(--royal)] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
          <div className="lg:col-span-2 relative h-[420px] lg:h-[520px]">
            <img src={ASSETS.consultant} alt="Aju K Rapheal — Senior Career Consultant" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/60 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="lg:col-span-3 p-8 lg:p-12 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" /> Career Consultant
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-1">AJU K RAPHEAL</h2>
            <div className="text-[var(--gold)] font-medium mb-6">Senior Career Consultant</div>
            <p className="text-white/85 leading-relaxed mb-8">
              Aju personally guides every candidate through the overseas journey — from
              matching you with the right international employer to handling interviews,
              documentation and visa support until you board your flight.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={scroll} className="px-6 py-3 rounded-full bg-[var(--gold)] text-[var(--royal-deep)] font-semibold shadow-lg hover:-translate-y-0.5 transition">
                Request a Consultation
              </button>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
