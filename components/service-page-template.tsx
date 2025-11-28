import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { CheckCircle, type LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageTemplateProps {
  icon: LucideIcon
  title: string
  subtitle: string
  introTitle: string
  introContent: ReactNode
  imagePath: string
  imageAlt: string
  features: ServiceFeature[]
  benefits?: string[]
  additionalContent?: ReactNode
}

export function ServicePageTemplate({
  icon: Icon,
  title,
  subtitle,
  introTitle,
  introContent,
  imagePath,
  imageAlt,
  features,
  benefits,
  additionalContent,
}: ServicePageTemplateProps) {
  return (
    <main>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
            </div>
            <p className="text-xl text-foreground">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{introTitle}</h2>
                <div className="text-foreground leading-relaxed space-y-4">{introContent}</div>
              </CardContent>
            </Card>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={imagePath || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            </div>

            {features.length > 0 && (
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">What We Provide:</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1 text-foreground">{feature.title}</h4>
                          <p className="text-sm text-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {additionalContent}

            {benefits && benefits.length > 0 && (
              <Card className="bg-orange-50 border-secondary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Buckaroos</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground" dangerouslySetInnerHTML={{ __html: benefit }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Your Service Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Request a Quote</h2>
            <Card className="bg-white">
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
