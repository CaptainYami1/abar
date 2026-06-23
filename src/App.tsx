import { HeroSection } from './components/hero/HeroSection'
import { WhoAbarIsForSection } from './components/who/WhoAbarIsForSection'
import { FeaturesSection } from './components/features/FeaturesSection'
import { SavingsPlansSection } from './components/savings/SavingsPlansSection'
import { CreditSection } from './components/credit/CreditSection'
import { HowItWorksSection } from './components/how/HowItWorksSection'
import { TestimonialsSection } from './components/testimonials/TestimonialsSection'
import { CtaFooterSection } from './components/cta/CtaFooterSection'

function App() {
  return (
    <div className='bg-cream'>
      <div className="w-full max-w-[1980px] mx-auto">
      <HeroSection />
      <WhoAbarIsForSection />
      <FeaturesSection />
      <SavingsPlansSection />
      <CreditSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaFooterSection />
      </div>
    </div>
  )
}

export default App
