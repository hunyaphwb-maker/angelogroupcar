import { Link } from "react-router-dom"
import Car3D from "../components/Car3D"
import CarCard from "../components/CarCard"
import { cars } from "../data/cars"

const featured = cars.filter((c) => c.featured).slice(0, 3)

const brands = ["Toyota", "Honda", "Mazda", "Ford", "Tesla", "Subaru", "BMW", "Lexus"]

const specs = [
  { label: "0-100 km/h", value: "3.4s" },
  { label: "Top speed", value: "325" },
  { label: "Horsepower", value: "631" },
  { label: "Torque", value: "560" },
]

export default function Home() {
  return (
    <>
      {/* ================= Fullscreen 3D Hero ================= */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone-50">
        {/* 3D canvas — fills the entire viewport */}
        <div className="absolute inset-0">
          <Car3D className="h-full w-full" />
          {/* subtle vignette to make text pop */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/70" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/50" />
        </div>

        {/* Left copy */}
        <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 py-24 lg:px-10">
          <div className="pointer-events-auto max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-bone-200/70">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
              Angelo Group Car Company · Manila
            </p>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-bone-50 sm:text-7xl lg:text-8xl">
              Drive
              <br />
              <span className="italic text-bone-200/60">the future,</span>
              <br />
              today.
            </h1>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-bone-200/70">
              An immersive, real-time 3D showroom of the Philippines' most
              sought-after machines — inspected, curated, and ready to view.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/cars"
                className="inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-bone-200"
              >
                Enter the showroom
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-bone-50/25 px-6 py-3 text-sm font-semibold text-bone-50 transition hover:border-bone-50 hover:bg-bone-50/10"
              >
                The studio
              </Link>
            </div>
          </div>

          {/* Right spec HUD */}
          <div className="pointer-events-auto absolute right-6 top-24 hidden max-w-[220px] flex-col gap-1 lg:right-10 lg:flex">
            <p className="text-[10px] font-semibold uppercase tracking-kicker text-bone-200/60">
              Model no. 001 / Aventador
            </p>
            <p className="font-display text-lg font-semibold leading-tight text-bone-50">
              Naturally aspirated V12
            </p>
            <div className="mt-4 space-y-3 border-t border-bone-50/15 pt-4">
              {specs.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-kicker text-bone-200/60">
                    {s.label}
                  </span>
                  <span className="font-display text-base font-semibold text-bone-50">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom marquee row */}
          <div className="pointer-events-auto mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-bone-50/10 pt-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-kicker text-bone-200/60">
                Curated 2026 · Issue 07
              </p>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight">
                A quieter way to buy a car.
              </p>
            </div>
            <div className="hidden gap-10 md:flex">
              <Stat n="128" l="Vehicles" />
              <Stat n="24" l="Dealers" />
              <Stat n="11" l="Cities" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Brand ticker ================= */}
      <section className="border-b border-ink/10 bg-bone-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
            Trusted marques
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {brands.map((b) => (
              <span key={b} className="font-display text-lg font-medium text-ink/60">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Featured collection ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div className="max-w-2xl">
            <p className="kicker">The Editor's List</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Three cars we cannot stop thinking about.
            </h2>
          </div>
          <Link
            to="/cars"
            className="hidden shrink-0 items-center gap-2 border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-kicker text-ink hover:text-gold-600 md:inline-flex"
          >
            View all
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <CarCard key={c.id} car={c} index={i} variant="editorial" />
          ))}
        </div>
      </section>

      {/* ================= Founder quote ================= */}
      <section className="border-y border-ink/10 bg-ink py-24 text-bone-50">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-kicker text-bone-200/70">
            A note from the founder
          </p>
          <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl">
            "Buying a car should feel like buying a suit — measured, patient,
            and personal. We built UstraeCar to bring back that quiet
            confidence."
          </blockquote>
          <p className="mt-8 text-xs font-medium uppercase tracking-kicker text-bone-200/70">
            — Miguel Alcazar, Founder
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Ready when you are</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Send your first inquiry today.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:justify-end">
            <Link to="/cars" className="btn-primary">Browse cars</Link>
            <Link to="/contact" className="btn-ghost">Talk to an advisor</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold leading-none text-bone-50">{n}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-kicker text-bone-200/60">
        {l}
      </p>
    </div>
  )
}
