import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Entraday. Email, call, or visit us in Electronic City, Bangalore.',
}

const details = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'info@entraday.com',
    href: 'mailto:info@entraday.com',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 9558813396',
    href: 'tel:+919558813396',
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Electronic City Phase 2, Bangalore',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Fri, 9:00 AM – 6:00 PM IST',
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your tomorrow"
        description="Whether you have a project in mind or just want to explore options, our team is ready to help."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Contact information
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Reach out through any channel below and we&apos;ll respond within
                one business day.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {details.map((item) => {
                  const Icon = item.icon
                  const inner = (
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Entraday office location in Electronic City, Bangalore"
              src="https://www.google.com/maps?q=Electronic+City+Bangalore&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
