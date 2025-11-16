import { Trophy, BarChart2, Bell, ShieldCheck, Sparkles, Settings } from "lucide-react";

const features = [
  { icon: Trophy, title: "Premium picks tiers", desc: "Tiered confidence with unit sizing and market notes for clarity." },
  { icon: BarChart2, title: "Performance tracking", desc: "Daily ROI, long-term record, and transparent win rates." },
  { icon: Bell, title: "Real-time alerts", desc: "Instant notifications for line moves and new selections." },
  { icon: ShieldCheck, title: "Risk controls", desc: "Bankroll guidelines and stop-loss recommendations." },
  { icon: Sparkles, title: "Model insights", desc: "Explainable indicators that reveal the ‘why’ behind picks." },
  { icon: Settings, title: "Personalization", desc: "Sport- and market-specific preferences that fit your style." },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0A0B0D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for serious, disciplined bettors</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A focused toolkit that emphasizes consistency, visibility, and control.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
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
