import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "lower-back-pain-exercises": {
    title: "5 Essential Exercises for Lower Back Pain Relief",
    author: "Dr. Andrzej Izdebski",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Pain Management",
    image: "/physiotherapy-treatment-session.jpg",
    content: `
      <p>Lower back pain affects millions of people worldwide and is one of the leading causes of disability. The good news is that many cases of lower back pain can be effectively managed with the right exercises and lifestyle modifications.</p>
      
      <h2>Understanding Lower Back Pain</h2>
      <p>Before diving into exercises, it's important to understand that lower back pain can have various causes, including muscle strain, herniated discs, arthritis, or poor posture. Always consult with a healthcare professional before starting any exercise program, especially if you're experiencing severe or persistent pain.</p>
      
      <h2>The 5 Essential Exercises</h2>
      
      <h3>1. Cat-Cow Stretch</h3>
      <p>This gentle movement helps improve spinal flexibility and reduces tension in the lower back muscles. Start on your hands and knees, then alternate between arching your back (cow) and rounding it (cat). Perform 10-15 repetitions slowly and controlled.</p>
      
      <h3>2. Knee-to-Chest Stretch</h3>
      <p>Lie on your back and gently pull one knee toward your chest, holding for 20-30 seconds. This stretch helps relieve tension in the lower back and hip flexors. Repeat with both legs.</p>
      
      <h3>3. Pelvic Tilts</h3>
      <p>Lying on your back with knees bent, gently tilt your pelvis to flatten your lower back against the floor. Hold for 5 seconds and repeat 10-15 times. This exercise strengthens your core and improves posture.</p>
      
      <h3>4. Bird Dog</h3>
      <p>From a hands-and-knees position, extend your opposite arm and leg simultaneously, holding for 5-10 seconds. This exercise improves core stability and coordination while strengthening the back muscles.</p>
      
      <h3>5. Modified Plank</h3>
      <p>Start with a wall plank or knee plank if you're a beginner. This exercise strengthens your entire core, providing better support for your lower back. Hold for 15-30 seconds and gradually increase the duration.</p>
      
      <h2>Important Safety Tips</h2>
      <ul>
        <li>Start slowly and gradually increase intensity</li>
        <li>Stop if you experience increased pain</li>
        <li>Focus on proper form rather than speed</li>
        <li>Breathe normally throughout each exercise</li>
        <li>Consistency is key - perform these exercises daily</li>
      </ul>
      
      <h2>When to Seek Professional Help</h2>
      <p>While these exercises can be very effective for many people, it's important to seek professional help if you experience severe pain, numbness, tingling, or if your symptoms worsen. A physiotherapist can provide a personalized assessment and treatment plan tailored to your specific needs.</p>
      
      <p>Remember, recovery takes time, and everyone's journey is different. Be patient with yourself and celebrate small improvements along the way.</p>
    `,
  },
  "sports-injury-prevention-guide": {
    title: "Sports Injury Prevention: A Complete Guide for Athletes",
    author: "Dr. Andrzej Izdebski",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Sports Medicine",
    image: "/sports-rehabilitation-athlete-training.jpg",
    content: `
      <p>Sports injuries can sideline athletes for weeks or even months, but many of these injuries are preventable with the right approach to training, preparation, and recovery.</p>
      
      <h2>Common Sports Injuries</h2>
      <p>Understanding the most common sports injuries can help you take targeted prevention measures:</p>
      <ul>
        <li>Ankle sprains</li>
        <li>Knee injuries (ACL, meniscus tears)</li>
        <li>Shoulder impingement</li>
        <li>Tennis elbow</li>
        <li>Hamstring strains</li>
        <li>Concussions</li>
      </ul>
      
      <h2>The Foundation of Injury Prevention</h2>
      
      <h3>Proper Warm-Up</h3>
      <p>A comprehensive warm-up should include:</p>
      <ul>
        <li>5-10 minutes of light cardiovascular activity</li>
        <li>Dynamic stretching specific to your sport</li>
        <li>Sport-specific movement patterns</li>
        <li>Gradual intensity increase</li>
      </ul>
      
      <h3>Strength Training</h3>
      <p>Regular strength training helps prevent injuries by:</p>
      <ul>
        <li>Strengthening muscles, tendons, and ligaments</li>
        <li>Improving bone density</li>
        <li>Enhancing neuromuscular control</li>
        <li>Correcting muscle imbalances</li>
      </ul>
      
      <h3>Flexibility and Mobility</h3>
      <p>Maintaining good flexibility and mobility through regular stretching and mobility work helps prevent injuries by ensuring joints can move through their full range of motion.</p>
      
      <h2>Recovery and Rest</h2>
      <p>Recovery is just as important as training. Adequate rest allows your body to repair and strengthen itself. Include rest days in your training schedule and listen to your body's signals.</p>
      
      <h2>Nutrition and Hydration</h2>
      <p>Proper nutrition and hydration support injury prevention by:</p>
      <ul>
        <li>Providing energy for training and recovery</li>
        <li>Supporting tissue repair and growth</li>
        <li>Maintaining electrolyte balance</li>
        <li>Reducing inflammation</li>
      </ul>
      
      <h2>Equipment and Environment</h2>
      <p>Using proper equipment and being aware of your training environment can significantly reduce injury risk. This includes wearing appropriate footwear, using protective gear, and training in safe conditions.</p>
      
      <h2>Creating Your Prevention Plan</h2>
      <p>Work with a qualified professional to develop a personalized injury prevention plan that takes into account your sport, training history, and individual risk factors.</p>
    `,
  },
  "first-physiotherapy-session-guide": {
    title: "Understanding Physiotherapy: What to Expect in Your First Session",
    author: "Dr. Andrzej Izdebski",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Patient Education",
    image: "/pelvic-health-physiotherapy-consultation.jpg",
    content: `
      <p>Starting physiotherapy can feel overwhelming, especially if it's your first time. Understanding what to expect can help you feel more prepared and confident about your treatment journey.</p>
      
      <h2>Before Your First Appointment</h2>
      
      <h3>What to Bring</h3>
      <ul>
        <li>Valid health card and insurance information</li>
        <li>Any relevant medical reports or imaging results</li>
        <li>List of current medications</li>
        <li>Comfortable, loose-fitting clothing</li>
        <li>Athletic shoes</li>
      </ul>
      
      <h3>Preparing for Your Visit</h3>
      <p>Think about your symptoms and how they affect your daily activities. Consider when the pain started, what makes it better or worse, and any activities you're unable to do because of your condition.</p>
      
      <h2>The Initial Assessment</h2>
      
      <h3>Medical History</h3>
      <p>Your physiotherapist will ask detailed questions about:</p>
      <ul>
        <li>Your current symptoms and pain levels</li>
        <li>How and when your injury occurred</li>
        <li>Previous injuries or surgeries</li>
        <li>Your activity level and goals</li>
        <li>Work and lifestyle factors</li>
      </ul>
      
      <h3>Physical Examination</h3>
      <p>The physical examination may include:</p>
      <ul>
        <li>Observing your posture and movement patterns</li>
        <li>Testing your range of motion</li>
        <li>Assessing muscle strength</li>
        <li>Checking reflexes and sensation</li>
        <li>Palpating (feeling) the affected area</li>
      </ul>
      
      <h2>Treatment Planning</h2>
      <p>Based on the assessment findings, your physiotherapist will:</p>
      <ul>
        <li>Explain your diagnosis and prognosis</li>
        <li>Discuss treatment options</li>
        <li>Set realistic goals together</li>
        <li>Create a personalized treatment plan</li>
        <li>Provide initial treatment if appropriate</li>
      </ul>
      
      <h2>What Happens Next</h2>
      
      <h3>Follow-up Appointments</h3>
      <p>Subsequent sessions typically focus on:</p>
      <ul>
        <li>Manual therapy techniques</li>
        <li>Therapeutic exercises</li>
        <li>Education about your condition</li>
        <li>Home exercise programs</li>
        <li>Progress monitoring and plan adjustments</li>
      </ul>
      
      <h3>Home Exercise Program</h3>
      <p>Your physiotherapist will likely give you exercises to do at home. These are crucial for your recovery and should be performed as prescribed.</p>
      
      <h2>Tips for Success</h2>
      <ul>
        <li>Be honest about your pain levels and limitations</li>
        <li>Ask questions if you don't understand something</li>
        <li>Follow your home exercise program consistently</li>
        <li>Communicate any changes in your symptoms</li>
        <li>Be patient - recovery takes time</li>
      </ul>
      
      <h2>Common Concerns</h2>
      
      <h3>"Will it hurt?"</h3>
      <p>Some discomfort during treatment is normal, but you should never experience severe pain. Always communicate with your physiotherapist about your comfort level.</p>
      
      <h3>"How long will it take?"</h3>
      <p>Recovery time varies depending on your condition, severity, and individual factors. Your physiotherapist will give you a realistic timeline based on your specific situation.</p>
      
      <p>Remember, physiotherapy is a collaborative process. Your active participation and commitment to the treatment plan are essential for achieving the best possible outcomes.</p>
    `,
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
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

            <h1 className="text-3xl lg:text-4xl font-bold text-balance">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "prose prose-lg max-w-none",
              // Headings: bold + brand color + tight tracking
              "prose-headings:font-bold prose-headings:tracking-tight",
              "prose-h2:text-primary prose-h3:text-primary prose-h4:text-primary",
              // Body & emphasis
              "prose-p:text-muted-foreground prose-strong:text-foreground",
              // Lists: better spacing + brand-colored bullets
              "prose-ul:my-4 prose-ol:my-4",
              "prose-li:text-muted-foreground prose-li:marker:text-primary",
              // Links
              "prose-a:text-primary hover:prose-a:underline",
              // Blockquote & hr styling
              "prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4",
              "prose-blockquote:text-foreground/90",
              "prose-hr:border-border",
              // Images inside content (if any)
              "prose-img:rounded-xl prose-img:shadow",
              // Smaller captions
              "prose-figcaption:text-xs prose-figcaption:text-muted-foreground",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-xl text-muted-foreground">
              Book an appointment with our expert physiotherapy team today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
