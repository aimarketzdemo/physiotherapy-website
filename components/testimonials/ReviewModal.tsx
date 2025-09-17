"use client"

import { X, Star } from "lucide-react"
import type { Review } from "./types"
import { Button } from "@/components/ui/button"

interface ReviewModalProps {
  open: boolean
  onClose: () => void
  review: Review | null
}

export function ReviewModal({ open, onClose, review }: ReviewModalProps) {
  if (!open || !review) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto border shadow-xl">
        <Button variant="ghost" size="sm" onClick={onClose} className="absolute top-4 right-4 p-2">
          <X className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src={review.avatar || "/placeholder.svg?height=48&width=48&query=person"}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{review.name}</h3>
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

        <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>

        <div className="text-sm text-muted-foreground space-y-1">
          {review.treatment && (
            <div>
              <span className="font-medium">Treatment:</span> {review.treatment}
            </div>
          )}
          {review.location && (
            <div>
              <span className="font-medium">Location:</span> {review.location}
            </div>
          )}
          <div>
            <span className="font-medium">Date:</span> {new Date(review.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}
