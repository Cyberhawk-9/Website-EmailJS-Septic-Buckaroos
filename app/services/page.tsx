import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Our Services - Buckaroos Septics, LLC',
  description: 'Comprehensive septic services for residential and commercial properties in the Prescott Quad City area.',
}

export default function ServicesPage() {
  const serviceCards = [
    { name: 'Residential Services', href: '/services/residential', image: '/images/08_Services_Residential-home-septic.png' },
    { name: 'Commercial Services', href: '/services/commercial', image: '/images/09_Services_Commercial-building.png' },
    { name: 'Septic Inspection & Certification', href: '/services/inspection-certification', image: '/images/10_Services_Inspection-technician.png' },
    { name: 'System Evaluations', href: '/services/evaluations', image: '/images/11_Services_Evaluation-assessment.png' },
    { name: 'Tank Cleanings', href: '/services/cleanings', image: '/images/12_Services_Pumping-truck-work.png' },
    { name: 'Tank Location', href: '/services/tank-location', image: '/images/13_Services_Tank-locating.png' },
    { name: 'Septic Treatments', href: '/services/treatments', image: '/images/14_Services_Treatment-application.png' },
    { name: 'Eljen System Pumping', href: '/services/eljen-pumping', image: '/images/15_Services_Eljen-system.png' },
    { name: 'Risers Installation', href: '/services/risers', image: '/images/16_Services_Riser-installation.png' },
  ]

  return (
    <main>
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">Our Services</h1>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto text-lg">
            From routine maintenance to emergency repairs, we provide comprehensive septic services for residential and commercial properties throughout the Prescott Quad City area.
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
    </main>
  )
}
