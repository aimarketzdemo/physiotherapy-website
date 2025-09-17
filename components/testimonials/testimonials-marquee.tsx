"use client"

import { useEffect, useMemo, useState } from "react"
import type { Review } from "./types"
import { FALLBACK } from "./data.fallback.ts"
import { Row } from "./Row"
import { ReviewModal } from "./ReviewModal"

export function TestimonialsMarquee() {
  const [reviews, setReviews] = useState<Review[] | null>(null)
  const [open, setOpen] = useState<Review | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch("/api/reviews", { next: { revalidate: 3600 } })
        if (res.ok) {
          const data = (await res.json()) as Review[]
          if (data?.length) setReviews(data)
        }
      } catch {}
    })()
  }, [])

  const all = useMemo(() => [...FALLBACK, ...(reviews ?? [])], [reviews])
  const half = Math.ceil(all.length / 2)
  const top = all.slice(0, half)
  const bottom = all.slice(half)

  return (
    <section
      id="testimonials"
      className={`relative overflow-x-clip py-20 lg:py-28 ${open ? "tsm-modal-open" : ""}`}
      aria-labelledby="testimonials-heading"
    >
      {/* backdrop (keep consistent with your site) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid opacity-[0.08] dark:opacity-[0.12]" />
        <div className="absolute left-1/2 -top-24 h-80 w-[72rem] -translate-x-1/2 rounded-[48px] bg-gradient-to-r from-primary/15 via-fuchsia-500/10 to-indigo-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="testimonials-heading" className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          What our clients{" "}
          <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            say about us
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-foreground/70">
          Real stories from businesses we’ve helped grow with websites, ads, and automation.
        </p>

        <div className="mt-12 space-y-8">
          <Row
            items={all} // use all reviews in one row
            reverse={false} // or true if you want the other direction
            speed={84}
            offset={0}
            altToneStart={0}
            onReadMore={setOpen}
          />
        </div>
      </div>

      <ReviewModal open={!!open} onClose={() => setOpen(null)} review={open} />

      {/* keyframes + pause when modal open */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .tsm-modal-open .marquee-track {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  )
}
