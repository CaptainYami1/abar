import { HeroSection } from '../components/hero/HeroSection'
import { WhoAbarIsForSection } from '../components/who/WhoAbarIsForSection'
import { FeaturesSection } from '../components/features/FeaturesSection'
import { SavingsPlansSection } from '../components/savings/SavingsPlansSection'
import { CreditSection } from '../components/credit/CreditSection'
import { HowItWorksSection } from '../components/how/HowItWorksSection'
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection'
import { CtaFooterSection } from '../components/cta/CtaFooterSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <WhoAbarIsForSection />
      <FeaturesSection />
      <SavingsPlansSection />
      <CreditSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaFooterSection />
    </>
  )
}
