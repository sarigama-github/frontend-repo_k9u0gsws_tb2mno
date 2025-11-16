import Spline from '@splinetool/react-spline';
import { ArrowRight, Star, ShieldCheck, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black" id="hero">
      {/* Background 3D scene */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay to ensure text contrast over the scene */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/75 to-black/90" aria-hidden />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span>Trusted sports analytics</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Smart, safer picks for every game
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            Data-driven insights and clear guidance so you can wager with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 shadow-lg shadow-emerald-500/20">
              Get VIP Access
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 py-3">
              Explore Free Picks
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>Verified track record</span>
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-cyan-400" />
              <span>Transparent results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
