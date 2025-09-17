"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock } from "lucide-react";

const BOOKING_BASE =
  "https://api.leadconnectorhq.com/widget/booking/PdAeU9FHdz1Cyk2obasr";

export default function CalendarClient() {
  const [loading, setLoading] = useState(true);
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const tz = useMemo(() => {
    try {
      return (
        Intl.DateTimeFormat().resolvedOptions().timeZone || "Your timezone"
      );
    } catch {
      return "Your timezone";
    }
  }, []);

  return (
    <>
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
          <BadgeCheck className="h-4 w-4 text-primary" />
          Book Your Appointment
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Schedule Your{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Recovery Session
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
          Choose a convenient time for your physiotherapy appointment. Instant
          confirmation with calendar invite sent immediately.{" "}
          <a
            className="underline decoration-dotted underline-offset-2"
            href="mailto:info@familyphysio.ca"
          >
            Prefer email? Contact us directly.
          </a>
        </p>

        {/* Benefits marquee */}
        <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-full border border-border/70 bg-background/60 backdrop-blur">
          <div className="marquee py-2 text-xs text-foreground/70">
            <div className="marquee__inner">
              {[
                "Expert physiotherapy care",
                "Personalized treatment plans",
                "Modern facility & equipment",
                "Flexible scheduling",
                "Insurance accepted",
              ].map((t, i) => (
                <span key={i} className="mx-6 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  {t}
                </span>
              ))}
            </div>
            <div className="marquee__inner" aria-hidden="true">
              {[
                "Expert physiotherapy care",
                "Personalized treatment plans",
                "Modern facility & equipment",
                "Flexible scheduling",
                "Insurance accepted",
              ].map((t, i) => (
                <span
                  key={`dup-${i}`}
                  className="mx-6 inline-flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/60">
        <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/70 px-2 py-1 backdrop-blur">
          <Clock className="h-3.5 w-3.5 text-primary" />
          Times shown in{" "}
          <span className="font-medium text-foreground">{tz}</span>
        </span>
        <Link
          href={BOOKING_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 hover:border-foreground/30 backdrop-blur"
        >
          Open in new tab <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Widget card */}
      <div className="mt-8 w-full overflow-hidden rounded-3xl border border-border/70 bg-background/70 shadow-sm backdrop-blur dark:[&_iframe]:invert dark:[&_iframe]:hue-rotate-180">
        {loading && (
          <div className="h-[760px] sm:h-[820px]">
            <div className="h-full w-full animate-pulse bg-foreground/[0.06] dark:bg-foreground/[0.12]" />
          </div>
        )}
        <iframe
          ref={frameRef}
          src={BOOKING_BASE}
          className="h-[760px] w-full sm:h-[820px]"
          style={{ border: "none", display: loading ? "none" : "block" }}
          onLoad={() => setLoading(false)}
          scrolling="no"
          title="Book Physiotherapy Appointment"
          allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
        />
      </div>

      {/* Contact info */}
      <div className="mt-6 rounded-2xl border border-border/70 bg-foreground/[0.04] p-5 text-center">
        <div className="text-sm">
          Need help booking or have questions?{" "}
          <span className="font-medium text-foreground">Call us directly</span>{" "}
          at (519) 208-8811
        </div>
        <Link
          href="/contact"
          className="mt-3 inline-flex rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm hover:border-foreground/30"
        >
          Contact us
        </Link>
      </div>

      {/* marquee keyframes */}
      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .marquee__inner {
          display: inline-flex;
          flex-shrink: 0;
          min-width: 100%;
          justify-content: space-around;
          animation: scroll 22s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* GHL script (optional) */}
      <Script
        src="https://api.leadconnectorhq.com/widget/booking/PdAeU9FHdz1Cyk2obasr"
        strategy="afterInteractive"
      />
    </>
  );
}
