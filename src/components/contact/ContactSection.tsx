import { motion } from 'framer-motion'
import { useState, type FormEvent, type ReactNode } from 'react'
import { EASE_OUT } from '../../lib/motion'
import { SectionEyebrow } from '../common/SectionEyebrow'

interface Channel {
  id: string
  label: string
  value: string
  description: string
  href?: string
  icon: ReactNode
}

const channels: Channel[] = [
  {
    id: 'in-app',
    label: 'In-app support',
    value: 'Tap Support in the app menu',
    description: 'The fastest way to reach us. Start a chat in seconds. Available 8am\u201310pm daily.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M4 5h16v11H8l-4 3V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: 'support@abar.ng',
    description: 'We respond within 24 hours on business days.',
    href: 'mailto:support@abar.ng',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '0700-ABAR-NG',
    description: 'Available Monday to Friday, 8am\u20136pm.',
    href: 'tel:07002227664',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'social',
    label: 'Social media',
    value: '@AbarNG',
    description: 'On Instagram, X (Twitter), and Facebook. DMs monitored daily.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[0.92rem] text-white placeholder:text-white/40 transition-colors duration-250 outline-none focus:border-gold/70 focus:bg-white/[0.09]'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <SectionEyebrow tone="gold" pulse className="justify-center">
            GET IN TOUCH
          </SectionEyebrow>
          <h1
            id="contact-heading"
            className="mb-4 text-[clamp(1.95rem,4.5vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.03em] text-navy"
          >
            Get in touch.
          </h1>
          <p className="mx-auto max-w-[34rem] text-[0.98rem] leading-[1.65] text-grey">
            Whether it&rsquo;s a question, a problem, or feedback, we want to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-navy text-white shadow-[0_24px_64px_rgba(26,43,72,0.22)] lg:grid-cols-[1fr_1fr]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="relative overflow-hidden px-7 pt-10 pb-9 sm:px-10 sm:pt-12">
            <span
              className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_70%)]"
              aria-hidden="true"
            />
            <ul className="relative m-0 flex list-none flex-col gap-6 p-0">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-gold transition-colors duration-250 group-hover:bg-gold group-hover:text-navy">
                      {channel.icon}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[0.72rem] font-bold tracking-[0.12em] text-white/55 uppercase">
                        {channel.label}
                      </span>
                      <span className="text-[0.98rem] font-semibold text-white transition-colors duration-250 group-hover:text-gold">
                        {channel.value}
                      </span>
                      <span className="text-[0.84rem] leading-[1.5] text-white/60">
                        {channel.description}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={channel.id}>
                    {channel.href ? (
                      <a href={channel.href} className="group flex items-start gap-4">
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <span className="text-[0.72rem] font-bold tracking-[0.12em] text-white/55 uppercase">
                Office address
              </span>
              <p className="m-0 mt-1 text-[0.95rem] text-white/80">Equinorth Capital Ltd</p>
            </div>

            <div className="relative mt-6 rounded-2xl border border-gold/30 bg-gold/[0.08] px-5 py-4">
              <p className="m-0 text-[0.84rem] leading-[1.6] text-white/80">
                For loan-related disputes or account security issues, please email us directly with
                your registered phone number and a brief description. We treat these as high priority
                and aim to respond within <span className="font-semibold text-gold">4 hours</span> on
                business days.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.04] px-7 pt-10 pb-10 sm:px-10 sm:py-12">
            {submitted ? (
              <motion.div
                className="flex h-full flex-col items-center justify-center gap-4 text-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-navy">
                  &#10003;
                </span>
                <h3 className="m-0 text-xl font-bold text-white">Message sent</h3>
                <p className="m-0 max-w-[22rem] text-[0.92rem] leading-[1.6] text-white/70">
                  Thanks for reaching out. A member of the Abar team will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="mt-1 text-[0.9rem] font-semibold text-gold transition-opacity duration-250 hover:opacity-80"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.78rem] font-semibold text-white/70">Full name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ada Obi"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.78rem] font-semibold text-white/70">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.78rem] font-semibold text-white/70">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.78rem] font-semibold text-white/70">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us a little more..."
                    className={`${inputClass} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-[0.92rem] font-semibold text-navy shadow-[0_4px_14px_rgba(212,175,55,0.35)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(212,175,55,0.45)] active:scale-[0.98]"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
