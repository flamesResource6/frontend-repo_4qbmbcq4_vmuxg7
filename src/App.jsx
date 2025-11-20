import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -left-10 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-10 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />

      <footer className="relative border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <span>Lucent © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
