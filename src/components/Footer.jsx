import { Building2, Linkedin, Twitter, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Platform',
    links: ['Lead qualification', 'Automated engagement', 'Inventory intelligence', 'Pipeline insights'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case studies', 'Help center', 'Security'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-cream">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream text-ink">
                <Building2 className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-lg font-bold tracking-tight">
                PropCapital<span className="text-gold-400">.ai</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              The intelligence and infrastructure layer modern real estate has
              been waiting for.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} PropCapital.ai — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-cream">Privacy</a>
            <a href="#top" className="hover:text-cream">Terms</a>
            <a href="#top" className="hover:text-cream">RERA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
