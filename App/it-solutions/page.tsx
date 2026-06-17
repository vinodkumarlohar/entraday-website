import type { Metadata } from 'next'
import {
  Cloud,
  Server,
  Network,
  Database,
  ShieldCheck,
  Cpu,
  GitBranch,
  Globe,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard, type ServiceItem } from '@/components/service-card'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'IT Solutions',
  description:
    'Cloud, infrastructure, networking, data, and security solutions engineered for enterprise scale by Entraday.',
}

const solutions: ServiceItem[] = [
  {
    icon: Cloud,
    title: 'Cloud Migration & Modernization',
    description:
      'Move to the cloud with zero downtime. We re-platform and re-architect workloads for AWS, Azure, and hybrid setups.',
  },
  {
    icon: Server,
    title: 'Data Center & Infrastructure',
    description:
      'Design, build, and optimize resilient on-prem and colocation infrastructure built for performance and reliability.',
  },
  {
    icon: Network,
    title: 'Networking & Connectivity',
    description:
      'Software-defined networking, SD-WAN, and secure connectivity that keeps your business always online.',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description:
      'Modern data platforms, warehousing, and BI that turn enterprise data into actionable intelligence.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Zero-trust architecture, threat detection, and compliance frameworks to protect every layer of your stack.',
  },
  {
    icon: Cpu,
    title: 'Virtualization & VDI',
    description:
      'VMware-powered virtualization and virtual desktop infrastructure for flexible, secure workforce enablement.',
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automation',
    description:
      'CI/CD pipelines, infrastructure-as-code, and automation that accelerate delivery and reduce risk.',
  },
  {
    icon: Globe,
    title: 'Digital Workplace',
    description:
      'Collaboration, endpoint management, and productivity tooling for the modern distributed enterprise.',
  },
]

export default function ITSolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="IT Solutions"
        title="Enterprise IT solutions built to scale"
        description="From cloud to the data center, Entraday designs and delivers technology solutions that move your business forward."
      />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="A complete portfolio of IT solutions"
            description="Every solution is tailored to your environment, your goals, and your industry's compliance requirements."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Not sure where to start?"
        description="Our architects will assess your environment and recommend the right solution mix."
      />
    </main>
  )
}
