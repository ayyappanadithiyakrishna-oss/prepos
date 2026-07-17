import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32,
        height: 32,
        borderRadius: 7,
        background: '#0a0a0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: 'absolute' }}>
          {/* Wings outstretched */}
          <path d="M3 14 C7 10 11 13 14 15 C15 12 16 9 16 9 C16 9 17 12 18 15 C21 13 25 10 29 14 C25 17 21 15.5 19 17 L16 26 L13 17 C11 15.5 7 17 3 14Z" fill="#58cc02"/>
          {/* Head */}
          <circle cx="16" cy="9" r="3.5" fill="#58cc02"/>
          {/* Beak */}
          <path d="M19 8.2L22.5 9.5L19 10.8Z" fill="#a5ed6e"/>
          {/* Eye */}
          <circle cx="17.5" cy="8.5" r="0.9" fill="#0a0a0f"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
