import { motion, type Variants } from 'framer-motion'
import { Navbar } from './Navbar'
import { FeatureTicker } from './FeatureTicker'
import { EASE_OUT } from '../../lib/motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: EASE_OUT,
    },
  }),
}

const headlineLine: Variants = {
  hidden: { opacity: 0, y: 48, clipPath: 'inset(100% 0 0 0)' },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.85,
      delay,
      ease: EASE_OUT,
    },
  }),
}

const ampersand: Variants = {
  hidden: { opacity: 0, scale: 0.2, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.55,
      type: 'spring',
      stiffness: 260,
      damping: 18,
    },
  },
}

const ctaPop: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 1.35,
      type: 'spring',
      stiffness: 320,
      damping: 22,
    },
  },
}

function NigerianFlag() {
  return (
    <svg
      className="shrink-0 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.12)] animate-flag-wave origin-left"
      viewBox="0 0 24 16"
      width="24"
      height="16"
      aria-hidden="true"
    >
      <rect width="8" height="16" fill="#008751" />
      <rect x="8" width="8" height="16" fill="#ffffff" />
      <rect x="16" width="8" height="16" fill="#008751" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -top-[120px] -left-[100px] h-[420px] w-[420px] animate-glow-drift rounded-full opacity-35 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-80px] bottom-20 h-[360px] w-[360px] animate-glow-drift rounded-full opacity-35 blur-[80px] [-animation-delay:6s]"
        style={{
          background: 'radial-gradient(circle, rgba(26, 43, 72, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-1 mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 pt-28  max-[900px]:px-6 max-[900px]:pt-24 max-[900px]:pb-12 lg:px-12">
        <Navbar />

        <div className="mx-auto flex max-w-[820px] flex-1 flex-col items-center justify-center px-0 py-12 pt-12 pb-8 text-center max-[540px]:pt-8">
          <h1 className="mb-8 flex flex-col items-center leading-[1.05]">
            <motion.span
              className="block text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold tracking-[-0.03em] text-navy"
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={headlineLine}
            >
              Save, Transfer
            </motion.span>

            <motion.span
              className="my-1 block leading-none"
              initial="hidden"
              animate="visible"
              variants={ampersand}
            >
              <span className="inline-block animate-ampersand-breathe text-[clamp(1.75rem,4vw,3rem)] font-bold text-gold">
                &amp;
              </span>
            </motion.span>

            <motion.span
              className="block text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold tracking-[-0.03em] text-navy"
              custom={0.75}
              initial="hidden"
              animate="visible"
              variants={headlineLine}
            >
              Easy Credit
            </motion.span>
          </h1>

          <motion.p
            className="mb-7 max-w-[640px] text-[clamp(1rem,2vw,1.2rem)] leading-[1.65] text-navy opacity-92"
            custom={0.95}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Abar gives you flexible savings, instant transfers, and affordable credit all from a
            single account built for how Nigerians actually manage their finances
          </motion.p>

          <motion.div
            className="mb-9 flex items-center gap-2.5 max-[540px]:flex-col max-[540px]:gap-2"
            custom={1.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <NigerianFlag />
            <p className="m-0 text-[0.95rem] font-normal text-navy italic opacity-85 max-[540px]:text-[0.85rem]">
              Trusted by thousands of savers and business owners across Nigeria
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={ctaPop}>
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-[20px] bg-navy px-12 py-4 text-[1.05rem] font-semibold text-white shadow-[0_8px_28px_rgba(26,43,72,0.25)] transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:bg-[#223556] hover:shadow-[0_12px_36px_rgba(26,43,72,0.35)] active:scale-[0.98]"
            >
              Open account
            </button>
          </motion.div>
        </div>
      </div>

      <FeatureTicker />
    </section>
  )
}
