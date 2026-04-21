import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round, G } from '../../lib/physics.js'

export default function InclineFrictionSim() {
  const [theta, setTheta] = useState(20)
  const [mus, setMus] = useState(0.5)
  const [muk, setMuk] = useState(0.35)
  const [m, setM] = useState(2)

  const stateRef = useRef({ d: 0, v: 0, sliding: false })
  const canvasRef = useRef(null)

  const rad = (theta * Math.PI) / 180
  const sinT = Math.sin(rad)
  const cosT = Math.cos(rad)
  const gravAlong = m * G * sinT
  const N = m * G * cosT
  const fsMax = mus * N
  const angleOfRepose = Math.atan(mus) * (180 / Math.PI)

  const willSlide = gravAlong > fsMax

  useEffect(() => {
    if (!willSlide) {
      stateRef.current.d = 0
      stateRef.current.v = 0
      stateRef.current.sliding = false
    } else {
      stateRef.current.sliding = true
    }
  }, [willSlide])

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      if (s.sliding) {
        const a = G * (sinT - muk * cosT)
        if (a > 0) {
          s.v += a * dt
          s.d += s.v * 40 * dt
        }
      } else {
        s.d = 0
        s.v = 0
      }
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // incline geometry
      const pad = 30
      const baseY = H - pad
      const baseX0 = pad
      const inclineLen = Math.min(W - 2 * pad, 420)
      const baseX1 = baseX0 + inclineLen * cosT
      const topY = baseY - inclineLen * sinT
      // incline triangle
      ctx.fillStyle = '#e2e8f0'
      ctx.beginPath()
      ctx.moveTo(baseX0, baseY)
      ctx.lineTo(baseX1, baseY)
      ctx.lineTo(baseX0, topY)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = '#94a3b8'
      ctx.stroke()
      // angle label
      ctx.fillStyle = '#475569'
      ctx.font = 'bold 12px Inter'
      ctx.fillText(`θ = ${theta}°`, baseX1 - 80, baseY - 6)
      // block on incline: position from top
      const size = 28 + m * 2
      const travel = Math.min(s.d, inclineLen - size * 2) // from top
      const bx = baseX0 + travel * cosT
      const by = topY + travel * sinT
      // rotate block to incline angle
      ctx.save()
      ctx.translate(bx, by)
      ctx.rotate(rad)
      ctx.fillStyle = s.sliding ? '#f97316' : '#0ea5e9'
      ctx.fillRect(0, -size, size, size)
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 11px Inter'
      ctx.fillText(`${m}kg`, 4, -size / 2 + 4)
      ctx.restore()
      // angle-of-repose reference text
      ctx.fillStyle = '#334155'
      ctx.font = 'bold 12px Inter'
      ctx.fillText(`Angle of repose θᵣ = tan⁻¹(μₛ) = ${round(angleOfRepose, 1)}°`, 12, 18)
      ctx.fillStyle = willSlide ? '#dc2626' : '#059669'
      ctx.fillText(willSlide ? '→ sliding (θ > θᵣ)' : '✓ at rest (θ ≤ θᵣ)', 12, 36)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [theta, sinT, cosT, muk, m, angleOfRepose, willSlide])

  const a = willSlide ? G * (sinT - muk * cosT) : 0

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={620} height={260} className="w-full bg-slate-50 rounded-xl" />

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Incline angle θ" value={theta} min={0} max={60} step={1} unit="°" onChange={setTheta} />
        <Slider label="Mass (m)" value={m} min={1} max={8} step={1} unit=" kg" onChange={setM} />
        <Slider label="μₛ (static)" value={mus} min={0} max={1} step={0.05} onChange={(v) => { setMus(v); if (v < muk) setMuk(v) }} />
        <Slider label="μₖ (kinetic)" value={muk} min={0} max={1} step={0.05} onChange={(v) => setMuk(Math.min(v, mus))} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-center text-xs">
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">Normal N = mg·cosθ</div>
          <div className="font-bold">{round(N, 1)} N</div>
        </div>
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">Gravity along slope</div>
          <div className="font-bold">{round(gravAlong, 1)} N</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Max static μₛN</div>
          <div className="font-bold">{round(fsMax, 1)} N</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">Acceleration a</div>
          <div className="font-bold">{round(a, 2)} m/s²</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-3">
        At small angles, static friction <i>matches</i> the component of gravity along the slope — the block rests. Tilt past the angle of repose $\theta_r = \tan^{-1}\mu_s$ and gravity wins: friction drops to $\mu_k N$ and the block accelerates down at $g(\sin\theta - \mu_k\cos\theta)$.
      </p>
    </div>
  )
}
