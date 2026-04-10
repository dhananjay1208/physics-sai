import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function NewtonsSecondLawSim() {
  const [m, setM] = useState(2)
  const [F, setF] = useState(10)
  const stateRef = useRef({ x: 40, v: 0 })
  const canvasRef = useRef(null)

  const a = F / m

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      s.v += a * dt
      s.x += s.v * 8 * dt
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      if (s.x > W - 60) { s.x = 40; s.v = 0 }
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, H - 20, W, 20)
      // block scaled by mass
      const size = 25 + m * 6
      ctx.fillStyle = '#3478f6'
      ctx.fillRect(s.x, H - 20 - size, size, size)
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Inter'
      ctx.fillText(`${m}kg`, s.x + 6, H - 20 - size / 2 + 4)
      // force arrow
      ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(s.x + size, H - 20 - size / 2)
      ctx.lineTo(s.x + size + Math.min(F * 4, 120), H - 20 - size / 2)
      ctx.stroke()
      // arrow head
      ctx.beginPath()
      const tip = s.x + size + Math.min(F * 4, 120)
      ctx.moveTo(tip, H - 20 - size / 2 - 6)
      ctx.lineTo(tip + 8, H - 20 - size / 2)
      ctx.lineTo(tip, H - 20 - size / 2 + 6)
      ctx.fillStyle = '#dc2626'; ctx.fill()
      ctx.fillStyle = '#dc2626'; ctx.font = 'bold 12px Inter'
      ctx.fillText(`F=${F}N`, s.x + size + 4, H - 20 - size / 2 - 10)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [a, m, F])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={150} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Mass (m)" value={m} min={1} max={10} step={1} unit=" kg" onChange={setM} />
        <Slider label="Force (F)" value={F} min={1} max={40} step={1} unit=" N" onChange={setF} />
      </div>
      <div className="mt-3 text-center bg-brand-50 border border-brand-100 rounded-xl py-2">
        <span className="text-sm font-mono">a = F / m = {F} / {m} = </span>
        <span className="font-extrabold text-brand-700 text-lg">{round(a, 2)} m/s²</span>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Heavier mass → smaller acceleration. Bigger force → bigger acceleration. That's <b>F = ma</b>.
      </p>
    </div>
  )
}
