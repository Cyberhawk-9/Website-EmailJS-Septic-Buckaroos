'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  const handleCloseTab = () => {
    window.close()
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-6 rounded-full">
                <CheckCircle className="h-16 w-16 text-accent" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              We've received your request and will get back to you shortly.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team typically responds within 24 hours during business days. If you need immediate assistance, please call us at{' '}
              <a href="tel:928-771-2846" className="font-semibold text-primary hover:underline">
                928-771-2846
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button size="lg" variant="outline" onClick={handleCloseTab}>
                Close Tab
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
