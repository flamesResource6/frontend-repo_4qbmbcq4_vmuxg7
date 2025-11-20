import { Code2, Layout, PencilRuler, Rocket } from 'lucide-react'

const services = [
  {
    icon: PencilRuler,
    title: 'Brand & Visual Identity',
    desc: 'Logos, palettes, and systems that scale across every touchpoint.'
  },
  {
    icon: Layout,
    title: 'Web Design',
    desc: 'Clean, modern interfaces designed for clarity and conversion.'
  },
  {
    icon: Code2,
    title: 'Webflow & Next.js Build',
    desc: 'Production‑ready builds with fast, SEO‑friendly architecture.'
  },
  {
    icon: Rocket,
    title: 'Launch & Optimization',
    desc: 'Analytics, A/B tests, and continual iteration for growth.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">A focused set of services to take you from idea to launch.</p>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.07]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/80 to-indigo-500/80 text-slate-900 shadow-[0_10px_25px_-10px_rgba(34,211,238,0.5)]">
                <Icon className="text-slate-900" size={20} />
              </div>
              <h3 className="mt-5 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
