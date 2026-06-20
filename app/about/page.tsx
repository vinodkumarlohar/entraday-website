import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Award } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Entraday — our mission, values, and the team powering enterprise IT transformation from Bangalore.',
}

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower enterprises with technology that is secure, scalable, and built for tomorrow.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted IT partner for ambitious organizations across the globe.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Integrity, excellence, and partnership guide every decision and every engagement.',
  },
  {
    icon: Award,
    title: 'Our Promise',
    description:
      'Measurable outcomes, transparent communication, and technology that simply works.',
  },
]

const stats = [
  { value: '15+', label: 'Years in business' },
  { value: '500+', label: 'Projects delivered' },
  { value: '120+', label: 'Enterprise clients' },
  { value: '50+', label: 'Certified experts' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="The team powering your tomorrow"
        description="Entraday is an enterprise IT company helping businesses design, deploy, and manage the technology that drives them forward."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who we are"
                title="Enterprise technology, made simple"
              />
              <div className="mt-5 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <p>
                  Founded in Bangalore, Entraday has grown into a trusted partner
                  for enterprises seeking to modernize their technology and
                  operate with confidence. We combine deep technical expertise
                  with a genuine focus on business outcomes.
                </p>
                <p>
                  From cloud and infrastructure to managed services and strategic
                  consultancy, we deliver end-to-end solutions tailored to each
                  client. Our promise is simple: technology that works, partners
                  you can rely on, and a tomorrow worth building toward.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/images/team-meeting.png"
                alt="The Entraday team collaborating"
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-4xl font-bold text-accent">{stat.value}</dt>
                <dd className="mt-2 text-sm text-primary-foreground/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Our mission, vision, and values"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
