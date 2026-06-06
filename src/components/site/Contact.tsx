import { ContactForm } from "./ContactForm";
import { CONTACT } from "@/lib/brand";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[var(--accent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-[0.3em] text-[var(--royal)] uppercase mb-3">Contact</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--royal-deep)]">Start Your Global Career Today.</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={MapPin} title="Visit Us">
              {CONTACT.address}
            </InfoCard>
            <InfoCard icon={Phone} title="Call Us">
              <a href={`tel:${CONTACT.phone}`} className="block hover:text-[var(--royal)]">{CONTACT.phoneDisplay}</a>
              <a href={`tel:${CONTACT.phoneAlt}`} className="block hover:text-[var(--royal)]">{CONTACT.phoneAltDisplay}</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email Us">
              <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--royal)]">{CONTACT.email}</a>
            </InfoCard>
            <InfoCard icon={Clock} title="Office Hours">
              Mon — Sat · 9:30 AM to 6:30 PM
            </InfoCard>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-[var(--shadow-card)] transition">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-royal text-white grid place-items-center flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="font-display font-semibold text-[var(--royal-deep)] mb-1">{title}</div>
          <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
