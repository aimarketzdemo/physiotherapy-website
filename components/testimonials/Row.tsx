"use client"

import type { Review } from "./types"
import { ReviewCard } from "./ReviewCard"

interface RowProps {
  items: Review[]
  reverse?: boolean
  speed?: number
  offset?: number
  altToneStart?: number
  onReadMore: (review: Review) => void
}

export function Row({ items, reverse = false, speed = 84, offset = 0, altToneStart = 0, onReadMore }: RowProps) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div
        className="marquee-track flex gap-6"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          animationDelay: `${offset}s`,
        }}
      >
        {duplicatedItems.map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
            altTone={(index + altToneStart) % 3 === 0}
            onReadMore={() => onReadMore(review)}
          />
        ))}
      </div>
    </div>
  )
}
