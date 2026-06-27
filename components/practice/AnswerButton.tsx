'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const OPTIONS = [
  { letter: 'A', color: '#e83b3b', shape: '▲' },
  { letter: 'B', color: '#1368ce', shape: '◆' },
  { letter: 'C', color: '#f5a623', shape: '●' },
  { letter: 'D', color: '#26890c', shape: '■' },
] as const

type OptionLetter = 'A' | 'B' | 'C' | 'D'

interface AnswerButtonProps {
  letter: OptionLetter
  text: string
  state: 'idle' | 'correct' | 'wrong' | 'reveal' | 'disabled'
  onClick: () => void
  disabled: boolean
}

export default function AnswerButton({ letter, text, state, onClick, disabled }: AnswerButtonProps) {
  const opt = OPTIONS.find((o) => o.letter === letter)!

  const bgColor =
    state === 'idle' || state === 'disabled'
      ? opt.color
      : state === 'correct'
        ? '#58cc02'
        : state === 'wrong'
          ? '#ff4b4b'
          : state === 'reveal'
            ? '#58cc02'
            : opt.color

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      animate={state === 'wrong' ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
      transition={state === 'wrong' ? { duration: 0.4 } : { duration: 0.2 }}
      whileHover={!disabled ? { scale: 1.015 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className="relative w-full flex items-center gap-0 rounded-xl overflow-hidden cursor-pointer"
      style={{
        minHeight: 72,
        opacity: state === 'disabled' ? 0.45 : 1,
        border:
          state === 'correct'
            ? '2px solid #58cc02'
            : state === 'reveal'
              ? '2px solid #58cc02'
              : '2px solid transparent',
        background: 'transparent',
      }}
    >
      {/* Left color badge */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: 72,
          minHeight: 72,
          background: bgColor,
          fontSize: 24,
          color: 'white',
        }}
      >
        {state === 'correct' || state === 'reveal' ? (
          <CheckCircle2 size={28} color="white" />
        ) : state === 'wrong' ? (
          <XCircle size={28} color="white" />
        ) : (
          <span style={{ fontSize: 20 }}>{opt.shape}</span>
        )}
      </div>

      {/* Answer text */}
      <div
        className="flex-1 px-5 py-4 text-left font-semibold"
        style={{
          background: 'var(--bg-elevated)',
          color: 'var(--text-primary)',
          fontSize: 16,
          minHeight: 72,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {text.replace(/^[ABCD]\)\s*/, '')}
      </div>
    </motion.button>
  )
}
