import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const g = 10

export default function ProjectileSim() {
  const [u, setU] = useState(30)
  const [theta, setTheta] = useState(45)
  const canvasRef = useRef(null)
  const tRef = useRef(0)

  const rad = (theta * Math.PI) / 180
  const ux = u * Math.cos(rad)
  const uy = u * Math.sin(rad)
  const T = (2 * uy) / g
  const H = (uy * uy) / (2 * g)
  const R = (u * u * Math.sin(2 * rad)) / g

  useEffect(() => {
    let raf
    let last = performance.now()
    tRef.current = 0
    const draw = (ts) => {
      const dt = Math.min((ts - last) / 1000, 0.04)
      last = ts
      tRef.current += dt
      if (tRef.current > T + 0.6) tRef.current = 0

      const c = canvasRef.current
      if (!c) return
      const W = c.width
      const Ht = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, Ht)

      // ground
      ctx.fillStyle = '#e2e8f0'
      ctx.fillRect(0, Ht - 24, W, 24)

      // scale: fit R horizontally and H vertically with padding
      const padX = 40
      const padY = 20
      const maxX = Math.max(R, 1)
      const maxY = Math.max(H, 1)
      const scaleX = (W - padX * 2) / maxX
      const scaleY = (Ht - 24 - padY * 2) / maxY
      const scale = Math.min(scaleX, scaleY)
      const originX = padX
      const originY = Ht - 24

      const toPx = (x, y) => [originX + x * scale, originY - y * scale]

      // trajectory (parabola)
      ctx.strokeStyle = '#94a3b8'
      ctx.setLineDash([4, 4])
      ctx.lineWidth = 2
      ctx.beginPath()
      const steps = 60
      for (let i = 0; i <= steps; i++) {
        const x = (R * i) / steps
        const y = x * Math.tan(rad) - (g * x * x) / (2 * u * u * Math.cos(rad) * Math.cos(rad))
        const [px, py] = toPx(x, Math.max(y, 0))
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // current ball position
      const t = tRef.current
      const x = ux * t
      const y = uy * t - 0.5 * g * t * t
      if (y >= 0 && t <= T) {
        const [px, py] = toPx(x, y)
        ctx.fillStyle = '#0ea5e9'
        ctx.beginPath()
        ctx.arc(px, py, 8, 0, Math.PI * 2)
        ctx.fill()
        // velocity vector
        const vx = ux
        const vy = uy - g * t
        const vmag = Math.sqrt(vx * vx + vy * vy)
        const vScale = 0.6
        ctx.strokeStyle = '#dc2626'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(px + vx * vScale, py - vy * vScale)
        ctx.stroke()
      }

      // axes labels
      ctx.fillStyle = '#475569'
      ctx.font = '11px Inter'
      ctx.fillText(`R = ${round(R, 1)} m`, W - 90, Ht - 6)
      ctx.fillText(`H = ${round(H, 1)} m`, 8, 14)
      ctx.fillText(`T = ${round(T, 2)} s`, 8, 28)

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [u, theta, rad, ux, uy, T, H, R])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={560} height={260} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Initial speed (u)" value={u} min={5} max={60} step={1} unit=" m/s" onChange={setU} />
        <Slider label="Angle (θ)" value={theta} min={5} max={85} step={1} unit="°" onChange={setTheta} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-sm">
        <div className="bg-sky-50 border border-sky-100 rounded-xl py-2">
          <div className="text-xs text-slate-500">Range</div>
          <div className="font-extrabold text-sky-700">{round(R, 1)} m</div>
        </div>
        <div className="bg-violet-50 border border-violet-100 rounded-xl py-2">
          <div className="text-xs text-slate-500">Max height</div>
          <div className="font-extrabold text-violet-700">{round(H, 1)} m</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl py-2">
          <div className="text-xs text-slate-500">Time of flight</div>
          <div className="font-extrabold text-emerald-700">{round(T, 2)} s</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Drag the sliders. Dashed curve = trajectory, red arrow = instantaneous velocity. Notice how max range happens near 45° and complementary angles give equal range.
      </p>
    </div>
  )
}
