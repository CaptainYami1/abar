import { motion, type Variants } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import PhonsScreen from '../../assets/iPhoneOtp.png'

const stepReveal: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

const steps = [
  {
    id: 1,
    title: 'Step 1- Verify your identity',
    description:
      'Enter your BVN and NIN. Your personal details are fetched and show for confirmation — nothing you need to type twice.',
    accent: false,
  },
  {
    id: 2,
    title: 'Step 2- Secure your account',
    description:
      'Set a strong password and a 6-digit transaction PIN. Enable Face ID or fingerprint for faster access.',
    accent: false,
  },
  {
    id: 3,
    title: 'Step 3- Pass Liveness Check',
    description:
      "A quick facial scan confirms it's really you. Takes under 30 seconds and completes your KYC instantly.",
    accent: false,
  },
  {
    id: 4,
    title: 'Step 4- Start using abar',
    description:
      'Your Providus-powered virtual account number is assigned immediately. Fund your wallet and start saving, sending, or applying for credit.',
    accent: true,
  },
]

export function HowItWorksSection() {
  return (
    <section className="w-full overflow-hidden" id="how-it-works" aria-labelledby="how-heading">
      <div className="grid grid-col-1 md:grid-cols-2 rounded-t-[150px]">
        <div className="flex-1 rounded-t-[2.5rem] bg-navy px-7 pt-12 pb-14 text-white sm:rounded-t-[5rem] sm:px-10 sm:pt-14 sm:pb-16 lg:flex lg:flex-col lg:justify-center lg:rounded-tl-[7rem] lg:rounded-tr-none lg:px-25 lg:pt-[4.5rem] lg:pb-[4.5rem] xl:rounded-tl-[8.5rem] text-center">
          <motion.h2
            id="how-heading"
            className="mb-10 text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            How it works
          </motion.h2>

          <ol className="m-0 flex list-none flex-col gap-8 p-0 lg:max-w-[34rem] lg:gap-[2.15rem] text-start ">
            {steps.map((step, index) => (
              <motion.li
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={stepReveal}
                transition={{ delay: index * 0.1 }}
              >
                <h3
                  className={`mb-[0.55rem] text-[clamp(1rem,1.8vw,1.12rem)] leading-[1.35] font-bold ${
                    step.accent ? 'text-gold' : 'text-white'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="m-0 text-[0.88rem] leading-[1.65] text-white/62 sm:text-[0.92rem]">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="relative flex flex-1 items-center justify-center bg-white px-6 pt-12 pb-14 lg:px-8 lg:py-12 rounded-tr-[8.5rem]">
          <motion.div
            className="relative w-full max-w-[420px] sm:max-w-[560px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.15 }}
          >
            <img
              src={PhonsScreen}
              alt="Abar phone verification and liveness check screens"
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
