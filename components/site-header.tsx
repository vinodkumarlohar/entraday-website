'use client'

import Link from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// 1. Next.js Image component ko import kiya
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'IT Solutions', href: '/it-solutions' },
  { label: 'MIT Product', href: '/mit-product' },
  { label: 'Managed Services', href: '/managed-services' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'About Us', href: '/about' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* 2. LOGO SECTION - Yahaan humne purana text hata kar Image component lagaya hai */}
        <Link href="/" className="flex items-center" aria-label="Entraday home">
          <Image
            src="/logo.png"          // public/logo.png ka path
            alt="Entraday Logo"     // Alt text
            width={160}             // Logo ki width
            height={45}             // Logo ki height
            className="object-contain" // Taki logo distort na ho
            priority                // Fast loading ke liye
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
            size="lg"
          >
            Contact
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-accent px-3 py-2.5 text-center text-sm font-semibold text-accent-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
