import { Crown, Zap, Calendar, Star } from "lucide-react";

const plans = [
  {
    name: "Daily",
    price: "$19",
    tagline: "One-day access for instant value",
    features: ["Full card picks", "Confidence tiers", "Bankroll units"],
    icon: Zap,
    cta: "Start Daily",
    popular: false,
  },
  {
    name: "Weekly",
    price: "$79",
    tagline: "Balanced plan for regular bettors",
    features: ["All sports included", "Line move alerts", "Performance dashboard"],
    icon: Calendar,
    cta: "Start Weekly",
    popular: true,
  },
  {
    name: "Monthly",
    price: "$249",
    tagline: "Best for consistency seekers",
    features: ["VIP chat access", "Model insights", "Priority support"],
    icon: Crown,
    cta: "Start Monthly",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">VIP plans designed for clarity</h2>
          <p className="mt-3 text-white/70">Pick the access level that fits your schedule and volume.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white/[0.03] border-white/10 p-6 transition hover:bg-white/[0.05] ${
                plan.popular ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3">
                <plan.icon className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>
              <div className="mt-4">
                <div className="text-4xl font-extrabold">{plan.price}</div>
                <div className="text-sm text-white/70">{plan.tagline}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md px-4 py-2 font-semibold shadow ${
                plan.popular
                  ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/20"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
