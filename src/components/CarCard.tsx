import type { Car } from "../types"
import { formatKm, formatPHP } from "../utils/format"

interface Props {
  car: Car
  selected?: boolean
  onSelect?: (car: Car) => void
  variant?: "select" | "editorial"
  index?: number
}

export default function CarCard({
  car,
  selected,
  onSelect,
  variant = "select",
  index,
}: Props) {
  const isEditorial = variant === "editorial"

  const content = (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-bone-100">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {typeof index === "number" && (
          <span className="absolute left-4 top-4 font-display text-xs italic text-bone-50/80">
            №{String(index + 1).padStart(2, "0")}
          </span>
        )}
        {car.featured && !isEditorial && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-kicker text-bone-50 backdrop-blur">
            Editor's pick
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
              {car.brand} · {car.year}
            </p>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-ink">
              <svg className="h-3 w-3 text-gold-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              {car.rating.toFixed(1)}
            </div>
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
            {car.model}
          </h3>
          <p className="mt-1 text-xs text-ink-muted">{car.location}</p>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-ink/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            <span className="chip">{car.body}</span>
            <span className="chip">{car.fuel}</span>
            <span className="chip">{car.transmission}</span>
          </div>
          <div className="text-right">
            <p className="font-display text-xl font-semibold text-ink">
              {formatPHP(car.price)}
            </p>
            <p className="text-[11px] text-ink-muted">{formatKm(car.mileage)}</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (!onSelect) {
    return (
      <article className="group overflow-hidden border border-ink/10 bg-bone-50 transition hover:shadow-card">
        {content}
      </article>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(car)}
      className={`group relative overflow-hidden border bg-bone-50 text-left transition hover:shadow-card
        ${selected ? "border-ink ring-1 ring-ink" : "border-ink/10"}`}
    >
      {selected && (
        <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bone-50">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.415L8.414 12.17l6.879-6.878a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )}
      {content}
    </button>
  )
}
