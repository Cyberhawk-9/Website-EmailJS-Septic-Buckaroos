import { ServicePageTemplate } from '@/components/service-page-template'
import { MapPin } from 'lucide-react'

export const metadata = {
  title: 'Septic Tank Location Services - Buckaroos Septics, LLC',
  description: 'Professional septic tank location services to find your tank quickly and accurately in Chino Valley, AZ.',
}

export default function TankLocationPage() {
  return (
    <ServicePageTemplate
      icon={MapPin}
      title="Septic Tank Location"
      subtitle="Can't find your septic tank? We'll locate it for you"
      introTitle="Professional Tank Location Services"
      introContent={
        <>
          <p>
            Lost track of where your septic tank is buried? You're not alone. Many homeowners, especially those who have recently purchased a property, don't know the exact location of their septic tank. This can make routine maintenance or emergency service difficult and time-consuming.
          </p>
          <p>
            At Buckaroos Septics, we use professional equipment and years of experience to quickly and accurately locate your septic tank. Once found, we can mark it for easy future reference and even install risers to make future service easier and more affordable.
          </p>
        </>
      }
      imagePath="/images/13_Services_Tank-locating.png"
      imageAlt="Septic tank location service"
      features={[
        {
          title: 'Professional Locating Equipment',
          description: 'We use metal detectors, probes, and other specialized tools to find your tank without damaging your yard.',
        },
        {
          title: 'Minimal Yard Disruption',
          description: 'Our experienced team knows where to look, minimizing unnecessary digging and disruption to your landscaping.',
        },
        {
          title: 'Tank Marking',
          description: 'Once located, we can mark your tank location for easy future reference and service.',
        },
        {
          title: 'Access Point Creation',
          description: 'If needed, we can dig down to the tank lid and prepare it for service or riser installation.',
        },
        {
          title: 'Riser Installation',
          description: 'We can install risers during the same visit to make future service easy and cost-effective.',
        },
        {
          title: 'Documentation',
          description: "We'll provide measurements and documentation of your tank location for your records.",
        },
      ]}
      benefits={[
        "<strong>Save time and money</strong> - No more guessing or unnecessary digging",
        "<strong>Professional equipment</strong> - Specialized tools for accurate location",
        "<strong>Experienced team</strong> - Years of experience finding tanks in all conditions",
        "<strong>One-time service</strong> - Once found and marked (or risered), you'll always know where it is",
        "<strong>Protect your yard</strong> - Minimal disruption to landscaping and property",
      ]}
    />
  )
}
