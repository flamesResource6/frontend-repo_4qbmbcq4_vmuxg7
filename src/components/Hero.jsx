import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle dark gradient overlay for readability; pointer-events-none to keep 3D interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Futuristic web experiences</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Lucent — a web design studio crafting luminous brands.
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70">
            We design and build clean, conversion‑ready websites with a focus on clarity, speed, and a premium feel.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)] hover:bg-white/90 transition">Start a project</a>
            <a href="#work" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
