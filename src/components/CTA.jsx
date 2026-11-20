import { ArrowRight, CalendarCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="demo" className="pb-24 pt-4 md:pb-32">
      <div className="container-px">
        <div className="reveal relative overflow-hidden rounded-4xl border border-ink/10 bg-cream px-7 py-14 text-center shadow-soft md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-forest-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold-300/40 blur-3xl" />
            <div className="absolute inset-0 grain opacity-50" />
          </div>

          <span className="eyebrow">
            <CalendarCheck className="h-3.5 w-3.5" />
            Live in days, not quarters
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl">
            The next decade of real estate is yours to win.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/65">
            See your own pipeline running on PropCapital.ai in a 30-minute
            walkthrough. Bring your messiest workflow — we&rsquo;ll untangle it live.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#demo" className="btn-primary text-base">
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#platform" className="btn-ghost text-base">
              Talk to sales
            </a>
          </div>

          <p className="mt-6 text-sm text-ink/45">
            No credit card · Works with your existing channels
          </p>
        </div>
      </div>
    </section>
  )
}
