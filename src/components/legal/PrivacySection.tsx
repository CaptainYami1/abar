import { motion } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import { SectionEyebrow } from '../common/SectionEyebrow'

export function PrivacySection() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" id="privacy" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-[760px] px-6 lg:px-12">
        <SectionEyebrow tone="gold" pulse>
          PRIVACY POLICY
        </SectionEyebrow>

        <motion.h1
          id="privacy-heading"
          className="mb-7 text-[clamp(2rem,4.5vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.03em] text-navy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Your data. Your rights. Our responsibility.
        </motion.h1>

        <motion.p
          className="m-0 text-[clamp(1rem,1.8vw,1.12rem)] leading-[1.75] text-grey"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
        >
          Abar is built on trust. We collect only what we need to verify your identity, operate your
          account, and keep your money safe and we never sell your personal data to third parties.
          This policy explains what we collect, why we collect it, and how you can control it. It
          applies to all users of the Abar mobile application and website, in compliance with the
          Nigeria Data Protection Regulation (NDPR).
        </motion.p>

        <motion.p
          className="mt-8 rounded-2xl border border-black/8 bg-white px-6 py-5 text-[0.9rem] leading-[1.6] text-grey"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT }}
        >
          The full legal document is available on request and will be published here in detail. For
          any privacy questions, contact us at{' '}
          <a href="mailto:privacy@abar.ng" className="font-semibold text-navy hover:text-gold">
            privacy@abar.ng
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
