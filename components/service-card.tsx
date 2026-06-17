import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const { icon: Icon, title, description, href } = service
  const content = (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }
  return content
}
