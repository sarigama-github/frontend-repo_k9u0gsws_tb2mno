import { Twitter, Instagram, Youtube, Mail, Shield, FileText, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <span className="text-lg font-semibold tracking-tight">SafePicks</span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">Professional-grade sports analytics and disciplined betting guidance.</p>
          <div className="mt-4 flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#how" className="hover:text-white">How it works</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#community" className="hover:text-white">Community</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@safepicks.io</li>
            <li>Business inquiries</li>
            <li>Press & partnerships</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><FileText className="h-4 w-4" /> Terms of Service</li>
            <li className="flex items-center gap-2"><Scale className="h-4 w-4" /> Privacy Policy</li>
            <li>Responsible betting</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} SafePicks. All rights reserved.</div>
    </footer>
  );
}
