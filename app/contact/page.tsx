import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - Lone Star Septic",
  description:
    "Get in touch with Lone Star Septic for a free quote. Call us at (512) 555-STAR or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Ready to rope in some Texas-quality service? Fill out the form below or give us a holler!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="bg-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:512-555-STAR"
                        className="flex items-start gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-muted-foreground">(512) 555-STAR</div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@lonestarseptic.com"
                        className="flex items-start gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-muted-foreground break-all">info@lonestarseptic.com</div>
                        </div>
                      </a>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Address</div>
                          <div className="text-muted-foreground">
                            PO Box 1836
                            <br />
                            Austin, TX 78767
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold">Monday - Friday</span>
                      </div>
                      <div className="pl-7 text-muted-foreground">7:00 AM - 6:00 PM</div>
                      <div className="pl-7 pt-2">
                        <span className="font-semibold">Saturday:</span>
                        <span className="text-muted-foreground"> 8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="pl-7">
                        <span className="font-semibold">Sunday:</span>
                        <span className="text-muted-foreground"> Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
