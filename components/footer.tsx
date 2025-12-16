import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lone Star Septic</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Texas-born, Texas-proud. Family-owned and operated since 2013. Serving the great state of Texas with
              professional septic services done right.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:512-555-STAR"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(512) 555-STAR</span>
              </a>
              <a
                href="mailto:info@lonestarsptic.com"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@lonestarseptic.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  PO Box 1836
                  <br />
                  Austin, TX 78767
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Monday - Friday</span>
              </div>
              <div className="pl-6">7:00 AM - 6:00 PM</div>
              <div className="pt-2">
                <strong>Saturday:</strong> 8:00 AM - 2:00 PM
              </div>
              <div>
                <strong>Sunday:</strong> Closed
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 duration-200"
              >
                About Us
              </Link>
              <Link
                href="/septic-101"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 duration-200"
              >
                Septic 101
              </Link>
              <Link
                href="/products"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 duration-200"
              >
                Recommended Products
              </Link>
              <Link
                href="/contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Lone Star Septic. All rights reserved. Proudly serving Texas.</p>
        </div>
      </div>
    </footer>
  )
}
