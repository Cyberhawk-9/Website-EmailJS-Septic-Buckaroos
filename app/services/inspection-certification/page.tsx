import { ServicePageTemplate } from '@/components/service-page-template'
import { ClipboardCheck } from 'lucide-react'

export const metadata = {
  title: 'Septic System Inspection & Certification - Buckaroos Septics, LLC',
  description: 'Professional septic system inspections and certifications for real estate transactions and property maintenance in Chino Valley, AZ.',
}

export default function InspectionCertificationPage() {
  return (
    <ServicePageTemplate
      icon={ClipboardCheck}
      title="Septic System Inspection & Certification"
      subtitle="Professional inspections for real estate transactions and system assessments"
      introTitle="Comprehensive Septic Inspections"
      introContent={
        <>
          <p>
            Whether you're buying, selling, or simply want to assess the condition of your septic system, Buckaroos Septics provides thorough inspections and certifications. We understand that real estate transactions often have tight timelines, and we work quickly to ensure your deal doesn't get delayed.
          </p>
          <p>
            Our certified inspections provide a complete assessment of your septic system's condition, identifying any current issues or potential problems. We provide detailed reports that meet all local requirements and give you the information you need to make informed decisions.
          </p>
        </>
      }
      imagePath="/images/10_Services_Inspection-technician.png"
      imageAlt="Septic system inspection in progress"
      features={[
        {
          title: 'Pre-Purchase Inspections',
          description: 'Thorough inspections for home buyers to identify any issues before closing. Protect your investment with a professional assessment.',
        },
        {
          title: 'Pre-Sale Certifications',
          description: 'Required certifications for sellers to ensure a smooth closing process. Many counties require septic certification before a home can be sold.',
        },
        {
          title: 'System Health Assessments',
          description: 'Regular inspections to catch small problems before they become major repairs. Recommended every 3-5 years along with pumping.',
        },
        {
          title: 'Tank Integrity Checks',
          description: 'Visual inspection of tank condition, including checking for cracks, leaks, or structural damage.',
        },
        {
          title: 'Drain Field Evaluation',
          description: 'Assessment of drain field condition and performance to ensure proper wastewater absorption.',
        },
        {
          title: 'Detailed Reporting',
          description: 'Comprehensive written reports with photos, findings, and recommendations for repairs or maintenance.',
        },
      ]}
      benefits={[
        "<strong>Fast turnaround</strong> - We know real estate deals move quickly",
        "<strong>Certified inspectors</strong> - Experienced professionals you can trust",
        "<strong>Detailed reports</strong> - Clear, comprehensive documentation",
        "<strong>Realtor-friendly</strong> - We work with agents to ensure smooth transactions",
        "<strong>Competitive pricing</strong> - Fair rates for quality inspections",
      ]}
    />
  )
}
