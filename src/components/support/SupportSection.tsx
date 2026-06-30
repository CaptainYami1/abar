import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EASE_OUT } from '../../lib/motion'

interface Faq {
  question: string
  answer: string
}

interface FaqCategory {
  category: string
  items: Faq[]
}

const faqCategories: FaqCategory[] = [
  {
    category: 'Account & Onboarding',
    items: [
      {
        question: 'How do I open an Abar account?',
        answer:
          'Download the app, enter your BVN and NIN, complete the liveness check, and set your PIN. The whole process takes under five minutes.',
      },
      {
        question: 'What do I need to sign up?',
        answer:
          'A valid BVN, a valid NIN, and the phone number linked to your BVN registration.',
      },
      {
        question: 'Can I have more than one account?',
        answer: 'Each user can hold up to three accounts on Abar.',
      },
      {
        question: 'My BVN details didn\u2019t match. What do I do?',
        answer:
          'Contact NIMC or your bank to confirm your BVN and NIN details are correct, then try again. If the issue persists, contact support.',
      },
    ],
  },
  {
    category: 'Savings',
    items: [
      {
        question: 'When is interest credited to my FlexSave?',
        answer: 'Daily, directly to your FlexSave balance.',
      },
      {
        question: 'What happens if I withdraw from GoalSave before my target date?',
        answer:
          'You can withdraw, but you will forfeit the accrued interest for that cycle. Your principal is always returned in full.',
      },
      {
        question: 'Can I run multiple savings plans at the same time?',
        answer: 'Yes. You can hold all five savings plans simultaneously.',
      },
    ],
  },
  {
    category: 'Loans & Credit',
    items: [
      {
        question: 'How do I qualify for a Personal Loan?',
        answer:
          'You need an active Abar savings account with at least three months of usage.',
      },
      {
        question: 'How long does loan disbursement take?',
        answer:
          'Personal Loan: 1\u20136 hours after approval. Business Loan: 24\u201372 hours. Salary Advance: within 24 hours.',
      },
      {
        question: 'What happens if I miss a repayment?',
        answer:
          'A reminder is sent three days before your due date. If a repayment is missed, it will affect your credit eligibility on Abar. Contact support immediately if you anticipate difficulty.',
      },
    ],
  },
  {
    category: 'Transfers & Payments',
    items: [
      {
        question: 'How long do transfers take?',
        answer: 'Abar-to-Abar transfers are instant. Bank transfers settle within seconds.',
      },
      {
        question: 'Is there a transfer limit?',
        answer:
          'Limits depend on your account tier. Complete your full KYC to access the highest limits.',
      },
      {
        question: 'Can I reverse a transfer?',
        answer:
          'Transfers cannot be reversed once processed. Contact support immediately if you believe an error was made.',
      },
    ],
  },
  {
    category: 'Cards',
    items: [
      {
        question: 'How do I get a virtual card?',
        answer:
          'Your virtual card is available in the Cards section of the app immediately after account creation.',
      },
      {
        question: 'How long does a physical card take to arrive?',
        answer: 'Between 5 and 10 business days from the date of request.',
      },
      {
        question: 'How do I freeze my card?',
        answer:
          'Go to Cards in the app, select the card, and tap Freeze. You can unfreeze at any time.',
      },
    ],
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
        isOpen ? 'border-gold/60 shadow-[0_8px_28px_rgba(26,43,72,0.08)]' : 'border-black/8'
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        onClick={onToggle}
        {...{ 'aria-expanded': isOpen ? 'true' : 'false' }}
      >
        <span className="text-[0.95rem] font-bold tracking-[-0.01em] text-navy sm:text-[1.02rem]">
          {faq.question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-gold text-navy' : 'bg-navy/8 text-navy'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <p className="m-0 px-5 pb-5 text-[0.9rem] leading-[1.65] text-grey sm:px-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SupportSection() {
  const [openKey, setOpenKey] = useState<string | null>('0-0')

  return (
    <section className="bg-cream py-16 sm:py-20" id="support" aria-labelledby="support-heading">
      <div className="mx-auto max-w-[820px] px-6 lg:px-12">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
         
          <h1
            id="support-heading"
            className="mb-4 text-[clamp(1.95rem,4.5vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.03em] text-navy"
          >
            We&rsquo;re here when you need us.
          </h1>
          <p className="mx-auto max-w-[34rem] text-[0.98rem] leading-[1.65] text-grey">
            Find answers fast, or reach our team directly. Most issues are resolved within a few
            hours.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {faqCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <h2 className="mb-4 flex items-center gap-3 text-[1.15rem] font-bold tracking-[-0.01em] text-navy">
                <span className="h-4 w-1 rounded-full bg-gold" aria-hidden="true" />
                {cat.category}
              </h2>
              <div className="flex flex-col gap-3">
                {cat.items.map((faq, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`
                  return (
                    <FaqItem
                      key={key}
                      faq={faq}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey((prev) => (prev === key ? null : key))}
                    />
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4 rounded-[1.75rem] bg-navy px-7 py-9 text-center text-white sm:px-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <p className="m-0 max-w-[28rem] text-[1.02rem] leading-[1.6] font-medium">
            Can&rsquo;t find what you&rsquo;re looking for? Our support team is available to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-[0.92rem] font-semibold text-navy transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          >
            Contact support
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
