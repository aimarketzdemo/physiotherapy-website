"use client"

import { Star } from "lucide-react"
import type { Review } from "./types"
import { Button } from "@/components/ui/button"

interface ReviewCardProps {
  review: Review
  altTone?: boolean
  onReadMore: () => void
}

export function ReviewCard({ review, altTone = false, onReadMore }: ReviewCardProps) {
  const truncatedText = review.text.length > 120 ? review.text.substring(0, 120) + "..." : review.text

  return (
    <div
      className={`
      flex-shrink-0 w-80 p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg
      ${altTone ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20" : "bg-card border-border"}
    `}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.avatar || "/placeholder.svg?height=40&width=40&query=person"}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-card-foreground">{review.name}</h4>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">{truncatedText}</p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          {review.treatment && <div className="font-medium">{review.treatment}</div>}
          {review.location && <div>{review.location}</div>}
        </div>

        {review.text.length > 120 && (
          <Button variant="ghost" size="sm" onClick={onReadMore} className="text-primary hover:text-primary/80">
            Read more
          </Button>
        )}
      </div>
    </div>
  )
}
