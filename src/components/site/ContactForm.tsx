import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/brand";

const schema = z.object({
  full_name: z.string().trim().min(3, "Name must be at least 3 characters").max(100),
  phone: z.string().trim().regex(/^\d{10,15}$/, "Enter a valid phone number (digits only, min 10)"),
  email: z.string().trim().email("Enter a valid email").max(255),
  job_category: z.string().trim().min(1, "Select a job category").max(80),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const CATEGORIES = ["IT & Software", "Healthcare & Nursing", "Engineering & Construction", "Hospitality", "Driving & Logistics", "Sales & Retail", "Skilled Trades", "Other"];

export function ContactForm() {
  const [form, setForm] = useState({ full_name: "", phone: "", email: "", job_category: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const r = schema.safeParse(form);
    if (!r.success) {
      const e: Record<string, string> = {};
      r.error.issues.forEach((i) => (e[i.path[0] as string] = i.message));
      setErrors(e);
      return false;
    }
    setErrors({});
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("inquiries").insert({ ...form, country: "", message: form.message || null });
      if (error) throw error;

      const lines = [
        `*New Inquiry — ${CONTACT.company}*`,
        `Name: ${form.full_name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Category: ${form.job_category}`,
        form.message ? `Message: ${form.message}` : null,
      ].filter(Boolean).join("\n");

      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
      setDone(true);
      setForm({ full_name: "", phone: "", email: "", job_category: "", message: "" });
      toast.success("Inquiry submitted!");
    } catch (err) {
      console.error(err);
      toast.error("Could not submit. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const isValid = schema.safeParse(form).success;

  if (done) {
    return (
      <div className="p-10 rounded-2xl bg-white border border-border text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="w-14 h-14 text-[var(--royal)] mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-[var(--royal-deep)]">Thank you!</h3>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">Your inquiry has been received. A consultant will reach out within 24 hours.</p>
        <button onClick={() => setDone(false)} className="mt-6 px-5 py-2.5 rounded-full border border-[var(--royal)] text-[var(--royal)] text-sm font-semibold hover:bg-[var(--royal)] hover:text-white transition">
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-7 sm:p-9 rounded-2xl bg-white border border-border shadow-[var(--shadow-card)]">
      <h3 className="font-display text-2xl font-bold text-[var(--royal-deep)] mb-1">Submit Your Inquiry</h3>
      <p className="text-sm text-muted-foreground mb-6">Fill in the details and our consultant will contact you.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name *" error={errors.full_name}>
          <input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="input" placeholder="Your full name" />
        </Field>
        <Field label="Phone Number *" error={errors.phone}>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })} className="input" placeholder="10-digit number" />
        </Field>
        <Field label="Email Address *" error={errors.email}>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="you@example.com" />
        </Field>
        <Field label="Preferred Job Category *" error={errors.job_category}>
          <select value={form.job_category} onChange={(e) => setForm({ ...form, job_category: e.target.value })} className="input">
            <option value="">Select category</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Message" error={errors.message} className="sm:col-span-2">
          <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" placeholder="Tell us about your goals (optional)" />
        </Field>
      </div>

      <button type="submit" disabled={!isValid || loading} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-royal text-white font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 transition">
        {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : <><Send className="w-4 h-4" /> Submit Inquiry</>}
      </button>

      <style>{`.input { width: 100%; padding: 0.7rem 0.9rem; border-radius: 0.6rem; border: 1px solid var(--border); background: white; font-size: 0.9rem; transition: border-color .2s, box-shadow .2s; }
.input:focus { outline: none; border-color: var(--royal); box-shadow: 0 0 0 3px oklch(0.36 0.18 265 / 0.12); }`}</style>
    </form>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-deep)] mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}