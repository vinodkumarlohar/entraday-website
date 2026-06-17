import { Zap, Users, Lock, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Zap,
    title: 'Speed & Agility',
    description:
      'Rapid deployment and proven delivery frameworks get you to value faster, without compromising quality.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Certified engineers and architects with deep experience across cloud, security, and enterprise systems.',
  },
  {
    icon: Lock,
    title: 'Security First',
    description:
      'Security and compliance are built into every layer of what we design, deploy, and manage.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description:
      'Solutions architected to grow with your business, from startup scale to global enterprise.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Entraday"
          title="The trusted technology partner for ambitious enterprises"
          description="We combine technical excellence with a relentless focus on your business outcomes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
