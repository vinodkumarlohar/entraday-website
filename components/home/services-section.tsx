import {
  Cloud,
  Server,
  ShieldCheck,
  Network,
  Database,
  Settings,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard, type ServiceItem } from '@/components/service-card'

const services: ServiceItem[] = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Migrate, modernize, and manage your workloads across AWS, Azure, and hybrid environments with confidence.',
    href: '/it-solutions',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description:
      'Design resilient, high-performance data center and network infrastructure built for enterprise scale.',
    href: '/it-solutions',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Protect your business with proactive threat detection, compliance, and zero-trust security frameworks.',
    href: '/managed-services',
  },
  {
    icon: Network,
    title: 'Managed Services',
    description:
      '24/7 monitoring, support, and optimization so your teams can focus on what matters most.',
    href: '/managed-services',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description:
      'Turn raw data into decisions with modern data platforms, warehousing, and business intelligence.',
    href: '/it-solutions',
  },
  {
    icon: Settings,
    title: 'IT Consultancy',
    description:
      'Strategic advisory to align technology investments with your business goals and digital roadmap.',
    href: '/consultancy',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end IT services for modern enterprises"
          description="From cloud and infrastructure to security and strategy, Entraday delivers the full spectrum of enterprise technology services."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
