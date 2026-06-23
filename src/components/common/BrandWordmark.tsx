interface BrandWordmarkProps {
  className?: string
  dotClassName?: string
  pulse?: boolean
}

export function BrandWordmark({
  className = '',
  dotClassName = '',
  pulse = false,
}: BrandWordmarkProps) {
  return (
    <span className={className}>
      abar
      <span
        className={`inline-block rounded-full bg-gold align-baseline ${
          pulse ? 'animate-dot-pulse' : ''
        } ${dotClassName}`}
        aria-hidden="true"
      />
    </span>
  )
}
