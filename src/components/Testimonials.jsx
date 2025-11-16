import { Star } from "lucide-react";

const testimonials = [
  { name: "Member A", role: "Subscriber", text: "Reliable guidance and clean structure. Results are tracked and transparent." },
  { name: "Member B", role: "VIP", text: "Clear picks, disciplined approach, and helpful community insights." },
  { name: "Member C", role: "Pro", text: "Data-driven and consistent. The process keeps emotions out of decisions." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What members say</h2>
          <p className="mt-3 text-white/70">Independent feedback from real bettors and long-time subscribers.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-white/80">“{t.text}”</p>
              <div className="mt-6 text-sm text-white/60">{t.name} · {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
