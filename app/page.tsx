import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { ClientLogos } from '@/components/home/client-logos'
import { ServicesSection } from '@/components/home/services-section'
import { ProductsSection } from '@/components/home/products-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ContactSection } from '@/components/home/contact-section'

// Explicitly export metadata for the home page ranking
export const metadata: Metadata = {
  title: 'Entraday | Powering Your Tomorrow, Today',
  description: 'Welcome to Entraday. We provide robust enterprise IT solutions, managed services, and world-class IT infrastructure consultation based in Bangalore.',
  alternates: {
    canonical: 'https://entraday.com', // Google duplicate content penalty se bachata hai
  },
}

export default function HomePage() {
  return (
    <main>
      {/* 
        Tip: Make sure inside your <Hero /> component, 
        your main heading uses an <h1> tag containing the word "Entraday".
        Example: <h1>Powering Your Tomorrow with Entraday</h1>
      */}
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
