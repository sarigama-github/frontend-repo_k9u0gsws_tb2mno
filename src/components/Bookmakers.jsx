export default function Bookmakers() {
  const bookmakers = ["DraftBook", "ProLines", "FastOdds", "SharpEdge", "BetTrust", "WinHub"];
  return (
    <section id="partners" className="bg-[#0A0B0D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Bookmaker partnerships</h2>
            <p className="mt-3 text-white/70">We collaborate with reputable operators to ensure fair markets and fast payouts.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {bookmakers.map((b) => (
              <div key={b} className="h-20 rounded-xl border border-white/10 bg-white/[0.03] grid place-items-center text-white/60 text-sm tracking-wide">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
