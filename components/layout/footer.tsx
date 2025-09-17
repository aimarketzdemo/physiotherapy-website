import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  const businessHours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 3:00 PM" },
    { day: "Saturday - Sunday", hours: "Closed" },
  ];

  const services = [
    "Physiotherapy",
    "Sports Rehabilitation",
    "Manual Therapy",
    "Exercise Therapy",
    "Pain Management",
    "Injury Prevention",
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / about */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Family Physiotherapy & Sports Rehab Centre"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Professional physiotherapy and sports rehabilitation services in
              Kitchener, Ontario. Expert treatment for injuries, pain
              management, and athletic performance.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <a
                aria-label="Facebook"
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+15192088811"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (519) 208-8811
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@familyphysio.ca"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@familyphysio.ca
                </a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <address className="not-italic">
                  Williamsburg Community Centre
                  <br />
                  1187 Fischer-Hallman Rd #608
                  <br />
                  Kitchener, ON N2E 4H9
                </address>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">
              Business Hours
            </h3>
            <ul className="space-y-3">
              {businessHours.map(({ day, hours }) => (
                <li key={day} className="flex items-start gap-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{day}</p>
                    <p className="text-muted-foreground">{hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 Family Physiotherapy &amp; Sports Rehab Centre. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
