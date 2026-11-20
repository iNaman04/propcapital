import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Loader2,
  AlertCircle,
} from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid work email address.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1200))
      window.location.hash = '#top'
    } catch {
      setError('We could not sign you in. Check your details and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen flex-col overflow-hidden px-5 py-8 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-forest-200/50 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-gold-300/30 blur-3xl" />
          <div className="absolute inset-0 grain opacity-60" />
        </div>

        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-gold-400">
              <Building2 className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="text-lg font-bold tracking-tight">
              PropCapital<span className="text-forest-600">.ai</span>
            </span>
          </a>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
          <span className="eyebrow self-start">Welcome back</span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl">
            Sign in to your sales OS.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Pick up where your pipeline left off — every lead, follow-up and
            site visit in one place.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-ink/80">
                Work email
              </label>
              <div className="relative mt-2">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-ink/10 bg-white/80 py-3.5 pl-11 pr-4 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink/35 focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/30"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-ink/80">
                  Password
                </label>
                <a
                  href="#forgot"
                  className="text-sm font-semibold text-forest-700 hover:text-forest-800"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative mt-2">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <input
                  id="password"
                  type={show ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-ink/10 bg-white/80 py-3.5 pl-11 pr-12 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink/35 focus:border-forest-500 focus:bg-white focus:ring-2 focus:ring-forest-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  aria-label={show ? 'Hide password' : 'Show password'}
                  className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl text-ink/45 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink/70">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-[18px] w-[18px] rounded-md border-ink/20 accent-forest-700 text-forest-700 focus:ring-forest-500/40"
              />
              Keep me signed in on this device
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="flex items-center gap-4 text-xs text-ink/40">
              <span className="h-px flex-1 bg-ink/10" />
              or
              <span className="h-px flex-1 bg-ink/10" />
            </div>

            <button type="button" className="btn-ghost w-full py-3.5 text-sm">
              <GoogleIcon />
              Continue with Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-ink/60">
            New to PropCapital.ai?{' '}
            <a href="#demo" className="font-semibold text-forest-700 hover:text-forest-800">
              Book a demo
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-ink/40">
          © {new Date().getFullYear()} PropCapital.ai · Privacy · Terms · RERA
        </p>
      </section>

    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.86-3a7.2 7.2 0 0 1-10.7-3.78H1.4v3.09A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.37 14.32a7.2 7.2 0 0 1 0-4.64V6.59H1.4a12 12 0 0 0 0 10.82l3.97-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.43-3.43A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.4 6.59l3.97 3.09A7.2 7.2 0 0 1 12 4.75z" />
    </svg>
  )
}
