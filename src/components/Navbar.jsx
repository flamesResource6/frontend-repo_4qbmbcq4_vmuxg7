import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
            <span className="text-white text-lg font-semibold tracking-tight">Lucent</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition">Start a project</a>
          </nav>
          <button className="md:hidden text-white/80" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
