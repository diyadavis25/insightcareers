import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Star, Loader2, Quote, CheckCircle2, ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  rating: z.number().int().min(1).max(5),
  review: z.string().trim().min(10, "Review must be at least 10 characters").max(1000),
});

type T = { id: string; name: string; rating: number; review: string; created_at: string };

const PAGE = 5;

export function Testimonials() {
  const [items, setItems] = useState<T[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 0, review: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [warned, setWarned] = useState(false);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id, name, rating, review, created_at")
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data }) => {
        if (data && data.length) setItems(data as T[]);
      });
  }, []);

  const displayed = showAll ? items : items.slice(0, PAGE);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!warned) { setWarned(true); return; }
    const r = schema.safeParse(form);
    if (!r.success) {
      const x: Record<string, string> = {};
      r.error.issues.forEach((i) => (x[i.path[0] as string] = i.message));
      setErrors(x);
      return;
    }
    setErrors({});
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .insert({ ...form })
      .select("id, name, rating, review, created_at")
      .single();
    setLoading(false);
    if (error) { toast.error("Could not submit. Try again."); return; }
    if (data) setItems((prev) => [data as T, ...prev]);
    setDone(true);
    setWarned(false);
    setForm({ name: "", rating: 0, review: "" });
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[var(--accent)] relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[var(--royal)]/5 blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-[0.3em] text-[var(--royal)] uppercase mb-3">What Our Clients Say</div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-[var(--royal-deep)] leading-tight">
            Real Stories. <span className="text-gradient-royal">Real Journeys.</span>
          </h2>
        </div>

        {/* REVIEWS LIST */}
        {items.length === 0 ? (
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[var(--royal-deep)] to-[var(--royal)] text-white text-center shadow-[var(--shadow-luxury)] mb-10">
            <Quote className="w-12 h-12 text-[var(--gold)] mx-auto mb-5" />
            <p className="text-xl font-display italic">Be the first to share your Insight experience.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-6">
              {displayed.map((t) => (
                <div key={t.id} className="p-6 rounded-2xl bg-white border border-border shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-display font-semibold text-[var(--royal-deep)] text-lg">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {new Date(t.created_at).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className={`w-4 h-4 ${k < t.rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-border"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{t.review}"</p>
                </div>
              ))}
            </div>

            {/* Load More */}
            {items.length > PAGE && (
              <div className="flex justify-center mb-10">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--royal)] text-[var(--royal)] text-sm font-semibold hover:bg-[var(--royal)] hover:text-white transition"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
                  {showAll ? "Show Less" : `Load More (${items.length} reviews)`}
                </button>
              </div>
            )}
          </>
        )}

        {/* FORM */}
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-7 sm:p-9 rounded-2xl bg-white border border-border shadow-[var(--shadow-card)]">
          <h3 className="font-display text-2xl font-bold text-[var(--royal-deep)] mb-1 text-center">Share Your Experience</h3>
          <p className="text-sm text-muted-foreground mb-6 text-center">Your review will appear on the site instantly.</p>

          {done && (
            <div className="flex items-center gap-3 p-4 mb-5 rounded-xl bg-green-50 border border-green-200 text-green-700">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">Review posted! You can see it above.</span>
            </div>
          )}

          {warned && (
            <div className="p-4 mb-5 rounded-xl bg-amber-50 border border-amber-300 text-amber-800">
              <p className="text-sm font-semibold mb-1">⚠️ Please double-check your review!</p>
              <p className="text-sm">Once posted, you cannot edit or remove it. Click Submit again to confirm.</p>
            </div>
          )}

          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-deep)] mb-1.5">Your Name *</label>
          <input value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setWarned(false); }} className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm" placeholder="Full name" />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}

          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-deep)] mb-1.5 mt-4">Rating *</label>
          <div className="flex gap-1">
            {[1,2,3,4,5].map((n) => (
              <button type="button" key={n} onClick={() => { setForm({ ...form, rating: n }); setWarned(false); }} className="p-1" aria-label={`${n} stars`}>
                <Star className={`w-7 h-7 transition ${n <= form.rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-border hover:text-[var(--gold)]/50"}`} />
              </button>
            ))}
          </div>
          {errors.rating && <p className="text-xs text-destructive mt-1">Please select a rating</p>}

          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-deep)] mb-1.5 mt-4">Your Review *</label>
          <textarea rows={4} value={form.review} onChange={(e) => { setForm({ ...form, review: e.target.value }); setWarned(false); }} className="w-full px-3 py-2.5 rounded-lg border border-border bg-white text-sm resize-none" placeholder="Share at least 10 characters about your experience…" />
          {errors.review && <p className="text-xs text-destructive mt-1">{errors.review}</p>}

          <button type="submit" disabled={loading} className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md disabled:opacity-50 hover:-translate-y-0.5 transition ${warned ? "bg-amber-500 text-white" : "bg-gradient-royal text-white"}`}>
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : warned ? "Yes, Post My Review" : "Submit Review"}
          </button>
        </form>
      </div>
    </section>
  );
}