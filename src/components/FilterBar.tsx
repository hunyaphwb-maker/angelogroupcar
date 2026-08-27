import type { BodyType, FuelType } from "../types"

export interface FilterState {
  q: string
  body: BodyType | "All"
  fuel: FuelType | "All"
  maxPrice: number
  sort: "featured" | "price-asc" | "price-desc" | "year-desc"
}

interface Props {
  value: FilterState
  onChange: (next: FilterState) => void
  totalCount: number
  resultCount: number
}

const bodies: (BodyType | "All")[] = ["All", "Sedan", "SUV", "Hatchback", "Pickup", "MPV", "Coupe"]
const fuels: (FuelType | "All")[] = ["All", "Gasoline", "Diesel", "Hybrid", "Electric"]

export default function FilterBar({ value, onChange, totalCount, resultCount }: Props) {
  const set = <K extends keyof FilterState>(k: K, v: FilterState[K]) =>
    onChange({ ...value, [k]: v })

  return (
    <section className="border-y border-ink/10 bg-bone-50 py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <label className="field-label">Search</label>
          <input
            value={value.q}
            onChange={(e) => set("q", e.target.value)}
            placeholder="Brand, model, or city"
            className="field-input"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="field-label">Body</label>
          <select
            value={value.body}
            onChange={(e) => set("body", e.target.value as FilterState["body"])}
            className="field-input cursor-pointer"
          >
            {bodies.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="field-label">Fuel</label>
          <select
            value={value.fuel}
            onChange={(e) => set("fuel", e.target.value as FilterState["fuel"])}
            className="field-input cursor-pointer"
          >
            {fuels.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="field-label">Sort</label>
          <select
            value={value.sort}
            onChange={(e) => set("sort", e.target.value as FilterState["sort"])}
            className="field-input cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price · low to high</option>
            <option value="price-desc">Price · high to low</option>
            <option value="year-desc">Year · newest</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="field-label">
            Max ₱{(value.maxPrice / 1000).toLocaleString()}k
          </label>
          <input
            type="range"
            min={500000}
            max={5000000}
            step={50000}
            value={value.maxPrice}
            onChange={(e) => set("maxPrice", Number(e.target.value))}
            className="w-full accent-ink"
          />
        </div>
      </div>

      <p className="mt-6 text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
        <span className="text-ink">{resultCount}</span> of {totalCount} vehicles in the current selection
      </p>
    </section>
  )
}
