import { Link } from "react-router-dom"

const values = [
  {
    n: "01",
    title: "Considered, not curated by algorithm.",
    body: "Every vehicle on UstraeCar is hand-picked by our editors. If we would not recommend it to a friend, it does not go on the list.",
  },
  {
    n: "02",
    title: "Independent inspections.",
    body: "Each car passes a 128-point mechanical and cosmetic inspection before we accept the listing. We share the full report with you.",
  },
  {
    n: "03",
    title: "Transparent pricing.",
    body: "No hidden dealer markups, no last-minute charges. What you see is what you pay — with fair trade-in offers when you're ready.",
  },
]

const team = [
  { name: "Miguel Alcazar", role: "Founder · Editorial" },
  { name: "Rea Villanueva", role: "Head of Inspections" },
  { name: "Kian Domingo", role: "Client Advisor" },
  { name: "Sofia Aquino", role: "Design & Brand" },
]

export default function About() {
  return (
    <>
      <section className="border-b border-ink/10 bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="kicker">About the studio</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
            We built UstraeCar
            <br />
            <span className="italic text-ink-muted">for the buyers</span>
            <br />
            we grew up around.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted">
            Founded in Makati in 2024, UstraeCar is an independent automotive
            house serving discerning drivers across the Philippines. We work
            with a small circle of dealers who share our standards: honesty,
            mechanical integrity, and taste.
          </p>
        </div>
      </section>

      {/* Editorial image + narrative */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80"
            alt="Studio garage"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pt-6">
          <p className="kicker">Our approach</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            A slower, quieter marketplace.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Most car marketplaces are built for scale. Ours is built for
            substance. We publish fewer listings so we can spend more time on
            each — driving them, inspecting them, and writing honestly about
            what they are and are not.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            If we don't have what you're looking for, we'll tell you. Sometimes
            we'll even help you find it elsewhere. That's the standard.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="kicker">Principles</p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map((v) => (
              <article key={v.n} className="border-t border-ink/20 pt-6">
                <p className="font-display text-4xl font-semibold italic text-ink-muted">
                  {v.n}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">The team</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Small, obsessive, in-house.
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-muted">
            Four people, one workshop, and an inbox we always answer within a
            business day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {team.map((t) => (
            <div key={t.name}>
              <div className="aspect-[3/4] bg-bone-100" />
              <p className="mt-4 font-display text-lg font-semibold text-ink">
                {t.name}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 text-bone-50 lg:flex-row lg:items-center lg:px-10">
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Ready to see what's in the studio?
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-bone-200"
            >
              Browse the collection
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-bone-50/30 px-6 py-3 text-sm font-semibold text-bone-50 transition hover:border-bone-50 hover:bg-bone-50/10"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
