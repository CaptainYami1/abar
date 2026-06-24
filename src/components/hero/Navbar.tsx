import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EASE_OUT } from '../../lib/motion'
import { BrandWordmark } from '../common/BrandWordmark'

const MotionLink = motion.create(Link)

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Products', to: '/#products' },
  { label: 'Support', to: '/support' },
]

const navContainer: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const navItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

const navLinkClass =
  "relative py-1 text-[0.95rem] font-medium text-navy transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-350 after:ease-[cubic-bezier(0.22,1,0.36,1)] after:content-[''] hover:text-gold hover:after:scale-x-100 max-[540px]:text-[0.85rem]"

const ctaButtonClass =
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold px-[22px] py-2.5 text-[0.9rem] font-semibold text-navy shadow-[0_4px_14px_rgba(212,175,55,0.35)] transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-[60%] before:animate-shimmer before:bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)] before:content-[''] hover:scale-105 hover:shadow-[0_8px_24px_rgba(212,175,55,0.45)] active:scale-[0.98]"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-cream shadow-[0_1px_12px_rgba(26,43,72,0.05)]"
      initial="hidden"
      animate="visible"
      variants={navContainer}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <MotionLink
          to="/"
          className="text-[1.35rem] font-bold tracking-[-0.02em] text-navy transition-opacity duration-250 hover:opacity-75"
          variants={navItem}
          aria-label="abar home"
        >
          <BrandWordmark dotClassName="ml-px mb-0.5 h-[7px] w-[7px]" pulse />
        </MotionLink>

        <nav
          className="hidden items-center gap-9 min-[900px]:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <MotionLink
              key={link.label}
              to={link.to}
              className={navLinkClass}
              variants={navItem}
            >
              {link.label}
            </MotionLink>
          ))}
        </nav>

        <motion.div
          className="hidden items-center gap-7 min-[900px]:flex"
          variants={navItem}
        >
          <a
            href="#login"
            className="relative text-[0.95rem] font-medium text-navy transition-colors duration-250 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100"
          >
            Log In
          </a>
          <button type="button" className={ctaButtonClass}>
            Open Account
          </button>
        </motion.div>

        <motion.button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors duration-250 hover:bg-black/5 min-[900px]:hidden"
          variants={navItem}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="overflow-hidden border-t border-black/5 min-[900px]:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <nav
              className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-6 py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-lg px-2 py-3 text-[0.95rem] font-medium text-navy transition-colors duration-250 hover:bg-black/5 hover:text-gold"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#login"
                className="rounded-lg px-2 py-3 text-[0.95rem] font-medium text-navy transition-colors duration-250 hover:bg-black/5"
                onClick={closeMenu}
              >
                Log In
              </a>
              <button
                type="button"
                className={`mt-2 ${ctaButtonClass}`}
                onClick={closeMenu}
              >
                Open Account
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
