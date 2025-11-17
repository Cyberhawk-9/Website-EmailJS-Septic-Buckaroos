import { ServicePageTemplate } from '@/components/service-page-template'
import { Beaker } from 'lucide-react'

export const metadata = {
  title: 'Septic Treatments - Buckaroos Septics, LLC',
  description: 'Professional septic system treatments including bacterial additives and maintenance products in Chino Valley, AZ.',
}

export default function TreatmentsPage() {
  return (
    <ServicePageTemplate
      icon={Beaker}
      title="Septic Treatments"
      subtitle="Beneficial additives and treatments to optimize your septic system"
      introTitle="Professional Septic System Treatments"
      introContent={
        <>
          <p>
            Your septic system relies on beneficial bacteria to break down waste and function properly. Certain household products, medications, and chemicals can kill these bacteria, reducing your system's effectiveness. Buckaroos Septics offers professional-grade treatments to restore and maintain optimal bacterial levels in your septic tank.
          </p>
          <p>
            We recommend and provide bioForce, a powerful bacterial treatment that promotes septic activity, eliminates odors, and protects your drain lines. We can also apply RootX for root control in your lines. These treatments help keep your system running smoothly between pumpings and can extend the life of your septic system.
          </p>
        </>
      }
      imagePath="/images/14_Services_Treatment-application.png"
      imageAlt="Septic system treatment application"
      features={[
        {
          title: 'bioForce Application',
          description: 'Professional-grade bacterial treatment containing 300 billion organisms per packet to break down waste and restore system health.',
        },
        {
          title: 'RootX Root Control',
          description: 'Application of RootX foam to kill roots in lines and prevent regrowth for up to 12 months.',
        },
        {
          title: 'Odor Elimination',
          description: 'Treatments that eliminate septic odors at the source, not just mask them.',
        },
        {
          title: 'Bacterial Restoration',
          description: 'Replenishing beneficial bacteria after antibiotic use, harsh cleaning chemicals, or heavy bleach use.',
        },
        {
          title: 'Preventive Maintenance',
          description: 'Regular treatment applications as part of your system maintenance plan.',
        },
        {
          title: 'Product Sales',
          description: 'Purchase bioForce, RootX, and other treatments for DIY ongoing maintenance.',
        },
      ]}
      benefits={[
        '<strong>Improve system performance</strong> - Restore bacterial balance for optimal waste breakdown',
        '<strong>Eliminate odors</strong> - Get rid of unpleasant septic smells',
        '<strong>Prevent backups</strong> - Regular treatment reduces backup risk',
        '<strong>Professional-grade products</strong> - More effective than store-bought treatments',
        '<strong>Expert application</strong> - We know the right products and amounts for your system',
      ]}
    />
  )
}
