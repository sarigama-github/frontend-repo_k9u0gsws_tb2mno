import { Menu, Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/20">
            <Shield className="h-5 w-5 text-black" />
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">SafePicks</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-white/80 hover:text-white transition" href="#how">How it works</a>
          <a className="text-white/80 hover:text-white transition" href="#features">Features</a>
          <a className="text-white/80 hover:text-white transition" href="#pricing">Pricing</a>
          <a className="text-white/80 hover:text-white transition" href="#community">Community</a>
          <a className="text-white/80 hover:text-white transition" href="#faq">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-md text-white/90 hover:text-white">Sign in</button>
          <button className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium shadow-lg shadow-emerald-500/20">Get Started</button>
        </div>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
