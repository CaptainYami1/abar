import { motion } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'

const highlights = [
  'One account',
  'Five savings plans',
  'Three credit products',
  'Instant transfers',
  'Bills & airtime',
  'Virtual & physical cards',
]

const paragraphs = [
  'Too many Nigerians still juggle multiple apps, miss savings targets they set for themselves, and get turned away by banks when they need credit the most. Abar was founded to fix that with a product built from the ground up for how Nigerians actually earn, spend, save, and borrow.',
  'We are licensed, regulated and built on the same financial infrastructure the country\u2019s biggest banks rely on. That means your money is safe, your transfers settle in seconds, and your identity is verified to the highest standard.',
]

export function AboutSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[900px] px-6 lg:px-12">

        <motion.h1
          id="about-heading"
          className="mb-7 text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          We built Abar because managing money in Nigeria shouldn&rsquo;t be this hard.
        </motion.h1>

        <motion.p
          className="mb-8 max-w-[42rem] text-[clamp(1rem,1.8vw,1.12rem)] leading-[1.7] text-grey"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
        >
          {paragraphs[0]}
        </motion.p>

        <motion.div
          className="mb-8 rounded-[1.75rem] bg-navy px-7 py-9 text-white shadow-[0_18px_48px_rgba(26,43,72,0.18)] sm:px-10 sm:py-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
        >
          <p className="m-0 mb-6 text-[1.05rem] leading-[1.6] font-semibold sm:text-[1.15rem]">
            Everything a working Nigerian or growing business needs to manage money in one place, on
            one app.
          </p>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[0.95rem] text-white/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[0.7rem] font-bold text-navy">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          className="m-0 max-w-[42rem] text-[clamp(1rem,1.8vw,1.12rem)] leading-[1.7] text-grey"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
        >
          {paragraphs[1]}
        </motion.p>
      </div>
    </section>
  )
}
