export default function Work() {
  const items = [
    { tag: 'SaaS', title: 'Nebula Analytics', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'E‑commerce', title: 'Aurelia Studio', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Fintech', title: 'Cinder Capital', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A glimpse into recent launches. Strategy, design, and build—end to end.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">Work with us</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <span className="text-xs text-white/60">{item.tag}</span>
                <h3 className="mt-1 text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
