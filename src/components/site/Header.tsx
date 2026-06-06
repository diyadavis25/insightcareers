import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { ASSETS, CONTACT } from "@/lib/brand";

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Opportunities", id: "opportunities" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <img src={ASSETS.logo} alt="Insight Career Service logo" className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-base sm:text-lg text-[var(--royal-deep)] tracking-wide">INSIGHT</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5">Career Service Center</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-[var(--royal)] transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-royal text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent rounded-md"
              >
                {n.label}
              </button>
            ))}
            <div className="flex gap-2 mt-2">
              <a href={`tel:${CONTACT.phone}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 rounded-md bg-gradient-royal text-white text-sm font-semibold">Call</a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 rounded-md bg-[#25D366] text-white text-sm font-semibold">WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
