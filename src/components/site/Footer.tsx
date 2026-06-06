import { ASSETS, CONTACT } from "@/lib/brand";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="bg-[var(--royal-deep)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-white rounded-xl p-2">
              <img src={ASSETS.logo} alt="Insight Career Service" className="h-16 w-auto" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold tracking-wide">INSIGHT</div>
              <div className="text-xs text-white/70 tracking-widest uppercase">Career Service Center</div>
            </div>
          </div>
          <p className="font-display italic text-[var(--gold)] text-lg mb-4">"{CONTACT.tagline}"</p>
          <p className="text-sm text-white/70 max-w-md leading-relaxed">
            Your trusted partner for genuine overseas opportunities. From career guidance to
            international placement — we are with you every step.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] grid place-items-center transition" aria-label="social">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-lg font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-white/70">
            {[
              ["Home", "home"], ["About", "about"], ["Services", "services"],
              ["Process", "process"], ["Testimonials", "testimonials"], ["Contact", "contact"],
            ].map(([l, id]) => (
              <li key={id}><button onClick={() => scroll(id)} className="hover:text-[var(--gold)] transition">{l}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-lg font-semibold mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" /><span>{CONTACT.address}</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <span><a href={`tel:${CONTACT.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">{CONTACT.phoneDisplay}</a><br /><a href={`tel:${CONTACT.phoneAlt}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">{CONTACT.phoneAltDisplay}</a></span>
            </li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" /><a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
        <div>© {new Date().getFullYear()} {CONTACT.company}. All rights reserved.</div>
        <div>Crafted for global ambition.</div>
      </div>
    </footer>
  );
}
