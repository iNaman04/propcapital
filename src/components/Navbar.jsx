import { useEffect, useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'


const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Who it’s for', href: '#audience' },
  { label: 'Results', href: '#results' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/5 bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-gold-400">
            <Building2 className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            PropCapital<span className="text-forest-600">.ai</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="text-sm font-semibold text-ink/70 hover:text-ink">
            Sign in
          </a>
          <a href="#demo" className="btn-primary">
            Book a demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white/70 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

     
      <div
        className={`overflow-hidden border-t border-ink/5 bg-cream/95 backdrop-blur-md md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-ink/80 hover:bg-white/70"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex gap-3">
            <a href="#login" onClick={() => setOpen(false)} className="btn-ghost flex-1">
              Sign in
            </a>
            <a href="#demo" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
