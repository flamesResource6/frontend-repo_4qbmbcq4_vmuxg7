export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Tell us about your project</h2>
            <p className="mt-3 text-white/70">We’ll reply within 24 hours with next steps and availability.</p>

            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Name" />
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Email" />
              <input className="md:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Company" />
              <textarea rows="4" className="md:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Briefly describe your project" />
              <div className="md:col-span-2">
                <button type="button" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)] hover:bg-white/90 transition">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
