"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const services = [
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description:
      "Comprehensive assessment and treatment for musculoskeletal injuries, chronic pain, and movement disorders.",
    image: "/physiotherapy-treatment-session.jpg",
    features: ["Manual Therapy", "Exercise Prescription", "Pain Management", "Injury Prevention"],
    duration: "45-60 minutes",
    category: "Core Service",
  },
  {
    id: "sports-rehab",
    title: "Sports Rehabilitation",
    description:
      "Specialized treatment for sports injuries with focus on safe return to sport and performance optimization.",
    image: "/sports-rehabilitation-athlete-training.jpg",
    features: ["Sport-Specific Training", "Injury Recovery", "Performance Enhancement", "Biomechanical Analysis"],
    duration: "60 minutes",
    category: "Specialty",
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Therapeutic massage to reduce muscle tension, improve circulation, and promote healing.",
    image: "/therapeutic-massage-therapy-session.jpg",
    features: ["Deep Tissue Massage", "Trigger Point Release", "Relaxation Therapy", "Injury Treatment"],
    duration: "30-90 minutes",
    category: "Therapy",
  },
  {
    id: "acupuncture",
    title: "Acupuncture",
    description: "Traditional Chinese medicine technique for pain relief and promoting natural healing.",
    image: "/acupuncture-treatment-needles.jpg",
    features: ["Pain Relief", "Stress Reduction", "Improved Circulation", "Natural Healing"],
    duration: "45 minutes",
    category: "Alternative",
  },
  {
    id: "pelvic-health",
    title: "Pelvic Health Physiotherapy",
    description: "Specialized treatment for pelvic floor dysfunction, incontinence, and women's health issues.",
    image: "/pelvic-health-physiotherapy-consultation.jpg",
    features: ["Pelvic Floor Assessment", "Incontinence Treatment", "Pre/Post Natal Care", "Pain Management"],
    duration: "60 minutes",
    category: "Specialty",
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    description: "Targeted treatment for muscle trigger points and myofascial pain using thin needles.",
    image: "/dry-needling-physiotherapy-treatment.jpg",
    features: ["Trigger Point Release", "Muscle Relaxation", "Pain Reduction", "Improved Mobility"],
    duration: "30-45 minutes",
    category: "Technique",
  },
]

export default function ServicesClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20">
        <div className="absolute inset-0 bg-[url('/physiotherapy-clinic-interior.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive physiotherapy and rehabilitation services tailored to help you recover, perform better, and
            live pain-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Evidence-Based Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{service.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full group">
                      <Link href="/book-appointment">
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our experienced team is here to help you achieve your health and wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
