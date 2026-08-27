import { useEffect } from "react"

interface Props {
  open: boolean
  title: string
  description: string
  onClose: () => void
}

export default function SuccessToast({ open, title, description, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const id = setTimeout(onClose, 4500)
    return () => clearTimeout(id)
  }, [open, onClose])

  return (
    <div
      aria-live="polite"
      aria-hidden={!open}
      className={`pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4 transition-all duration-300
        ${open ? "translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
    >
      <div className="pointer-events-auto flex max-w-md items-start gap-3 border border-ink/10 bg-bone-50 p-4 shadow-card">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink text-ink">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.415L8.414 12.17l6.879-6.878a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-ink">{title}</p>
          <p className="mt-0.5 text-xs text-ink-muted">{description}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-2 rounded-full p-1 text-ink-muted hover:bg-bone-100 hover:text-ink"
          aria-label="Close"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}
