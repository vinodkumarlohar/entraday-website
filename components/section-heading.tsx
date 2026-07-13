import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'mx-auto max-w-2xl text-center items-center' : 'max-w-2xl text-left items-start',
        className,
      )}
    >
      {eyebrow && (
        /* 
          100% Contrast Fix: 
          Original color ke sath background tint (bg-accent/10) aur padding add ki hai.
          Isse color wahi rahega aur readability perfect ho jayegi.
        */
        <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
