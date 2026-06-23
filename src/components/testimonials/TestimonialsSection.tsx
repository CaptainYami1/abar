import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EASE_OUT } from '../../lib/motion'
import networkGraphics from "../../assets/connectingProple.png"

const testimonials = [
  {
    id: 1,
    initials: 'TN',
    quote:
      "I've tried three savings apps and always ended up breaking my plan. With GoalSave, I can see exactly how close I am to my rent target every day. That visibility is everything.",
    name: 'Tolu Nwachukwu',
    role: 'Secondary school teacher, Lagos',
  },
  {
    id: 2,
    initials: 'AO',
    quote:
      'Salary advance saved me twice before payday. The money hit my wallet in hours and repayment happened automatically — no awkward calls or surprises.',
    name: 'Amaka Okafor',
    role: 'Operations manager, Abuja',
  },
  {
    id: 3,
    initials: 'IB',
    quote:
      'GroupSave made our office cooperative painless. Everyone tracks contributions independently and nobody has to chase anyone anymore.',
    name: 'Ibrahim Bello',
    role: 'Small business owner, Kano',
  },
]

function Stars() {
  return (
    <div
      className="flex w-full justify-end gap-[0.2rem] text-[0.95rem] tracking-[0.05em] text-gold"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

const cardVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: { duration: 0.35, ease: EASE_OUT },
  }),
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1)
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const current = testimonials[active]

  return (
    <section
      className="bg-cream px-6 pt-12 pb-20 max-[639px]:px-5 sm:pt-14 sm:pb-22 lg:px-12 lg:pt-16 lg:pb-24"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        className="mx-auto max-w-[1180px] rounded-[2rem] bg-white px-6 py-10 shadow-[0_10px_40px_rgba(26,43,72,0.07),0_1px_3px_rgba(26,43,72,0.04)] sm:rounded-[2.25rem] sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:px-10 lg:py-14 max-[639px]:px-[1.15rem] max-[639px]:py-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="grid grid-cols-1 items-center gap-10 min-[960px]:grid-cols-2 min-[960px]:gap-8">
          <div className="max-[959px]:text-center">
            <motion.h2
              id="testimonials-heading"
              className="mb-8 text-[clamp(1.85rem,3.5vw,2.82rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy min-[960px]:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE_OUT }}
            >
              Real people, Real <span className="text-gold">Results</span>
            </motion.h2>

            <div className="flex flex-col items-center gap-5 min-[960px]:items-start">
              <div className="min-h-[280px] w-full max-w-[420px] max-[639px]:min-h-[300px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.article
                    key={current.id}
                    className="flex flex-col items-center rounded-[1.25rem] border border-[rgba(26,43,72,0.05)] bg-white px-6 pt-8 pb-[1.65rem] text-center shadow-[0_12px_36px_rgba(26,43,72,0.08),0_2px_8px_rgba(26,43,72,0.04)]"
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <div
                      className="mb-[1.15rem] flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(212,175,55,0.22)] text-[0.85rem] font-extrabold tracking-[0.04em] text-[#9a7b1a]"
                      aria-hidden="true"
                    >
                      {current.initials}
                    </div>
                    <blockquote className="m-0 flex-1">
                      <p className="mb-5 text-[0.92rem] leading-[1.65] text-grey">
                        &ldquo;{current.quote}&rdquo;
                      </p>
                      <footer className="mb-[1.15rem] flex flex-col gap-[0.2rem]">
                        <strong className="text-[0.95rem] font-bold text-navy">{current.name}</strong>
                        <span className="text-[0.82rem] text-grey">{current.role}</span>
                      </footer>
                    </blockquote>
                    <Stars />
                  </motion.article>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-[0.45rem]" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    {...{ 'aria-selected': index === active ? 'true' : 'false' }}
                    aria-label={`Testimonial ${index + 1}`}
                    className={`h-[0.35rem] cursor-pointer rounded-full border-none p-0 transition-[width,background] duration-300 ease-in-out ${
                      index === active
                        ? 'w-9 bg-navy'
                        : 'w-7 bg-[#d8dee8] hover:bg-[#b8c0cc]'
                    }`}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="flex min-h-[280px] items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
          >
            <img
              src={networkGraphics}
              alt="People connecting through the app"
              className="h-auto w-full max-w-[420px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
