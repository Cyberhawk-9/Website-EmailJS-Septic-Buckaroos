import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'
import { CheckCircle, Package } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Recommended Products - Buckaroos Septics, LLC',
  description: 'Quality septic maintenance products including bioForce, RootX, and septic tank risers. Contact us to order.',
}

export default function ProductsPage() {
  return (
    <main>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recommended Products</h1>
            <p className="text-xl text-muted-foreground">
              Professional-grade products to maintain and protect your septic system
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* bioForce */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Package className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">bioForce</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We recommend the use of bioForce which helps break down waste in the septic tank. The product comes in a convenient water-soluble packet that promotes septic activity, eliminates odors, and protects lines.
                    </p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Synergized blend of selectively adapted bacillus organisms and free enzymes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Four-phase attack on all forms of organic matter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">One packet contains approximately 300 billion bacterial organisms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Periodic additions maintain bacteria levels for proper system functioning</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/05_Products_bioForce-product.png"
                        alt="bioForce septic treatment product"
                        fill
                        className="object-contain bg-muted/30"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RootX */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Package className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">RootX</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We also recommend RootX for root issues which include roots in the leach lines and/or septic tank. This powerful solution protects your system from costly root damage.
                    </p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3">How It Works:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Creates a sticky foam that leaves a residual above the water line</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Continues to kill roots and inhibits new growth for up to 12 months</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Can be used with or without mechanical root cutting equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Annual use greatly reduces the risk of line destruction and costly repairs</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-4 rounded-lg mb-4">
                      <p className="text-sm text-amber-900 dark:text-amber-100">
                        <strong>Important:</strong> If roots are cut and left untreated, they may come back bigger and stronger. This process will eventually destroy a sewer line and cost thousands to replace. RootX used annually will greatly reduce this risk.
                      </p>
                    </div>

                    <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/06_Products_RootX-product.png"
                        alt="RootX root treatment product"
                        fill
                        className="object-contain bg-muted/30"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Septic Tank Risers */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Package className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Septic Tank Risers</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We also provide risers and/or installation for easy access to your septic tank. Risers eliminate the need to dig up your yard every time your tank needs service, saving you time and money.
                    </p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3">Benefits:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Easy access for routine maintenance and inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">No more digging up your yard for service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Reduces cost of future service visits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Professional installation available</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/images/07_Products_Septic-riser.png"
                        alt="Septic tank riser installation"
                        fill
                        className="object-contain bg-muted/30"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order CTA */}
            <Card className="bg-accent/10 border-accent">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
                <p className="text-muted-foreground mb-6">
                  To order any of the above products or to schedule riser installation, please contact us using the form below or give us a call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Us to Order</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:928-771-2846">Call: 928-771-2846</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Questions About Our Products?</h2>
            <p className="text-center text-muted-foreground mb-8">
              Contact us for product information, pricing, or to place an order
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
