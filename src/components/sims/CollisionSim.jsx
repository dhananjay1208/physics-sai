import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { collision1D, round } from '../../lib/physics.js'

export default function CollisionSim() {
  const [m1, setM1] = useState(2)
  const [m2, setM2] = useState(3)
  const [u1, setU1] = useState(5)
  const [u2, setU2] = useState(-1)
  const [e, setE] = useState(1)
  const stateRef = useRef({ x1: 120, x2: 380, v1: 5, v2: -1, collided: false })
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    stateRef.current = { x1: 120, x2: 380, v1: u1, v2: u2, collided: false }
    setRunning(false)
  }, [m1, m2, u1, u2, e])

  useEffect(() => {
    let raf
    let last = performance.now()
    const tick = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      if (running) {
        s.x1 += s.v1 * 25 * dt
        s.x2 += s.v2 * 25 * dt
        const r1 = 18 + m1 * 3, r2 = 18 + m2 * 3
        if (!s.collided && s.x1 + r1 >= s.x2 - r2) {
          const [v1n, v2n] = collision1D(m1, s.v1, m2, s.v2, e)
          s.v1 = v1n; s.v2 = v2n
          s.collided = true
        }
      }
      const c = canvasRef.current; if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, H - 30, W, 30)
      const r1 = 18 + m1 * 3, r2 = 18 + m2 * 3
      ctx.fillStyle = '#3478f6'; ctx.beginPath(); ctx.arc(s.x1, H - 50, r1, 0, Math.PI*2); ctx.fill()
      ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(s.x2, H - 50, r2, 0, Math.PI*2); ctx.fill()
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Inter'
      ctx.fillText(`${m1}kg`, s.x1 - 12, H - 47)
      ctx.fillText(`${m2}kg`, s.x2 - 12, H - 47)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, m1, m2, e])

  const [v1f, v2f] = collision1D(m1, u1, m2, u2, e)
  const keBefore = round(0.5*m1*u1*u1 + 0.5*m2*u2*u2, 2)
  const keAfter = round(0.5*m1*v1f*v1f + 0.5*m2*v2f*v2f, 2)
  const lost = round(keBefore - keAfter, 2)

  const type = e === 1 ? 'Perfectly Elastic' : e === 0 ? 'Perfectly Inelastic' : 'Inelastic'

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={150} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="m₁" value={m1} min={1} max={10} step={1} unit=" kg" onChange={setM1} />
        <Slider label="m₂" value={m2} min={1} max={10} step={1} unit=" kg" onChange={setM2} />
        <Slider label="u₁" value={u1} min={-8} max={8} step={0.5} unit=" m/s" onChange={setU1} />
        <Slider label="u₂" value={u2} min={-8} max={8} step={0.5} unit=" m/s" onChange={setU2} />
        <Slider label="Coefficient of restitution e" value={e} min={0} max={1} step={0.05} onChange={setE} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-2">
          <div className="font-bold text-sky-900">Type</div>
          <div>{type}</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2">
          <div className="font-bold text-emerald-900">After collision</div>
          <div>v₁' = <b>{round(v1f,2)}</b> m/s</div>
          <div>v₂' = <b>{round(v2f,2)}</b> m/s</div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
          <div className="font-bold text-amber-900">KE</div>
          <div>Before: {keBefore} J</div>
          <div>After: {keAfter} J</div>
          <div>Lost: <b>{lost}</b> J</div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={() => setRunning(true)}>Play</button>
        <button className="btn-ghost text-sm" onClick={() => { stateRef.current = { x1: 120, x2: 380, v1: u1, v2: u2, collided: false }; setRunning(false) }}>Reset</button>
      </div>
    </div>
  )
}
