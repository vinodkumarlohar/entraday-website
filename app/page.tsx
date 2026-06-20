import { Hero } from '@/components/home/hero'
import { ClientLogos } from '@/components/home/client-logos'
import { ServicesSection } from '@/components/home/services-section'
import { ProductsSection } from '@/components/home/products-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <main>
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
