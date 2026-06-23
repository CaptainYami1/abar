import type { ReactNode } from 'react'

interface PhoneDeviceProps {
  variant: 'back' | 'front'
  children: ReactNode
}

function PhoneDevice({ variant, children }: PhoneDeviceProps) {
  const isBack = variant === 'back'

  return (
    <div
      className={`absolute w-[210px] rounded-[34px] bg-[linear-gradient(160deg,#3a3a3a_0%,#111_55%,#080808_100%)] p-2.5 shadow-[0_40px_70px_rgba(26,43,72,0.28),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.5)] sm:w-[230px] sm:rounded-[36px] sm:p-[11px] max-[520px]:w-[170px] ${
        isBack
          ? 'top-[14%] left-[2%] z-1 -rotate-16 animate-phone-float-back max-[520px]:left-0'
          : 'top-[4%] right-[2%] z-2 animate-phone-float-front max-[520px]:right-0'
      }`}
    >
      <div className="relative overflow-hidden rounded-[26px] bg-black">
        <div
          className="absolute top-2 left-1/2 z-5 h-[22px] w-[72px] -translate-x-1/2 rounded-full bg-black"
          aria-hidden="true"
        />
        <div className="aspect-[9/19.2] w-full overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

function TransferSuccessScreen() {
  return (
    <div className="flex h-full flex-col items-center bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] px-[0.85rem] pt-[2.4rem] pb-[0.85rem] text-center">
      <h5 className="mb-3 text-[0.72rem] font-bold text-navy">Transfer Successful</h5>
      <div className="flex h-[2.6rem] w-[2.6rem] items-center justify-center rounded-full bg-[#22c55e] text-[1.1rem] font-bold text-white shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
        ✓
      </div>
      <div className="mt-4 flex w-full flex-col gap-[0.45rem]">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-[0.45rem] rounded-[0.55rem] bg-white p-[0.45rem] shadow-[0_2px_8px_rgba(26,43,72,0.06)]"
          >
            <div className="h-[1.35rem] w-[1.35rem] shrink-0 rounded-full bg-[linear-gradient(135deg,rgba(212,175,55,0.5),rgba(26,43,72,0.25))]" />
            <div className="flex flex-1 flex-col gap-1">
              <div className="h-[0.28rem] rounded-full bg-[#e2e8f0]" />
              <div className="h-[0.28rem] w-[62%] rounded-full bg-[#edf2f7]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TransferListScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-xl bg-navy p-3 text-white">
        <span className="block text-[0.52rem] opacity-72">Recent transfers</span>
        <strong className="mt-[0.15rem] block text-[0.95rem]">₦125,000</strong>
      </div>
      {['Ada O.', 'GTBank', 'Kemi A.'].map((name) => (
        <div
          key={name}
          className="rounded-[0.6rem] bg-white p-[0.55rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]"
        >
          <div className="mb-[0.35rem] flex justify-between text-[0.58rem] font-bold text-navy">
            <span>{name}</span>
            <span>Done</span>
          </div>
          <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
            <div className="h-full w-full rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
          </div>
        </div>
      ))}
    </div>
  )
}

function SavingsDashboardScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-xl bg-navy p-3 text-white">
        <span className="block text-[0.52rem] opacity-72">Total saved</span>
        <strong className="mt-[0.15rem] block text-[0.95rem]">₦842,500</strong>
      </div>
      {[
        { name: 'Rent', pct: 68 },
        { name: 'Emergency', pct: 42 },
        { name: 'Trip', pct: 85 },
      ].map((goal) => (
        <div
          key={goal.name}
          className="rounded-[0.6rem] bg-white p-[0.55rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]"
        >
          <div className="mb-[0.35rem] flex justify-between text-[0.58rem] font-bold text-navy">
            <span>{goal.name}</span>
            <span>{goal.pct}%</span>
          </div>
          <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
            <div
              className="h-full rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]"
              style={{ width: `${goal.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function SavingsPlanScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-xl border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.12)] p-3">
        <span className="block text-[0.52rem] text-grey">Active plans</span>
        <strong className="mt-[0.15rem] block text-[0.95rem] text-navy">5 plans</strong>
      </div>
      <div className="rounded-[0.6rem] bg-white p-[0.65rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]">
        <span className="mb-[0.35rem] block text-[0.58rem] font-bold text-navy">Locked savings</span>
        <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
          <div className="h-full w-[78%] rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
        </div>
      </div>
      <div className="rounded-[0.6rem] bg-navy p-[0.65rem] text-white">
        <span className="block text-[0.52rem] opacity-72">Daily interest</span>
        <strong className="mt-[0.1rem] block text-[0.82rem]">12% p.a.</strong>
      </div>
    </div>
  )
}

function LoanApplyScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-[0.6rem] bg-white p-[0.65rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]">
        <span className="mb-[0.35rem] block text-[0.58rem] font-bold text-navy">Business loan</span>
        <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
          <div className="h-full w-[55%] rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
        </div>
      </div>
      <div className="rounded-[0.6rem] bg-white p-[0.65rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]">
        <span className="mb-[0.35rem] block text-[0.58rem] font-bold text-navy">Salary advance</span>
        <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
          <div className="h-full w-[72%] rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
        </div>
      </div>
      <div className="rounded-[0.6rem] bg-navy p-[0.65rem] text-white">
        <span className="block text-[0.52rem] opacity-72">Application status</span>
        <strong className="mt-[0.1rem] block text-[0.82rem]">In review</strong>
      </div>
    </div>
  )
}

function LoanLimitScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-xl border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.12)] p-3">
        <span className="block text-[0.52rem] text-grey">Credit limit</span>
        <strong className="mt-[0.15rem] block text-[0.95rem] text-navy">₦1,500,000</strong>
      </div>
      <div className="rounded-[0.6rem] bg-white p-[0.65rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]">
        <span className="mb-[0.35rem] block text-[0.58rem] font-bold text-navy">Available now</span>
        <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
          <div className="h-full w-[84%] rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
        </div>
      </div>
      <div className="rounded-[0.6rem] bg-navy p-[0.65rem] text-white">
        <span className="block text-[0.52rem] opacity-72">Disbursed in</span>
        <strong className="mt-[0.1rem] block text-[0.82rem]">2 hours</strong>
      </div>
    </div>
  )
}

function BillsMenuScreen() {
  return (
    <div className="grid h-full grid-cols-2 gap-[0.45rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      {[
        ['⚡', 'Power'],
        ['📺', 'Cable'],
        ['📶', 'Data'],
        ['📱', 'Airtime'],
        ['🌐', 'Internet'],
        ['💧', 'Water'],
      ].map(([icon, label]) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center gap-[0.2rem] rounded-[0.6rem] bg-white px-[0.35rem] py-[0.55rem] text-[0.52rem] font-semibold text-navy shadow-[0_2px_8px_rgba(26,43,72,0.05)]"
        >
          <span className="text-[0.85rem]">{icon}</span>
          {label}
        </div>
      ))}
    </div>
  )
}

function AirtimeScreen() {
  return (
    <div className="flex h-full flex-col gap-[0.55rem] bg-[#f4f6f9] px-3 pt-[2.2rem] pb-3">
      <div className="rounded-xl bg-navy p-3 text-white">
        <span className="block text-[0.52rem] opacity-72">Buy airtime</span>
        <strong className="mt-[0.15rem] block text-[0.95rem]">₦5,000</strong>
      </div>
      {['MTN', 'Airtel', 'Glo'].map((network) => (
        <div
          key={network}
          className="rounded-[0.6rem] bg-white p-[0.55rem] shadow-[0_2px_8px_rgba(26,43,72,0.05)]"
        >
          <div className="mb-[0.35rem] flex justify-between text-[0.58rem] font-bold text-navy">
            <span>{network}</span>
            <span>Pay</span>
          </div>
          <div className="h-[0.32rem] overflow-hidden rounded-full bg-[#edf2f7]">
            <div className="h-full w-full rounded-[inherit] bg-[linear-gradient(90deg,#d4af37,#e8c547)]" />
          </div>
        </div>
      ))}
    </div>
  )
}

const phonePairs = {
  transfer: { back: <TransferListScreen />, front: <TransferSuccessScreen /> },
  savings: { back: <SavingsPlanScreen />, front: <SavingsDashboardScreen /> },
  loan: { back: <LoanApplyScreen />, front: <LoanLimitScreen /> },
  bills: { back: <BillsMenuScreen />, front: <AirtimeScreen /> },
} as const

export type PhoneScreenType = keyof typeof phonePairs

export function PhonePair({ type }: { type: PhoneScreenType }) {
  const screens = phonePairs[type]

  return (
    <div className="relative h-[340px] w-full max-w-[440px] max-[899px]:origin-center max-[899px]:scale-[0.92] min-[900px]:h-[380px]">
      <PhoneDevice variant="back">{screens.back}</PhoneDevice>
      <PhoneDevice variant="front">{screens.front}</PhoneDevice>
    </div>
  )
}

const cardWaveBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cpath d='M-20 80 C20 20 60 140 100 80 S180 40 220 80' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='3'/%3E%3Cpath d='M-20 110 C30 50 70 170 110 110 S190 70 230 110' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='3'/%3E%3C/svg%3E\")"

export function CreditCardsVisual() {
  return (
    <div className="relative h-[340px] w-full max-w-[420px] max-[899px]:origin-center max-[899px]:scale-[0.92] min-[900px]:h-[380px]">
      <div className="absolute top-[12%] left-[4%] z-2 aspect-[1.586/1] w-[min(78%,290px)] -rotate-10 animate-card-float-gold overflow-hidden rounded-[18px] shadow-[0_30px_60px_rgba(26,43,72,0.28)] max-[520px]:w-[min(72%,220px)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#edd066_0%,#d4af37_42%,#a88420_100%)]" />
        <div
          className="absolute inset-0 opacity-45 bg-[length:120px_120px]"
          style={{ backgroundImage: cardWaveBg }}
        />
        <div className="relative z-1 flex h-full flex-col justify-between p-[1.1rem] text-navy">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] opacity-75">ABAR</span>
          <span className="font-mono text-[0.95rem] tracking-[0.12em]">•••• 4821</span>
        </div>
      </div>

      <div className="absolute top-[34%] right-[2%] z-1 aspect-[1.586/1] w-[min(78%,290px)] rotate-12 animate-card-float-navy overflow-hidden rounded-[18px] shadow-[0_30px_60px_rgba(26,43,72,0.28)] max-[520px]:w-[min(72%,220px)]">
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_35%),#1a2b48]">
          <div className="absolute -top-10 -right-[30px] h-[120px] w-[120px] rounded-full bg-white/5" />
          <div className="absolute -bottom-5 -left-2.5 h-20 w-20 rounded-full bg-[rgba(212,175,55,0.12)]" />
        </div>
        <div className="relative z-1 flex h-full flex-col justify-between p-[1.1rem] text-white">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] opacity-75">ABAR</span>
          <span className="font-mono text-[0.95rem] tracking-[0.12em]">•••• 9034</span>
          <span className="self-end text-[0.62rem] font-bold tracking-[0.06em] lowercase">
            mastercard
          </span>
        </div>
      </div>
    </div>
  )
}

export function FeatureVisual({ type }: { type: PhoneScreenType | 'cards' }) {
  const isCards = type === 'cards'

  return (
    <div className="relative flex min-h-[320px] w-full items-center justify-center min-[900px]:min-h-[380px]">
      <div
        className={`pointer-events-none absolute h-[min(70%,320px)] w-[min(88%,420px)] rounded-full ${
          isCards
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18)_0%,rgba(26,43,72,0.08)_50%,transparent_72%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,rgba(26,43,72,0.05)_45%,transparent_72%)]'
        }`}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[8%] h-[18px] w-[72%] rounded-full bg-[rgba(26,43,72,0.1)] blur-[12px]"
        aria-hidden="true"
      />
      {isCards ? <CreditCardsVisual /> : <PhonePair type={type} />}
    </div>
  )
}
