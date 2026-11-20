import { useState, useEffect, useRef } from 'react'
import {
  MessagesSquare,
  FileSpreadsheet,
  Clock4,
  Unplug,
  ScanSearch,
  Workflow,
  Handshake,
  BarChart3,
  Building2,
  Briefcase,
  Users,
  Network,
  Wallet,
  Quote,
  CheckCircle2,
  Bell,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Check,
  X,
} from 'lucide-react'

const problems = [
  { icon: MessagesSquare, label: 'Fragmented WhatsApp threads' },
  { icon: FileSpreadsheet, label: 'Scattered spreadsheets' },
  { icon: Clock4, label: 'Manual, forgotten follow-ups' },
  { icon: Unplug, label: 'Disconnected sales workflows' },
]

const steps = [
  {
    icon: ScanSearch,
    step: '01',
    title: 'Capture & qualify',
    body: 'Inquiries from every channel land in one place and get scored by intent, budget and fit — instantly.',
  },
  {
    icon: Workflow,
    step: '02',
    title: 'Engage automatically',
    body: 'AI runs the calls, messages and follow-ups at the right moment, keeping every buyer warm and moving.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Match & convert',
    body: 'Each buyer meets their best-fit projects from unified, RERA-verified inventory — and books the visit.',
  },
  {
    icon: BarChart3,
    step: '04',
    title: 'Measure & scale',
    body: 'Live pipeline and market signals show what’s working — and where your next crore is waiting.',
  },
]

const audiences = [
  { icon: Building2, title: 'Developers', body: 'Sell inventory faster with intelligence on demand and channel performance.' },
  { icon: Briefcase, title: 'Brokerages', body: 'Give every agent qualified leads and a workflow built for closing.' },
  { icon: Users, title: 'Sales teams', body: 'Spend time on buyers who convert, not chasing cold inquiries.' },
  { icon: Network, title: 'Channel partners', body: 'Access live inventory and co-sell with developers seamlessly.' },
  { icon: Wallet, title: 'Investors', body: 'Real-time market and pipeline signals to back the right assets.' },
]

const stats = [
  { v: '41%', k: 'Higher conversion on qualified leads' },
  { v: '32s', k: 'Average first-response time' },
  { v: '12k+', k: 'RERA-verified listings unified' },
  { v: '6×', k: 'Faster follow-up cycles' },
]

