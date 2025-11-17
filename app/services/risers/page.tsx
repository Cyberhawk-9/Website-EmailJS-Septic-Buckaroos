import { ServicePageTemplate } from '@/components/service-page-template'
import { ArrowUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Septic Tank Risers Installation - Buckaroos Septics, LLC',
  description: 'Professional septic tank riser installation for easy access and reduced service costs in Chino Valley, AZ.',
}

export default function RisersPage() {
  return (
    <ServicePageTemplate
      icon={ArrowUp}
      title="Septic Tank Risers Installation"
      subtitle="Easy access to your septic tank - save time and money on every service"
      introTitle="Professional Riser Installation"
      introContent={
        <>
          <p>
            If your septic tank is buried underground (and most are), every time you need service, a technician has to dig down to find and access the tank lid. This adds time, labor, and cost to every pumping or inspection. Septic tank risers solve this problem by bringing the access point to ground level.
          </p>
          <p>
            Installing risers is one of the smartest investments you can make in your septic system. The one-time installation cost pays for itself in just a few service calls through reduced labor charges. Plus, you'll eliminate the damage to your landscaping that comes with repeated digging.
          </p>
        </>
      }
      imagePath="/images/16_Services_Riser-installation.png"
      imageAlt="Septic tank riser installation"
      features={[
        {
          title: 'Professional Installation',
          description: 'Expert installation of quality risers that are properly sealed and secured to your tank.',
        },
        {
          title: 'Quality Materials',
          description: 'Durable, UV-resistant risers that will last for decades without cracking or deteriorating.',
        },
        {
          title: 'Various Sizes Available',
          description: 'Risers in multiple diameters and heights to fit any tank and bring access to ground level.',
        },
        {
          title: 'Secure Lids',
          description: 'Child-safe, lockable lids that blend with your landscaping while preventing unauthorized access.',
        },
        {
          title: 'Same-Day Installation',
          description: 'Risers can usually be installed during your regular pumping appointment.',
        },
        {
          title: 'Ground-Level Access',
          description: 'Brings tank access to grade, eliminating the need for digging on future service calls.',
        },
      ]}
      additionalContent={
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-3">Cost Savings Calculator</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Average cost to dig down to buried tank:</strong> $75-150 per service</p>
              <p><strong>Typical pumping frequency:</strong> Every 3-5 years</p>
              <p><strong>Savings over 15 years:</strong> $225-$750+</p>
              <p className="pt-2 text-foreground font-semibold">
                Risers typically pay for themselves in just 2-3 service calls, then continue saving you money for years to come!
              </p>
            </div>
          </CardContent>
        </Card>
      }
      benefits={[
        '<strong>Save money on every service</strong> - Eliminate digging charges on future service calls',
        '<strong>Protect your landscaping</strong> - No more damage from repeated digging',
        '<strong>Faster service</strong> - Technicians can access tank immediately',
        '<strong>Easy inspections</strong> - Check your tank anytime without digging',
        '<strong>Increase property value</strong> - A desirable feature for potential buyers',
      ]}
    />
  )
}
