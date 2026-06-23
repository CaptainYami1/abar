import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BillsIcon,
  CardIcon,
  CreditIcon,
  SavingsIcon,
  TransferIcon,
} from './FeatureIcons'
import billsimg from '../../assets/iPhone 15 Pro.png'
import transferImg from '../../assets/transferimg.png'
import creditImg from '../../assets/creditimg.png'
import savingsImg from '../../assets/savingsimg.png'
import goldencard from '../../assets/goldencard.png'
import blueCard from '../../assets/blueCard.png'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  id: string
  icon: ReactNode
  title: string
  description: string
  visual: ReactNode
}

function PhotoVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mx-auto h-auto w-full  object-contain"
    />
  )
}

function CardsVisual() {
  return (
    <div className="relative mx-auto aspect-[3.5/3] w-full ">
      <img
        src={blueCard}
        alt="Abar physical card"
        loading="lazy"
        className="absolute right-0 bottom-[6%] w-[82%] animate-card-float-navy drop-shadow-[0_24px_48px_rgba(26,43,72,0.28)] -rotate-9"
      />
      <img
        src={goldencard}
        alt=""
        loading="lazy"
        className="absolute top-[3%] left-0 w-[74%] animate-card-float-gold drop-shadow-[0_20px_40px_rgba(26,43,72,0.22)]"
      />
    </div>
  )
}

const features: Feature[] = [
  {
    id: 'transfers',
    icon: <TransferIcon />,
    title: 'Instant transfers',
    description:
      'Send money to any Abar user or any Nigerian bank in seconds and make payments seamlessly.',
    visual: <PhotoVisual src={transferImg} alt="Sending a transfer on the Abar app" />,
  },
  {
    id: 'savings',
    icon: <SavingsIcon />,
    title: 'Flexible Savings',
    description:
      'Five savings plans for every kind of goal from daily interest on liquid funds to locked plans that build discipline and earn higher returns over time.',
    visual: <PhotoVisual src={savingsImg} alt="Setting up a savings plan on the Abar app" />,
  },
  {
    id: 'credit',
    icon: <CreditIcon />,
    title: 'Credit when you need it',
    description:
      'Personal loans, business capital, and salary advances approved and disbursed in hours.',
    visual: <PhotoVisual src={creditImg} alt="Applying for credit on the Abar app" />,
  },
  {
    id: 'cards',
    icon: <CardIcon />,
    title: 'Virtual & Physical Cards',
    description:
      'Instant virtual card for online payments. Physical Mastercard delivered to your doorstep. Freeze, unfreeze, or block anytime.',
    visual: <CardsVisual />,
  },
  {
    id: 'bills',
    icon: <BillsIcon />,
    title: 'Bills & Airtime',
    description:
      'Pay electricity, cable TV, and internet bills. Buy airtime and data for any network, for yourself or anyone else all debited directly from your main wallet.',
    visual: <PhotoVisual src={billsimg} alt="Paying bills and airtime on the Abar app" />,
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article className="mx-auto flex w-full max-w-[1244px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_10px_40px_rgba(26,43,72,0.07),0_1px_0_rgba(26,43,72,0.04)] max-[520px]:rounded-[1.75rem]">
      <div className="grid w-full items-center gap-10 p-10 px-7 max-[900px]:gap-10 max-[520px]:p-8 max-[520px]:px-5 min-[900px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[900px]:gap-6 min-[900px]:py-12 min-[900px]:pr-10 min-[900px]:pl-12 min-[1100px]:px-14">
        <div className="flex flex-col items-start max-[899px]:items-center max-[899px]:text-center">
          <div
            className="mb-5 flex h-11 w-11 animate-icon-pulse items-center justify-center rounded-full bg-[rgba(212,175,55,0.14)] text-gold"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            {feature.icon}
          </div>

          <h3 className="mb-4 text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
            {feature.title}
          </h3>

          <p className="mb-8 max-w-[30rem] text-[clamp(0.98rem,1.5vw,1.08rem)] leading-[1.7] text-grey max-[899px]:max-w-none">
            {feature.description}
          </p>

          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,_#182B49_0%,_#3A67AF_100%)] px-[1.6rem] py-[0.9rem] text-[0.92rem] font-semibold text-white shadow-[0_10px_28px_rgba(26,43,72,0.24)] transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-2px] hover:scale-[1.02] hover:bg-[#223556] hover:shadow-[0_14px_36px_rgba(26,43,72,0.32)]"
          >
            Get abar app
            <span
              className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <div>{feature.visual}</div>
      </div>
    </article>
  )
}

export function FeaturesSection() {
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.feature-panel')
      // The last panel stays as the final resting state (not animated out).
      panels.pop()

      panels.forEach((panel) => {
        const innerpanel = panel.querySelector('.feature-panel-inner') as HTMLElement
        const panelHeight = innerpanel.offsetHeight
        const windowHeight = window.innerHeight
        const difference = panelHeight - windowHeight

        // Ratio of the animation spent "fake scrolling" content that is taller than the viewport.
        const fakeScrollRatio = difference > 0 ? difference / (difference + windowHeight) : 0

        if (fakeScrollRatio) {
          panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'bottom bottom',
            end: () => (fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : 'bottom top'),
            pinSpacing: false,
            pin: true,
            scrub: true,
          },
        })

        if (fakeScrollRatio) {
          tl.to(innerpanel, {
            yPercent: -100,
            y: window.innerHeight,
            duration: 1 / (1 - fakeScrollRatio) - 1,
            ease: 'none',
          })
        }

        tl.fromTo(
          panel,
          { scale: 1, opacity: 1 },
          { scale: 0.7, opacity: 0.5, duration: 0.9 },
        ).to(panel, { opacity: 0, duration: 0.1 })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} id="products" className="relative bg-cream">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className="feature-panel relative flex h-screen items-start justify-center overflow-hidden bg-cream  will-change-transform "
        >
          <div className="feature-panel-inner flex w-full justify-center">
            <FeatureCard feature={feature} index={index} />
          </div>
        </div>
      ))}
    </section>
  )
}
