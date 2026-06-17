import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner({
  title = 'Ready to power your tomorrow?',
  description = 'Talk to our experts about how Entraday can accelerate your IT roadmap.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
          {description}
        </p>
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
          className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
        >
          Contact Us
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  )
}
