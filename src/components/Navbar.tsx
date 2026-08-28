import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/cars", label: "Cars" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone-50/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ink/15 bg-ink transition group-hover:bg-ink-soft">
            <img src="/favicon.png" alt="Sport Car PH logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              Sport Car PH
            </p>
            <p className="text-[10px] font-medium uppercase tracking-kicker text-ink-muted">
              Est. 2024 · Manila
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink to="/cars" className="hidden btn-primary md:inline-flex">
            Browse cars
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </NavLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <details className="relative md:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-ink/15 text-ink">
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 w-48 rounded-2xl border border-ink/10 bg-bone-50 p-2 shadow-card">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `block rounded-xl px-3 py-2 text-sm ${
                isActive ? "bg-ink text-bone-50" : "text-ink hover:bg-bone-100"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </details>
  )
}
