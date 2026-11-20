import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  TrendingUp,
  BadgeCheck,
  Star,
} from 'lucide-react'

const trustLogos = [
  'DLF', 'Godrej Properties', 'M3M', 'Signature Global',
  'Lodha', 'Smartworks', 'Anarock', 'Square Yards',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-forest-200/50 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-gold-300/30 blur-3xl" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="reveal">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              The real estate sales OS
            </span>

            <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[4.3rem]">
              Turn every inquiry into a{' '}
              <span className="relative whitespace-nowrap text-forest-700">
                closed deal
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 3 160 3 198 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .<br className="hidden sm:block" /> Not another lost chat.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Scattered WhatsApp threads, dead spreadsheets, follow-ups that never
              happen — gone. PropCapital.ai unifies lead qualification, client
              engagement, inventory and pipeline intelligence into one AI platform
              built for how real estate actually sells.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#demo" className="btn-gold text-base">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#platform" className="btn-ghost text-base">
                See the platform
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-ink/65">
                <BadgeCheck className="h-5 w-5 text-forest-600" />
                100% RERA-verified inventory
              </div>
              <div className="flex items-center gap-2 text-sm text-ink/65">
                <div className="flex -space-x-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                Trusted by sales teams closing crores
              </div>
            </div>
          </div>

          {/* Right: product mock */}
          <div className="reveal relative">
            <HeroDashboard />
          </div>
        </div>

        {/* trust marquee */}
        <div className="reveal mt-16 md:mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
            The platform behind India&rsquo;s fastest-moving sales teams
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...trustLogos, ...trustLogos].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-xl font-semibold text-ink/35"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* main card */}
      <div className="rounded-4xl border border-ink/10 bg-white/80 p-5 shadow-lift backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
              Live pipeline
            </p>
            <p className="font-display text-2xl font-semibold">Today’s qualified leads</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-forest-500" />
            Live
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            { name: 'Aarav M.', tag: '3 BHK · Golf Course Rd', score: 94, hot: true },
            { name: 'Priya & Co.', tag: 'Investment · Noida Expy', score: 88, hot: true },
            { name: 'Rohan S.', tag: 'Villa · Sohna Road', score: 76, hot: false },
          ].map((lead) => (
            <div
              key={lead.name}
              className="flex items-center justify-between rounded-2xl border border-ink/5 bg-cream/70 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold">{lead.name}</p>
                <p className="text-xs text-ink/50">{lead.tag}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    lead.hot
                      ? 'bg-forest-600 text-cream'
                      : 'bg-ink/5 text-ink/60'
                  }`}
                >
                  {lead.score}% fit
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-ink/5 pt-5">
          {[
            { k: 'Response', v: '32s' },
            { k: 'Site visits', v: '18' },
            { k: 'Conversion', v: '+41%' },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-xl font-semibold text-forest-700">{s.v}</p>
              <p className="text-xs text-ink/50">{s.k}</p>
            </div>
          ))}
        </div>
      </div>

      {/* floating card: AI call */}
      <div className="absolute -left-6 -top-6 hidden animate-float rounded-2xl border border-ink/10 bg-ink p-4 text-cream shadow-lift sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-600">
            <PhoneCall className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-cream/60">AI auto follow-up</p>
            <p className="text-sm font-semibold">Call scheduled · 6:30 PM</p>
          </div>
        </div>
      </div>

      {/* floating card: match */}
      <div
        className="absolute -bottom-6 -right-5 hidden animate-float rounded-2xl border border-ink/10 bg-white p-4 shadow-lift sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-400 text-ink">
            <TrendingUp className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-ink/50">Smart match found</p>
            <p className="text-sm font-semibold">+3 projects · 91% fit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
