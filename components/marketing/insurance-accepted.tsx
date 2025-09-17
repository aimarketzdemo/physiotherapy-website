"use client";

import * as React from "react";
import { type ReactNode } from "react";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Insurance = { slug: string; label: string; color: `#${string}` };

const INSURANCE_COMPANIES: Insurance[] = [
  { slug: "manulife", label: "Manulife", color: "#00A651" },
  { slug: "sunlife", label: "Sun Life", color: "#FFD100" },
  { slug: "canadalife", label: "Canada Life", color: "#0066CC" },
  {
    slug: "desjardins",
    label: "Desjardins Financial Security",
    color: "#FF6900",
  },
  { slug: "greenshield", label: "Green Shield Canada", color: "#00A651" },
  { slug: "bluecross", label: "Blue Cross", color: "#0066CC" },
  { slug: "medaviebluecross", label: "Medavie Blue Cross", color: "#0066CC" },
  {
    slug: "canassurance",
    label: "Canassurance Hospital Service",
    color: "#003366",
  },
  { slug: "acadialife", label: "Acadia Life", color: "#CC0000" },
  { slug: "aetnalife", label: "Aetna Life Insurance", color: "#7B2CBF" },
  { slug: "alanca", label: "Alan CA Inc.", color: "#FF6B35" },
  { slug: "allstatelife", label: "Allstate Life Insurance", color: "#0066CC" },
  { slug: "americanbankers", label: "American Bankers Life", color: "#003366" },
  { slug: "americanhealth", label: "American Health & Life", color: "#E31837" },
  { slug: "americanincome", label: "American Income Life", color: "#FFD100" },
  { slug: "rbcinsurance", label: "RBC Insurance", color: "#003DA5" },
  { slug: "bmoinsurance", label: "BMO Insurance", color: "#0066CC" },
  {
    slug: "cooperators",
    label: "Co-operators Life Insurance",
    color: "#00A651",
  },
  {
    slug: "foresterslife",
    label: "Foresters Life Insurance",
    color: "#228B22",
  },
  { slug: "assumptionlife", label: "Assumption Life", color: "#8B0000" },
  { slug: "wawanesa", label: "Wawanesa Life", color: "#FF6900" },
  { slug: "ivari", label: "ivari", color: "#6B46C1" },
  {
    slug: "canadaprotection",
    label: "Canada Protection Plan",
    color: "#DC2626",
  },
  { slug: "humaniaassurance", label: "Humania Assurance", color: "#059669" },
  { slug: "ulmutual", label: "UL Mutual / UV Insurance", color: "#7C3AED" },
  { slug: "chubblife", label: "Chubb Life Insurance", color: "#1F2937" },
  { slug: "cibclife", label: "CIBC Life Insurance", color: "#DC2626" },
];

// Iconify map (Simple Icons)
const ICONS: Record<string, string> = {
  manulife: "simple-icons:manulife",
  sunlife: "simple-icons:sunlife",
  desjardins: "simple-icons:desjardins",
  rbcinsurance: "simple-icons:rbc",
  bmoinsurance: "simple-icons:bmo",
  cooperators: "simple-icons:thecooperators",
  wawanesa: "simple-icons:wawanesa",
  chubblife: "simple-icons:chubb",
  cibclife: "simple-icons:cibc",
  aetnalife: "simple-icons:aetna",
  allstatelife: "simple-icons:allstate",
  bluecross: "simple-icons:bluecrossblueshield",
  // fallbacks
  canadalife: "",
  greenshield: "",
  medaviebluecross: "",
  canassurance: "",
  acadialife: "",
  alanca: "",
  americanbankers: "",
  americanhealth: "",
  americanincome: "",
  foresterslife: "",
  assumptionlife: "",
  ivari: "",
  canadaprotection: "",
  humaniaassurance: "",
  ulmutual: "",
};

