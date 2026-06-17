import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-primary-foreground) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-primary-foreground/60"
        >
          <Link href="/" className="hover:text-primary-foreground">
            Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="text-primary-foreground">{eyebrow}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
    </section>
  )
}
