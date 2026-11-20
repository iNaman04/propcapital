import {
  MessageSquareText,
  PhoneCall,
  Boxes,
  Target,
  Gauge,
  LineChart,
  TrendingUp,
  Check,
  CheckCircle2,
  Bell,
  BadgeCheck,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquareText,
    title: 'AI lead qualification',
    caption: 'Every inquiry scored and ranked by real buying intent.',
    accent: 'forest',
    span: 'lg:col-span-3',
    visual: 'intent',
  },
  {
    icon: PhoneCall,
    title: 'Automated engagement',
    caption: 'Calls, messages and follow-ups that fire on their own.',
    accent: 'gold',
    span: 'lg:col-span-3',
    visual: 'sequence',
  },
  {
    icon: Boxes,
    title: 'Inventory intelligence',
    caption: 'One live source of truth across every project.',
    accent: 'forest',
    span: 'lg:col-span-2',
    visual: 'inventory',
  },
  {
    icon: Target,
    title: 'Smart buyer–project match',
    caption: 'The right buyer paired to the right project.',
    accent: 'forest',
    span: 'lg:col-span-2',
    visual: 'match',
  },
  {
    icon: Gauge,
    title: 'Sales productivity tools',
    caption: 'Built for how brokers actually close.',
    accent: 'gold',
    span: 'lg:col-span-2',
    visual: 'tasks',
  },
  {
    icon: LineChart,
    title: 'Pipeline & market insight',
    caption: 'Pipeline health and market momentum, in real time.',
    accent: 'forest',
    span: 'lg:col-span-6',
    layout: 'wide',
    visual: 'chart',
  },
]

const visuals = {
  intent: IntentVisual,
  sequence: SequenceVisual,
  inventory: InventoryVisual,
  match: MatchVisual,
  tasks: TasksVisual,
  chart: ChartVisual,
}

