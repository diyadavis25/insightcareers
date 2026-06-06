import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 2000, suffix: "+", l: "Candidates Guided" },
  { n: 1500, suffix: "+", l: "Interviews Conducted" },
  { n: 500, suffix: "+", l: "Successful Placements" },
  { n: 15, suffix: "+", l: "Countries Served" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(Math.floor(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <div ref={ref} className="font-display text-5xl sm:text-6xl font-bold text-[var(--gold)]">{v}{suffix}</div>;
}

export function Counters() {
  return (
    <section className="py-20 bg-gradient-royal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.l} className="text-center">
            <Counter value={s.n} suffix={s.suffix} />
            <div className="text-sm uppercase tracking-[0.2em] text-white/80 mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
