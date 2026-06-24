import { motion, type Variants } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import img1 from "../../assets/sALARIED1.png"
import img2 from "../../assets/Soletraders1.png"
import img3 from "../../assets/Individual savers1.png"
import img4 from "../../assets/Groupsave1.png"

const headerReveal: Variants = {
  
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: 0.8, ease: EASE_OUT },
  },
}

const subtitleReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: EASE_OUT },
  },
}

const labelReveal: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
}

type CardVariant = 'light' | 'dark'

interface AudienceCardData {
  id: number
  title: string
  subtitle: string
  body: string
  variant: CardVariant
  image: string
  imageAlt: string
  revealDelay: number
}

const cards: AudienceCardData[] = [
  {
    id: 1,
    title: 'Working Professionals',
    subtitle: 'Salaried employees and 9-to-5 earners',
    body: 'Your salary arrives, expenses go out, and by mid-month there is often less left than you planned. Abar helps you set aside money automatically from every pay credit, earn daily interest on what you save, and access a salary advance when a gap appears before payday.',
    variant: 'light',
    image: img1,
    imageAlt: 'Professional working on a laptop in an office',
    revealDelay: 0.1,
  },
  {
    id: 2,
    title: 'Business owners & Entrepreneurs',
    subtitle: 'SMEs, Sole traders, and growing businesses',
    body: 'Running a business means managing money across multiple needs at once; working capital, supplier payments, equipment costs, and cash reserves that should be growing, not just sitting. Abar gives your business a dedicated savings structure, access to business credit without a lengthy bank process, and a single account to manage it all.',
    variant: 'dark',
    image:img2,
    imageAlt: 'Small business owner serving a customer',
    revealDelay: 0.22,
  },
  {
    id: 3,
    title: 'Individual Savers',
    subtitle: 'Anyone saving toward something that matters',
    body: 'You have a goal; rent, a trip, school fees, a device, an emergency fund. Abar gives every goal its own named savings plan, a target amount, a progress tracker, and an interest rate that rewards you for staying the course. Saving feels different when you can see exactly where you are.',
    variant: 'light',
    image: img3,
    imageAlt: 'Woman putting money into a savings jar',
    revealDelay: 0.46,
  },
  {
    id: 4,
    title: 'Cooperative and group savers',
    subtitle: 'Ajo groups, office cooperatives, and saving circles',
    body: 'Group savings in Nigeria runs on trust and manual tracking. Someone always has to chase contributions and reconcile figures. GroupSave removes that friction. Create or join a group, set a contribution schedule, and let every member track progress independently. No one needs to chase anyone.',
    variant: 'dark',
    image: img4,
    imageAlt: 'Team of colleagues celebrating with a group high-five',
    revealDelay: 0.34,
  },
]

function AudienceCard({ card }: { card: AudienceCardData }) {
  const isDark = card.variant === 'dark'

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: card.revealDelay },
        },
      }}
    >
      <motion.h3
        className="m-0 text-[clamp(0.95rem,1.5vw,1.1rem)] font-bold tracking-[-0.01em] text-navy"
        variants={labelReveal}
      >
        {card.id}. {card.title}
      </motion.h3>

      <motion.article
        className={`group relative cursor-default overflow-hidden rounded-[44px] transition-shadow duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]  isDark
            ? 'bg-navy shadow-[0_8px_32px_rgba(26,43,72,0.2)] hover:shadow-[0_0_0_2px_rgba(212,175,55,0.35),0_20px_48px_rgba(26,43,72,0.35)]'
            : 'bg-white shadow-[0_8px_32px_rgba(26,43,72,0.08),0_2px_8px_rgba(26,43,72,0.04)] hover:shadow-[0_20px_48px_rgba(26,43,72,0.14),0_4px_12px_rgba(26,43,72,0.06)]'
        }`}
        variants={cardReveal}
        whileHover={{ y: -10, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      >
        <div className="relative aspect-square overflow-hidden ">
          <img
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            className="h-full w-full transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          
        </div>

        <div className={`relative px-6 pt-[22px] pb-[26px] max-[540px]:px-[18px] max-[540px]:pt-[18px] max-[540px]:pb-[22px] rounded-[44px]  -mt-10 ${
          isDark
            ? 'bg-navy'
            : 'bg-white'
        }`}>
          <h4
            className={`mb-3 text-base leading-[1.35] font-bold tracking-[-0.01em] ${isDark ? 'text-white' : 'text-navy'}`}
          >
            {card.subtitle}
          </h4>
          <p className={`m-0 text-[0.88rem] leading-[1.65] ${isDark ? 'text-white/82' : 'text-grey'}`}>
            {card.body}
          </p>
        </div>
        {isDark && (
          <span
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.12)_0%,transparent_60%)] opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
            aria-hidden="true"
          />
        )}
      </motion.article>
    </motion.div>
  )
}

export function WhoAbarIsForSection() {
  return (
    <section className="bg-cream  pb-7  max-[540px]:pb-5" id="about" aria-labelledby="who-heading">
      <motion.div
        className="mx-auto  rounded-t-[150px] bg-white px-31 pt-26 pb-8 shadow-[0_4px_24px_rgba(26,43,72,0.06),0_1px_3px_rgba(26,43,72,0.04)] max-[960px]:rounded-t-[50px] max-[960px]:px-8 max-[960px]:pt-10 max-[960px]:pb-6 max-[540px]:px-5 max-[540px]:py-4"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7  md:gap-20 mb-7 md:mb-0">
            <header className="pt-2 text-center col-span-2 max-w-[530px]">
              <motion.h2
                id="who-heading"
                className="mb-5 text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={headerReveal}
              >
                Who Abar is For?
              </motion.h2>
              <motion.p
                className="m-0  font-inter text-[20px] font-normal leading-none tracking-normal text-center text-[#182B49] mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={subtitleReveal}
              >
                Whether you earn a salary, run a business, or are working toward a personal goal.
                Abar was designed around how you actually think about and use money
              </motion.p>
            </header>
            
            <AudienceCard card={cards[0]} />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-25 md:-mt-55">
            <AudienceCard card={cards[1]} />
            <div className="md:mt-[271px] md:mb-[167px]">
            <AudienceCard card={cards[2]} />
            </div>
            <div className="place-self-end">
            <AudienceCard card={cards[3]} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
