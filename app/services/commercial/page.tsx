import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'
import { Building2, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Commercial Septic Services - Buckaroos Septics, LLC',
  description: 'Professional commercial septic services for businesses, property managers, and commercial properties in Chino Valley, AZ.',
}

export default function CommercialPage() {
  return (
    <main>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Commercial Septic Services</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Reliable septic solutions for businesses and commercial properties
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Professional Commercial Septic Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Buckaroos Septics provides comprehensive septic services for commercial properties, businesses, and property managers throughout Chino Valley and the surrounding areas. We understand that your business can't afford downtime due to septic system issues.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commercial services are designed to minimize disruption to your operations while ensuring your septic system remains compliant with all regulations. We offer flexible scheduling, including after-hours service, to accommodate your business needs.
                </p>
              </CardContent>
            </Card>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/09_Services_Commercial-building.png"
                alt="Commercial septic system service"
                fill
                className="object-cover"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Commercial Services We Provide:</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Regular Maintenance Programs',
                      description: 'Scheduled pumping and inspections to prevent system failures and ensure compliance.',
                    },
                    {
                      title: 'Emergency Response',
                      description: 'Fast 24/7 emergency service to minimize business interruption.',
                    },
                    {
                      title: 'System Inspections',
                      description: 'Thorough inspections to identify potential issues before they become costly problems.',
                    },
                    {
                      title: 'High-Capacity Pumping',
                      description: 'Equipment and expertise to handle large commercial septic systems.',
                    },
                    {
                      title: 'Compliance Certifications',
                      description: 'Required certifications and documentation for regulatory compliance.',
                    },
                    {
                      title: 'Property Manager Services',
                      description: 'Coordinated service for multiple properties with detailed reporting.',
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

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Industries We Serve:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Restaurants & Food Service',
                    'Hotels & Lodging',
                    'Office Buildings',
                    'Retail Centers',
                    'Healthcare Facilities',
                    'Schools & Institutions',
                    'Industrial Facilities',
                    'Multi-Family Housing',
                    'RV Parks & Campgrounds',
                    'Churches & Community Centers',
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Why Businesses Trust Buckaroos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Minimal disruption</strong> - We work around your schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Reliable service</strong> - On-time, every time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Professional documentation</strong> - Detailed reports and certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Competitive pricing</strong> - Fair quotes with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Local expertise</strong> - Years of experience with Arizona commercial systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Commercial Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Request a Commercial Quote</h2>
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
