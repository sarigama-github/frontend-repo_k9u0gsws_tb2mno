import { Users, MessageCircle, ShieldCheck, Trophy } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="bg-[#0A0B0D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join a focused community</h2>
            <p className="mt-3 text-white/70 max-w-xl">Collaborate in a disciplined space built for transparency, consistency, and shared learning.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Users className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Active discussion groups</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <MessageCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">Live pick threads</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Verified results</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Trophy className="h-5 w-5 text-amber-400" />
                <span className="text-sm">Leaderboards</span>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-emerald-500/10 grid place-items-center text-white/70">
              Chat preview placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
