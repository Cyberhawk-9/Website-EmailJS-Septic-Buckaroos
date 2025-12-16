import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection } from "@/components/animated-section"
import { Heart, Star, Shield, Award, Zap, Users, CheckCircle, TrendingUp } from "lucide-react"

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

  const texasValues = [
    {
      icon: Shield,
      title: "Texas-Sized Reliability",
      description:
        "Like a good neighbor helping with a barn raising, we're there when you need us. No job too big, no problem too small for Lone Star Septic.",
    },
    {
      icon: Heart,
      title: "Hometown Hospitality",
      description:
        "We treat every customer like family at a Sunday barbecue. You'll always get a warm Texas welcome and honest, straight-shooting advice.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "Over a decade of keeping Texas properties running smooth. We've earned our spurs in the septic business, and our reputation speaks for itself.",
    },
  ]

  return (
    <main>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroimagebackground.jpg"
            alt="Lone Star Septic service truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <AnimatedSection animation="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Everything's Bigger in Texas—
              <br />
              <span className="text-secondary">Especially Our Commitment</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-balance max-w-4xl mx-auto leading-relaxed">
              Saddle up with Lone Star Septic for professional service that's as dependable as a Texas sunrise.
              Family-owned since 2013, we're your neighbors serving the great Lone Star State with pride and expertise.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
                <Link href="/contact">Rope In Your Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-[#980002] text-lg px-8 py-6 hover:scale-105 transition-all"
              >
                <a href="tel:512-555-STAR">Call: (512) 555-STAR</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Texas Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Texans Choose Lone Star</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another septic company—we're your Texas neighbors who understand what it means to do
                business the right way.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {texasValues.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="pt-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="bg-secondary/20 p-6 rounded-full group-hover:bg-secondary/30 transition-colors group-hover:scale-110 duration-300">
                        <value.icon className="h-10 w-10 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Alternating Layout */}
      <section className="py-20 bg-gradient-to-br from-muted to-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <AnimatedSection animation="slide-left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/2025-11-17-12-20-37.jpg"
                  alt="Lone Star Septic truck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-semibold">Serving Texas Since 2013</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Born and Raised in the <span className="text-primary">Lone Star State</span>
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Founded right here in Texas by folks who know what it means to work hard and treat people right. Like
                  a trusty pickup truck that never lets you down, Lone Star Septic has been the go-to name for septic
                  services across the great state of Texas since 2013.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Whether you're closing on your dream ranch faster than expected, or dealing with a septic situation
                  that's gone sideways, we're here quicker than a jackrabbit. We specialize in septic tank inspections,
                  pumping, and keeping your property running smoother than a well-oiled windmill.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-foreground">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-foreground">Family Owned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-foreground">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-foreground">24/7 Emergency</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform bg-transparent"
                  asChild
                >
                  <Link href="/about">Hear Our Story</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview with Stagger Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Full-Service Septic Solutions</h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                From the Panhandle to the Gulf Coast, we've got all your septic needs covered like a ten-gallon hat
              </p>
              <p className="text-foreground max-w-4xl mx-auto leading-relaxed">
                Whether it's routine maintenance on your homestead or emergency repairs for your commercial property,
                Lone Star Septic brings Texas-sized expertise to every job. We don't cut corners—we round 'em up and
                rope 'em in right.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceCards.map((service, index) => (
              <AnimatedSection key={service.href} animation="fade-up" delay={index * 50}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] bg-muted border-border">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-primary/90 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-bold text-white text-xl text-balance mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                          {service.name}
                        </h3>
                        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to learn more →
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scale" delay={300}>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Link href="/contact">Request Service Today</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We're Different - Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Lone Star Difference</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Numbers don't lie—here's why Texans trust us with their septic systems
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "10+", label: "Years in Business", icon: TrendingUp },
              { number: "5000+", label: "Happy Customers", icon: Users },
              { number: "24/7", label: "Emergency Service", icon: Zap },
              { number: "100%", label: "Satisfaction Rate", icon: Star },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors">
                      <stat.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-white/90">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Neighbors Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it—hear from fellow Texans
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                location: "Austin, TX",
                text: "Lone Star Septic came through for us faster than a tumbleweed in a dust storm! Professional, courteous, and they treated our property like it was their own. Couldn't ask for better service.",
              },
              {
                name: "James R.",
                location: "Houston, TX",
                text: "Been using them for years on our ranch. They're as reliable as the North Star and twice as bright. Fair prices, honest work, and they always show up when they say they will.",
              },
              {
                name: "Maria G.",
                location: "San Antonio, TX",
                text: "As a realtor, I need septic inspections done quick and right. Lone Star delivers every single time. They've helped me close more deals than I can count. True Texas professionals!",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 100}>
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Rope In Your Free Quote</h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Fill out the form quicker than a two-step at a honky-tonk, and we'll get back to you faster than you
                  can say "yeehaw"
                </p>
                <p className="text-foreground">
                  Whether you're dealing with an emergency or planning routine maintenance, we're here to help. That's
                  the Texas way.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={200}>
              <Card className="bg-muted border-border shadow-xl">
                <CardContent className="pt-8">
                  <ContactForm compact />
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
