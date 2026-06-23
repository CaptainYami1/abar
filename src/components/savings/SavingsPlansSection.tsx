import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_OUT } from '../../lib/motion'
import { SectionEyebrow } from '../common/SectionEyebrow'

const headerReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay, ease: EASE_OUT },
  }),
}

const statReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
}

interface Plan {
  id: string
  title: string
  description: string
  icon: ReactNode
  iconClass: string
  featured?: boolean
  centered?: boolean
  revealDelay: number
}

function FlexSaveIcon() {
  return <span className="text-[1.1rem] font-extrabold">₦</span>
}

function GoalSaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function BizVaultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ExportSaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function GroupSaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 19c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 19c0-1.8 1.3-3 3.5-3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

const iconStyles: Record<string, string> = {
  green: 'bg-[#22a06b] text-white',
  gold: 'bg-gold text-navy',
  yellow: 'bg-[#e5a820] text-white',
  blue: 'bg-[#3d7dd6] text-white',
  red: 'bg-[#d64550] text-white',
}

const plans: Plan[] = [
  {
    id: 'flexsave',
    title: 'FlexSave',
    description: 'Save any amount, earn daily interest, and withdraw anytime you need to',
    icon: <FlexSaveIcon />,
    iconClass: 'green',
    featured: true,
    revealDelay: 0.05,
  },
  {
    id: 'goalsave',
    title: 'GoalSave',
    description:
      'Save toward a named goal — rent, a car, travel, school fees. Set a target and timeline; Abar calculates your contribution schedule and rewards your discipline with better rates.',
    icon: <GoalSaveIcon />,
    iconClass: 'gold',
    revealDelay: 0.12,
  },
  {
    id: 'bizvault',
    title: 'BizVault',
    description:
      'Park your business funds and earn returns every quarter. Built for SME cash management, with a rollover option when your tenure completes.',
    icon: <BizVaultIcon />,
    iconClass: 'yellow',
    revealDelay: 0.19,
  },
  {
    id: 'exportsave',
    title: 'ExportSave',
    description:
      'A structured savings product for professionals building export capital. Tenures from 6 to 12 months, with full balance accessible at maturity.',
    icon: <ExportSaveIcon />,
    iconClass: 'blue',
    revealDelay: 0.26,
  },
  {
    id: 'groupsave',
    title: 'GroupSave',
    description:
      'Create or join a savings group. Every member tracks progress, contributes on their own schedule, and withdraws independently when their portion is ready.',
    icon: <GroupSaveIcon />,
    iconClass: 'red',
    centered: true,
    revealDelay: 0.33,
  },
]

const stats = [
  { value: '₦0', label: 'Account opening fee', delay: 0.1 },
  { value: '5', label: 'Savings Products', delay: 0.2 },
  { value: '24 hrs', label: 'Max loan disbursement', delay: 0.3 },
]

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.article
      className={`group relative flex flex-col items-center rounded-2xl border px-[1.35rem] pt-8 pb-[1.85rem] text-center transition-[border-color,background] duration-300 ease-in-out hover:border-white/14 hover:bg-white/[0.085] max-[639px]:px-5 max-[639px]:pt-7 max-[639px]:pb-6 sm:rounded-[1.1rem] sm:px-6 sm:pt-[2.15rem] sm:pb-8 ${
        plan.featured
          ? 'border-gold bg-white/[0.07] hover:border-gold'
          : 'border-white/8 bg-white/[0.06]'
      } ${plan.centered ? 'md:col-span-full md:w-[calc(50%-0.5rem)] md:justify-self-center' : ''}`}
      custom={plan.revealDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardReveal}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
    >
      <div
        className={`mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.55rem] sm:mb-[1.15rem] sm:h-11 sm:w-11 ${iconStyles[plan.iconClass]} `}
      >
        {plan.icon}
      </div>
      <h3 className="mb-[0.65rem] text-[1.05rem] font-bold tracking-[-0.01em]">{plan.title}</h3>
      <p className="m-0 max-w-[19rem] text-[0.82rem] leading-[1.6] text-white/58 sm:max-w-[21rem] sm:text-[0.84rem]">
        {plan.description}
      </p>
    </motion.article>
  )
}

export function SavingsPlansSection() {
  return (
    <section
      className="bg-cream pt-5 pb-5 md:-mt-20 "
      id="savings"
      aria-labelledby="savings-heading"
    >
      <div className="relative mx-auto overflow-hidden rounded-t-[40px] bg-navy px-[1.15rem] pt-11 pb-12 text-white max-[639px]:px-[1.15rem] sm:rounded-t-[4.25rem] sm:px-8 sm:pt-[3.25rem] sm:pb-14 lg:rounded-t-[150px] lg:px-24 lg:pt-[3.75rem] lg:pb-16">
        <SectionEyebrow tone="gold" pulse className="relative ">
          SAVE WITH ABAR
        </SectionEyebrow>

        <motion.header
          className="relative  mx-auto mb-11 max-w-[680px] text-center sm:mb-[3.25rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={headerReveal}
        >
          <motion.h2
            id="savings-heading"
            className="mb-4 text-[clamp(1.65rem,3.8vw,2.35rem)] leading-[1.2] font-extrabold tracking-[-0.025em]"
            variants={headerItem}
          >
            A savings plan for every goal and lifestyle
          </motion.h2>

          <motion.p
            className="mx-auto max-w-[520px] text-[clamp(0.9rem,1.5vw,1rem)] leading-[1.65] text-white/65"
            variants={headerItem}
          >
            Pick a plan that fits how you think about money (flexible, goal-driven,
            business-focused, or collective)
          </motion.p>
        </motion.header>

        <div className="relative  mx-auto mb-12 grid max-w-[920px] grid-cols-1 gap-[0.85rem] md:grid-cols-2 md:gap-10 md:mb-14">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="relative  mx-auto flex max-w-[920px] flex-col items-center gap-9 pt-1">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-[0.4rem] text-center"
              custom={stat.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={statReveal}
            >
              <span className="text-[clamp(2.15rem,5vw,2.85rem)] leading-none font-extrabold tracking-[-0.02em] text-gold">
                {stat.value}
              </span>
              <span className="text-[0.92rem] font-bold text-white">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
