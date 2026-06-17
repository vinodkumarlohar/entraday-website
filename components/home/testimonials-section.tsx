import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Entraday transformed our infrastructure and cut our operational costs by 30%. Their team feels like an extension of ours.',
    name: 'Anita Sharma',
    role: 'CIO, FinServe Group',
  },
  {
    quote:
      'The MIT platform gave us complete visibility across our estate. We resolve incidents before they ever reach our users.',
    name: 'Rajesh Menon',
    role: 'Head of IT, RetailNext',
  },
  {
    quote:
      'Their managed services are flawless. 24/7 support that genuinely understands our business and responds instantly.',
    name: 'Priya Nair',
    role: 'VP Engineering, CloudWorks',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
