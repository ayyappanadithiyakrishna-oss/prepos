'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import {
  GraduationCap, CheckCircle2, XCircle, ChevronRight, Star,
  Lightbulb, BookOpen, FlaskConical, AlertTriangle, HelpCircle, Target,
  Award, Users, MessageCircle,
} from 'lucide-react'
import { LESSON_CONTENT } from '@/lib/lesson-content'

interface Question {
  id: number
  question_text: string
  choices: string[]
  answer_text: string
  explanation: string
  difficulty?: 'Easy' | 'Medium' | 'Hard'
}

interface LessonData {
  id: number
  unit_number: number
  unit_title: string
  lesson_number: string
  title: string
  description: string
  learning_objectives: string[]
  key_concepts: string[]
  questions: Question[]
}

type Phase = 'intro' | 'learn' | 'practice' | 'complete'

function unitColor(unit: number) {
  return unit === 1 ? '#1cb0f6' : unit === 2 ? '#f97316' : unit === 3 ? '#8b5cf6' : '#58cc02'
}

function difficultyColor(d?: string) {
  return d === 'Easy' ? '#58cc02' : d === 'Hard' ? '#ff4b4b' : '#f97316'
}

// ── SVG Graph Engine ──────────────────────────────────────────────────────────

const GW = 260, GH = 170
// Map math coords to SVG coords. Origin at (OX, OY), scale SX/SY px per unit
const OX = 60, OY = 125, SX = 38, SY = 32

function mx(x: number) { return OX + x * SX }
function my(y: number) { return OY - y * SY }

function curve(fn: (x: number) => number, x0: number, x1: number, steps = 200): string {
  const pts: string[] = []
  let first = true
  for (let i = 0; i <= steps; i++) {
    const x = x0 + (i / steps) * (x1 - x0)
    const y = fn(x)
    if (!isFinite(y) || Math.abs(y) > 8) { first = true; continue }
    pts.push(`${first ? 'M' : 'L'} ${mx(x).toFixed(1)},${my(y).toFixed(1)}`)
    first = false
  }
  return pts.join(' ')
}

interface GridProps { color: string; xMin?: number; xMax?: number; yMin?: number; yMax?: number }

