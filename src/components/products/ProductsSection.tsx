import { motion } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'

interface ProductItem {
  name: string
  description: string
}

interface ProductGroup {
  id: string
  title: string
  subtitle: string
  tone: 'light' | 'dark'
  items: ProductItem[]
}

const groups: ProductGroup[] = [
  {
    id: 'savings',
    title: 'Savings',
    subtitle: 'Five Products. Flexible Savings. Every goal.',
    tone: 'light',
    items: [
      {
        name: 'FlexSave',
        description:
          'Flexible savings with daily interest. Withdraw anytime, but interest is forfeited after your 3rd withdrawal.',
      },
      {
        name: 'GoalSave',
        description:
          'Save toward a specific goal with a target amount and timeline. Higher interest rewards consistent saving.',
      },
      {
        name: 'BizVault',
        description:
          'Grow business funds with contributions that earn quarterly returns. Option to roll over at maturity.',
      },
      {
        name: 'ExportSave',
        description:
          'Build export funds through structured savings. Locked until maturity (6 months–1 year).',
      },
      {
        name: 'GroupSave',
        description:
          'Save collectively with others toward a shared goal, while each member withdraws independently.',
      },
    ],
  },
  {
    id: 'loans',
    title: 'Loan',
    subtitle: 'Three products. Accessible credit. Every need.',
    tone: 'dark',
    items: [
      {
        name: 'Personal loan',
        description:
          'Borrow for education, medical expenses, home improvement, travel, or any personal need.',
      },
      {
        name: 'Business loan',
        description:
          'Capital for every stage of your business from working capital, equipment purchase, expansion and other trade finance.',
      },
      {
        name: 'Salary advance',
        description:
          'Get a portion of your salary before payday. Repaid automatically on your next salary date.',
      },
    ],
  },
  {
    id: 'investment',
    title: 'Investment',
    subtitle: '',
    tone: 'light',
    items: [
      {
        name: 'Fixed deposit',
        description:
          'Lock your money for a fixed period and earn guaranteed interest at maturity. The longer you lock, the more you earn.',
      },
    ],
  },
]

export function ProductsSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" id="products" aria-labelledby="products-heading">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <motion.div
          className="mb-14 text-center sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <h1
            id="products-heading"
            className="mb-4 text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy"
          >
            Everything you need to save, borrow, and grow.
          </h1>
          <p className="mx-auto max-w-[36rem] text-[0.98rem] leading-[1.65] text-grey">
            Five savings plans, three credit products, and a fixed deposit — built for how Nigerians
            actually earn, spend, and plan.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14 sm:gap-16">
          {groups.map((group, groupIndex) => {
            const isDark = group.tone === 'dark'

            return (
              <motion.div
                key={group.id}
                id={group.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: groupIndex * 0.05, ease: EASE_OUT }}
              >
                <div className="mb-6 sm:mb-8">
                  <h2
                    className={`mb-2 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.15] font-extrabold tracking-[-0.03em] ${
                      isDark ? 'text-navy' : 'text-navy'
                    }`}
                  >
                    {group.title}
                  </h2>
                  {group.subtitle ? (
                    <p className="m-0 text-[0.98rem] leading-[1.6] text-grey">{group.subtitle}</p>
                  ) : null}
                </div>

                <div
                  className={`grid grid-cols-1 gap-4 sm:gap-5 ${
                    group.items.length === 1
                      ? 'md:grid-cols-1'
                      : group.items.length === 3
                        ? 'md:grid-cols-3'
                        : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {group.items.map((item, index) => (
                    <motion.article
                      key={item.name}
                      className={`flex flex-col rounded-[1.35rem] px-6 py-7 sm:px-7 sm:py-8 ${
                        isDark
                          ? 'bg-navy text-white shadow-[0_16px_40px_rgba(26,43,72,0.2)]'
                          : 'bg-white text-navy shadow-[0_10px_32px_rgba(26,43,72,0.07)]'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.55, delay: index * 0.06, ease: EASE_OUT }}
                    >
                      <h3
                        className={`mb-3 text-[1.12rem] font-bold tracking-[-0.01em] ${
                          isDark ? 'text-gold' : 'text-navy'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p
                        className={`m-0 text-[0.9rem] leading-[1.65] ${
                          isDark ? 'text-white/75' : 'text-grey'
                        }`}
                      >
                        {item.description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
