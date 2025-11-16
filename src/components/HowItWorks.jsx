import { Steps } from "lucide-react";
import { CheckCircle2, BarChart3, Sparkles, Target } from "lucide-react";

const steps = [
  {
    icon: BarChart3,
    title: "Collect and model data",
    desc: "We aggregate odds, trends, and player performance to build predictive signals.",
  },
  {
    icon: Target,
    title: "Identify edges",
    desc: "Models surface value spots and risk levels across markets and sportsbooks.",
  },
  {
    icon: CheckCircle2,
    title: "Deliver clear picks",
    desc: "Receive selections with confidence tiers and suggested bankroll units.",
  },
  {
    icon: Sparkles,
    title: "Refine with feedback",
    desc: "Community results and live data loops improve accuracy over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Steps className="h-3.5 w-3.5 text-emerald-400" />
              <span>How SafePicks works</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">From raw stats to actionable picks</h2>
            <p className="mt-3 text-white/70">A streamlined pipeline that turns complex sports data into simple recommendations.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
                <Icon className="h-6 w-6 text-cyan-400" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
