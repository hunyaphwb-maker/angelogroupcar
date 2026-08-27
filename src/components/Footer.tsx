import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-semibold tracking-tight text-ink">
              Sport Car PH
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              A curated automotive marketplace connecting discerning Filipino
              drivers with a shortlist of trusted dealers and inspected vehicles.
            </p>
            <div className="mt-6 flex gap-3">
              {["IG", "FB", "YT", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-xs font-semibold text-ink-muted transition hover:border-ink hover:text-ink"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li><Link className="hover:text-gold-600" to="/cars">All cars</Link></li>
              <li><Link className="hover:text-gold-600" to="/about">Our story</Link></li>
              <li><Link className="hover:text-gold-600" to="/contact">Get in touch</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
              Studio
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              <li>8F Ayala North Exchange</li>
              <li>Salcedo Village, Makati</li>
              <li>angelopogi@gmail.ph</li>
              <li>+63 917 555 0142</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Angelo Group of Companies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