export default function Experience() {
  return (
    <>
      
      <section className="py-20 md:py-28">
        <div className="container-px">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">The old way is breaking</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
              Your deals are worth crores. Your tools aren&rsquo;t.
            </h2>
            <p className="mt-5 text-lg text-ink/65">
              Leads buried in WhatsApp. Inventory living in someone&rsquo;s
              spreadsheet. Follow-ups that depend on memory. Every gap is a deal
              quietly slipping away.
            </p>
          </div>

          <div className="reveal mt-14 grid gap-5 lg:grid-cols-2">
            
            <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-white/60 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink/5 text-ink/50">
                  <Clock4 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                    Today
                  </p>
                  <p className="font-display text-xl font-semibold text-ink/70">
                    Running deals by hand
                  </p>
                </div>
              </div>
              <ul className="mt-7 space-y-3.5">
                {problems.map((p) => {
                  const Icon = p.icon
                  return (
                    <li key={p.label} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/35">
                        <X className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="flex items-center gap-2 text-ink/60">
                        <Icon className="h-4 w-4 shrink-0 text-ink/30" />
                        {p.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

           
            <div className="relative overflow-hidden rounded-4xl bg-ink p-8 text-cream shadow-lift md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-forest-600/30 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-600 text-cream">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                    With PropCapital.ai
                  </p>
                  <p className="font-display text-xl font-semibold">
                    One intelligent system
                  </p>
                </div>
              </div>
              <ul className="relative mt-7 space-y-3.5">
                {[
                  'Every lead captured, scored and followed up — automatically',
                  'One connected source of truth, not a dozen spreadsheets',
                  'AI that acts on data, instead of just storing it',
                  'Decisions backed by live market and pipeline signal',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-600 text-cream">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-cream/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <WorkflowShowcase />

    
      <section id="audience" className="py-20 md:py-28">
        <div className="container-px">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who it’s for</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
              Built for every player in the deal.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={a.title}
                  className="reveal group rounded-3xl border border-ink/8 bg-white/70 p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {a.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      
      <section id="results" className="py-20 md:py-28">
        <div className="container-px">
          <div className="overflow-hidden rounded-4xl border border-ink/8 bg-gradient-to-br from-forest-800 to-ink text-cream shadow-lift">
            <div className="grid lg:grid-cols-2">
              <div className="reveal p-9 md:p-14">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Proof, not promises
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.01em] sm:text-4xl">
                  The numbers teams see after the switch.
                </h2>
                <div className="mt-10 grid grid-cols-2 gap-8">
                  {stats.map((s) => (
                    <div key={s.k}>
                      <p className="font-display text-4xl font-semibold text-gold-300 sm:text-5xl">
                        {s.v}
                      </p>
                      <p className="mt-2 text-sm text-cream/70">{s.k}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal flex flex-col justify-center border-t border-cream/10 bg-white/5 p-9 md:border-l md:border-t-0 md:p-14">
                <Quote className="h-10 w-10 text-gold-400" />
                <p className="mt-5 font-display text-2xl font-medium leading-snug">
                  “We stopped losing leads in WhatsApp. PropCapital.ai qualifies
                  and follows up before our team even opens a laptop — our site
                  visits nearly doubled.”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 font-display text-lg font-semibold text-ink">
                    RK
                  </span>
                  <div>
                    <p className="font-semibold">Rahul Khanna</p>
                    <p className="text-sm text-cream/60">
                      Sales Head, NCR Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const AUTO_MS = 6000

function WorkflowShowcase() {
  const [active, setActive] = useState(0)
  const [taken, setTaken] = useState(false) // user took control → stop auto-play
  const sectionRef = useRef(null)

  useEffect(() => {
    if (taken) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setActive((i) => (i + 1) % steps.length), AUTO_MS)
    return () => clearInterval(id)
  }, [taken])

  const select = (i) => {
    setActive(i)
    setTaken(true)
  }

  return (
    <section id="workflow" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
            From raw inquiry to signed deal &mdash; in four moves.
          </h2>
          <p className="mt-5 text-lg text-ink/65">
            Follow one lead through the platform. Every stage runs on its own,
            so your team only steps in when it actually matters.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
         
          <ol className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              return (
                <li key={s.step}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-current={isActive}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-forest-200 bg-white shadow-soft'
                        : 'border-ink/8 bg-white/50 hover:border-ink/15 hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                          isActive
                            ? 'bg-forest-700 text-cream'
                            : 'bg-forest-50 text-forest-700 group-hover:bg-forest-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-xs font-semibold text-ink/35">
                            STEP {s.step}
                          </span>
                        </div>
                        <h3 className="mt-0.5 font-display text-lg font-semibold">
                          {s.title}
                        </h3>
                        <div
                          className={`grid transition-all duration-300 ${
                            isActive
                              ? 'mt-1.5 grid-rows-[1fr] opacity-100'
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <p className="overflow-hidden text-sm leading-relaxed text-ink/65">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    {isActive && !taken && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-forest-100">
                        <span
                          key={active}
                          className="block h-full animate-progress bg-forest-600"
                        />
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ol>

          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift">
              
              <div className="flex items-center gap-2 border-b border-ink/8 bg-cream/70 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-ink/15" />
                <span className="h-3 w-3 rounded-full bg-ink/15" />
                <span className="h-3 w-3 rounded-full bg-ink/15" />
                <span className="ml-3 text-xs font-medium text-ink/40">
                  propcapital.ai / {steps[active].title.toLowerCase().replace(/[^a-z]+/g, '-')}
                </span>
              </div>
              <div key={active} className="animate-fadeup p-6 sm:p-8">
                <StepPreview index={active} />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-gold-300/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StepPreview({ index }) {
  if (index === 0) {
    const leads = [
      { src: 'WhatsApp', name: 'Aarav Mehta', tag: '3 BHK · Golf Course Rd', score: 94 },
      { src: 'Housing', name: 'Priya Nair', tag: 'Investment · Noida Expy', score: 88 },
      { src: '99acres', name: 'Rohan Shah', tag: 'Villa · Sohna Road', score: 71 },
    ]
    return (
      <div>
        <PanelHeader label="Lead inbox" status="Auto-scored" />
        <div className="mt-5 flex flex-wrap gap-2">
          {['WhatsApp', '99acres', 'Housing', 'Meta Ads'].map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/10 bg-cream/70 px-3 py-1 text-xs font-medium text-ink/60"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {leads.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-between rounded-2xl border border-ink/8 bg-cream/60 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{l.name}</p>
                <p className="truncate text-xs text-ink/50">
                  via {l.src} · {l.tag}
                </p>
              </div>
              <span
                className={`ml-3 shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                  l.score >= 85 ? 'bg-forest-600 text-cream' : 'bg-ink/5 text-ink/60'
                }`}
              >
                {l.score}% fit
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (index === 1) {
    const timeline = [
      { icon: CheckCircle2, color: 'text-forest-600', title: 'WhatsApp intro sent', meta: '2 min ago', done: true },
      { icon: PhoneCall, color: 'text-forest-600', title: 'AI call connected', meta: '3:12 duration', done: true },
      { icon: Bell, color: 'text-gold-500', title: 'Follow-up reminder', meta: 'Tomorrow · 10:00 AM', done: false },
    ]
    return (
      <div>
        <PanelHeader label="Smart sequence" status="Running" live />
        <ol className="mt-6 space-y-5">
          {timeline.map((t, i) => {
            const Icon = t.icon
            return (
              <li key={i} className="relative flex gap-4">
                {i < timeline.length - 1 && (
                  <span className="absolute left-[18px] top-9 h-[calc(100%-4px)] w-px bg-ink/10" />
                )}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-cream">
                  <Icon className={`h-5 w-5 ${t.color}`} />
                </span>
                <div className="pt-1">
                  <p className="text-sm font-semibold">{t.title}</p>
                  <p className="text-xs text-ink/50">{t.meta}</p>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="mt-6 flex items-center gap-2 rounded-2xl bg-forest-50 px-4 py-3 text-sm font-medium text-forest-700">
          <Sparkles className="h-4 w-4" />
          Zero manual effort — the sequence runs itself.
        </div>
      </div>
    )
  }

  if (index === 2) {
    const matches = [
      { name: 'DLF The Camellias', area: 'Golf Course Road', fit: 94 },
      { name: 'M3M Golf Estate', area: 'Sector 65', fit: 88 },
      { name: 'Central Park Flower Valley', area: 'Sohna Road', fit: 81 },
    ]
    return (
      <div>
        <PanelHeader label="Smart match" status="3 best-fit projects" />
        <div className="mt-5 rounded-2xl border border-forest-200 bg-forest-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest-700">
            Buyer profile
          </p>
          <p className="mt-1 text-sm font-semibold">
            Aarav Mehta · ₹2 Cr · Ready-to-move · Golf Course Rd
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {matches.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-4 rounded-2xl border border-ink/8 bg-cream/60 px-4 py-3"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{m.name}</p>
                <p className="truncate text-xs text-ink/50">{m.area}</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/5">
                  <span
                    className="block h-full rounded-full bg-forest-600"
                    style={{ width: `${m.fit}%` }}
                  />
                </div>
              </div>
              <span className="shrink-0 font-display text-lg font-semibold text-forest-700">
                {m.fit}%
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  
  const stages = [
    { label: 'New leads', count: 220, pct: 100 },
    { label: 'Qualified', count: 140, pct: 64 },
    { label: 'Site visits', count: 58, pct: 26 },
    { label: 'Closed', count: 24, pct: 11 },
  ]
  return (
    <div>
      <PanelHeader label="Pipeline" status="This month" />
      <div className="mt-6 space-y-4">
        {stages.map((s) => (
          <div key={s.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-ink/70">{s.label}</span>
              <span className="font-display font-semibold">{s.count}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/5">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-forest-600 to-forest-400"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-ink px-4 py-3.5 text-cream">
        <div>
          <p className="text-xs text-cream/60">Active pipeline value</p>
          <p className="font-display text-xl font-semibold">₹58 Cr</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-forest-600 px-3 py-1 text-xs font-semibold">
          <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
          +41% vs last month
        </span>
      </div>
    </div>
  )
}

function PanelHeader({ label, status, live }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
        {label}
      </p>
      <span
        className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
          live ? 'bg-forest-50 text-forest-700' : 'bg-ink/5 text-ink/55'
        }`}
      >
        {live && <span className="h-2 w-2 animate-pulse rounded-full bg-forest-500" />}
        {status}
      </span>
    </div>
  )
}
