'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inputClass =
  'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30'

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center',
          className,
        )}
      >
        <CheckCircle2 className="size-12 text-accent" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will get back to you within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'rounded-2xl border border-border bg-card p-6 sm:p-8',
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input id="company" name="company" className={inputClass} placeholder="Acme Inc." />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+91 00000 00000" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={cn(inputClass, 'resize-none')}
          placeholder="Tell us about your project or challenge..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-6 h-11 w-full bg-accent px-5 text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        Send message
        <Send className="size-4" />
      </Button>
    </form>
  )
}
