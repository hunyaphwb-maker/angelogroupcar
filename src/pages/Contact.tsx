import { useState } from "react"
import SuccessToast from "../components/SuccessToast"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initial: FormState = { name: "", email: "", subject: "General inquiry", message: "" }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(false)

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setToast(true)
    setForm(initial)
  }

  return (
    <>
      <SuccessToast
        open={toast}
        title="Message sent."
        description="Thank you — we'll be in touch within one business day."
        onClose={() => setToast(false)}
      />

      <section className="border-b border-ink/10 bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="kicker">Contact</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
            Say hello.
            <br />
            <span className="italic text-ink-muted">We answer quickly.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Studio info */}
          <div className="lg:col-span-5">
            <p className="kicker">The studio</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
              Ayala North Exchange,
              <br />
              Salcedo Village, Makati.
            </h2>

            <dl className="mt-10 space-y-8">
              {[
                { label: "General", value: "hello@uscar.ph" },
                { label: "Sales advisor", value: "sales@uscar.ph" },
                { label: "Press & partnerships", value: "press@uscar.ph" },
                { label: "Phone", value: "+63 917 555 0142" },
              ].map((row) => (
                <div key={row.label} className="border-t border-ink/10 pt-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
                Studio hours
              </p>
              <p className="mt-3 font-display text-lg text-ink">
                Mon — Sat · 10:00 to 19:00
              </p>
              <p className="text-sm text-ink-muted">By appointment on Sundays.</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="border border-ink/10 bg-bone-50 p-8 lg:col-span-7 lg:p-12"
          >
            <p className="kicker">Send a message</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
              Tell us what you're looking for.
            </h2>

            <fieldset disabled={submitting} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="field-input"
                    placeholder="Angelo Pogi"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="field-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="field-label">Subject</label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => set("subject", e.target.value)}
                  className="field-input cursor-pointer"
                >
                  <option>General inquiry</option>
                  <option>Buying a car</option>
                  <option>Selling my car</option>
                  <option>Trade-in appraisal</option>
                  <option>Press & partnerships</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className="field-input resize-none"
                  placeholder="Tell us a bit about what you're after…"
                />
              </div>

              <button type="submit" className="btn-primary">
                {submitting ? "Sending…" : "Send message"}
                {!submitting && (
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </section>

      {/* Location map */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Visit the studio</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Ayala North Exchange, Makati City
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                6796 Ayala Ave, corner Salcedo St, Legazpi Village
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ayala+North+Exchange+Makati"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-2 border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-kicker text-ink hover:text-gold-600 md:inline-flex"
            >
              Open in Google Maps
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="relative aspect-[16/7] w-full overflow-hidden border border-ink/10 bg-bone-100">
            <iframe
              title="UsCar Studio · Ayala North Exchange, Makati"
              src="https://www.google.com/maps?q=Ayala+North+Exchange,+Ayala+Avenue,+Makati,+Metro+Manila&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[1.05]"
              style={{ border: 0 }}
              allowFullScreen
            />

            {/* Overlay card */}
            <div className="pointer-events-none absolute bottom-6 left-6 max-w-xs border border-ink/10 bg-bone-50/95 p-5 shadow-card backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-bone-50">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-kicker text-ink-muted">
                    UsCar Studio
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-tight text-ink">
                    8F Ayala North Exchange
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">
                    Salcedo Village, Makati City · PH
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Ayala+North+Exchange+Makati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto mt-3 inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-[11px] font-semibold uppercase tracking-kicker text-ink hover:text-gold-600"
                  >
                    Get directions
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
