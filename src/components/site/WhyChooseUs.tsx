import { Shield, Globe, Users } from "lucide-react";

const ITEMS = [
  { icon: Shield, title: "Trusted Consultancy", desc: "Years of experience delivering ethical, reliable career consultancy with a proven track record." },
  { icon: Globe, title: "Genuine Opportunities", desc: "Verified overseas roles with reputable international employers across multiple countries." },
  { icon: Users, title: "End-to-End Support", desc: "From profile review to visa documentation — we guide you every step until you board your flight." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--accent)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.3em] text-[var(--royal)] uppercase mb-3">Why Choose Insight</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--royal-deep)]">Built on Trust. Driven by Results.</h2>
          <p className="text-muted-foreground mt-4">A new generation of career consultancy combining personal attention with global reach.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => (
            <div key={it.title} className={`group p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)] ${i === 0 ? "bg-gradient-royal text-white border-transparent" : "bg-white border-border hover:border-[var(--royal)]/30"}`}>
              <div className={`w-12 h-12 rounded-xl grid place-items-center mb-5 ${i === 0 ? "bg-white/15 text-[var(--gold)]" : "bg-[var(--royal)]/10 text-[var(--royal)]"}`}>
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className={`font-display text-xl font-semibold mb-2 ${i === 0 ? "text-white" : "text-[var(--royal-deep)]"}`}>{it.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
