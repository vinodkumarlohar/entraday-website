import type { Metadata } from 'next'
import {
  Headphones,
  ShieldCheck,
  Cloud,
  Monitor,
  HardDrive,
  RefreshCw,
  Check,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard, type ServiceItem } from '@/components/service-card'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Managed Services',
  description:
    '24/7 managed IT services from Entraday: monitoring, security operations, cloud management, and end-user support.',
}

const services: ServiceItem[] = [
  {
    icon: Headphones,
    title: '24/7 Service Desk',
    description:
      'Round-the-clock support with rapid response times and a single point of contact for all IT issues.',
  },
  {
    icon: Monitor,
    title: 'Infrastructure Monitoring',
    description:
      'Proactive monitoring that detects and resolves issues before they impact your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Managed Security (SOC)',
    description:
      'A dedicated security operations team monitoring threats and responding to incidents 24/7.',
  },
  {
    icon: Cloud,
    title: 'Cloud Management',
    description:
      'Optimize cost, performance, and security across your cloud estate with hands-on management.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    description:
      'Resilient backup and recovery strategies that keep your data safe and your business running.',
  },
  {
    icon: RefreshCw,
    title: 'Patch & Lifecycle',
    description:
      'Automated patching and lifecycle management to keep systems secure and up to date.',
  },
]

const slaTiers = [
  { metric: '< 15 min', label: 'Critical response time' },
  { metric: '99.9%', label: 'Guaranteed uptime' },
  { metric: '24/7/365', label: 'Coverage' },
  { metric: '< 1 hr', label: 'Average resolution' },
]

export default function ManagedServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Managed Services"
        title="Your IT, expertly managed around the clock"
        description="Offload the day-to-day so your team can focus on innovation. We monitor, maintain, and secure your environment 24/7."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we manage"
            title="Comprehensive managed services"
            description="A fully managed experience covering every layer of your IT operations."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Service levels you can rely on
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Backed by clear, contractual SLAs and a team that treats your
              uptime as their own.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {slaTiers.map((tier) => (
              <div key={tier.label} className="text-center">
                <dt className="text-3xl font-bold text-accent sm:text-4xl">
                  {tier.metric}
                </dt>
                <dd className="mt-2 text-sm text-primary-foreground/70">
                  {tier.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="The Entraday difference"
              title="A proactive partner, not just a vendor"
              description="We don't wait for things to break. Our managed services model is built around prevention, optimization, and continuous improvement."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                'Dedicated account team',
                'Transparent monthly reporting',
                'Predictable flat-rate pricing',
                'Vendor management included',
                'Continuous optimization',
                'Seamless onboarding',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let us manage the complexity"
        description="Get a free assessment of your current IT operations and a tailored managed services proposal."
      />
    </main>
  )
}
