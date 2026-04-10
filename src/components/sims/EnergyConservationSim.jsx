import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round, G } from '../../lib/physics.js'

export default function EnergyConservationSim() {
  const [h0, setH0] = useState(5)
  const [m] = useState(1)
  const [friction, setFriction] = useState(0)
  const stateRef = useRef({ s: 0, v: 0, energyLost: 0 })
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)
  const [readout, setReadout] = useState({ ke: 0, pe: 0, total: 0, lost: 0 })

  // Track shape: half-pipe of total length L, height profile h(s)
  const L = 12
  const heightAt = (s) => {
    // simple symmetric valley: high at ends, low in middle
    const x = (s / L) * 2 - 1   // -1..1
    return h0 * x * x
  }

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      if (running) {
        // dh/ds slope -> tangential gravity
        const eps = 0.01
        const slope = (heightAt(s.s + eps) - heightAt(s.s - eps)) / (2 * eps)
        const aTan = -G * slope - friction * G * Math.sign(s.v || 1)
        s.v += aTan * dt
        const ds = s.v * dt
        s.s += ds
        if (s.s < 0) { s.s = 0; s.v = -s.v * 0.6 }
        if (s.s > L) { s.s = L; s.v = -s.v * 0.6 }
        if (friction > 0) s.energyLost += Math.abs(friction * G * m * ds)
      }
      const h = heightAt(s.s)
      const pe = m * G * h
      const ke = 0.5 * m * s.v * s.v
      setReadout({ ke: round(ke, 2), pe: round(pe, 2), total: round(ke + pe, 2), lost: round(s.energyLost, 2) })
      // draw
      const c = canvasRef.current; if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // track
      ctx.strokeStyle = '#475569'; ctx.lineWidth = 4
      ctx.beginPath()
      for (let i = 0; i <= 100; i++) {
        const ss = (i / 100) * L
        const px = (ss / L) * (W - 40) + 20
        const py = H - 20 - (heightAt(ss) / h0) * (H - 60)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
      // ball
      const px = (s.s / L) * (W - 40) + 20
      const py = H - 20 - (heightAt(s.s) / h0) * (H - 60) - 10
      ctx.fillStyle = '#dc2626'
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI*2); ctx.fill()
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [running, h0, friction])

  const release = () => { stateRef.current = { s: 0, v: 0, energyLost: 0 }; setRunning(true) }
  const stop = () => setRunning(false)

  const total0 = m * G * h0

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={200} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Initial height (h)" value={h0} min={1} max={10} step={0.5} unit=" m" onChange={setH0} />
        <Slider label="Friction" value={friction} min={0} max={0.4} step={0.02} onChange={setFriction} />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-3 text-center text-xs">
        <div className="bg-emerald-50 rounded-lg p-2"><div className="text-emerald-700">KE</div><div className="font-bold">{readout.ke} J</div></div>
        <div className="bg-violet-50 rounded-lg p-2"><div className="text-violet-700">PE</div><div className="font-bold">{readout.pe} J</div></div>
        <div className="bg-sky-50 rounded-lg p-2"><div className="text-sky-700">KE+PE</div><div className="font-bold">{readout.total} J</div></div>
        <div className="bg-rose-50 rounded-lg p-2"><div className="text-rose-700">Lost (heat)</div><div className="font-bold">{readout.lost} J</div></div>
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Initial total energy = mgh = <b>{round(total0, 2)} J</b>.
        With μ = 0, KE+PE stays equal to this. Add friction and watch energy "leak" to heat.
      </p>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={release}>Release</button>
        <button className="btn-ghost text-sm" onClick={stop}>Stop</button>
      </div>
    </div>
  )
}
