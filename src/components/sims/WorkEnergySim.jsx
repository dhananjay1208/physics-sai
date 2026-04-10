import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function WorkEnergySim() {
  const [F, setF] = useState(20)
  const [m, setM] = useState(2)
  const [angle, setAngle] = useState(0)
  const stateRef = useRef({ x: 60, v: 0, work: 0 })
  const canvasRef = useRef(null)
  const [readout, setReadout] = useState({ work: 0, ke: 0, v: 0 })
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      if (running) {
        const Fx = F * Math.cos(angle * Math.PI / 180)
        const a = Fx / m
        const dx = s.v * 30 * dt + 0.5 * a * 30 * dt * dt
        s.x += dx
        s.v += a * dt
        s.work += Fx * (dx / 30)   // visual scale undone
      }
      const ke = 0.5 * m * s.v * s.v
      setReadout({ work: round(s.work, 2), ke: round(ke, 2), v: round(s.v, 2) })
      const c = canvasRef.current; if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, H - 20, W, 20)
      // block
      if (s.x > W - 50) { s.x = 60; s.v = 0; s.work = 0; setRunning(false) }
      ctx.fillStyle = '#3478f6'; ctx.fillRect(s.x, H - 60, 40, 40)
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Inter'
      ctx.fillText(`${m}kg`, s.x + 6, H - 36)
      // force arrow at angle
      const cx = s.x + 20, cy = H - 40
      const ang = -angle * Math.PI / 180
      const len = Math.min(F * 3, 90)
      ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(ang) * len, cy + Math.sin(ang) * len)
      ctx.stroke()
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [running, F, m, angle])

  const start = () => { stateRef.current = { x: 60, v: 0, work: 0 }; setRunning(true) }
  const stop = () => setRunning(false)

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={150} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="Force F" value={F} min={1} max={40} step={1} unit=" N" onChange={setF} />
        <Slider label="Angle θ" value={angle} min={0} max={89} step={1} unit="°" onChange={setAngle} />
        <Slider label="Mass m" value={m} min={1} max={10} step={1} unit=" kg" onChange={setM} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2"><div className="text-violet-700">Work done (W)</div><div className="font-bold text-violet-900">{readout.work} J</div></div>
        <div className="bg-emerald-50 rounded-lg p-2"><div className="text-emerald-700">Kinetic Energy</div><div className="font-bold text-emerald-900">{readout.ke} J</div></div>
        <div className="bg-sky-50 rounded-lg p-2"><div className="text-sky-700">Velocity</div><div className="font-bold text-sky-900">{readout.v} m/s</div></div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={start}>Push</button>
        <button className="btn-ghost text-sm" onClick={stop}>Stop</button>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Notice: <b>Work = Kinetic energy gained</b> — that's the work-energy theorem. Only the component of F along motion (F·cosθ) does work.
      </p>
    </div>
  )
}
