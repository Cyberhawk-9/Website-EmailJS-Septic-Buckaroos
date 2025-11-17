import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { CheckCircle, AlertTriangle, Info } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Septic 101 - Septic System Maintenance Tips | Buckaroos Septics',
  description: 'Learn essential septic system maintenance tips and best practices to keep your system running smoothly and avoid costly repairs.',
}

export default function Septic101Page() {
  return (
    <main>
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-card-foreground">Septic System 101</h1>
            <p className="text-xl text-card-foreground/70">
              Essential tips and best practices to maintain your septic system and avoid costly repairs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-secondary/10 border-secondary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-3">Understanding Your Septic System</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Your septic system is a critical component of your home that requires regular maintenance and care. Following these best practices will extend the life of your system, prevent costly emergencies, and protect your property investment. These guidelines are based on recommendations from the State of Arizona and Yavapai County for our local soil conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pumping Schedule */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Regular Pumping Schedule</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      The State of Arizona recommends that in this soil content for a family of 4 with a garbage disposal, septic tanks should be pumped every 3-5 years. For Eljen systems, Yavapai County recommends pumping once every 2-3 years.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Regular pumping prevents solids from overflowing into your drain field, which is one of the most expensive septic repairs possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Put Down the Drain */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">What Goes Down the Drain Matters</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you put nothing but solid waste and limit toilet paper use, your septic system will last much longer. Avoid flushing non-biodegradable items, feminine hygiene products, paper towels, or excessive amounts of toilet paper.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Effluent Screen Maintenance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Clean Your Effluent Screen</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you clean the effluent screen (for systems built in 2001 or newer) every 6-12 months, it will reduce the possibility of sewer backup significantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bacterial Health */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Maintain Bacterial Activity</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Use 3-4 tablespoons of ordinary baking yeast or bioForce (see our Recommended Products page) once a month to keep your system active in breaking down waste.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <strong>Important:</strong> Limit or avoid using antibacterial soaps and bleach. These products can kill the active bacteria your septic system needs to function effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tree Roots */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Protect Against Root Invasion</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Keep all trees (especially cottonwood and weeping willow) away from your septic system, including leach lines and tank, to avoid root invasion. Root damage can be extremely costly to repair.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garbage Disposal Usage */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Limit Garbage Disposal Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you limit or avoid using your garbage disposal, it will greatly reduce the chances of backup due to grease and materials which will not break down. Food waste, especially fats and oils, can clog your system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Tips */}
            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Additional Best Practices</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Spread out laundry loads throughout the week instead of doing many loads in one day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Use water-efficient fixtures to reduce the overall load on your system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Never park or drive heavy vehicles over your drain field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Divert roof drains and other surface water away from the drain field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Keep detailed records of septic system maintenance and inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Image placeholder */}
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/04_Septic-101_Septic-system-diagram.png"
                alt="Septic system diagram showing components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-card-foreground">Have Questions About Your Septic System?</h2>
            <p className="text-center text-card-foreground/70 mb-8">
              Contact us for expert advice and service
            </p>
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