export default function Features() {
  return (
    <section id="platform" className="relative py-24 md:py-32">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">The platform</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
            One system for the entire sales motion.
          </h2>
          <p className="mt-5 text-lg text-ink/65">
            From first inquiry to final handshake — every tool your team needs,
            intelligent and connected. No patchwork, no blind spots.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((f, i) => {
            const Icon = f.icon
            const gold = f.accent === 'gold'
            const wide = f.layout === 'wide'
            const Visual = visuals[f.visual]
            return (
              <article
                key={f.title}
                className={`reveal group relative flex overflow-hidden rounded-3xl border border-ink/8 bg-white/70 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:bg-white hover:shadow-lift ${
                  f.span || ''
                } ${
                  wide
                    ? 'flex-col gap-6 md:flex-row md:items-stretch'
                    : 'min-h-[300px] flex-col'
                }`}
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <header className={wide ? 'md:w-64 md:shrink-0' : ''}>
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${
                      gold ? 'bg-gold-400 text-ink' : 'bg-forest-700 text-cream'
                    } transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {f.caption}
                  </p>
                </header>

                <div className={`mt-5 flex-1 ${wide ? 'md:mt-0' : ''}`}>
                  <Visual />
                </div>

                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-forest-100/0 blur-2xl transition-all duration-300 group-hover:bg-forest-200/40" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---- in-card visuals (each fills its card) ------------------------ */

function Panel({ label, right, children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink/8 bg-cream/60 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
          {label}
        </p>
        {right}
      </div>
      <div className="mt-3 flex flex-1 flex-col">{children}</div>
    </div>
  )
}

function IntentVisual() {
  const rows = [
    { name: 'Aarav M.', tag: '3 BHK · Golf Course Rd', score: 94, tone: 'hot' },
    { name: 'Priya N.', tag: 'Investment · Noida Expy', score: 72, tone: 'warm' },
    { name: 'Rohan S.', tag: 'Villa · Sohna Road', score: 38, tone: 'cold' },
  ]
  const tone = {
    hot: 'bg-forest-600 text-cream',
    warm: 'bg-gold-400 text-ink',
    cold: 'bg-ink/10 text-ink/55',
  }
  return (
    <Panel
      label="Auto-scored queue"
      right={
        <span className="flex items-center gap-1.5 rounded-full bg-forest-50 px-2.5 py-0.5 text-[11px] font-semibold text-forest-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forest-500" />
          Live
        </span>
      }
    >
      <div className="flex flex-1 flex-col justify-between gap-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{r.name}</p>
              <p className="truncate text-[11px] text-ink/45">{r.tag}</p>
            </div>
            <span
              className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold ${tone[r.tone]}`}
            >
              {r.score}% fit
            </span>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function SequenceVisual() {
  const steps = [
    { icon: CheckCircle2, title: 'WhatsApp intro sent', meta: '2 min ago', color: 'text-forest-600' },
    { icon: PhoneCall, title: 'AI call connected', meta: '3:12 duration', color: 'text-forest-600' },
    { icon: Bell, title: 'Follow-up scheduled', meta: 'Tomorrow · 10:00 AM', color: 'text-gold-500' },
  ]
  return (
    <Panel
      label="Smart sequence"
      right={
        <span className="rounded-full bg-gold-400/20 px-2.5 py-0.5 text-[11px] font-semibold text-gold-600">
          Automated
        </span>
      }
    >
      <ol className="flex flex-1 flex-col justify-between">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <li key={i} className="relative flex gap-3">
              {i < steps.length - 1 && (
                <span className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-ink/10" />
              )}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 bg-white">
                <Icon className={`h-4 w-4 ${s.color}`} />
              </span>
              <div>
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="text-[11px] text-ink/45">{s.meta}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Panel>
  )
}

function InventoryVisual() {
  const tiles = [
    { name: 'DLF Camellias', units: '12 left', bar: 'from-forest-600 to-forest-400' },
    { name: 'M3M Golf Estate', units: '8 left', bar: 'from-gold-500 to-gold-300' },
    { name: 'Central Park', units: '21 left', bar: 'from-forest-600 to-forest-400' },
    { name: 'Smartworld One', units: '5 left', bar: 'from-gold-500 to-gold-300' },
  ]
  return (
    <Panel label="Live inventory">
      <div className="grid flex-1 grid-cols-2 gap-2.5">
        {tiles.map((t) => (
          <div
            key={t.name}
            className="flex flex-col justify-between rounded-xl bg-white/80 p-3"
          >
            <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${t.bar}`} />
            <div className="mt-2">
              <p className="text-xs font-semibold leading-tight">{t.name}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] text-forest-700">
                <BadgeCheck className="h-3 w-3" />
                {t.units}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function MatchVisual() {
  const rows = [
    { name: 'DLF The Camellias', fit: 94 },
    { name: 'M3M Golf Estate', fit: 88 },
    { name: 'Central Park Valley', fit: 81 },
  ]
  return (
    <Panel label="Smart match">
      <div className="rounded-xl bg-forest-50 px-3 py-2">
        <p className="text-[11px] font-semibold text-forest-700">
          Aarav · ₹2 Cr · Golf Course Rd
        </p>
      </div>
      <div className="mt-2.5 flex flex-1 flex-col justify-between gap-2">
        {rows.map((r) => (
          <div key={r.name} className="rounded-xl bg-white/80 px-3 py-2">
            <div className="flex items-center justify-between">
              <p className="truncate text-xs font-semibold">{r.name}</p>
              <span className="ml-2 shrink-0 text-xs font-bold text-forest-700">
                {r.fit}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink/5">
              <span
                className="block h-full rounded-full bg-forest-600"
                style={{ width: `${r.fit}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function TasksVisual() {
  const tasks = [
    { label: 'Call Aarav Mehta', done: true },
    { label: 'Send M3M brochure', done: true },
    { label: 'Site visit · 4:00 PM', done: false },
  ]
  return (
    <Panel label="Today · 2 of 3 done">
      <div className="flex flex-1 flex-col justify-between gap-2">
        {tasks.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2.5 rounded-xl bg-white/80 px-3 py-2.5"
          >
            <span
              className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                t.done
                  ? 'border-forest-600 bg-forest-600 text-cream'
                  : 'border-ink/20 bg-white'
              }`}
            >
              {t.done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            </span>
            <span
              className={`text-sm ${
                t.done ? 'text-ink/40 line-through' : 'font-medium text-ink/75'
              }`}
            >
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function ChartVisual() {
  const bars = [38, 46, 42, 58, 52, 66, 61, 74, 70, 85, 80, 95]
  const months = ['Apr', 'Jul', 'Nov']
  return (
    <div className="flex h-full min-h-[180px] flex-col rounded-2xl border border-ink/8 bg-cream/60 p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
          Pipeline momentum · ₹58 Cr active
        </p>
        <span className="flex items-center gap-1 rounded-full bg-forest-50 px-2.5 py-0.5 text-[11px] font-bold text-forest-700">
          <TrendingUp className="h-3 w-3" />
          +41% MoM
        </span>
      </div>
      <div className="mt-4 flex flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-forest-600 to-forest-400 transition-all duration-500 group-hover:from-forest-700"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[11px] text-ink/40">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}
