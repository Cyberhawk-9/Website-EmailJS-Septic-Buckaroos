import { ServicePageTemplate } from '@/components/service-page-template'
import { Droplets } from 'lucide-react'

export const metadata = {
  title: 'Septic System Cleanings - Buckaroos Septics, LLC',
  description: 'Professional septic tank pumping and cleaning services to maintain your system and prevent backups in Chino Valley, AZ.',
}

export default function CleaningsPage() {
  return (
    <ServicePageTemplate
      icon={Droplets}
      title="Septic System Cleanings"
      subtitle="Regular pumping and cleaning to keep your system running smoothly"
      introTitle="Professional Septic Tank Pumping"
      introContent={
        <>
          <p>
            Regular septic tank pumping is the most important maintenance task for your septic system. Over time, solid waste accumulates in your tank and must be removed to prevent backups, system failure, and costly damage. Arizona recommends pumping every 3-5 years for standard systems and every 2-3 years for Eljen systems.
          </p>
          <p>
            Our professional cleaning service includes complete pumping of your septic tank, inspection during the process, and proper disposal of waste at licensed facilities. We'll also check for any signs of damage or issues while we're there, giving you a complete picture of your system's health.
          </p>
        </>
      }
      imagePath="/images/12_Services_Pumping-truck-work.png"
      imageAlt="Septic tank pumping service"
      features={[
        {
          title: 'Complete Tank Pumping',
          description: 'Removal of all accumulated sludge and scum from your septic tank using professional vacuum equipment.',
        },
        {
          title: 'Multi-Compartment Service',
          description: 'Thorough pumping of all chambers in multi-compartment tanks to ensure complete cleaning.',
        },
        {
          title: 'Inspection During Service',
          description: 'Visual inspection of tank interior, baffles, and inlet/outlet pipes while tank is being pumped.',
        },
        {
          title: 'Effluent Filter Cleaning',
          description: 'Cleaning or replacement of effluent filters to prevent backups (for systems with filters installed).',
        },
        {
          title: 'Proper Waste Disposal',
          description: 'All waste disposed of at licensed facilities in compliance with environmental regulations.',
        },
        {
          title: 'Service Documentation',
          description: 'Record of service date, volume pumped, and any observations for your maintenance records.',
        },
      ]}
      benefits={[
        '<strong>Prevent backups</strong> - Regular pumping eliminates the #1 cause of septic emergencies',
        '<strong>Extend system life</strong> - Proper maintenance can add years to your septic system',
        '<strong>Avoid costly repairs</strong> - Catching issues during routine service saves money',
        '<strong>Professional equipment</strong> - Modern trucks and tools for efficient service',
        '<strong>Fast, clean service</strong> - In and out quickly with minimal disruption',
      ]}
    />
  )
}
