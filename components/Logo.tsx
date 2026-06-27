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
      {/* Rounded square background */}
      <rect width="32" height="32" rx="8" fill="#58cc02" />

      {/* Stylized "P" built from rectangles/paths, white fill */}
      {/* The P is rendered as white shapes, with a cutout via mask for the bowl hollow */}
      <defs>
        <mask id="p-cutout">
          {/* Show everything white by default */}
          <rect width="32" height="32" fill="white" />
          {/* Cut out the inner bowl area */}
          <rect x="13" y="10" width="4" height="6" rx="1" fill="black" />
        </mask>
      </defs>

      <g mask="url(#p-cutout)" fill="white">
        {/* Vertical stem */}
        <rect x="9" y="7" width="4" height="18" rx="1" />
        {/* Bowl — rounded on right side */}
        <rect x="9" y="7" width="10" height="9" rx="4.5" />
      </g>
    </svg>
  )
}
