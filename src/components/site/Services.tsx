import { Briefcase, FileCheck, GraduationCap, MapPin } from "lucide-react";

const SERVICES = [
  { i: Briefcase, t: "Overseas Job Placement", d: "Direct placements with verified employers across the Gulf, Europe and beyond." },
  { i: GraduationCap, t: "Career Counselling & Interview Prep", d: "One-on-one guidance, mock interviews and communication coaching for international roles." },
  { i: FileCheck, t: "Documentation & Visa Support", d: "Complete file preparation, attestation and visa processing — handled end to end." },
];

const COUNTRIES = ["United Kingdom", "Kuwait", "UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Germany", "Poland", "Malaysia"];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--royal-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.3em] text-[var(--gold)] uppercase mb-3">Our Services</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Complete Career Solutions, End to End.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {SERVICES.map((s) => (
            <div key={s.t} className="p-8 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:border-[var(--gold)]/40 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold)] to-amber-300 text-[var(--royal-deep)] grid place-items-center mb-5">
                <s.i className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center gap-2 text-[var(--gold)] mb-3">
            <MapPin className="w-4 h-4" />
            <div className="text-xs font-semibold tracking-[0.25em] uppercase">Our Main Services Include</div>
          </div>
          <p className="text-white/85 mb-5">
            Placements across a wide network of international destinations — wherever your career calls you.
          </p>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90">{c}</span>
            ))}
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90">+ Others</span>
          </div>
        </div>
      </div>
    </section>
  );
}
