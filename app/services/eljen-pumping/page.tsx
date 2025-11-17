import { ServicePageTemplate } from '@/components/service-page-template'
import { Layers } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Eljen (Alternative) System Pumping - Buckaroos Septics, LLC',
  description: 'Specialized pumping and maintenance services for Eljen alternative septic systems in Chino Valley, AZ.',
}

export default function EljenPumpingPage() {
  return (
    <ServicePageTemplate
      icon={Layers}
      title="Eljen (Alternative) System Pumping"
      subtitle="Specialized service for Eljen and alternative septic systems"
      introTitle="Expert Eljen System Service"
      introContent={
        <>
          <p>
            Eljen systems (also known as alternative or advanced treatment systems) require specialized knowledge and more frequent maintenance than traditional septic systems. These systems use innovative technology to provide enhanced wastewater treatment, making them ideal for challenging soil conditions or environmentally sensitive areas.
          </p>
          <p>
            Buckaroos Septics has extensive experience servicing Eljen and other alternative systems. Yavapai County recommends pumping Eljen systems every 2-3 years, more frequently than traditional systems. Our team understands the unique requirements of these systems and provides the specialized care they need to function properly.
          </p>
        </>
      }
      imagePath="/images/15_Services_Eljen-system.png"
      imageAlt="Eljen alternative septic system"
      features={[
        {
          title: 'Specialized Eljen Pumping',
          description: 'Proper pumping techniques specific to Eljen system requirements, ensuring all components are serviced correctly.',
        },
        {
          title: 'More Frequent Maintenance',
          description: 'Recommended every 2-3 years per Yavapai County guidelines, more frequent than traditional systems.',
        },
        {
          title: 'Component Inspection',
          description: 'Thorough inspection of all Eljen system components including pretreatment tanks and distribution systems.',
        },
        {
          title: 'Filter Maintenance',
          description: 'Cleaning and maintenance of filters critical to Eljen system performance.',
        },
        {
          title: 'Performance Assessment',
          description: 'Evaluation of system performance and treatment effectiveness during service.',
        },
        {
          title: 'Compliance Documentation',
          description: 'Detailed service records to demonstrate compliance with county requirements.',
        },
      ]}
      additionalContent={
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-3 text-amber-900 dark:text-amber-100">What is an Eljen System?</h3>
            <p className="text-amber-900/80 dark:text-amber-100/80 mb-4 leading-relaxed">
              Eljen Geotextile Sand Filters (GSF) are advanced wastewater treatment systems that provide a high level of treatment before discharge to the soil. They're often required in areas with poor soil conditions, high water tables, or when enhanced treatment is needed to protect groundwater or surface water.
            </p>
            <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed">
              These systems require more frequent pumping and maintenance than traditional septic systems, but they offer superior treatment and are often the only option for challenging sites. Proper maintenance is crucial for Eljen systems to function as designed and meet regulatory requirements.
            </p>
          </CardContent>
        </Card>
      }
      benefits={[
        "<strong>Eljen expertise</strong> - Specialized training and experience with alternative systems",
        "<strong>Proper maintenance schedule</strong> - We follow county guidelines for frequency",
        "<strong>Complete service</strong> - All components serviced, not just the tank",
        "<strong>Performance optimization</strong> - Keep your system working at peak efficiency",
        "<strong>Regulatory compliance</strong> - Meet all local requirements and documentation needs",
      ]}
    />
  )
}
