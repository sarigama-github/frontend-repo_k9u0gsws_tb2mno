import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What sports are covered?", a: "Coverage adapts to seasonality with a focus on high-liquidity markets." },
  { q: "How are picks delivered?", a: "You receive selections via dashboard and optional alerts with timestamps." },
  { q: "What is the expected ROI?", a: "Performance varies; we emphasize edge, discipline, and long-term results." },
  { q: "Can I cancel anytime?", a: "Yes, plans are flexible with simple cancellation from your account." },
  { q: "Is this financial advice?", a: "No. This is educational sports analysis; wager responsibly." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-white/70">Quick answers about access, delivery, and expectations.</p>
        </div>
        <div className="mt-10 mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.04]"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-white/70 text-sm">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
