"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Exercises for Lower Back Pain Relief",
      excerpt:
        "Discover evidence-based exercises that can help alleviate lower back pain and prevent future episodes. These simple movements can be done at home with no equipment needed.",
      author: "Dr. Andrzej Izdebski",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Pain Management",
      image: "/physiotherapy-treatment-session.jpg",
      slug: "lower-back-pain-exercises",
    },
    {
      id: 2,
      title: "Sports Injury Prevention: A Complete Guide for Athletes",
      excerpt:
        "Learn how to prevent common sports injuries through proper warm-up routines, strength training, and recovery strategies. Essential reading for athletes of all levels.",
      author: "Dr. Andrzej Izdebski",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Sports Medicine",
      image: "/sports-rehabilitation-athlete-training.jpg",
      slug: "sports-injury-prevention-guide",
    },
    {
      id: 3,
      title: "Understanding Physiotherapy: What to Expect in Your First Session",
      excerpt:
        "New to physiotherapy? This comprehensive guide walks you through what happens during your initial assessment and how to prepare for your first appointment.",
      author: "Dr. Andrzej Izdebski",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Patient Education",
      image: "/pelvic-health-physiotherapy-consultation.jpg",
      slug: "first-physiotherapy-session-guide",
    },
  ]

  const categories = ["All", "Pain Management", "Sports Medicine", "Patient Education", "Recovery Tips"]

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="absolute inset-0 bg-[url('/physiotherapy-clinic-interior.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Health & Wellness{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Expert insights, tips, and advice from our physiotherapy professionals to help you stay healthy, prevent
              injuries, and optimize your recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                    <Button asChild variant="ghost" className="text-primary hover:text-primary/80 p-0">
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our newsletter for the latest health tips and physiotherapy insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
