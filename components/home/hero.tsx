import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-datacenter.webp" // Format updated to .webp
          alt="Enterprise data center"
          fill
          priority={true} // LCP optimization
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover opacity-25"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
            <ShieldCheck className="size-4 text-accent" />
            Enterprise IT Solutions &amp; Managed Services
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Powering Your Tomorrow with Entraday.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Entraday partners with enterprises to design, deploy, and manage
            secure IT infrastructure, cloud platforms, and digital products that
            scale with your ambition.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
            >
              Get Started
              <ArrowRight className="size-5" />
            </Button>
            <Button
              render={<Link href="/it-solutions" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Explore Solutions
            </Button>
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-4">
          {[
            { value: '15+', label: 'Years of experience' },
            { value: '500+', label: 'Projects delivered' },
            { value: '99.9%', label: 'Uptime guarantee' },
            { value: '24/7', label: 'Managed support' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold text-accent">{stat.value}</dt>
              <dd className="mt-1 text-sm text-primary-foreground/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
