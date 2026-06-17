import { Mail, Phone, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Vinod.lohar@entraday.com',
    href: 'mailto:Vinod.lohar@entraday.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9739119255',
    href: 'tel:+919739119255',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Electronic City, Bangalore',
  },
]

export function ContactSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build your tomorrow"
          description="Reach out and our team will respond within one business day."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {contactDetails.map((item) => {
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

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Entraday office location in Electronic City, Bangalore"
                src="https://www.google.com/maps?q=Electronic+City+Bangalore&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
