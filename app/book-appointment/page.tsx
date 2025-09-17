import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import CalendarClient from "@/components/booking/calendar-client"

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalendarClient />
        </div>
      </section>

      <Footer />
    </div>
  )
}
