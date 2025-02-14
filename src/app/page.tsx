import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AIAgents } from "@/components/ai-agents"
import { Technologies } from "@/components/technologies"
import { HowItWorks } from "@/components/how-it-works"
import { PricingPlans } from "@/components/pricing-plans"
import { FAQ } from "@/components/faq"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonial"
import PerformanceGraph from "@/components/performance-graph"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <AIAgents />
      <PerformanceGraph/>
      <Technologies />
      <HowItWorks />
      <PricingPlans />
      <FAQ />
      <Testimonials/>
      <ContactUs />

      <Footer />
    </main>
  )
}

