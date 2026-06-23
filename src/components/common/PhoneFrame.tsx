import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  /** Applied to the outermost wrapper (positioning, float animation, width). */
  className?: string
  /** Applied to the device bezel (width, rounding, shadow). */
  frameClassName?: string
  /** Applied to the camera notch (height, width). */
  notchClassName?: string
  /** Applied to the screen surface (rounding, background, layout). */
  screenClassName?: string
}

export function PhoneFrame({
  children,
  className = '',
  frameClassName = '',
  notchClassName = '',
  screenClassName = '',
}: PhoneFrameProps) {
  return (
    <div className={className}>
      <div
        className={`relative bg-[linear-gradient(160deg,#3a3a3a_0%,#111_55%,#080808_100%)] p-2.5 ${frameClassName}`}
      >
        <div
          className={`absolute top-[18px] left-1/2 z-2 -translate-x-1/2 rounded-full bg-black ${notchClassName}`}
          aria-hidden="true"
        />
        <div className={`relative aspect-[9/19.2] ${screenClassName}`}>{children}</div>
      </div>
    </div>
  )
}
