import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Clock, Heart, Star } from "lucide-react"

export default function HomePage() {
  const serviceCards = [
    {
      name: "Residential Services",
      href: "/services/residential",
      image: "/images/08_Services_Residential-home-septic.png",
    },
    { name: "Commercial Services", href: "/services/commercial", image: "/images/09_Services_Commercial-building.png" },
    {
      name: "Septic Inspection & Certification",
      href: "/services/inspection-certification",
      image: "/images/10_Services_Inspection-technician.png",
    },
    {
      name: "System Evaluations",
      href: "/services/evaluations",
      image: "/images/11_Services_Evaluation-assessment.png",
    },
    { name: "Tank Cleanings", href: "/services/cleanings", image: "/images/12_Services_Pumping-truck-work.png" },
    { name: "Tank Location", href: "/services/tank-location", image: "/images/13_Services_Tank-locating.png" },
    { name: "Septic Treatments", href: "/services/treatments", image: "/images/14_Services_Treatment-application.png" },
    { name: "Eljen System Pumping", href: "/services/eljen-pumping", image: "/images/15_Services_Eljen-system.png" },
    { name: "Risers Installation", href: "/services/risers", image: "/images/16_Services_Riser-installation.png" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroimagebackground.jpg"
            alt="Buckaroos Septics truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Professional Septic Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto">
            Family-owned and operated since 2013. Quick results with a smile serving the Prescott Quad City area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-[#980002]"
            >
              <a href="tel:928-771-2846">Call: 928-771-2846</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-border">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Quick Response</h3>
                <p className="text-foreground">
                  We know septic issues can sneak up on you fast. We respond quickly to get your problem solved.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Personal Service</h3>
                <p className="text-foreground">
                  You're not just a number to us. We treat every customer as the individual person they are.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Expert Service</h3>
                <p className="text-foreground">
                  Specializing in septic tank inspections, pumps, and maintenance for residential and commercial
                  properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose Buckaroos?</h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              We know septic issues can sneak up on you fast. Whether the buyer of your home really loves that kitchen
              and is wanting to close the deal sooner than expected, or those unwanted flushed away items are returning
              with a vengeance, call Buckaroos. Specializing in septic tank inspections & pumps.
            </p>
            <Button size="lg" asChild variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Our Services</h2>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive septic services for residential and
            commercial properties throughout the Prescott Quad City area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceCards.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-muted border-border">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-white text-lg text-balance">{service.name}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Request Service Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Get Your Free Quote</h2>
            <p className="text-center text-foreground mb-8">
              Fill out the form below and we'll get back to you promptly with your quote.
            </p>
            <Card className="bg-white border-border">
              <CardContent className="pt-6">
                <ContactForm compact />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
