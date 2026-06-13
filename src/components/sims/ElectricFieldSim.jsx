import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const K = 9e9

export default function ElectricFieldSim() {
  const [q, setQ] = useState(5) // µC, sign included
  const [probe, setProbe] = useState(0.4) // m, radial distance for the readout
  const canvasRef = useRef(null)

  // probe |E|: |q| in µC ⇒ × 1e-6
  const Eprobe = (K * Math.abs(q) * 1e-6) / (probe * probe)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    ctx.clearRect(0, 0, W, H)
    const cx = W / 2, cy = H / 2

    // grid of field arrows
    const cols = 9, rows = 5
    const stepX = (W - 80) / (cols + 1)
    const stepY = (H - 60) / (rows + 1)
    const minLen = 8, maxLen = 28

    const sign = q >= 0 ? 1 : -1
    const absQ = Math.abs(q)

    for (let i = 1; i <= cols; i++) {
      for (let j = 1; j <= rows; j++) {
        const px = 40 + i * stepX
        const py = 30 + j * stepY
        const dx = px - cx
        const dy = py - cy
        const r = Math.sqrt(dx * dx + dy * dy)
        if (r < 28) continue
        // magnitude scale (arbitrary visual)
        const len = Math.max(minLen, Math.min(maxLen, (absQ * 2000) / (r * r)))
        const ux = (dx / r) * sign
        const uy = (dy / r) * sign
        const ex = px + ux * len
        const ey = py + uy * len
        ctx.strokeStyle = sign > 0 ? '#dc2626' : '#2563eb'
        ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ex, ey); ctx.stroke()
        const ang = Math.atan2(uy, ux)
        ctx.beginPath()
        ctx.moveTo(ex, ey)
        ctx.lineTo(ex - 7 * Math.cos(ang - 0.4), ey - 7 * Math.sin(ang - 0.4))
        ctx.lineTo(ex - 7 * Math.cos(ang + 0.4), ey - 7 * Math.sin(ang + 0.4))
        ctx.closePath(); ctx.fillStyle = sign > 0 ? '#dc2626' : '#2563eb'; ctx.fill()
      }
    }

    // central charge
    ctx.fillStyle = sign > 0 ? '#dc2626' : '#2563eb'
    ctx.beginPath(); ctx.arc(cx, cy, 22, 0, 2 * Math.PI); ctx.fill()
    ctx.fillStyle = '#fff'; ctx.font = 'bold 18px Inter'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(sign > 0 ? '+' : '−', cx, cy)
    ctx.font = 'bold 11px Inter'
    ctx.fillStyle = '#0f172a'
    ctx.fillText(`${sign > 0 ? '+' : '−'}${absQ}µC`, cx, cy + 34)

    // probe ring
    const pixelsPerMeter = 240 // 1 m ≈ 240 px
    const rPx = Math.min(probe * pixelsPerMeter, Math.min(cx, cy) - 30)
    ctx.strokeStyle = '#16a34a'; ctx.lineWidth = 1.5
    ctx.setLineDash([5, 4])
    ctx.beginPath(); ctx.arc(cx, cy, rPx, 0, 2 * Math.PI); ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = '#16a34a'; ctx.font = 'bold 12px Inter'
    ctx.fillText(`r = ${(probe * 100).toFixed(0)} cm`, cx, cy - rPx - 6)
    ctx.textAlign = 'start'; ctx.textBaseline = 'alphabetic'
  }, [q, probe])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={300} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Charge q (µC, signed)" value={q} min={-10} max={10} step={1} onChange={setQ} />
        <Slider label="Probe distance r" value={probe} min={0.10} max={1.0} step={0.05} unit=" m" onChange={setProbe} />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">|E| at the green ring</div>
          <div className="font-bold">{Eprobe.toExponential(2)} N/C</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">Direction</div>
          <div className="font-bold">{q >= 0 ? 'radially outward' : 'radially inward'}</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        E = kq/r² for a point charge. Arrows point <b>outward</b> from a positive charge, <b>inward</b> to a negative one, and shrink as 1/r². Slide r and watch |E| crash — double the distance, the field falls to a quarter.
      </p>
    </div>
  )
}