// Helpers
function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const toLin = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const R = toLin(r),
    G = toLin(g),
    B = toLin(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function darken(hex: string, amount = 0.35) {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (n: number) => Math.max(0, Math.min(255, n));
  const dr = clamp(Math.round(r * (1 - amount)));
  const dg = clamp(Math.round(g * (1 - amount)));
  const db = clamp(Math.round(b * (1 - amount)));
  return `#${[dr, dg, db]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;
}
function readableBrand(hex: string) {
  try {
    const L = relativeLuminance(hexToRgb(hex));
    return L > 0.7 ? darken(hex, 0.45) : hex;
  } catch {
    return hex;
  }
}

const MID = Math.ceil(INSURANCE_COMPANIES.length / 2);
const TOP = INSURANCE_COMPANIES.slice(0, MID);
const BOTTOM = INSURANCE_COMPANIES.slice(MID);

export default function InsuranceAccepted() {
  return (
    <TooltipProvider delayDuration={120}>
      <section
        aria-label="Insurance companies we accept"
        className="relative mx-auto my-10 max-w-7xl px-4 sm:my-12 sm:px-6 lg:my-16 lg:px-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Insurance{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Accepted
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We work with most major insurance providers
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 p-5 sm:p-6 md:p-7 backdrop-blur supports-[backdrop-filter]:bg-background/55">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className="px-1 pb-3 text-center text-xs text-foreground/60 sm:px-2">
            Direct billing available for most plans
          </p>

          <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <Row brands={TOP} direction="left" speed={80} />
            <Row
              brands={BOTTOM}
              direction="right"
              speed={100}
              className="mt-4 sm:mt-5"
            />
          </div>
        </div>

        <style jsx global>{`
          @keyframes marquee-x {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-x-rev {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0%);
            }
          }
          .animate-marquee-x {
            animation: marquee-x var(--marquee-duration, 22s) linear infinite;
          }
          .animate-marquee-x-rev {
            animation: marquee-x-rev var(--marquee-duration, 22s) linear
              infinite;
          }
        `}</style>
      </section>
    </TooltipProvider>
  );
}

function Row({
  brands,
  direction,
  speed,
  className = "",
}: {
  brands: Insurance[];
  direction: "left" | "right";
  speed: number;
  className?: string;
}) {
  const anim =
    direction === "left" ? "animate-marquee-x" : "animate-marquee-x-rev";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ul
        role="list"
        className={[
          "flex w-max flex-nowrap items-center",
          "gap-4 pl-2 sm:gap-5 sm:pl-3 md:gap-6 md:pl-4",
          "will-change-transform transform-gpu",
          anim,
          "motion-reduce:animate-none",
        ].join(" ")}
        style={
          { ["--marquee-duration" as any]: `${speed}s` } as React.CSSProperties
        }
      >
        {brands.map((b) => (
          <li key={`a-${b.slug}`} className="shrink-0">
            <TileWithTooltip label={b.label}>
              <InsuranceLogo slug={b.slug} label={b.label} color={b.color} />
            </TileWithTooltip>
          </li>
        ))}
        {brands.map((b) => (
          <li key={`b-${b.slug}`} className="shrink-0" aria-hidden>
            <TileWithTooltip label={b.label}>
              <InsuranceLogo slug={b.slug} label={b.label} color={b.color} />
            </TileWithTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TileWithTooltip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={[
            "flex h-12 w-12 items-center justify-center rounded-xl p-2.5",
            "sm:h-14 sm:w-14 sm:p-3 md:h-16 md:w-16 md:rounded-2xl md:p-3.5",
            "bg-white/90 from-white/75 to-white/50 bg-gradient-to-b",
            "border border-black/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,.55),0_1px_2px_rgba(0,0,0,.06)]",
            "dark:bg-white/88 dark:from-white/70 dark:to-white/45 dark:border-white/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_1px_2px_rgba(0,0,0,.35)]",
            "transition-transform duration-300 will-change-transform hover:scale-[1.035] active:scale-[0.98]",
          ].join(" ")}
          aria-label={label}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="px-2 py-1 text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

function InsuranceLogo({
  slug,
  label,
  color,
  size = 28,
}: {
  slug: string;
  label: string;
  color: `#${string}`;
  size?: number;
}) {
  const iconName = ICONS[slug];
  const displayColor = readableBrand(color);

  if (iconName) {
    return (
      <span className="inline-flex">
        <span className="drop-shadow-[0_0_1px_rgba(0,0,0,0.35)]">
          <Icon
            icon={iconName}
            width={size}
            height={size}
            style={{ color: displayColor }}
            aria-label={label}
            role="img"
          />
        </span>
      </span>
    );
  }

  const initials = label
    .split(/\s+/)
    .map((w) => w[0] ?? "")
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 3)
    .toUpperCase();

  return (
    <span
      className="font-semibold text-sm leading-none drop-shadow-[0_0_1px_rgba(0,0,0,0.35)]"
      style={{ color: displayColor }}
      title={label}
    >
      {initials}
    </span>
  );
}
