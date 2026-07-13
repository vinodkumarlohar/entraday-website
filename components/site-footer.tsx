import Link from 'next/link'
import Image from 'next/image' // Next.js Image module ko yahan import kiya
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Consultancy', href: '/consultancy' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'IT Solutions', href: '/it-solutions' },
      { label: 'Managed Services', href: '/managed-services' },
      { label: 'MIT Product', href: '/mit-product' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {/* Logo Wrapper Container */}
            <Link href="/" className="flex items-center" aria-label="Entraday home">
              <Image
                src="/logo.png"
                alt="Entraday Logo"
                width={210}              
                height={87}               
                className="object-contain max-h-14 w-auto brightness-0 invert" // Invert aur brightness classes hata di hain
                loading="lazy"            
                quality={85}
              />
            </Link>
            
            {/* Description area targeting legal identity */}
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Entraday Global Private Limited powers your tomorrow, today. Enterprise IT solutions and managed
              services built for scale, security, and speed.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="mailto:info@entraday.com" className="hover:text-primary-foreground">
                  info@entraday.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="tel:+919558813396" className="hover:text-primary-foreground">
                  +91 9558813396
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Electronic City Phase 2, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Entraday Global Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Powering Your Tomorrow, Today.
          </p>
        </div>
      </div>
    </footer>
  )
}
