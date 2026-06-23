const features = [
  '5 Savings plan',
  'Instant transfers',
  'Salary advance',
  'Personal & Business loans',
  'Airtime & Data',
  'Virtual & Physical cards',
  'Bills payment',
]

const starDelays = ['0s', '0.3s', '0.6s', '0.9s', '1.2s', '1.5s', '1.8s']

function TickerContent() {
  return (
    <>
      {features.map((feature, index) => (
        <span
          key={feature}
          className="inline-flex items-center gap-2.5  font-bold tracking-[0.01em] text-navy"
        >
          <span
            className="animate-star-twinkle text-[16px] text-gold"
            style={{ animationDelay: starDelays[index] }}
            aria-hidden="true"
          >
            ★
          </span>
          {feature}
        </span>
      ))}
    </>
  )
}

export function FeatureTicker() {
  return (
    <div
      className="relative  w-full overflow-hidden border-y border-[#CD9F3F] bg-[#CD9F3F21] py-8 mt-10 before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:left-0 before:z-1 before:w-20 before:bg-gradient-to-r before:from-cream before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:z-1 after:w-20 after:bg-gradient-to-l after:from-cream after:to-transparent after:content-['']"
      aria-label="Product features"
    >
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap">
          <TickerContent />
        </div>
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap" aria-hidden="true">
          <TickerContent />
        </div>
      </div>
    </div>
  )
}
