import type { Metadata } from 'next'
import {
  Compass,
  Lightbulb,
  ClipboardCheck,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard, type ServiceItem } from '@/components/service-card'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Consultancy',
  description:
    'Strategic IT consultancy from Entraday: digital strategy, cloud advisory, security assessments, and transformation roadmaps.',
}

const services: ServiceItem[] = [
  {
    icon: Compass,
    title: 'Digital Strategy',
    description:
      'Align technology investments with business goals and build a clear, prioritized digital roadmap.',
  },
  {
    icon: Lightbulb,
    title: 'Cloud Advisory',
    description:
      'Independent guidance on cloud strategy, vendor selection, cost optimization, and governance.',
  },
  {
    icon: Target,
    title: 'Security Assessment',
    description:
      'Comprehensive audits, risk assessments, and remediation plans to strengthen your security posture.',
  },
  {
    icon: TrendingUp,
    title: 'Transformation Roadmaps',
    description:
      'Pragmatic, phased transformation plans that deliver measurable value at every milestone.',
  },
]

const process = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Discover',
    description:
      'We immerse ourselves in your business, technology, and goals to understand the full picture.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategize',
    description:
      'We craft a tailored strategy and roadmap, prioritized by impact and feasibility.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Execute',
    description:
      'We guide and support delivery, ensuring the strategy translates into real outcomes.',
  },
  {
    icon: Users,
    step: '04',
    title: 'Optimize',
    description:
      'We continuously measure, refine, and evolve to keep you ahead of the curve.',
  },
]

export default function ConsultancyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Consultancy"
        title="Strategic technology consultancy"
        description="Expert advisory that turns technology complexity into competitive advantage."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Advisory services"
            title="Guidance at every stage of your journey"
            description="From strategy to execution, our consultants bring deep expertise and an unbiased perspective."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our process"
            title="A proven approach to transformation"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.step}
                  className="relative rounded-xl border border-border bg-card p-6"
                >
                  <span className="text-4xl font-bold text-accent/30">
                    {p.step}
                  </span>
                  <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Plan your next move with confidence"
        description="Book a strategy session with our consultants and get a clear path forward."
      />
    </main>
  )
}
