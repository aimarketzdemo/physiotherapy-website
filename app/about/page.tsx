"use client"
import { Award, Users, Heart, Target, CheckCircle } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and personalized attention to ensure the best possible outcomes.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "Our team maintains the highest standards of professional practice through continuous education and evidence-based treatments.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work closely with patients, families, and healthcare providers to create comprehensive treatment plans.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Every treatment plan is designed with clear, measurable goals to track progress and ensure successful outcomes.",
    },
  ]

  const achievements = [
    "Licensed Physiotherapists with 15+ years experience",
    "Specialized training in sports rehabilitation",
    "Advanced manual therapy certifications",
    "Continuing education in latest treatment techniques",
    "Member of Canadian Physiotherapy Association",
    "Committed to evidence-based practice",
  ]

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                  About{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Our Clinic
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Family Physiotherapy & Sports Rehab Centre has been serving the Kitchener community for over 15 years,
                  providing exceptional physiotherapy and rehabilitation services under the expert leadership of Dr.
                  Andrzej Izdebski.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-physio-team.png"
                  alt="Our physiotherapy team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                    To provide comprehensive, evidence-based physiotherapy and sports rehabilitation services that
                    empower our patients to achieve their optimal physical health and return to the activities they
                    love.
                  </p>
                  <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                    We are committed to delivering personalized care in a supportive environment that promotes healing,
                    prevents injury, and enhances quality of life for every individual who walks through our doors.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "Dedicated to your recovery, committed to your success"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/physiotherapy-mission-care.jpg"
                  alt="Physiotherapy care and mission"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="h-full border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Meet Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Expert Team
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Led by Dr. Andrzej Izdebski, our team of licensed physiotherapists brings together decades of
                  experience in treating a wide range of conditions, from sports injuries to chronic pain management.
                </p>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <img
                      src="/dr-andrzej-izdebski-physiotherapist.jpg"
                      alt="Dr. Andrzej Izdebski"
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">Dr. Andrzej Izdebski</h3>
                    <p className="text-primary font-medium mb-2">Lead Physiotherapist & Clinic Director</p>
                    <p className="text-sm text-muted-foreground">
                      15+ years specializing in sports rehabilitation and manual therapy
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 sm:mt-8">
                <Card className="border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <img
                      src="/male-physiotherapist-professional.jpg"
                      alt="Dr. Michael Chen"
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">Dr. Michael Chen</h3>
                    <p className="text-primary font-medium mb-2">Sports Rehabilitation Specialist</p>
                    <p className="text-sm text-muted-foreground">
                      Expert in athletic performance and injury prevention
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              What sets us apart in physiotherapy and sports rehabilitation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-background to-primary/5 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  98% success rate in patient recovery with evidence-based treatment approaches
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/5 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-chart-1/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Individual treatment plans tailored to your specific needs and goals
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-accent/5 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-chart-3/20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From initial assessment to full recovery and prevention strategies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
