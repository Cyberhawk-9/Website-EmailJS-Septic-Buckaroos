import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import Link from 'next/link'
import { Heart, Users, Clock, Award, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'About Us - Buckaroos Septics, LLC',
  description: 'Learn about Buckaroos Septics, a family-owned septic services company operating in the Prescott Quad City area since 2013.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-card-foreground">About Buckaroos Septics</h1>
            <p className="text-xl text-card-foreground/70">
              Family-owned, professionally operated, and dedicated to exceptional service since 2013
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Originally founded in 2006, Lew Nickel has owned and operated Buckaroos since April, 2013. Buckaroos is a family owned company with a crew genuinely eager to perform their best for our customers.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You will experience quick results, and always hear a smile in our voice. Realtors or homeowners, you will notice the difference because we treat you as the individual person you are and not like a number.
                </p>
                <p className="text-lg leading-relaxed">
                  If you need a septic tank inspection or pump, please call us for your quote, and, let us know if someone made you smile today.
                </p>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="mb-8 bg-secondary/10 border-secondary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Serving the Prescott Quad City Area</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Based in Chino Valley, we proudly serve residential and commercial customers throughout the Prescott Quad City area. Our local expertise means we understand the unique soil conditions and septic system requirements of our region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/2025-11-17-12-20-37.jpg"
                  alt="Buckaroos Septics service truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/2025-11-17-12-20-10.jpg"
                  alt="Septic system installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold mb-8 text-center">Why Customers Choose Buckaroos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Heart className="h-8 w-8 text-secondary flex-shrink-0" />
                    <h3 className="font-bold text-xl">Family Values</h3>
                  </div>
                  <p className="text-muted-foreground">
                    As a family-owned business, we bring that same care and attention to every customer we serve. We're not a faceless corporation—we're your neighbors.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="h-8 w-8 text-secondary flex-shrink-0" />
                    <h3 className="font-bold text-xl">Experienced Team</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our crew is genuinely eager to perform their best, bringing years of expertise to every job. We stay current with industry best practices and Arizona regulations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Phone className="h-8 w-8 text-secondary flex-shrink-0" />
                    <h3 className="font-bold text-xl">Personal Touch</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You'll always hear a smile in our voice and be treated as an individual, never as just a number. We remember our customers and their specific needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
                    <h3 className="font-bold text-xl">Fast Response</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We know septic issues can't wait. That's why we prioritize quick response times and efficient service to get your system back up and running.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What Sets Us Apart */}
            <Card className="mb-8 bg-card">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">What Sets Us Apart</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-card-foreground">Realtor-Friendly Service</h4>
                      <p className="text-card-foreground/70 text-sm">We understand the time-sensitive nature of real estate transactions. We work efficiently to meet closing deadlines without compromising quality.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-card-foreground">Local Knowledge</h4>
                      <p className="text-card-foreground/70 text-sm">Years of experience in the Prescott Quad City area means we understand local soil conditions, county requirements, and common septic system challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-card-foreground">Comprehensive Services</h4>
                      <p className="text-card-foreground/70 text-sm">From routine pumping to complex system evaluations, we offer complete septic services so you never need to call multiple companies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-card-foreground">Transparent Pricing</h4>
                      <p className="text-card-foreground/70 text-sm">We provide clear, upfront quotes with no hidden fees. You'll know exactly what to expect before we begin any work.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Quote Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-card-foreground">Ready to Work With Us?</h2>
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
