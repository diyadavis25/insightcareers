import { ASSETS, CONTACT } from "@/lib/brand";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ASSETS.seminar3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.36_0.18_265/0.4),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs font-medium tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            Trusted Global Career Consultancy
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Your Trusted Partner for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--gold)] via-white to-[var(--gold)] bg-clip-text text-transparent">Global Career</span>
            </span>{" "}
            Opportunities
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mb-8 leading-relaxed">
            Helping candidates build successful international careers through professional guidance,
            interview preparation, and overseas placement support.
          </p>
          <p className="font-display italic text-[var(--gold)] mb-8 text-lg">
            "{CONTACT.tagline}"
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => scroll("contact")} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[var(--royal-deep)] font-semibold shadow-xl hover:-translate-y-0.5 transition">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => scroll("contact")} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--gold)] text-[var(--royal-deep)] font-semibold shadow-xl hover:-translate-y-0.5 transition">
              Apply Now
            </button>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
              <Phone className="w-4 h-4" /> Book Consultation
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[var(--gold)]/30 to-transparent blur-2xl rounded-full" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <img src={ASSETS.logo} alt="Insight" className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl" />
              <div className="text-center text-white">
                <div className="font-display text-3xl font-bold tracking-wide">INSIGHT</div>
                <div className="text-sm text-white/80 mt-1 tracking-widest uppercase">Career Service Center</div>
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="text-xs italic text-white/80 tracking-wide">"Discovery is the Journey, Insight is the Destination"</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
