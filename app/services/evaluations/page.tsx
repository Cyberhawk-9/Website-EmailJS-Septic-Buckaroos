import { ServicePageTemplate } from '@/components/service-page-template'
import { Search } from 'lucide-react'

export const metadata = {
  title: 'Septic System Evaluations - Buckaroos Septics, LLC',
  description: 'Comprehensive septic system evaluations to assess performance, identify issues, and recommend solutions in Chino Valley, AZ.',
}

export default function EvaluationsPage() {
  return (
    <ServicePageTemplate
      icon={Search}
      title="Septic System Evaluations"
      subtitle="Comprehensive assessments to keep your system running optimally"
      introTitle="Professional System Evaluations"
      introContent={
        <>
          <p>
            A septic system evaluation goes beyond a basic inspection to provide a comprehensive assessment of your system's overall performance and condition. Whether you're experiencing issues, planning renovations, or simply want peace of mind about your system's health, our evaluations provide the detailed information you need.
          </p>
          <p>
            Our experienced team examines every component of your septic system, from the tank to the drain field, identifying current problems and potential concerns. We provide actionable recommendations to improve performance, extend system life, and prevent costly failures.
          </p>
        </>
      }
      imagePath="/images/11_Services_Evaluation-assessment.png"
      imageAlt="Septic system evaluation"
      features={[
        {
          title: 'Complete System Analysis',
          description: 'Thorough examination of all septic system components including tank, pipes, drain field, and related infrastructure.',
        },
        {
          title: 'Performance Testing',
          description: 'Assessment of how well your system is processing and disposing of wastewater to identify efficiency issues.',
        },
        {
          title: 'Problem Identification',
          description: 'Detection of current issues such as backups, slow drains, odors, or standing water in the drain field.',
        },
        {
          title: 'Capacity Assessment',
          description: 'Evaluation of whether your system is adequately sized for your household or business needs.',
        },
        {
          title: 'Maintenance Recommendations',
          description: 'Customized maintenance plan based on your system type, usage, and condition to prevent future problems.',
        },
        {
          title: 'Upgrade Consultation',
          description: 'Expert advice on system improvements, expansions, or replacements if needed.',
        },
      ]}
      benefits={[
        "<strong>Catch problems early</strong> - Identify issues before they become expensive repairs",
        "<strong>Optimize performance</strong> - Get recommendations to improve system efficiency",
        "<strong>Plan for the future</strong> - Know when upgrades or replacements may be needed",
        "<strong>Expert analysis</strong> - Years of experience with all types of septic systems",
        "<strong>Comprehensive reporting</strong> - Detailed findings and clear recommendations",
      ]}
    />
  )
}
