import { motion, type Variants } from 'framer-motion'
import { EASE_OUT, fadeUp, staggerContainer } from '../../lib/motion'
import { SectionEyebrow } from '../common/SectionEyebrow'
import noBorrow from "../../assets/nooBorrow.png"
import repay from "../../assets/repay.png"
import disburse from "../../assets/disburse.png"

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

function NoHiddenIllustration() {
  return <img src={noBorrow} alt="" className="h-[150px] w-auto object-contain" />
}

function AutoRepayIllustration() {
  return <img src={repay} alt="" className="h-[150px] w-auto object-contain" />
}

function WalletIllustration() {
  return <img src={disburse} alt="" className="h-[150px] w-auto object-contain" />
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10h2M14 10h2M8 14h2M14 14h2M12 6V4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.35rem] w-[1.35rem]" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

const whyBorrow = [
  {
    id: 'no-hidden',
    illustration: <NoHiddenIllustration />,
    title: 'No hidden charges',
    description:
      'Your repayment breakdown, interest rate and schedule are shown before you submit. Nothing changes after approval.',
  },
  {
    id: 'auto-repay',
    illustration: <AutoRepayIllustration />,
    title: 'Automatic repayments',
    description:
      "Repayments are deducted from your main wallet on each due date. You get a reminder 3 days before so you're never caught off guard.",
  },
  {
    id: 'wallet',
    illustration: <WalletIllustration />,
    title: 'Disbursed to your wallet',
    description:
      'Approved amounts land in your Abar wallet instantly. Use them for transfers, bills, or withdrawals right away.',
  },
]

const loanProducts = [
  {
    id: 'personal',
    icon: <PersonIcon />,
    title: 'Personal loan',
    description:
      'For medical bills, education, travel, or any personal need. No collateral. Repayment from 1 to 6months.',
    bullets: ['Active savings account required', '3 months usage'],
  },
  {
    id: 'business',
    icon: <BuildingIcon />,
    title: 'Business loan',
    description:
      'Working capital, equipment finance, trade, and expansion credit for registered businesses. CAC verification required.',
    bullets: ['Collateral may apply for larger amounts', '24-72hr disbursement'],
  },
  {
    id: 'salary',
    icon: <MoneyIcon />,
    title: 'Salary advance',
    description:
      'Access part of your salary before payday. Auto-repaid directly from your linked salary account on your next pay date.',
    bullets: ['No collateral', 'Disbursed within 24 hrs'],
  },
]

function WhyBorrowCard({ item }: { item: (typeof whyBorrow)[number] }) {
  return (
    <motion.div
      className="group flex h-full flex-col items-center"
      variants={cardReveal}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
    >
      <div className="relative z-1 mb-5 flex items-end justify-center">
        {item.illustration}
      </div>
      <div className="flex w-full flex-1 flex-col rounded-2xl bg-[#f3e9d9] px-[1.35rem] pt-8 pb-[1.65rem] text-center transition-shadow duration-350 ease-in-out group-hover:shadow-[0_12px_32px_rgba(26,43,72,0.08)]">
        <h3 className="mb-3 text-[1.05rem] font-bold text-navy">{item.title}</h3>
        <p className="m-0 text-[0.84rem] leading-[1.6] text-grey">{item.description}</p>
      </div>
    </motion.div>
  )
}

function LoanProductCard({ product }: { product: (typeof loanProducts)[number] }) {
  return (
    <motion.article
      className="flex flex-col items-center rounded-[1.25rem] bg-white px-6 pt-9 pb-8 text-center shadow-[0_8px_32px_rgba(26,43,72,0.07),0_1px_3px_rgba(26,43,72,0.04)] transition-shadow duration-350 ease-in-out hover:shadow-[0_20px_48px_rgba(26,43,72,0.11),0_2px_6px_rgba(26,43,72,0.05)]"
      variants={cardReveal}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
    >
      <div className="mb-[1.15rem] flex h-11 w-11 items-center justify-center rounded-[0.6rem] bg-[#f3e9d9] text-navy">
        {product.icon}
      </div>
      <h3 className="mb-[0.85rem] text-[1.1rem] font-bold text-navy">{product.title}</h3>
      <p className="mb-6 flex-1 text-[0.84rem] leading-[1.6] text-grey">{product.description}</p>
      <ul className="m-0 w-full list-none p-0 text-left">
        {product.bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative pl-4 text-[0.82rem] leading-[1.5] font-semibold text-gold before:absolute before:left-0 before:text-gold before:content-['•'] [&+&]:mt-[0.45rem]"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function CreditSection() {
  return (
    <section
      className="bg-cream px-6 pt-12 pb-20 max-[639px]:px-5 sm:pt-14 sm:pb-22 lg:px-12 lg:pt-16 lg:pb-24"
      id="credit"
      aria-labelledby="credit-heading"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionEyebrow tone="navy">LOAN WITH ABAR</SectionEyebrow>

        <motion.header
          className="mx-auto mb-16 max-w-[680px] text-center max-[639px]:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          <motion.h2
            id="credit-heading"
            className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            variants={fadeUp}
          >
            Credit designed around your situation
          </motion.h2>
          <motion.p
            className="m-0 text-[clamp(0.92rem,1.5vw,1.02rem)] leading-[1.65] text-grey"
            variants={fadeUp}
          >
            Whether it's a personal expense, a business opportunity, or a week before payday,
            Abar has a credit product built for it.
          </motion.p>
        </motion.header>

        <div className="mb-18 max-[639px]:mb-14 lg:mb-22">
          <motion.h3
            className="mb-10 text-center text-[clamp(1.35rem,2.5vw,1.65rem)] font-extrabold tracking-[-0.02em] text-navy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            Why borrow with abar?
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-3 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {whyBorrow.map((item) => (
              <WhyBorrowCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3
            className="mb-11 text-center text-[clamp(1.65rem,3vw,2.15rem)] font-extrabold tracking-[-0.02em] text-navy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            Loan Products
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[1.15rem] lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {loanProducts.map((product) => (
              <LoanProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
