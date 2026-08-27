import { useMemo, useState } from "react"
import CarCard from "../components/CarCard"
import FilterBar, { type FilterState } from "../components/FilterBar"
import InquiryFormPanel from "../components/InquiryForm"
import SuccessToast from "../components/SuccessToast"
import { cars } from "../data/cars"
import type { Car } from "../types"

const initialFilters: FilterState = {
  q: "",
  body: "All",
  fuel: "All",
  maxPrice: 5000000,
  sort: "featured",
}

export default function Cars() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [selected, setSelected] = useState<Car | null>(cars[0] ?? null)
  const [toast, setToast] = useState<{ open: boolean; name: string; car: string }>({
    open: false,
    name: "",
    car: "",
  })

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase()
    let result = cars.filter((c) => {
      const matchQ =
        !q ||
        c.brand.toLowerCase().includes(q) ||
        c.model.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q)
      const matchBody = filters.body === "All" || c.body === filters.body
      const matchFuel = filters.fuel === "All" || c.fuel === filters.fuel
      const matchPrice = c.price <= filters.maxPrice
      return matchQ && matchBody && matchFuel && matchPrice
    })

    switch (filters.sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result = [...result].sort((a, b) => b.year - a.year)
        break
      default:
        result = [...result].sort(
          (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
        )
    }
    return result
  }, [filters])

  return (
    <>
      <SuccessToast
        open={toast.open}
        title={`Inquiry sent, ${toast.name}.`}
        description={`We received your request for the ${toast.car}. A sales advisor will reach out shortly.`}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />

      {/* Page heading */}
      <section className="border-b border-ink/10 bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="kicker">The Collection</p>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              A shortlist of cars,
              <br />
              <span className="italic text-ink-muted">worth your time.</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Every listing is personally inspected by our team. Filter by
              category or price. Select one to begin an inquiry.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FilterBar
          value={filters}
          onChange={setFilters}
          totalCount={cars.length}
          resultCount={filtered.length}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-baseline justify-between">
              <p className="kicker">Step 01 — Choose</p>
              {selected && (
                <p className="text-xs text-ink-muted">
                  Selected:{" "}
                  <span className="font-semibold text-ink">
                    {selected.brand} {selected.model}
                  </span>
                </p>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="border border-dashed border-ink/20 p-16 text-center">
                <p className="font-display text-2xl font-semibold text-ink">
                  No cars match your filters.
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Try widening your price range or clearing the search.
                </p>
                <button
                  onClick={() => setFilters(initialFilters)}
                  className="btn-primary mt-6"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filtered.map((c) => (
                  <CarCard
                    key={c.id}
                    car={c}
                    selected={selected?.id === c.id}
                    onSelect={setSelected}
                  />
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <InquiryFormPanel
              selected={selected}
              onSubmitted={(p) =>
                setToast({
                  open: true,
                  name: p.fullName.split(" ")[0],
                  car: `${p.car.brand} ${p.car.model}`,
                })
              }
            />
          </aside>
        </div>
      </section>
    </>
  )
}
