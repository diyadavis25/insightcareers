import { ASSETS, CONTACT } from "@/lib/brand";
import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.3em] text-[var(--royal)] uppercase mb-3">About Insight</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--royal-deep)] leading-tight">
              A consultancy built around your <span className="text-gradient-royal">global ambition</span>.
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {CONTACT.company} is a dedicated career service center supporting candidates from Kerala
              and across India in building international careers. From the first consultation to your
              overseas departure, our team handles every detail with professionalism and care.
            </p>
            <p className="font-display italic text-[var(--royal)] mt-4">"{CONTACT.tagline}"</p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { i: Target, t: "Mission", d: "Empower candidates with genuine global opportunities." },
                { i: Eye, t: "Vision", d: "Be Kerala's most trusted overseas career partner." },
                { i: Heart, t: "Values", d: "Integrity, transparency and lifelong support." },
              ].map((v) => (
                <div key={v.t} className="p-5 rounded-xl bg-[var(--accent)] border border-border">
                  <v.i className="w-6 h-6 text-[var(--royal)] mb-3" />
                  <div className="font-display font-semibold text-[var(--royal-deep)]">{v.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[520px]">
            <img src={ASSETS.seminar1} alt="Career seminar" className="col-span-4 row-span-3 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-card)]" />
            <img src={ASSETS.storefront} alt="Insight office front" className="col-span-2 row-span-3 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-card)]" />
            <img src={ASSETS.office1} alt="Office reception" className="col-span-2 row-span-3 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-card)]" />
            <img src={ASSETS.seminar2} alt="Consultation session" className="col-span-4 row-span-3 w-full h-full object-cover rounded-2xl shadow-[var(--shadow-card)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
