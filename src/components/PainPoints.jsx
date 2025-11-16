import { AlertTriangle, Clock, DollarSign, HelpCircle } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "Uncertain outcomes", desc: "Hard-to-read stats and noisy opinions make it difficult to choose confidently." },
  { icon: Clock, title: "Time-consuming research", desc: "Hours of scraping trends, injuries, and odds across multiple sources." },
  { icon: DollarSign, title: "Poor bankroll habits", desc: "Inconsistent staking and impulsive picks increase risk and losses." },
  { icon: HelpCircle, title: "Lack of guidance", desc: "No clear framework or mentorship for sustainable betting discipline." },
];

export default function PainPoints() {
  return (
    <section id="pain" className="bg-[#0A0B0D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Common betting pitfalls we solve</h2>
        <p className="mt-3 text-white/70 max-w-2xl">From research overwhelm to bankroll leaks—here are the key issues our system addresses.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
              <Icon className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