function Grid({ color, xMin = -4, xMax = 4, yMin = -3, yMax = 3 }: GridProps) {
  const ticks = { x: [-3,-2,-1,1,2,3], y: [-2,-1,1,2] }
  return (
    <g>
      {/* Grid lines */}
      {ticks.x.map(x => (
        <line key={`gx${x}`} x1={mx(x)} y1={my(yMin)} x2={mx(x)} y2={my(yMax)}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {ticks.y.map(y => (
        <line key={`gy${y}`} x1={mx(xMin)} y1={my(y)} x2={mx(xMax)} y2={my(y)}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {/* Axes */}
      <line x1={mx(xMin)} y1={my(0)} x2={mx(xMax)} y2={my(0)} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1={mx(0)} y1={my(yMin)} x2={mx(0)} y2={my(yMax)} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      {/* Arrow heads */}
      <polygon points={`${mx(xMax)},${my(0)} ${mx(xMax)-6},${my(0)-4} ${mx(xMax)-6},${my(0)+4}`} fill="rgba(255,255,255,0.3)" />
      <polygon points={`${mx(0)},${my(yMax)} ${mx(0)-4},${my(yMax)+6} ${mx(0)+4},${my(yMax)+6}`} fill="rgba(255,255,255,0.3)" />
      {/* Axis labels */}
      <text x={mx(xMax)+4} y={my(0)+4} fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">x</text>
      <text x={mx(0)+5} y={my(yMax)+2} fill="rgba(255,255,255,0.4)" fontSize="11" fontStyle="italic">y</text>
      {/* Tick marks + numbers */}
      {ticks.x.map(x => (
        <g key={`tx${x}`}>
          <line x1={mx(x)} y1={my(0)-3} x2={mx(x)} y2={my(0)+3} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x={mx(x)} y={my(0)+13} fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="middle">{x}</text>
        </g>
      ))}
      {ticks.y.map(y => (
        <g key={`ty${y}`}>
          <line x1={mx(0)-3} y1={my(y)} x2={mx(0)+3} y2={my(y)} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          {y !== 0 && <text x={mx(0)-8} y={my(y)+4} fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="end">{y}</text>}
        </g>
      ))}
    </g>
  )
}

function GraphSVG({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg viewBox={`0 0 ${GW} ${GH}`} className="w-full" style={{ maxHeight: 200 }}>
        {children}
      </svg>
      {label && <p className="text-xs text-center py-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</p>}
    </div>
  )
}

function DashedLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,75,75,0.6)" strokeWidth="1.5" strokeDasharray="5,3" />
}

// ── Individual Graph Components ───────────────────────────────────────────────

function GraphIncDec({ color }: { color: string }) {
  const f = (x: number) => (x ** 3) / 3 - x
  return (
    <GraphSVG label="f(x) = x³/3 − x">
      <Grid color={color} />
      <path d={curve(f, -3.2, 3.2)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(-1)} cy={my(f(-1))} r="4" fill={color} />
      <circle cx={mx(1)} cy={my(f(1))} r="4" fill="#ff4b4b" />
      <text x={mx(-1)-18} y={my(f(-1))-5} fill={color} fontSize="9">max</text>
      <text x={mx(1)+5} y={my(f(1))+4} fill="#ff4b4b" fontSize="9">min</text>
    </GraphSVG>
  )
}

function GraphSecantLine({ color }: { color: string }) {
  const f = (x: number) => x * x
  const a = 1, b = 3
  const slope = (f(b) - f(a)) / (b - a)
  const secant = (x: number) => f(a) + slope * (x - a)
  return (
    <GraphSVG label="AROC = (f(3)−f(1))/(3−1) = 4">
      <Grid color={color} />
      <path d={curve(f, -1.5, 3.3)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(secant, 0.2, 3.5)} fill="none" stroke="#ff4b4b" strokeWidth="1.5" strokeDasharray="6,3" />
      <circle cx={mx(a)} cy={my(f(a))} r="4" fill="#ff4b4b" />
      <circle cx={mx(b)} cy={my(f(b))} r="4" fill="#ff4b4b" />
      <text x={mx(a)+4} y={my(f(a))-6} fill="rgba(255,255,255,0.5)" fontSize="9">(1,1)</text>
      <text x={mx(b)+4} y={my(f(b))-6} fill="rgba(255,255,255,0.5)" fontSize="9">(3,9)</text>
      <text x={mx(2.2)} y={my(secant(2.2))-10} fill="#ff4b4b" fontSize="9">slope = 4</text>
    </GraphSVG>
  )
}

function GraphParabola({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = x² — vertex at (0, 0)">
      <Grid color={color} />
      <path d={curve(x => x*x, -3, 3)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(0)} cy={my(0)} r="4" fill={color} />
      <text x={mx(0)+6} y={my(0)-6} fill={color} fontSize="9">vertex</text>
    </GraphSVG>
  )
}

function GraphCubic({ color }: { color: string }) {
  const f = (x: number) => x**3 - 3*x + 1
  return (
    <GraphSVG label="f(x) = x³ − 3x + 1">
      <Grid color={color} />
      <path d={curve(f, -2.5, 2.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </GraphSVG>
  )
}

function GraphRationalHA({ color }: { color: string }) {
  const f = (x: number) => (2*x + 1) / (x - 1)
  return (
    <GraphSVG label="y = (2x+1)/(x−1) — horizontal asymptote y = 2">
      <Grid color={color} />
      <DashedLine x1={mx(-4)} y1={my(2)} x2={mx(4)} y2={my(2)} />
      <DashedLine x1={mx(1)} y1={my(-3)} x2={mx(1)} y2={my(3)} />
      <path d={curve(f, -4, 0.8)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(f, 1.2, 4)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(2.5)} y={my(2)-7} fill="rgba(255,75,75,0.8)" fontSize="9">y = 2</text>
    </GraphSVG>
  )
}

function GraphRationalVA({ color }: { color: string }) {
  const f = (x: number) => 1 / (x - 2)
  return (
    <GraphSVG label="y = 1/(x−2) — vertical asymptote x = 2">
      <Grid color={color} />
      <DashedLine x1={mx(2)} y1={my(-3)} x2={mx(2)} y2={my(3)} />
      <DashedLine x1={mx(-4)} y1={my(0)} x2={mx(4)} y2={my(0)} />
      <path d={curve(f, -4, 1.8)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(f, 2.2, 4)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(2)+4} y={my(2)} fill="rgba(255,75,75,0.8)" fontSize="9">x = 2</text>
    </GraphSVG>
  )
}

function GraphRationalHole({ color }: { color: string }) {
  const f = (x: number) => (x**2 - 1) / (x - 1)  // = x+1 with hole at x=1
  return (
    <GraphSVG label="y = (x²−1)/(x−1) — hole at (1, 2)">
      <Grid color={color} />
      <path d={curve(f, -3, 0.95)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(f, 1.05, 3)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(1)} cy={my(2)} r="5" fill="#0f0f1a" stroke={color} strokeWidth="2" />
      <text x={mx(1)+7} y={my(2)-3} fill="rgba(255,255,255,0.5)" fontSize="9">hole (1,2)</text>
    </GraphSVG>
  )
}

function GraphTransformation({ color }: { color: string }) {
  const f = (x: number) => x * x
  const g = (x: number) => (x - 2)**2 + 1
  return (
    <GraphSVG label="f(x) = x² and g(x) = (x−2)²+1 (shift right 2, up 1)">
      <Grid color={color} />
      <path d={curve(f, -2.5, 2.5)} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="5,3" />
      <path d={curve(g, -0.5, 4.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(-1.2)} y={my(1.5)} fill="rgba(255,255,255,0.3)" fontSize="9">f(x)</text>
      <text x={mx(3.5)} y={my(g(3.5))+12} fill={color} fontSize="9">g(x)</text>
    </GraphSVG>
  )
}

function GraphScatter({ color }: { color: string }) {
  const pts = [[0.5,1.2],[1,2.1],[1.5,2.9],[2,4.2],[2.5,5.1],[3,6.3],[3.5,7.0],[4,8.1]]
  return (
    <GraphSVG label="Scatter plot with trend line">
      <Grid color={color} />
      <path d={curve(x => 2*x + 0.2, 0, 4.2)} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="5,3" />
      {pts.map(([x,y],i) => <circle key={i} cx={mx(x)} cy={my(y)} r="4" fill={color} opacity="0.85" />)}
    </GraphSVG>
  )
}

function GraphArithmeticGeometric({ color }: { color: string }) {
  const arith = [2,5,8,11,14]
  const geom = [2,4,8,16,32].map(v => v/5)
  const xs = [0,1,2,3,4]
  return (
    <GraphSVG label="Arithmetic (+3 each) vs Geometric (×2 each)">
      <Grid color={color} />
      {xs.slice(0,-1).map(i => (
        <line key={`a${i}`} x1={mx(xs[i])} y1={my(arith[i]/5)} x2={mx(xs[i+1])} y2={my(arith[i+1]/5)}
          stroke={color} strokeWidth="2" />
      ))}
      {xs.slice(0,-1).map(i => (
        <line key={`g${i}`} x1={mx(xs[i])} y1={my(geom[i])} x2={mx(xs[i+1])} y2={my(geom[i+1])}
          stroke="#ff4b4b" strokeWidth="2" />
      ))}
      {xs.map(i => <circle key={`ap${i}`} cx={mx(xs[i])} cy={my(arith[i]/5)} r="3.5" fill={color} />)}
      {xs.map(i => <circle key={`gp${i}`} cx={mx(xs[i])} cy={my(geom[i])} r="3.5" fill="#ff4b4b" />)}
      <text x={mx(2.5)} y={my(arith[2]/5)+14} fill={color} fontSize="9">Arithmetic</text>
      <text x={mx(3)} y={my(geom[3])-7} fill="#ff4b4b" fontSize="9">Geometric</text>
    </GraphSVG>
  )
}

function GraphExponentialGrowth({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = 2ˣ — exponential growth">
      <Grid color={color} />
      <path d={curve(x => Math.pow(2, x), -3.5, 3)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <DashedLine x1={mx(-4)} y1={my(0)} x2={mx(4)} y2={my(0)} />
      <text x={mx(1.5)} y={my(0)-6} fill="rgba(255,75,75,0.7)" fontSize="9">y = 0 asymptote</text>
    </GraphSVG>
  )
}

function GraphExponentialDecay({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = (½)ˣ — exponential decay">
      <Grid color={color} />
      <path d={curve(x => Math.pow(0.5, x), -3, 3.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <DashedLine x1={mx(-4)} y1={my(0)} x2={mx(4)} y2={my(0)} />
    </GraphSVG>
  )
}

function GraphLogCurve({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = log₂(x) — inverse of 2ˣ">
      <Grid color={color} />
      <DashedLine x1={mx(0)} y1={my(-3.5)} x2={mx(0)} y2={my(3.5)} />
      <path d={curve(x => Math.log2(x), 0.05, 4)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(1)} cy={my(0)} r="4" fill={color} />
      <text x={mx(1)+6} y={my(0)-5} fill="rgba(255,255,255,0.5)" fontSize="9">(1, 0)</text>
    </GraphSVG>
  )
}

function GraphInversePair({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x)=2ˣ and f⁻¹(x)=log₂(x) reflected over y=x">
      <Grid color={color} />
      <path d={curve(x => x, -3, 3)} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,3" />
      <path d={curve(x => Math.pow(2,x), -3.5, 3)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d={curve(x => Math.log2(x), 0.05, 4)} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      <text x={mx(-2.5)} y={my(1)} fill={color} fontSize="9">2ˣ</text>
      <text x={mx(2)} y={my(-1)} fill="#f97316" fontSize="9">log₂x</text>
      <text x={mx(1.5)} y={my(1.5)+10} fill="rgba(255,255,255,0.2)" fontSize="9">y=x</text>
    </GraphSVG>
  )
}

function GraphSineWave({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = sin(x) — period 2π, amplitude 1">
      <Grid color={color} />
      <path d={curve(x => Math.sin(x), -3.5, 3.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <DashedLine x1={mx(-4)} y1={my(1)} x2={mx(4)} y2={my(1)} />
      <DashedLine x1={mx(-4)} y1={my(-1)} x2={mx(4)} y2={my(-1)} />
      <text x={mx(3.5)} y={my(1)-5} fill="rgba(255,75,75,0.6)" fontSize="9">y=1</text>
      <text x={mx(3.5)} y={my(-1)+12} fill="rgba(255,75,75,0.6)" fontSize="9">y=−1</text>
    </GraphSVG>
  )
}

function GraphCosineWave({ color }: { color: string }) {
  return (
    <GraphSVG label="f(x) = cos(x) — starts at max, period 2π">
      <Grid color={color} />
      <path d={curve(x => Math.cos(x), -3.5, 3.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(0)} cy={my(1)} r="4" fill={color} />
      <text x={mx(0)+5} y={my(1)-5} fill="rgba(255,255,255,0.5)" fontSize="9">(0,1)</text>
    </GraphSVG>
  )
}

function GraphTangentWave({ color }: { color: string }) {
  const halfPi = Math.PI / 2
  return (
    <GraphSVG label="f(x) = tan(x) — asymptotes at x = ±π/2">
      <Grid color={color} />
      <DashedLine x1={mx(-halfPi)} y1={my(-3.5)} x2={mx(-halfPi)} y2={my(3.5)} />
      <DashedLine x1={mx(halfPi)} y1={my(-3.5)} x2={mx(halfPi)} y2={my(3.5)} />
      <path d={curve(x => Math.tan(x), -halfPi + 0.08, halfPi - 0.08)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(x => Math.tan(x), -3*halfPi + 0.08, -halfPi - 0.08)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={curve(x => Math.tan(x), halfPi + 0.08, 3*halfPi - 0.08)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(halfPi)+3} y={my(3.2)} fill="rgba(255,75,75,0.7)" fontSize="9">π/2</text>
    </GraphSVG>
  )
}

function GraphUnitCircle({ color }: { color: string }) {
  const r = 70
  const angles = [0, Math.PI/6, Math.PI/4, Math.PI/3, Math.PI/2, Math.PI, 3*Math.PI/2]
  const labels: Record<number, string> = {
    0: '0', [Math.PI/6]: 'π/6', [Math.PI/4]: 'π/4', [Math.PI/3]: 'π/3', [Math.PI/2]: 'π/2',
    [Math.PI]: 'π', [3*Math.PI/2]: '3π/2',
  }
  const cx2 = 130, cy2 = 90
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg viewBox="0 0 260 170" className="w-full" style={{ maxHeight: 200 }}>
        <line x1="30" y1={cy2} x2="240" y2={cy2} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <line x1={cx2} y1="10" x2={cx2} y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <circle cx={cx2} cy={cy2} r={r} fill="none" stroke={color} strokeWidth="2" opacity="0.5" />
        {angles.map(a => {
          const px = cx2 + r * Math.cos(a), py = cy2 - r * Math.sin(a)
          return (
            <g key={a}>
              <line x1={cx2} y1={cy2} x2={px} y2={py} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx={px} cy={py} r="3.5" fill={color} />
            </g>
          )
        })}
        <circle cx={cx2 + r} cy={cy2} r="5" fill={color} />
        <text x={cx2 + r + 5} y={cy2 + 4} fill="rgba(255,255,255,0.5)" fontSize="9">(1, 0)</text>
        <text x={cx2 + 3} y={cy2 - r - 5} fill="rgba(255,255,255,0.5)" fontSize="9">(0, 1)</text>
        <text x="18" y={cy2 + 4} fill="rgba(255,255,255,0.4)" fontSize="10">x</text>
        <text x={cx2 + 4} y="16" fill="rgba(255,255,255,0.4)" fontSize="10">y</text>
        <text x={cx2 + 2} y={cy2 + 12} fill="rgba(255,255,255,0.3)" fontSize="9">O</text>
      </svg>
      <p className="text-xs text-center py-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Unit Circle — standard angles marked</p>
    </div>
  )
}

function GraphSinusoidal({ color }: { color: string }) {
  const f = (x: number) => 2 * Math.sin((Math.PI / 2) * x - Math.PI / 4) + 1
  return (
    <GraphSVG label="f(x) = 2sin(πx/2 − π/4) + 1 — A=2, midline y=1">
      <Grid color={color} yMax={4} yMin={-2} />
      <DashedLine x1={mx(-4)} y1={my(1)} x2={mx(4)} y2={my(1)} />
      <DashedLine x1={mx(-4)} y1={my(3)} x2={mx(4)} y2={my(3)} />
      <DashedLine x1={mx(-4)} y1={my(-1)} x2={mx(4)} y2={my(-1)} />
      <path d={curve(f, -3.5, 3.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(2.5)} y={my(1)-7} fill="rgba(255,75,75,0.7)" fontSize="9">midline</text>
    </GraphSVG>
  )
}

function GraphPolarRose({ color }: { color: string }) {
  const cx2 = 130, cy2 = 85, r = 65
  const path = Array.from({ length: 361 }, (_, i) => {
    const t = (i / 360) * 2 * Math.PI
    const rr = r * Math.abs(Math.cos(2 * t))
    const x = cx2 + rr * Math.cos(t)
    const y = cy2 - rr * Math.sin(t)
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg viewBox="0 0 260 170" className="w-full" style={{ maxHeight: 200 }}>
        <line x1="20" y1={cy2} x2="240" y2={cy2} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1={cx2} y1="10" x2={cx2} y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx={cx2} cy={cy2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx={cx2} cy={cy2} r={r/2} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <path d={path} fill={`${color}25`} stroke={color} strokeWidth="2" />
        <text x="15" y={cy2 + 4} fill="rgba(255,255,255,0.3)" fontSize="9">π</text>
        <text x={cx2 + r + 4} y={cy2 + 4} fill="rgba(255,255,255,0.3)" fontSize="9">0</text>
      </svg>
      <p className="text-xs text-center py-2" style={{ color: 'rgba(255,255,255,0.3)' }}>r = cos(2θ) — 4-petal rose</p>
    </div>
  )
}

function GraphParametric({ color }: { color: string }) {
  const path = Array.from({ length: 361 }, (_, i) => {
    const t = (i / 360) * 2 * Math.PI
    const x = mx(2 * Math.cos(t))
    const y = my(Math.sin(t) * 1.5)
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <GraphSVG label="x(t) = 2cos(t), y(t) = 1.5sin(t) — parametric ellipse">
      <Grid color={color} />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
      {[0, Math.PI/2, Math.PI].map((t, i) => (
        <circle key={i} cx={mx(2*Math.cos(t))} cy={my(1.5*Math.sin(t))} r="4" fill={color} />
      ))}
    </GraphSVG>
  )
}

function GraphEllipse({ color }: { color: string }) {
  const path = Array.from({ length: 361 }, (_, i) => {
    const t = (i / 360) * 2 * Math.PI
    const x = mx(3 * Math.cos(t))
    const y = my(1.5 * Math.sin(t))
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <GraphSVG label="x²/9 + y²/2.25 = 1 — a=3, b=1.5">
      <Grid color={color} />
      <path d={path} fill={`${color}12`} stroke={color} strokeWidth="2.5" />
      <circle cx={mx(3)} cy={my(0)} r="4" fill={color} />
      <circle cx={mx(-3)} cy={my(0)} r="4" fill={color} />
      <circle cx={mx(0)} cy={my(1.5)} r="4" fill={color} />
      <circle cx={mx(0)} cy={my(-1.5)} r="4" fill={color} />
      <text x={mx(3)+5} y={my(0)+4} fill="rgba(255,255,255,0.4)" fontSize="9">(3,0)</text>
      <text x={mx(0)+5} y={my(1.5)-5} fill="rgba(255,255,255,0.4)" fontSize="9">(0,1.5)</text>
    </GraphSVG>
  )
}

function GraphVector2D({ color }: { color: string }) {
  const v1 = [2, 1], v2 = [1, 2], sum = [3, 3]
  const arrow = (x1: number, y1: number, x2: number, y2: number, c: string) => {
    const dx = mx(x2) - mx(x1), dy = my(y2) - my(y1)
    const len = Math.sqrt(dx*dx+dy*dy)
    const ux = dx/len, uy = dy/len
    const hx = mx(x2) - ux*10, hy = my(y2) - uy*10
    return (
      <g>
        <line x1={mx(x1)} y1={my(y1)} x2={mx(x2)} y2={my(y2)} stroke={c} strokeWidth="2.5" />
        <polygon points={`${mx(x2)},${my(y2)} ${hx-uy*5},${hy+ux*5} ${hx+uy*5},${hy-ux*5}`} fill={c} />
      </g>
    )
  }
  return (
    <GraphSVG label="u = ⟨2,1⟩, v = ⟨1,2⟩, u+v = ⟨3,3⟩">
      <Grid color={color} />
      {arrow(0,0,v1[0],v1[1], color)}
      {arrow(0,0,v2[0],v2[1], '#f97316')}
      {arrow(0,0,sum[0],sum[1], '#58cc02')}
      <line x1={mx(v1[0])} y1={my(v1[1])} x2={mx(sum[0])} y2={my(sum[1])} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,3" />
      <line x1={mx(v2[0])} y1={my(v2[1])} x2={mx(sum[0])} y2={my(sum[1])} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,3" />
      <text x={mx(2.2)} y={my(1)} fill={color} fontSize="9">u</text>
      <text x={mx(1)} y={my(2.2)} fill="#f97316" fontSize="9">v</text>
      <text x={mx(3.1)} y={my(3)} fill="#58cc02" fontSize="9">u+v</text>
    </GraphSVG>
  )
}

function GraphMatrixGrid({ color }: { color: string }) {
  const transform = (x: number, y: number) => [2*x - y, x + y]
  const gridLines: React.ReactNode[] = []
  for (let i = -2; i <= 2; i++) {
    gridLines.push(
      <line key={`hb${i}`} x1={mx(-2)} y1={my(i)} x2={mx(2)} y2={my(i)} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />,
      <line key={`vb${i}`} x1={mx(i)} y1={my(-2)} x2={mx(i)} y2={my(2)} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    )
    const [tx0,ty0] = transform(-2,i), [tx1,ty1] = transform(2,i)
    const [tvx0,tvy0] = transform(i,-2), [tvx1,tvy1] = transform(i,2)
    gridLines.push(
      <line key={`ha${i}`} x1={mx(tx0)} y1={my(ty0)} x2={mx(tx1)} y2={my(ty1)} stroke={`${color}50`} strokeWidth="1" />,
      <line key={`va${i}`} x1={mx(tvx0)} y1={my(tvy0)} x2={mx(tvx1)} y2={my(tvy1)} stroke={`${color}50`} strokeWidth="1" />
    )
  }
  return (
    <GraphSVG label="Matrix [[2,−1],[1,1]] transforms the grid">
      <Grid color={color} xMin={-4} xMax={4} yMin={-3} yMax={3} />
      {gridLines}
    </GraphSVG>
  )
}

function GraphComposition({ color }: { color: string }) {
  return (
    <GraphSVG label="f(g(x)) — inner function feeds into outer">
      <Grid color={color} />
      <path d={curve(x => x*x - 1, -2.5, 2.5)} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5,3" />
      <path d={curve(x => Math.sqrt(Math.max(0, x*x - 1)), -2.5, 2.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <text x={mx(-2)} y={my(1.5)} fill="rgba(255,255,255,0.3)" fontSize="9">g(x)=x²−1</text>
      <text x={mx(1.5)} y={my(0.8)} fill={color} fontSize="9">f(g(x))</text>
    </GraphSVG>
  )
}

function GraphParabolaConic({ color }: { color: string }) {
  return (
    <GraphSVG label="x² = 4y — parabola opening upward, vertex (0,0)">
      <Grid color={color} />
      <path d={curve(x => x*x/4, -3.5, 3.5)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={mx(0)} cy={my(0)} r="4" fill={color} />
      <text x={mx(0)+5} y={my(0)+12} fill={color} fontSize="9">vertex</text>
      <DashedLine x1={mx(-4)} y1={my(-0.25)} x2={mx(4)} y2={my(-0.25)} />
      <text x={mx(1.5)} y={my(-0.25)-6} fill="rgba(255,75,75,0.7)" fontSize="9">directrix</text>
    </GraphSVG>
  )
}

const GRAPH_MAP: Record<string, React.ComponentType<{ color: string }>> = {
  'increasing-decreasing': GraphIncDec,
  'secant-line': GraphSecantLine,
  'parabola': GraphParabola,
  'cubic': GraphCubic,
  'rational-ha': GraphRationalHA,
  'rational-va': GraphRationalVA,
  'rational-hole': GraphRationalHole,
  'transformation': GraphTransformation,
  'scatter': GraphScatter,
  'arithmetic-geometric': GraphArithmeticGeometric,
  'exponential-growth': GraphExponentialGrowth,
  'exponential-decay': GraphExponentialDecay,
  'log-curve': GraphLogCurve,
  'inverse-pair': GraphInversePair,
  'composition': GraphComposition,
  'sine-wave': GraphSineWave,
  'cosine-wave': GraphCosineWave,
  'tangent-wave': GraphTangentWave,
  'unit-circle': GraphUnitCircle,
  'sinusoidal': GraphSinusoidal,
  'polar-rose': GraphPolarRose,
  'polar-limaçon': GraphPolarRose,
  'parametric': GraphParametric,
  'ellipse': GraphEllipse,
  'parabola-conic': GraphParabolaConic,
  'vector-2d': GraphVector2D,
  'matrix-grid': GraphMatrixGrid,
  'matrix-transform': GraphMatrixGrid,
}

// ── Section Components ────────────────────────────────────────────────────────

function Section({ title, icon, color, children }: { title: string; icon: React.ReactNode; color: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center gap-2 mb-3">
        <span style={{ color }}>{icon}</span>
        <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', ...style }}>
      {children}
    </div>
  )
}

function DataTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      <div className="px-4 py-2.5" style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)' }}>
        <p className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>{caption}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: 'var(--bg-card)' }}>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2.5 text-left font-bold" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--bg-base)' : 'var(--bg-card)' }}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-2.5 font-mono" style={{ color: 'var(--text-primary)', borderBottom: ri < rows.length - 1 ? '1px solid var(--border)' : 'none', whiteSpace: 'nowrap' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Math Rendering ────────────────────────────────────────────────────────────

function renderMath(text: string): React.ReactNode[] {
  if (!text) return []
  const result: React.ReactNode[] = []
  let buf = ''
  let i = 0

  const k = () => result.length
  const flush = () => { if (buf) { result.push(buf); buf = '' } }

  while (i < text.length) {
    // Fraction: (num) / (den) — both sides paren-wrapped
    if (text[i] === '(') {
      let depth = 0, j = i
      while (j < text.length) {
        if (text[j] === '(') depth++
        else if (text[j] === ')') { depth--; if (depth === 0) break }
        j++
      }
      let after = j + 1
      while (after < text.length && text[after] === ' ') after++
      if (text[after] === '/' && text[after + 1] !== '/') {
        let ds = after + 1
        while (ds < text.length && text[ds] === ' ') ds++
        if (text[ds] === '(') {
          flush()
          const num = text.slice(i + 1, j)
          let d2 = 0, m = ds
          while (m < text.length) {
            if (text[m] === '(') d2++
            else if (text[m] === ')') { d2--; if (d2 === 0) break }
            m++
          }
          const den = text.slice(ds + 1, m)
          result.push(
            <span key={k()} style={{display:'inline-flex',flexDirection:'column',alignItems:'center',verticalAlign:'middle',lineHeight:1.4,margin:'0 3px'}}>
              <span style={{borderBottom:'1.5px solid currentColor',paddingBottom:'2px',paddingInline:'3px',fontSize:'0.88em',whiteSpace:'nowrap',lineHeight:1.3}}>{renderMath(num)}</span>
              <span style={{paddingTop:'2px',paddingInline:'3px',fontSize:'0.88em',whiteSpace:'nowrap',lineHeight:1.3}}>{renderMath(den)}</span>
            </span>
          )
          i = m + 1
          continue
        }
      }
    }

    // sqrt(...) keyword
    if (text.slice(i, i + 5).toLowerCase() === 'sqrt(') {
      flush()
      let j = i + 5, depth = 1
      while (j < text.length && depth > 0) {
        if (text[j] === '(') depth++
        else if (text[j] === ')') depth--
        j++
      }
      const inner = text.slice(i + 5, j - 1)
      result.push(
        <span key={k()} style={{display:'inline-flex',alignItems:'flex-start'}}>
          <span style={{fontSize:'1.2em',lineHeight:1,marginRight:'-1px',position:'relative',top:'1px'}}>√</span>
          <span style={{borderTop:'1.5px solid currentColor',paddingTop:'1px',paddingInline:'2px',display:'inline-block',lineHeight:1.4}}>{renderMath(inner)}</span>
        </span>
      )
      i = j
      continue
    }

    // √ symbol already in text
    if (text[i] === '√') {
      flush()
      i++
      let inner = ''
      if (i < text.length && text[i] === '(') {
        let j = i, depth = 0
        while (j < text.length) {
          if (text[j] === '(') depth++
          else if (text[j] === ')') { depth--; if (depth === 0) { j++; break } }
          j++
        }
        inner = text.slice(i, j)
        i = j
      } else {
        while (i < text.length && !/[\s,;.!?]/.test(text[i])) inner += text[i++]
      }
      result.push(
        <span key={k()} style={{display:'inline-flex',alignItems:'flex-start'}}>
          <span style={{fontSize:'1.2em',lineHeight:1,marginRight:'-1px',position:'relative',top:'1px'}}>√</span>
          {inner && <span style={{borderTop:'1.5px solid currentColor',paddingTop:'1px',paddingInline:'2px',display:'inline-block',lineHeight:1.4}}>{renderMath(inner)}</span>}
        </span>
      )
      continue
    }

    // ^ superscript
    if (text[i] === '^' && i > 0) {
      flush()
      i++
      let exp = ''
      if (i < text.length && text[i] === '{') {
        const end = text.indexOf('}', i)
        exp = end > i ? text.slice(i + 1, end) : ''
        i = end > i ? end + 1 : i + 1
      } else {
        if (text[i] === '-' || text[i] === '+') exp += text[i++]
        while (i < text.length && /[\d]/.test(text[i])) exp += text[i++]
        if (!exp && i < text.length && /[a-zA-Z]/.test(text[i])) exp += text[i++]
      }
      result.push(<sup key={k()} style={{fontSize:'0.65em',lineHeight:0,position:'relative',top:'-0.45em'}}>{renderMath(exp)}</sup>)
      continue
    }

    buf += text[i++]
  }
  flush()
  return result
}

function MathText({ children, className, style }: { children: string; className?: string; style?: React.CSSProperties }) {
  if (!children) return null
  return <span className={className} style={style}>{renderMath(children)}</span>
}

// ── Question Visual System ────────────────────────────────────────────────────

// Extract "label: v1, v2, v3 and label2: v1, v2, v3" patterns from question text
function parseTableData(text: string): { label: string; values: string[] }[] | null {
  const re = /\b([a-zA-Z][a-zA-Z0-9()'Δ]*)\s*:\s*(-?\d+(?:\.\d+)?(?:\s*,\s*-?\d+(?:\.\d+)?){2,})/g
  const rows: { label: string; values: string[] }[] = []
  let m
  while ((m = re.exec(text)) !== null) {
    rows.push({ label: m[1], values: m[2].split(',').map(v => v.trim()) })
  }
  if (rows.length < 2) return null
  const len = rows[0].values.length
  if (rows.some(r => r.values.length !== len) || len < 3) return null
  return rows
}

// Render a table extracted from question text
function InlineTable({ rows, color }: { rows: { label: string; values: string[] }[]; color: string }) {
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={{ border: `1.5px solid ${color}50` }}>
      <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: `${color}15`, borderBottom: `1px solid ${color}30` }}>
        <Target size={11} style={{ color }} />
        <span className="text-xs font-bold" style={{ color }}>Data Table</span>
      </div>
      <div className="overflow-x-auto">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                <td style={{
                  padding: '10px 16px', fontWeight: 800, fontSize: '13px',
                  color, background: `${color}18`,
                  borderRight: `1.5px solid ${color}40`,
                  borderBottom: ri < rows.length - 1 ? `1px solid ${color}20` : 'none',
                  whiteSpace: 'nowrap', fontFamily: 'monospace',
                }}>
                  {row.label}
                </td>
                {row.values.map((v, vi) => (
                  <td key={vi} style={{
                    padding: '10px 0', textAlign: 'center', fontSize: '14px',
                    fontFamily: 'monospace', fontWeight: 700,
                    color: 'var(--text-primary)',
                    background: vi % 2 === 0 ? 'var(--bg-elevated)' : 'var(--bg-card)',
                    borderRight: vi < row.values.length - 1 ? '1px solid var(--border)' : 'none',
                    borderBottom: ri < rows.length - 1 ? `1px solid ${color}20` : 'none',
                    minWidth: '44px',
                  }}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Line graph drawn from table data — green segments = increasing, red = decreasing
function DataLineGraph({ rows, color }: { rows: { label: string; values: string[] }[]; color: string }) {
  if (rows.length < 2) return null
  const xRow = rows[0], yRow = rows[1]
  const xVals = xRow.values.map(Number)
  const yVals = yRow.values.map(Number)
  if (xVals.some(isNaN) || yVals.some(isNaN)) return null

  const W = 540, H = 220
  const P = { t: 36, r: 24, b: 48, l: 52 }
  const plotW = W - P.l - P.r, plotH = H - P.t - P.b
  const minX = Math.min(...xVals), maxX = Math.max(...xVals)
  const minY = Math.min(...yVals), maxY = Math.max(...yVals)
  const pad = (maxY - minY) * 0.2 || 1
  const yLow = minY - pad, yHigh = maxY + pad

  const px = (x: number) => P.l + ((x - minX) / (maxX - minX || 1)) * plotW
  const py = (y: number) => P.t + ((yHigh - y) / (yHigh - yLow)) * plotH
  const pts = xVals.map((x, i) => ({ x: px(x), y: py(yVals[i]) }))

  return (
    <div className="rounded-xl overflow-hidden mb-4" style={{ border: `1.5px solid ${color}50`, background: 'var(--bg-elevated)' }}>
      <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: `${color}15`, borderBottom: `1px solid ${color}30` }}>
        <Target size={11} style={{ color }} />
        <span className="text-xs font-bold" style={{ color }}>Graph of {yRow.label} vs {xRow.label}</span>
        <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>
          <span style={{ color: '#58cc02', fontWeight: 700 }}>↗ increasing</span>
          {' · '}
          <span style={{ color: '#ff4b4b', fontWeight: 700 }}>↘ decreasing</span>
        </span>
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
        {/* Grid lines */}
        {yVals.map((_, i) => {
          const y = yLow + (i / Math.max(yVals.length - 1, 1)) * (yHigh - yLow)
          return <line key={i} x1={P.l} y1={py(y)} x2={W - P.r} y2={py(y)} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        })}
        {/* Colored segments */}
        {pts.slice(1).map((p, i) => {
          const diff = yVals[i + 1] - yVals[i]
          const segColor = diff > 0 ? '#58cc02' : diff < 0 ? '#ff4b4b' : 'rgba(255,255,255,0.3)'
          return <line key={i} x1={pts[i].x} y1={pts[i].y} x2={p.x} y2={p.y} stroke={segColor} strokeWidth="3.5" strokeLinecap="round"/>
        })}
        {/* Dots + value labels */}
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={6} fill={color} stroke="var(--bg-elevated)" strokeWidth="2"/>
            <text x={p.x} y={p.y - 12} fill="rgba(255,255,255,0.85)" fontSize="12" textAnchor="middle" fontWeight="700">{yVals[i]}</text>
          </g>
        ))}
        {/* x-axis */}
        <line x1={P.l} y1={H - P.b} x2={W - P.r} y2={H - P.b} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        {/* x tick labels */}
        {pts.map((p, i) => (
          <text key={i} x={p.x} y={H - P.b + 18} fill="rgba(255,255,255,0.55)" fontSize="13" textAnchor="middle" fontWeight="600">{xVals[i]}</text>
        ))}
        {/* axis name labels */}
        <text x={P.l + plotW / 2} y={H - 4} fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle">{xRow.label}</text>
        <line x1={P.l} y1={P.t} x2={P.l} y2={H - P.b} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <text x={15} y={P.t + plotH / 2} fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle"
          transform={`rotate(-90,15,${P.t + plotH / 2})`}>{yRow.label}</text>
      </svg>
    </div>
  )
}

// Behavior graph: inc-then-dec hill or dec-then-inc valley
function BehaviorGraph({ text, color }: { text: string; color: string }) {
  const incRe = /(?:rises?|increases?|going\s+up|increas(?:ing)?|ascending)/i
  const decRe = /(?:falls?|decreases?|going\s+down|decreas(?:ing)?|descending)/i
  const hasInc = incRe.test(text)
  const hasDec = decRe.test(text)
  const hasMax = /local\s+max(?:imum)?|relative\s+max/i.test(text)
  const hasMin = /local\s+min(?:imum)?|relative\s+min/i.test(text)
  if (!hasInc && !hasDec && !hasMax && !hasMin) return null

  const xs = [...text.matchAll(/x\s*=\s*([-−]?\d+(?:\.\d+)?)/gi)]
    .map(m => parseFloat(m[1].replace('−', '-'))).filter(x => !isNaN(x))

  const showHill = hasMax || (hasInc && hasDec && text.search(incRe) < text.search(decRe))
  const showValley = hasMin || (hasInc && hasDec && text.search(decRe) < text.search(incRe))
  const showIncOnly = hasInc && !hasDec && !hasMax && !hasMin
  const showDecOnly = hasDec && !hasInc && !hasMax && !hasMin

  type FnType = (x: number) => number
  let fn: FnType, peakY: number, label: string
  const peakX = xs.length >= 2 ? xs[Math.floor(xs.length / 2)] : (xs[0] ?? 0)

  if (showHill) {
    fn = (x: number) => -0.6 * (x - peakX) * (x - peakX) + 2.4
    peakY = 2.4; label = 'local max'
  } else if (showValley) {
    fn = (x: number) => 0.6 * (x - peakX) * (x - peakX) - 2.4
    peakY = -2.4; label = 'local min'
  } else if (showIncOnly) {
    fn = (x: number) => 0.5 * x + 0.5
    peakY = 0; label = 'increasing'
  } else if (showDecOnly) {
    fn = (x: number) => -0.5 * x + 0.5
    peakY = 0; label = 'decreasing'
  } else {
    return null
  }

  const endXs = xs.length >= 2 ? [xs[0], xs[xs.length - 1]].filter(x => x !== peakX) : []

  // Larger graph — 520x220
  const VW = 520, VH = 220
  // Remap using our existing mx/my helpers (they use GW=260,GH=170,OX=60,OY=125,SX=38,SY=32)
  // Scale factor to fit VW x VH viewBox
  const scaleX = VW / GW, scaleY = VH / GH
  const smx = (x: number) => mx(x) * scaleX
  const smy = (y: number) => my(y) * scaleY

  return (
    <div className="rounded-xl overflow-hidden mb-4" style={{ border: `1.5px solid ${color}50` }}>
      <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: `${color}15`, borderBottom: `1px solid ${color}30` }}>
        <Target size={11} style={{ color }} />
        <span className="text-xs font-bold" style={{ color }}>Graph Illustration</span>
        {(showHill || showValley) && (
          <span className="text-xs ml-1 px-2 py-0.5 rounded-full font-bold"
            style={{ background: `${color}25`, color }}>{label}</span>
        )}
      </div>
      <svg width="100%" viewBox={`0 0 ${VW} ${VH}`} style={{ display: 'block', background: 'var(--bg-elevated)' }}>
        {/* Grid */}
        {[-3,-2,-1,1,2,3].map(x => (
          <line key={`gx${x}`} x1={smx(x)} y1={16} x2={smx(x)} y2={VH-12} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        ))}
        {[-2,-1,1,2].map(y => (
          <line key={`gy${y}`} x1={12} y1={smy(y)} x2={VW-12} y2={smy(y)} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        ))}
        {/* Axes */}
        <line x1={12} y1={smy(0)} x2={VW-12} y2={smy(0)} stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
        <line x1={smx(0)} y1={16} x2={smx(0)} y2={VH-12} stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
        {/* Arrow heads */}
        <polygon points={`${VW-12},${smy(0)} ${VW-20},${smy(0)-5} ${VW-20},${smy(0)+5}`} fill="rgba(255,255,255,0.25)"/>
        <polygon points={`${smx(0)},16 ${smx(0)-5},24 ${smx(0)+5},24`} fill="rgba(255,255,255,0.25)"/>
        {/* Axis labels */}
        <text x={VW-10} y={smy(0)+4} fill="rgba(255,255,255,0.4)" fontSize="13" fontStyle="italic">x</text>
        <text x={smx(0)+6} y={22} fill="rgba(255,255,255,0.4)" fontSize="13" fontStyle="italic">y</text>
        {/* Tick labels */}
        {[-3,-2,-1,1,2,3].map(x => (
          <text key={x} x={smx(x)} y={smy(0)+18} fill="rgba(255,255,255,0.3)" fontSize="11" textAnchor="middle">{x}</text>
        ))}
        {/* Curve — properly scaled */}
        {(() => {
          const pts2: string[] = []
          let first2 = true
          for (let t = 0; t <= 200; t++) {
            const xv = -4 + (t / 200) * 8
            const yv = fn(xv)
            if (!isFinite(yv) || Math.abs(yv) > 8) { first2 = true; continue }
            pts2.push(`${first2 ? 'M' : 'L'} ${smx(xv).toFixed(1)},${smy(yv).toFixed(1)}`)
            first2 = false
          }
          return <path d={pts2.join(' ')} fill="none" stroke={color} strokeWidth="3.5" strokeLinejoin="round"/>
        })()}
        {/* Peak/valley marker */}
        {(showHill || showValley) && <>
          <circle cx={smx(peakX)} cy={smy(peakY)} r={7} fill={color}/>
          <circle cx={smx(peakX)} cy={smy(peakY)} r={12} fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.4"/>
          <line x1={smx(peakX)} y1={smy(0)} x2={smx(peakX)} y2={smy(peakY)} stroke={color} strokeWidth="1.5" strokeDasharray="4,3" strokeOpacity="0.6"/>
          <line x1={smx(peakX)} y1={smy(0)-4} x2={smx(peakX)} y2={smy(0)+4} stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
          <text x={smx(peakX)} y={smy(0)+20} fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="middle" fontWeight="700">x = {peakX}</text>
          <text x={smx(peakX)+14} y={smy(peakY)+(showHill ? -10 : 18)} fill={color} fontSize="12" fontWeight="800">{label}</text>
        </>}
        {/* Endpoint markers */}
        {endXs.map((x, idx) => (
          <g key={idx}>
            <line x1={smx(x)} y1={smy(0)-4} x2={smx(x)} y2={smy(0)+4} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
            <text x={smx(x)} y={smy(0)+20} fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle">x = {x}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// Master visual for any question — detects table or behavior pattern
function QuestionVisual({ text, color }: { text: string; color: string }) {
  const tableData = parseTableData(text)
  if (tableData) {
    return (
      <>
        <InlineTable rows={tableData} color={color} />
        <DataLineGraph rows={tableData} color={color} />
      </>
    )
  }
  return <BehaviorGraph text={text} color={color} />
}

function EmbeddedQuestion({ q, color, index }: {
  q: { question_text: string; choices: string[]; answer_text: string; explanation: string; difficulty?: string }
  color: string
  index: number
}) {
  const [sel, setSel] = useState<string | null>(null)
  const isCorrect = sel === q.answer_text
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: `2px solid ${color}40`, background: `${color}06` }}>
      <div className="px-5 py-3 flex items-center gap-2" style={{ background: `${color}15`, borderBottom: `1px solid ${color}30` }}>
        <span className="text-xs font-black px-2.5 py-1 rounded-full" style={{ background: color, color: 'white' }}>
          Quick Check {index}
        </span>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Try it before moving on!</span>
      </div>
      <div className="px-5 pt-5 pb-3">
        <QuestionVisual text={q.question_text} color={color} />
        <p className="text-sm font-semibold leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
          <MathText>{q.question_text}</MathText>
        </p>
        <div className="flex flex-col gap-2.5">
          {q.choices.map((choice, ci) => {
            const letter = ['A','B','C','D'][ci]
            const state = !sel ? 'idle' : letter === q.answer_text ? 'correct' : sel === letter ? 'wrong' : 'dim'
            return (
              <motion.button key={ci}
                onClick={() => !sel && setSel(letter)}
                animate={state === 'wrong' ? { x: [0,-6,6,-4,4,0] } : {}}
                whileHover={!sel ? { x: 3 } : {}}
                transition={{ duration: 0.3 }}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium flex items-center gap-3 cursor-pointer transition-all duration-150"
                style={{
                  background: state === 'correct' ? 'rgba(88,204,2,0.12)' : state === 'wrong' ? 'rgba(255,75,75,0.1)' : 'var(--bg-elevated)',
                  border: `1.5px solid ${state === 'correct' ? '#58cc02' : state === 'wrong' ? '#ff4b4b' : 'var(--border)'}`,
                  color: state === 'dim' ? 'var(--text-muted)' : 'var(--text-primary)',
                  opacity: state === 'dim' ? 0.4 : 1,
                  cursor: sel ? 'default' : 'pointer',
                }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: state === 'correct' ? '#58cc02' : state === 'wrong' ? '#ff4b4b' : `${color}22`,
                    color: state === 'correct' || state === 'wrong' ? 'white' : color,
                  }}>{letter}</span>
                <MathText>{choice.replace(/^[A-D]\)\s*/,'')}</MathText>
              </motion.button>
            )
          })}
        </div>
        {sel && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="mt-4 mb-1 rounded-xl px-4 py-4 flex items-start gap-3"
            style={{
              background: isCorrect ? 'rgba(88,204,2,0.08)' : 'rgba(255,75,75,0.08)',
              border: `1.5px solid ${isCorrect ? '#58cc02' : '#ff4b4b'}50`,
            }}>
            {isCorrect
              ? <CheckCircle2 size={18} color="#58cc02" className="flex-shrink-0 mt-0.5" />
              : <XCircle size={18} color="#ff4b4b" className="flex-shrink-0 mt-0.5" />}
            <div>
              <p className="text-sm font-bold mb-1" style={{ color: isCorrect ? '#58cc02' : '#ff4b4b' }}>
                {isCorrect ? '✓ Nice work!' : `Correct answer: ${q.answer_text}`}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <MathText>{q.explanation}</MathText>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// ── Study Panel ──────────────────────────────────────────────────────────────

function StudyPanel({ lesson, content, phase, color, score, qIndex, totalQs, qResults, practiceQs }: {
  lesson: LessonData
  content: ReturnType<typeof Object.values>[0] | undefined
  phase: Phase
  color: string
  score: number
  qIndex: number
  totalQs: number
  qResults: Record<number, 'correct' | 'wrong'>
  practiceQs: Question[]
}) {
  const phaseList: Phase[] = ['intro', 'learn', 'practice', 'complete']
  const phaseLabels = ['Intro', 'Learn', 'Practice', 'Complete']
  const phaseIdx = phaseList.indexOf(phase)
  const accuracy = totalQs > 0 && Object.keys(qResults).length > 0
    ? Math.round((score / Object.keys(qResults).length) * 100) : 0

  // Difficulty stats
  let eT = 0, eC = 0, mT = 0, mC = 0, hT = 0, hC = 0
  practiceQs.forEach((q, i) => {
    const r = qResults[i]
    if (q.difficulty === 'Easy') { eT++; if (r === 'correct') eC++ }
    else if (q.difficulty === 'Hard') { hT++; if (r === 'correct') hC++ }
    else { mT++; if (r === 'correct') mC++ }
  })

  const lc = content as import('@/lib/lesson-content').LessonContent | undefined

  return (
    <div className="hidden md:flex w-[268px] flex-shrink-0 flex-col gap-3"
      style={{ position: 'sticky', top: '24px', maxHeight: 'calc(100vh - 48px)', overflowY: 'auto' }}>

      {/* Lesson info + phase progress */}
      <div className="rounded-2xl p-4" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>
            {lesson.lesson_number}
          </span>
          <span className="text-xs font-bold leading-tight line-clamp-2" style={{ color: 'var(--text-primary)' }}>
            {lesson.title}
          </span>
        </div>
        {/* Phase steps */}
        <div className="flex items-start">
          {phaseList.map((p, i) => (
            <div key={p} className="flex items-center" style={{ flex: i < 3 ? '1' : 'none' }}>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                  style={{
                    background: i < phaseIdx ? '#58cc02' : i === phaseIdx ? color : 'var(--bg-elevated)',
                    border: `1.5px solid ${i < phaseIdx ? '#58cc02' : i === phaseIdx ? color : 'var(--border)'}`,
                    color: i <= phaseIdx ? 'white' : 'var(--text-muted)',
                  }}>
                  {i < phaseIdx ? '✓' : i + 1}
                </div>
                <span className="text-[9px] mt-1 font-semibold leading-none"
                  style={{ color: i === phaseIdx ? color : i < phaseIdx ? '#58cc02' : 'var(--text-muted)' }}>
                  {phaseLabels[i]}
                </span>
              </div>
              {i < 3 && (
                <div className="h-px flex-1 mb-4 mx-1" style={{ background: i < phaseIdx ? '#58cc0280' : 'var(--border)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Formula — always visible */}
      {lc?.keyFormula && (
        <div className="rounded-2xl p-4" style={{ background: `${color}10`, border: `1px solid ${color}35` }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color }}>Key Formula</p>
          <p className="font-mono text-sm font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <MathText>{lc.keyFormula}</MathText>
          </p>
        </div>
      )}

      {/* Practice: Question Map */}
      {phase === 'practice' && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Progress</p>
            <span className="text-sm font-black" style={{ color: 'var(--text-primary)' }}>
              {score}<span className="font-normal text-xs" style={{ color: 'var(--text-muted)' }}>/{totalQs}</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {practiceQs.map((q, i) => {
              const r = qResults[i]
              const cur = i === qIndex
              const dColor = q.difficulty === 'Easy' ? '#58cc02' : q.difficulty === 'Hard' ? '#ff4b4b' : '#f97316'
              return (
                <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
                  style={{
                    background: r === 'correct' ? 'rgba(88,204,2,0.15)' : r === 'wrong' ? 'rgba(255,75,75,0.1)' : cur ? `${color}20` : 'var(--bg-elevated)',
                    border: `1.5px solid ${r === 'correct' ? '#58cc02' : r === 'wrong' ? '#ff4b4b' : cur ? color : dColor + '40'}`,
                    color: r === 'correct' ? '#58cc02' : r === 'wrong' ? '#ff4b4b' : cur ? color : 'var(--text-muted)',
                    boxShadow: cur ? `0 0 10px ${color}50` : 'none',
                    transition: 'all 0.2s',
                  }}>
                  {r === 'correct' ? '✓' : r === 'wrong' ? '✗' : i + 1}
                </div>
              )
            })}
          </div>
          <div className="h-1.5 rounded-full mb-1.5" style={{ background: 'var(--border)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${accuracy}%`,
                background: accuracy >= 80 ? '#58cc02' : accuracy >= 60 ? '#f97316' : '#ff4b4b',
              }} />
          </div>
          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{accuracy}% accuracy</p>
        </div>
      )}

      {/* Practice: Difficulty Breakdown */}
      {phase === 'practice' && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>By Difficulty</p>
          {[
            { label: 'Easy', total: eT, correct: eC, c: '#58cc02' },
            { label: 'Medium', total: mT, correct: mC, c: '#f97316' },
            { label: 'AP Level', total: hT, correct: hC, c: '#ff4b4b' },
          ].filter(d => d.total > 0).map(({ label, total, correct: ct, c }) => (
            <div key={label} className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </div>
                <span className="text-xs font-bold" style={{ color: c }}>{ct}/{total}</span>
              </div>
              <div className="h-1 rounded-full" style={{ background: 'var(--border)' }}>
                <div className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${total > 0 ? (ct / total) * 100 : 0}%`, background: c }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Learn: Quick Reference terms */}
      {phase === 'learn' && lc?.keyTerms && lc.keyTerms.length > 0 && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Quick Reference</p>
          <div className="flex flex-col gap-2.5">
            {lc.keyTerms.slice(0, 4).map((kt, i) => (
              <div key={i}>
                <p className="text-xs font-bold mb-0.5" style={{ color }}>{kt.term}</p>
                <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>{kt.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learn: AP Tip */}
      {phase === 'learn' && lc?.tip && (
        <div className="rounded-2xl p-4" style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.18)' }}>
          <div className="flex items-center gap-1.5 mb-2">
            <Lightbulb size={11} color="var(--gold)" />
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>AP Exam Tip</p>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{lc.tip}</p>
        </div>
      )}

      {/* Practice: Encouragement */}
      {phase === 'practice' && qIndex > 0 && (
        <div className="rounded-2xl p-4 text-center" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <p className="text-sm font-black mb-1" style={{
            color: accuracy >= 80 ? '#58cc02' : accuracy >= 60 ? '#f97316' : 'var(--text-secondary)',
          }}>
            {accuracy >= 90 ? 'On fire!' : accuracy >= 80 ? 'Great work!' : accuracy >= 60 ? 'Keep pushing!' : 'You got this!'}
          </p>
          <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
            {totalQs - qIndex - 1 > 0 ? `${totalQs - qIndex - 1} question${totalQs - qIndex - 1 !== 1 ? 's' : ''} left` : 'Last one!'}
          </p>
        </div>
      )}
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function LessonPlayerPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [lesson, setLesson] = useState<LessonData | null>(null)
  const [loading, setLoading] = useState(true)
  const [phase, setPhase] = useState<Phase>('intro')
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [xp, setXP] = useState(0)
  const [qResults, setQResults] = useState<Record<number, 'correct' | 'wrong'>>({})

  useEffect(() => {
    if (!id) return
    fetch(`/api/lessons/${id}`)
      .then(r => r.json())
      .then((data: { lesson: Record<string, unknown>; questions: Record<string, unknown>[] }) => {
        const l = data.lesson
        const toArr = (v: unknown, sep: string) =>
          typeof v === 'string' ? v.split(sep).map(s => s.trim()).filter(Boolean) : (v as string[] ?? [])
        const lessonNum = l.lesson_number as string
        const content = LESSON_CONTENT[lessonNum]
        const dbQs = (data.questions ?? []).map(q => ({
          id: q.id as number,
          question_text: q.question_text as string,
          answer_text: q.answer_text as string,
          explanation: (q.explanation as string) ?? '',
          choices: typeof q.choices === 'string' ? JSON.parse(q.choices as string) : (q.choices as string[]) ?? [],
        }))
        const contentQs = content?.questions?.map((q, i) => ({
          id: -(i+1), question_text: q.question_text, answer_text: q.answer_text,
          explanation: q.explanation, choices: q.choices, difficulty: q.difficulty,
        })) ?? []
        setLesson({
          id: l.id as number, unit_number: l.unit_number as number, unit_title: l.unit_title as string,
          lesson_number: lessonNum, title: l.title as string, description: l.description as string,
          learning_objectives: toArr(l.learning_objectives, ';'),
          key_concepts: toArr(l.key_concepts, ','),
          questions: dbQs.length > 0 ? dbQs : contentQs,
        })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
        <GraduationCap size={32} color="var(--primary-theme)" />
      </motion.div>
    </div>
  )

  if (!lesson) return (
    <div className="flex items-center justify-center min-h-screen">
      <p style={{ color: 'var(--text-muted)' }}>Lesson not found.</p>
    </div>
  )

  const color = unitColor(lesson.unit_number)
  const content = LESSON_CONTENT[lesson.lesson_number]
  const GraphComponent = content?.graphType ? GRAPH_MAP[content.graphType] : null

  // Derive practice questions: skip embedded (first 2 if content-sourced), sort by difficulty
  const diffOrder = (d?: string) => d === 'Easy' ? 1 : d === 'Hard' ? 3 : 2
  const isContentQs = (lesson.questions[0]?.id ?? 0) < 0
  const practiceQs = (isContentQs ? lesson.questions.slice(2) : lesson.questions)
    .slice()
    .sort((a, b) => diffOrder(a.difficulty) - diffOrder(b.difficulty))

  const totalQs = practiceQs.length
  const currentQ = practiceQs[qIndex] ?? practiceQs[0]

  function handleAnswer(letter: string) {
    if (selected || !currentQ) return
    const correct = letter === currentQ.answer_text
    setSelected(letter); setIsCorrect(correct)
    if (correct) setScore(s => s + 1)
    setQResults(prev => ({ ...prev, [qIndex]: correct ? 'correct' : 'wrong' }))
  }

  function handleNext() {
    if (qIndex + 1 < totalQs) {
      setQIndex(i => i + 1); setSelected(null); setIsCorrect(null)
    } else {
      const final = isCorrect ? score + 1 : score
      const earnedXP = totalQs === 0 ? 15 : final >= totalQs * 0.8 ? 50 : final >= totalQs * 0.6 ? 30 : 15
      setXP(earnedXP); setPhase('complete')
      fetch(`/api/lessons/${id}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: Math.round((final / Math.max(totalQs, 1)) * 100), xp_earned: earnedXP }),
      }).catch(() => {})
    }
  }

  const studyPanel = (
    <StudyPanel lesson={lesson} content={content} phase={phase} color={color}
      score={score} qIndex={qIndex} totalQs={totalQs}
      qResults={qResults} practiceQs={practiceQs} />
  )

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto px-4 py-6 md:px-8 md:py-10 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
        <button onClick={() => router.push('/lessons')} className="cursor-pointer hover:underline">AP Lessons</button>
        <ChevronRight size={14} />
        <span style={{ color }}>{lesson.unit_title}</span>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--text-primary)' }}>{lesson.lesson_number}</span>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black flex-shrink-0"
          style={{ background: `${color}20`, color }}>
          {lesson.lesson_number}
        </div>
        <div>
          <h1 className="text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>{lesson.title}</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{lesson.unit_title} · AP Precalculus</p>
        </div>
      </div>

      {content?.essentialQuestion && (
        <div className="rounded-2xl p-5" style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)' }}>
          <div className="flex items-start gap-3">
            <HelpCircle size={18} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--gold)' }}>Essential Question</p>
              <MathText style={{ color: 'var(--text-primary)' }} className="text-sm font-medium leading-relaxed">{content.essentialQuestion}</MathText>
            </div>
          </div>
        </div>
      )}

      <Card>
        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>Learning Objectives</p>
        <div className="flex flex-col gap-2">
          {lesson.learning_objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={15} color="var(--green)" className="flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{obj}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: BookOpen, label: 'Full Lesson', sub: 'Visual + explanation' },
          { icon: Lightbulb, label: 'AP Exam Tip', sub: 'What the test targets' },
          { icon: FlaskConical, label: `${totalQs} Questions`, sub: 'Graded practice' },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="rounded-xl p-4 flex flex-col items-center gap-2 text-center"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
            <Icon size={20} color={color} />
            <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{label}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{sub}</p>
          </div>
        ))}
      </div>

      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        onClick={() => setPhase('learn')}
        className="w-full py-4 rounded-2xl font-bold text-lg cursor-pointer"
        style={{ background: color, color: 'white' }}>
        Start Learning →
      </motion.button>
    </motion.div>
  )

  // ── LEARN ──────────────────────────────────────────────────────────────────
  if (phase === 'learn') return (
    <div className="flex items-start gap-6 px-4 py-6 md:px-8 md:py-8 max-w-[1200px] mx-auto">
    <div className="flex-1 min-w-0 flex flex-col gap-8 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: `${color}20`, color }}>{lesson.lesson_number}</span>
          <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{lesson.title}</span>
        </div>
        <button onClick={() => setPhase('intro')} className="text-xs cursor-pointer" style={{ color: 'var(--text-muted)' }}>← Back</button>
      </div>

      {/* Prior Knowledge Checklist */}
      {content?.priorKnowledge && content.priorKnowledge.length > 0 && (
        <div className="rounded-2xl p-4" style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.18)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Star size={13} color="var(--gold)" />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Before You Start — You Should Know</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {content.priorKnowledge.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graph / Visual — for reference only, not answer-revealing */}
      {GraphComponent && (
        <Section title="Reference Visual" icon={<Target size={15} />} color={color}>
          <GraphComponent color={color} />
          <p className="text-xs mt-2 text-center" style={{ color: 'var(--text-muted)' }}>Use the lesson content below — questions require calculation, not visual reading.</p>
        </Section>
      )}

      {/* Key Formula */}
      {content?.keyFormula && (
        <div className="rounded-2xl px-6 py-5 flex flex-col gap-1"
          style={{ background: `${color}10`, border: `1px solid ${color}30` }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>Key Formula</p>
          <p className="font-mono text-xl font-black" style={{ color: 'var(--text-primary)' }}>
            <MathText>{content.keyFormula}</MathText>
          </p>
        </div>
      )}

      {/* ── Narrative Teaching Content (the actual lesson) ──────────────── */}
      {content?.narration && content.narration.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={15} color={color} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Understanding the Concept</span>
          </div>

          {/* Hook — first paragraph, prominent intro card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}
            className="rounded-2xl p-5"
            style={{ background: `${color}12`, border: `1.5px solid ${color}35` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                style={{ background: color, color: 'white' }}>!</div>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>The Big Idea</span>
            </div>
            <p className="text-base leading-relaxed font-medium" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
              <MathText>{content.narration[0]}</MathText>
            </p>
          </motion.div>

          {/* Middle paragraphs — numbered step cards */}
          {content.narration.slice(1, -1).map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.06 }}
              className="rounded-2xl p-5 flex gap-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black mt-0.5"
                style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                {i + 1}
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
                <MathText>{para}</MathText>
              </p>
            </motion.div>
          ))}

          {/* Takeaway — last paragraph, highlighted */}
          {content.narration.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + (content.narration.length - 2) * 0.06 }}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.22)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={14} color="var(--gold)" />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Key Takeaway</span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.85 }}>
                <MathText>{content.narration[content.narration.length - 1]}</MathText>
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* ── Connections ──────────────────────────────────────────────────── */}
      {content?.connections && content.connections.length > 0 && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>How This Connects</p>
          <div className="flex flex-col gap-1.5">
            {content.connections.map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight size={13} color={color} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Core Concepts */}
      {content?.concepts && content.concepts.length > 0 && (
        <Section title="Core Concepts" icon={<BookOpen size={15} />} color={color}>
          <div className="flex flex-col gap-2.5">
            {content.concepts.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                  style={{ background: `${color}25`, color }}>{i + 1}</span>
                <MathText style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed">{c}</MathText>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Embedded Quick Check 1 — after Core Concepts */}
      {content?.questions?.[0] && (
        <EmbeddedQuestion q={content.questions[0]} color={color} index={1} />
      )}

      {/* Data Table */}
      {content?.table && (
        <Section title="Data Table" icon={<FlaskConical size={15} />} color={color}>
          <DataTable caption={content.table.caption} headers={content.table.headers} rows={content.table.rows} />
        </Section>
      )}

      {/* Worked Example */}
      {content?.workedExample && (
        <Section title="Worked Example" icon={<FlaskConical size={15} />} color={color}>
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${color}30` }}>
            <div className="px-5 py-4" style={{ background: `${color}10`, borderBottom: `1px solid ${color}25` }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>Problem</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}><MathText>{content.workedExample.problem}</MathText></p>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3" style={{ background: 'var(--bg-card)' }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Solution</p>
              {content.workedExample.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xs font-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{step}</MathText></p>
                </div>
              ))}
              <div className="mt-1 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                <CheckCircle2 size={14} color="var(--green)" />
                <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}><MathText>{content.workedExample.answer}</MathText></p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Worked Example 2 — escalating difficulty */}
      {content?.workedExample2 && (
        <Section title="Worked Example 2" icon={<FlaskConical size={15} />} color={color}>
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${color}30` }}>
            <div className="px-5 py-4" style={{ background: `${color}10`, borderBottom: `1px solid ${color}25` }}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color }}>Problem</p>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>Harder</span>
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}><MathText>{content.workedExample2.problem}</MathText></p>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3" style={{ background: 'var(--bg-card)' }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Solution</p>
              {content.workedExample2.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xs font-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{step}</MathText></p>
                </div>
              ))}
              <div className="mt-1 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                <CheckCircle2 size={14} color="var(--green)" />
                <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}><MathText>{content.workedExample2.answer}</MathText></p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Embedded Quick Check 2 — after Worked Example */}
      {content?.questions?.[1] && (
        <EmbeddedQuestion q={content.questions[1]} color={color} index={2} />
      )}

      {/* Key Terms */}
      {content?.keyTerms && content.keyTerms.length > 0 && (
        <Section title="Key Terms" icon={<BookOpen size={15} />} color={color}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.keyTerms.map((kt, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                <p className="text-xs font-bold mb-1.5" style={{ color }}>{kt.term}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{kt.definition}</MathText></p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Common Mistakes */}
      {content?.commonMistakes && content.commonMistakes.length > 0 && (
        <Section title="Common Mistakes" icon={<AlertTriangle size={15} />} color="#ff4b4b">
          <div className="flex flex-col gap-2">
            {content.commonMistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'rgba(255,75,75,0.06)', border: '1px solid rgba(255,75,75,0.2)' }}>
                <XCircle size={15} color="#ff4b4b" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{m}</MathText></p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* AP Exam Tip */}
      {content?.tip && (
        <div className="rounded-2xl p-5 flex gap-3"
          style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)' }}>
          <Lightbulb size={18} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--gold)' }}>AP Exam Tip</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{content.tip}</MathText></p>
          </div>
        </div>
      )}

      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        onClick={() => totalQs > 0 ? setPhase('practice') : (setXP(15), setPhase('complete'), fetch(`/api/lessons/${id}`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({score:100,xp_earned:15}) }).catch(()=>{}))}
        className="w-full py-4 rounded-2xl font-bold text-lg cursor-pointer"
        style={{ background: color, color: 'white' }}>
        {totalQs > 0 ? `Practice (${totalQs} Questions) →` : 'Mark Complete — +15 XP'}
      </motion.button>
    </div>
    {studyPanel}
    </div>
  )

  // ── COMPLETE ───────────────────────────────────────────────────────────────
  if (phase === 'complete') return (
    <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto px-8 py-16 flex flex-col items-center gap-6 text-center">
      <motion.div animate={{ rotate: [0,-15,15,-10,10,0] }} transition={{ delay: 0.3, duration: 0.7 }}>
        <GraduationCap size={72} color={color} />
      </motion.div>
      <h1 className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>Lesson Complete!</h1>
      <div className="grid grid-cols-2 gap-4 w-full">
        <Card>
          <p className="text-3xl font-black" style={{ color }}>{score}/{totalQs}</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Score</p>
        </Card>
        <Card>
          <p className="text-3xl font-black" style={{ color: 'var(--gold)' }}>+{xp}</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>XP Earned</p>
        </Card>
      </div>
      <div className="flex gap-3 w-full">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/lessons')}
          className="flex-1 py-3 rounded-xl font-bold cursor-pointer"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
          All Lessons
        </motion.button>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/lessons')}
          className="flex-1 py-3 rounded-xl font-bold cursor-pointer"
          style={{ background: color, color: 'white' }}>
          Next Lesson →
        </motion.button>
      </div>
    </motion.div>
  )

  // ── PRACTICE ───────────────────────────────────────────────────────────────
  const progress = ((qIndex + (selected ? 1 : 0)) / totalQs) * 100

  return (
    <div className="min-h-screen pb-36">
      <div className="sticky top-0 z-20 px-8 pt-5 pb-4" style={{ background: 'var(--bg-base)' }}>
        <div className="flex items-center gap-4 max-w-[1200px] mx-auto">
          <button onClick={() => router.push('/lessons')} className="text-xs cursor-pointer" style={{ color: 'var(--text-muted)' }}>✕</button>
          <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <motion.div className="h-full rounded-full" style={{ background: color }}
              animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
          </div>
          <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>{qIndex + 1}/{totalQs}</span>
        </div>
      </div>

      <div className="flex items-start gap-6 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div key={qIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.2 }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs px-2 py-0.5 rounded font-bold" style={{
                background: difficultyColor(currentQ.difficulty) + '20',
                color: difficultyColor(currentQ.difficulty),
              }}>{currentQ.difficulty ?? 'Medium'}</span>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Question {qIndex + 1} of {totalQs}</span>
            </div>

            <QuestionVisual text={currentQ.question_text} color={color} />
            <div className="rounded-2xl p-6 mb-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                <MathText>{currentQ.question_text}</MathText>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {currentQ.choices.map((choice, ci) => {
                const letter = ['A','B','C','D'][ci]
                const state = !selected ? 'idle'
                  : letter === currentQ.answer_text ? 'correct'
                  : selected === letter ? 'wrong' : 'dim'
                return (
                  <motion.button key={ci}
                    onClick={() => !selected && handleAnswer(letter)}
                    animate={state === 'wrong' ? { x: [0,-8,8,-5,5,0] } : {}}
                    whileHover={!selected ? { x: 4 } : {}}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl p-4 text-left text-sm font-medium cursor-pointer flex items-center gap-3"
                    style={{
                      background: state === 'correct' ? 'rgba(88,204,2,0.12)' : state === 'wrong' ? 'rgba(255,75,75,0.12)' : 'var(--bg-elevated)',
                      border: `2px solid ${state === 'correct' ? 'var(--green)' : state === 'wrong' ? 'var(--red)' : state === 'dim' ? 'var(--border)' : 'var(--border)'}`,
                      color: state === 'dim' ? 'var(--text-muted)' : 'var(--text-primary)',
                      opacity: state === 'dim' ? 0.45 : 1,
                      cursor: selected ? 'default' : 'pointer',
                    }}>
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{
                        background: state === 'correct' ? 'var(--green)' : state === 'wrong' ? '#ff4b4b' : `${color}20`,
                        color: state === 'correct' || state === 'wrong' ? 'white' : color,
                      }}>{letter}</span>
                    <MathText>{choice.replace(/^[A-D]\)\s*/,'')}</MathText>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
        {studyPanel}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 md:left-[220px] right-0 p-4 md:p-5 flex items-start justify-between gap-4"
            style={{
              background: isCorrect ? 'rgba(88,204,2,0.1)' : 'rgba(255,75,75,0.1)',
              borderTop: `2px solid ${isCorrect ? '#58cc02' : '#ff4b4b'}`,
              backdropFilter: 'blur(8px)',
            }}>
            <div className="flex items-start gap-3 flex-1">
              {isCorrect ? <CheckCircle2 size={22} color="var(--green)" className="flex-shrink-0 mt-0.5" />
                : <XCircle size={22} color="#ff4b4b" className="flex-shrink-0 mt-0.5" />}
              <div>
                <p className="font-bold text-sm mb-0.5" style={{ color: isCorrect ? 'var(--green)' : '#ff4b4b' }}>
                  {isCorrect ? 'Correct!' : `Correct answer: ${currentQ.answer_text}`}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}><MathText>{currentQ.explanation}</MathText></p>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl font-bold cursor-pointer flex-shrink-0"
              style={{ background: isCorrect ? 'var(--green)' : '#ff4b4b', color: 'white' }}>
              {qIndex + 1 < totalQs ? 'Continue' : 'Finish'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
