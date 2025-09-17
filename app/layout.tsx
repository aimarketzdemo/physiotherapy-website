import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script"; // ✅ import Script
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Physiotherapy & Sports Rehab Centre | Kitchener, ON",
  description:
    "Professional physiotherapy and sports rehabilitation services in Kitchener, Ontario. Expert treatment for injuries, pain management, and athletic performance.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        {/* ✅ GHL Chatbot Script */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="68ca0316fa0aac2fcc48c952"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
