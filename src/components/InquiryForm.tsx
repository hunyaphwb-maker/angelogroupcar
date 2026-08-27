import { useState } from "react"
import type { Car, InquiryForm } from "../types"
import { formatPHP } from "../utils/format"

interface Props {
  selected: Car | null
  onSubmitted: (payload: InquiryForm & { car: Car }) => void
}

type Errors = Partial<Record<keyof InquiryForm, string>>

const initial: InquiryForm = {
  fullName: "",
  email: "",
  phone: "",
  preferredDate: "",
  contactMethod: "Email",
  message: "",
}

const validate = (v: InquiryForm): Errors => {
  const e: Errors = {}
  if (!v.fullName.trim()) e.fullName = "Enter your full name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email."
  if (!/^[0-9+\-\s()]{7,}$/.test(v.phone)) e.phone = "Enter a valid phone number."
  if (!v.preferredDate) e.preferredDate = "Pick a preferred date."
  if (v.message && v.message.length > 500) e.message = "Message is too long."
  return e
}

export default function InquiryFormPanel({ selected, onSubmitted }: Props) {
  const [form, setForm] = useState<InquiryForm>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)

  const set = <K extends keyof InquiryForm>(key: K, value: InquiryForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selected) return
    const eMap = validate(form)
    setErrors(eMap)
    if (Object.keys(eMap).length) return

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    onSubmitted({ ...form, car: selected })
    setForm(initial)
  }

  const disabled = !selected

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky top-24 border border-ink/10 bg-bone-50 p-8"
    >
      <p className="kicker">Step 02 — Inquiry</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
        Reserve a private viewing.
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Share your details. A sales advisor will confirm within one business day.
      </p>

      <div
        className={`mt-6 flex items-center gap-4 border p-4 transition
          ${selected ? "border-ink/20 bg-bone-100" : "border-dashed border-ink/15 text-ink-muted"}`}
      >
        {selected ? (
          <>
            <img
              src={selected.image}
              alt=""
              className="h-16 w-24 object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
                {selected.brand}
              </p>
              <p className="truncate font-display text-base font-semibold text-ink">
                {selected.model}
              </p>
              <p className="text-xs text-ink-muted">
                {selected.year} · {selected.location}
              </p>
            </div>
            <p className="shrink-0 font-display text-base font-semibold text-ink">
              {formatPHP(selected.price)}
            </p>
          </>
        ) : (
          <p className="text-sm">Select a vehicle to begin your inquiry.</p>
        )}
      </div>

      <fieldset disabled={disabled || submitting} className="mt-6 space-y-5">
        <div>
          <label htmlFor="fullName" className="field-label">Full name</label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            className="field-input"
            placeholder="Juan Dela Cruz"
            autoComplete="name"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="field-input"
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="field-label">Phone</label>
            <input
              id="phone"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="field-input"
              placeholder="+63 9xx xxx xxxx"
              autoComplete="tel"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className="field-label">Preferred date</label>
            <input
              id="preferredDate"
              type="date"
              value={form.preferredDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => set("preferredDate", e.target.value)}
              className="field-input"
            />
            {errors.preferredDate && <p className="mt-1 text-xs text-red-700">{errors.preferredDate}</p>}
          </div>
          <div>
            <span className="field-label">Preferred contact</span>
            <div className="flex gap-1 border-b border-ink/20 pb-1">
              {(["Email", "Phone", "SMS"] as const).map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => set("contactMethod", m)}
                  className={`flex-1 py-2 text-xs font-semibold uppercase tracking-kicker transition
                    ${form.contactMethod === m
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"}`}
                >
                  {m}
                  {form.contactMethod === m && (
                    <span className="mx-auto mt-1 block h-px w-6 bg-ink" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message <span className="normal-case text-ink/30">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className="field-input resize-none"
            placeholder="Financing, trade-in, or test drive requests?"
          />
          <div className="mt-1 flex justify-between text-[11px]">
            <span className="text-red-700">{errors.message}</span>
            <span className="text-ink/40">{form.message.length}/500</span>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">
          {submitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending inquiry
            </>
          ) : (
            <>
              Send inquiry
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-ink/40">
          Submitting means you agree to our terms and privacy policy.
        </p>
      </fieldset>
    </form>
  )
}
