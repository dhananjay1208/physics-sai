import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const K = 9e9 // N·m²/C²

export default function CoulombForceSim() {
  const [q1, setQ1] = useState(3) // µC
  const [q2, setQ2] = useState(-2) // µC
  const [r, setR] = useState(0.30) // m
  const canvasRef = useRef(null)

  // Force magnitude (N); q in µC ⇒ multiply by 1e-12 to get C² product
  const F = (K * Math.abs(q1) * Math.abs(q2) * 1e-12) / (r * r)
  const repulsive = q1 * q2 > 0
  const attractive = q1 * q2 < 0

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    ctx.clearRect(0, 0, W, H)

    const cy = H / 2
    const margin = 90
    const pixelsPerMeter = (W - 2 * margin) / 0.60 // 60 cm spans the canvas width
    const halfPx = Math.min((r * pixelsPerMeter) / 2, (W - 2 * margin) / 2)
    const x1 = W / 2 - halfPx
    const x2 = W / 2 + halfPx

    // baseline
    ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1; ctx.setLineDash([4, 5])
    ctx.beginPath(); ctx.moveTo(margin, cy); ctx.lineTo(W - margin, cy); ctx.stroke()
    ctx.setLineDash([])

    const drawCharge = (x, q) => {
      const radius = 22 + Math.min(Math.abs(q), 10) * 1.2
      ctx.fillStyle = q > 0 ? '#dc2626' : '#2563eb'
      ctx.beginPath(); ctx.arc(x, cy, radius, 0, 2 * Math.PI); ctx.fill()
      ctx.fillStyle = '#fff'; ctx.font = 'bold 18px Inter'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText(q > 0 ? '+' : '−', x, cy)
      ctx.font = 'bold 11px Inter'
      ctx.fillStyle = '#0f172a'
      ctx.fillText(`${q > 0 ? '+' : ''}${q}µC`, x, cy + radius + 14)
      ctx.textAlign = 'start'; ctx.textBaseline = 'alphabetic'
    }

    drawCharge(x1, q1)
    drawCharge(x2, q2)

    // r label between charges
    ctx.fillStyle = '#475569'; ctx.font = 'bold 12px Inter'
    ctx.textAlign = 'center'
    ctx.fillText(`r = ${(r * 100).toFixed(0)} cm`, W / 2, cy - 50)
    ctx.textAlign = 'start'

    // force arrows
    const arrow = (x1a, y1a, x2a, y2a, color) => {
      ctx.strokeStyle = color; ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(x1a, y1a); ctx.lineTo(x2a, y2a); ctx.stroke()
      const ang = Math.atan2(y2a - y1a, x2a - x1a)
      ctx.beginPath()
      ctx.moveTo(x2a, y2a)
      ctx.lineTo(x2a - 11 * Math.cos(ang - 0.4), y2a - 11 * Math.sin(ang - 0.4))
      ctx.lineTo(x2a - 11 * Math.cos(ang + 0.4), y2a - 11 * Math.sin(ang + 0.4))
      ctx.closePath(); ctx.fillStyle = color; ctx.fill()
    }

    const arrowLen = Math.min(40 + Math.log10(F + 1e-9) * 22, 110)
    const color = '#16a34a'
    if (repulsive) {
      // each pushed away from the other
      arrow(x1, cy + 50, x1 - arrowLen, cy + 50, color)
      arrow(x2, cy + 50, x2 + arrowLen, cy + 50, color)
    } else if (attractive) {
      // each pulled toward the other
      arrow(x1, cy + 50, x1 + arrowLen, cy + 50, color)
      arrow(x2, cy + 50, x2 - arrowLen, cy + 50, color)
    }

    ctx.fillStyle = '#16a34a'; ctx.font = 'bold 12px Inter'
    ctx.textAlign = 'center'
    ctx.fillText(repulsive ? 'repulsive' : attractive ? 'attractive' : 'no force', W / 2, cy + 80)
    ctx.textAlign = 'start'
  }, [q1, q2, r, F, repulsive, attractive])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={230} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="q₁ (µC)" value={q1} min={-10} max={10} step={1} onChange={setQ1} />
        <Slider label="q₂ (µC)" value={q2} min={-10} max={10} step={1} onChange={setQ2} />
        <Slider label="separation r" value={r} min={0.05} max={0.6} step={0.01} unit=" m" onChange={setR} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">|F|</div>
          <div className="font-bold">{F < 1e-3 ? F.toExponential(2) : round(F, 4)} N</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Sign of q₁q₂</div>
          <div className="font-bold">{repulsive ? '+' : attractive ? '−' : '0'}</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">Direction</div>
          <div className="font-bold">{repulsive ? 'repulsive' : attractive ? 'attractive' : '—'}</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Coulomb's law: F = k q₁q₂ / r² with k = 9×10⁹ N·m²/C². Like signs ⇒ repulsion (arrows outward). Unlike signs ⇒ attraction (arrows inward). Halve the distance — the force jumps by 4×. The 1/r² scaling is the single most-tested NEET trap.
      </p>
    </div>
  )
}
