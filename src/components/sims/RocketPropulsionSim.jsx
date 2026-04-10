import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function RocketPropulsionSim() {
  const [vex, setVex] = useState(2500)   // exhaust velocity m/s
  const [burn, setBurn] = useState(50)    // dm/dt kg/s
  const [m0] = useState(1000)             // initial mass kg
  const [running, setRunning] = useState(false)
  const stateRef = useRef({ y: 260, v: 0, m: 1000, t: 0 })
  const canvasRef = useRef(null)
  const [readout, setReadout] = useState({ v: 0, m: 1000, thrust: 0, t: 0 })

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const s = stateRef.current
      if (running && s.m > 200) {
        s.m -= burn * dt
        const thrust = vex * burn
        const a = thrust / s.m - 9.8
        s.v += a * dt
        s.y -= s.v * 0.05 * dt * 60   // visual scale
        s.t += dt
      }
      const thrust = vex * burn
      setReadout({ v: round(s.v, 1), m: round(s.m), thrust: round(thrust), t: round(s.t, 1) })
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // sky
      const grd = ctx.createLinearGradient(0, 0, 0, H)
      grd.addColorStop(0, '#0c1a3d'); grd.addColorStop(1, '#3478f6')
      ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H)
      // stars
      ctx.fillStyle = '#fff'
      for (let i = 0; i < 30; i++) {
        const x = (i * 53) % W
        const y = (i * 31) % (H - 40)
        ctx.fillRect(x, y, 1, 1)
      }
      // ground
      ctx.fillStyle = '#10b981'; ctx.fillRect(0, H - 14, W, 14)
      // rocket
      const rx = W / 2
      const ry = Math.max(20, Math.min(H - 60, s.y))
      ctx.fillStyle = '#fff'
      ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx - 10, ry + 30); ctx.lineTo(rx + 10, ry + 30); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#dc2626'; ctx.fillRect(rx - 10, ry + 30, 20, 20)
      // flame
      if (running && s.m > 200) {
        ctx.fillStyle = '#f59e0b'
        ctx.beginPath(); ctx.moveTo(rx - 8, ry + 50); ctx.lineTo(rx, ry + 50 + 18 + Math.random() * 6); ctx.lineTo(rx + 8, ry + 50); ctx.closePath(); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [running, vex, burn])

  const launch = () => { setRunning(true) }
  const reset = () => {
    stateRef.current = { y: 260, v: 0, m: m0, t: 0 }
    setRunning(false)
  }

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={300} className="w-full bg-slate-900 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Exhaust velocity (vₑ)" value={vex} min={500} max={4500} step={100} unit=" m/s" onChange={setVex} />
        <Slider label="Burn rate (dm/dt)" value={burn} min={10} max={150} step={5} unit=" kg/s" onChange={setBurn} />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-3 text-center text-xs">
        <div className="bg-slate-50 rounded-lg p-2"><div className="text-slate-500">Mass</div><div className="font-bold">{readout.m} kg</div></div>
        <div className="bg-slate-50 rounded-lg p-2"><div className="text-slate-500">Velocity</div><div className="font-bold">{readout.v} m/s</div></div>
        <div className="bg-slate-50 rounded-lg p-2"><div className="text-slate-500">Thrust</div><div className="font-bold">{readout.thrust} N</div></div>
        <div className="bg-slate-50 rounded-lg p-2"><div className="text-slate-500">Time</div><div className="font-bold">{readout.t} s</div></div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={launch} disabled={running}>🚀 Launch</button>
        <button className="btn-ghost text-sm" onClick={reset}>Reset</button>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Thrust = vₑ · (dm/dt). The rocket gets lighter as it burns fuel, so the same thrust produces a bigger acceleration over time.
      </p>
    </div>
  )
}
