import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services | Family Physiotherapy & Sports Rehab Centre",
  description: "Comprehensive physiotherapy and sports rehabilitation services in Kitchener, Ontario.",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
