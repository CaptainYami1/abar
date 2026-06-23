import { motion } from 'framer-motion'
import { EASE_OUT } from '../../lib/motion'
import { BrandWordmark } from '../common/BrandWordmark'
import { PhoneFrame } from '../common/PhoneFrame'

const footerNav = ['About Equinorth', 'Careers', 'Press', 'Contact']
const legalLinks = ['Terms of use', 'Privacy policy']

function AppStoreBadge() {
  return (
    <a
      href="#app-store"
      className="inline-flex items-center gap-[0.55rem] rounded-[0.55rem] bg-[#111] px-[0.9rem] py-[0.55rem] text-white no-underline transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
      aria-label="Download on the App Store"
    >
      <svg viewBox="0 0 24 24" className="h-[1.35rem] w-[1.35rem] shrink-0" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13.25 3.5c.56-.68 1.14-1.16 1.22-1.87-.59.03-1.3.39-1.72.88-.48.56-.9 1.2-.83 1.91.69.05 1.19-.35 1.33-.92z"
        />
      </svg>
      <span className="flex flex-col text-[0.82rem] leading-[1.15] font-semibold">
        <small className="text-[0.52rem] font-normal tracking-[0.02em]">Download on the</small>
        App Store
      </span>
    </a>
  )
}

function GooglePlayBadge() {
  return (
    <a
      href="#google-play"
      className="inline-flex items-center gap-[0.55rem] rounded-[0.55rem] bg-[#111] px-[0.9rem] py-[0.55rem] text-white no-underline transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-[1.35rem] w-[1.35rem] shrink-0" aria-hidden="true">
        <path fill="#34a853" d="M3 20.5V3.5l10.5 8.5z" />
        <path fill="#4285f4" d="M3 3.5l10.5 8.5L16 8.2 6.5 1.2z" />
        <path fill="#fbbc04" d="M3 20.5l10.5-8.5L16 15.8 6.5 22.8z" />
        <path fill="#ea4335" d="M13.5 12 21 16.5V7.5z" />
      </svg>
      <span className="flex flex-col text-[0.82rem] leading-[1.15] font-semibold">
        <small className="text-[0.52rem] font-normal tracking-[0.02em]">GET IT ON</small>
        Google Play
      </span>
    </a>
  )
}

function AppPhoneMockup() {
  return (
    <PhoneFrame
      className="animate-cta-phone-float "
      frameClassName="w-[170px] rounded-[30px] shadow-[0_32px_64px_rgba(26,43,72,0.2)] sm:w-[190px]"
      notchClassName="h-[22px] w-[78px]"
      screenClassName="flex flex-col items-center justify-center gap-[0.85rem] rounded-[28px] bg-navy px-5 pt-8 pb-10"
    >
      <BrandWordmark
        className="mt-10 mb-auto text-[2rem] font-extrabold tracking-[-0.03em] text-gold"
        dotClassName="ml-px h-[7px] w-[7px]"
      />
      <button
        type="button"
        className="w-full cursor-pointer rounded-full border-none bg-gold px-4 py-[0.7rem] text-[0.72rem] font-bold text-navy transition-transform duration-250 ease-in-out hover:scale-[1.03]"
      >
        Create account
      </button>
      <button
        type="button"
        className="w-full cursor-pointer rounded-full border-[1.5px] border-[rgba(147,197,253,0.55)] bg-transparent px-4 py-[0.7rem] text-[0.72rem] font-bold text-white transition-transform duration-250 ease-in-out hover:scale-[1.03]"
      >
        Log in
      </button>
    </PhoneFrame>
  )
}

export function CtaFooterSection() {
  return (
    <footer className="bg-cream" id="download">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-white px-6 pt-12 shadow-[0_-4px_24px_rgba(26,43,72,0.04),0_10px_40px_rgba(26,43,72,0.06)] sm:rounded-t-[5.25rem] sm:px-8 sm:pt-14 lg:rounded-t-[8.5rem] lg:px-25 lg:pt-16 max-[639px]:px-[1.15rem]">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] text-[clamp(6rem,18vw,11rem)] font-extrabold tracking-[-0.04em] whitespace-nowrap text-[rgba(26,43,72,0.04)] select-none"
          aria-hidden="true"
        >
          abar
          <span className="ml-[0.02em] inline-block h-[0.09em] w-[0.09em] rounded-full bg-[rgba(212,175,55,0.15)] align-baseline" />
        </div>

        <div className="relative grid grid-cols-1 items-center gap-10 pb-14 min-[900px]:grid-cols-2 min-[900px]:gap-8 min-[900px]:pb-16">
          <motion.div
            className="mx-auto max-w-[28rem] max-[899px]:text-center min-[900px]:mx-0"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <h2 className="mb-4 text-[clamp(1.85rem,3.5vw,2.35rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
              Open your abar. account today.
            </h2>
            <p className="mb-7 text-[clamp(0.92rem,1.5vw,1rem)] leading-[1.65] text-grey">
              Join thousands of Nigerians already transferring faster, saving smarter, and
              accessing credit on their own terms.
            </p>
            <div className="flex flex-wrap gap-3 max-[899px]:justify-center">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center min-[900px]:justify-end min-[900px]:pr-4"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
          >
            <AppPhoneMockup />
          </motion.div>
        </div>

        <div className="relative pt-7 pb-8">
          <div className="flex flex-col gap-6 pb-6 md:flex-row md:items-start md:justify-between md:gap-8">
            <div>
              <a
                href="#"
                className="mb-[0.45rem] inline-block no-underline"
                aria-label="abar home"
              >
                <BrandWordmark
                  className="text-[1.85rem] font-extrabold tracking-[-0.02em] text-navy"
                  dotClassName="ml-px h-1.5 w-1.5"
                />
              </a>
              <p className="m-0 text-[0.82rem] leading-[1.5] ">
                Save, transfer, and easy credit by Equinorth Capital Ltd
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Footer navigation">
              {footerNav.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[0.88rem] font-medium text-grey no-underline transition-colors duration-250 hover:text-navy"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="h-px bg-[rgba(26,43,72,0.1)]" aria-hidden="true" />

          <div className="flex flex-col gap-3 pt-5 text-[0.72rem] text-[rgba(90,100,120,0.85)] max-[639px]:items-start md:flex-row md:items-center md:justify-between md:gap-4">
            <span>© 2026 Equinorth Capital Ltd</span>
            <span className="max-[639px]:text-left md:flex-1 md:text-center">
              abar is a product of Equinorth Capital Ltd
            </span>
            <div className="flex gap-5">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[rgba(90,100,120,0.85)] no-underline transition-colors duration-250 hover:text-navy"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
