import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'
import { Home, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Residential Septic Services - Buckaroos Septics, LLC',
  description: 'Professional residential septic services including pumping, inspections, and maintenance for homeowners in Chino Valley, AZ.',
}

export default function ResidentialPage() {
  return (
    <main>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Home className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Residential Septic Services</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Comprehensive septic solutions for homeowners in Chino Valley and surrounding areas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Professional Home Septic Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Buckaroos Septics, we understand that your home's septic system is a critical component of your property. Whether you're a current homeowner maintaining your system, a buyer needing a pre-purchase inspection, or a seller preparing for closing, we're here to help with quick, professional service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our residential services are designed to keep your septic system running smoothly, prevent costly emergencies, and protect your investment. We work with homeowners and realtors to ensure smooth transactions and peace of mind.
                </p>
              </CardContent>
            </Card>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/08_Services_Residential-home-septic.png"
                alt="Residential septic system service"
                fill
                className="object-cover"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Our Residential Services Include:</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Septic Tank Pumping',
                      description: 'Regular pumping every 3-5 years (or 2-3 years for Eljen systems) to prevent backups and system failure.',
                    },
                    {
                      title: 'Pre-Purchase Inspections',
                      description: 'Thorough inspections for home buyers to identify any issues before closing on your dream home.',
                    },
                    {
                      title: 'Pre-Sale Certifications',
                      description: 'Required certifications for home sellers to ensure a smooth and timely closing process.',
                    },
                    {
                      title: 'System Evaluations',
                      description: 'Comprehensive assessments of your septic system\'s condition and performance.',
                    },
                    {
                      title: 'Emergency Services',
                      description: 'Fast response when those unwanted flushed items come back with a vengeance.',
                    },
                    {
                      title: 'Preventive Maintenance',
                      description: 'Regular maintenance to extend the life of your system and avoid costly repairs.',
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Why Homeowners Choose Buckaroos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Fast response times</strong> - We know septic issues can\'t wait</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Personal service</strong> - You\'re a person, not a number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Realtor-friendly</strong> - We understand the importance of timely closings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Family-owned</strong> - Local business that cares about our community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Always hear a smile in our voice</strong> - Friendly, professional service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Your Service Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Request a Quote</h2>
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
