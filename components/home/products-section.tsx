import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const features = [
  'Real-time infrastructure monitoring',
  'Automated incident response',
  'Unified asset & license management',
  'Compliance and audit reporting',
]

export function ProductsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-foreground">
          <SectionHeading
            eyebrow="Our Products"
            title="Software that powers your operations"
          />
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground">
              MIT — Managed IT Platform
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Entraday MIT is our flagship platform that unifies monitoring,
              automation, and reporting into a single pane of glass. Give your IT
              teams the visibility and control they need to run flawless
              operations.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              render={<Link href="/mit-product" />}
              nativeButton={false}
              size="lg"
              className="mt-8 h-11 px-5"
            >
              Discover MIT
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-border shadow-lg lg:order-2">
            <Image
              src="/images/mit-product.webp"
              alt="Entraday MIT platform dashboard"
              width={662} // Layout viewport display specifications ke mutabik tight mapping
              height={662}
              sizes="(max-width: 768px) 100vw, 662px"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
