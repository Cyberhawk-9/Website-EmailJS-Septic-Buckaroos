import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Buckaroos Septics, LLC',
  description: 'Get in touch with Buckaroos Septics for a free quote. Call us at 928-771-2846 or fill out our contact form.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Ready to get started? Fill out the form below or give us a call!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <a href="tel:928-771-2846" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-muted-foreground">928-771-2846</div>
                        </div>
                      </a>
                      
                      <a href="mailto:buckaroospotties_septics@yahoo.com" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-muted-foreground break-all">buckaroospotties_septics@yahoo.com</div>
                        </div>
                      </a>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Address</div>
                          <div className="text-muted-foreground">
                            PO Box 562<br />
                            Chino Valley, AZ 86323
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold">Monday - Friday</span>
                      </div>
                      <div className="pl-7 text-muted-foreground">8:00 AM - 5:00 PM</div>
                      <div className="pl-7 pt-2">
                        <span className="font-semibold">Saturday - Sunday:</span>
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
