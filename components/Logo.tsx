interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark rounded square background */}
      <rect width="32" height="32" rx="7" fill="#0a0a0f"/>

      {/* Wings outstretched — wide horizontal spread, tapering to tips */}
      <path
        d="M3 14 C7 10 11 13 14 15 C15 12 16 9 16 9 C16 9 17 12 18 15 C21 13 25 10 29 14 C25 17 21 15.5 19 17 L16 26 L13 17 C11 15.5 7 17 3 14Z"
        fill="#58cc02"
      />

      {/* Head */}
      <circle cx="16" cy="9" r="3.5" fill="#58cc02"/>

      {/* Beak — sharp triangular point to the right */}
      <path d="M19 8.2 L22.5 9.5 L19 10.8Z" fill="#a5ed6e"/>

      {/* Eye */}
      <circle cx="17.5" cy="8.5" r="0.9" fill="#0a0a0f"/>
    </svg>
  )
}
