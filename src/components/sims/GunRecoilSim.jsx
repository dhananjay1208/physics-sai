import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function GunRecoilSim() {
  const [M, setM] = useState(4)       // gun
  const [m, setm] = useState(0.02)    // bullet 20 g
  const [vb, setVb] = useState(400)   // bullet velocity m/s
  const [fired, setFired] = useState(false)
  const stateRef = useRef({ gx: 150, bx: 220, gv: 0, bv: 0 })
  const canvasRef = useRef(null)

  // recoil velocity of gun
  const Vg = -(m * vb) / M
  const KEbullet = 0.5 * m * vb * vb
  const KEgun = 0.5 * M * Vg * Vg

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      s.gx += s.gv * 6 * dt
      s.bx += s.bv * 0.5 * dt
      const c = canvasRef.current; if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, H - 20, W, 20)
      // gun
      ctx.fillStyle = '#475569'
      ctx.fillRect(s.gx, H - 60, 70, 40)
      ctx.fillRect(s.gx + 50, H - 50, 40, 12)
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Inter'
      ctx.fillText(`${M}kg`, s.gx + 18, H - 36)
      // bullet
      if (fired) {
        ctx.fillStyle = '#dc2626'
        ctx.beginPath(); ctx.arc(s.bx, H - 44, 5, 0, Math.PI*2); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [fired])

  const fire = () => {
    stateRef.current.gv = Vg
    stateRef.current.bv = vb
    setFired(true)
  }
  const reset = () => {
    stateRef.current = { gx: 150, bx: 220, gv: 0, bv: 0 }
    setFired(false)
  }

  const total = KEbullet + KEgun
  const bulletPct = total ? (KEbullet / total) * 100 : 0
  const gunPct = total ? (KEgun / total) * 100 : 0

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={130} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="Gun mass (M)" value={M} min={1} max={10} step={0.5} unit=" kg" onChange={setM} />
        <Slider label="Bullet mass (m)" value={m} min={0.005} max={0.05} step={0.005} unit=" kg" onChange={setm} />
        <Slider label="Bullet velocity (v)" value={vb} min={100} max={900} step={10} unit=" m/s" onChange={setVb} />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
          <div className="font-bold text-rose-900">Gun recoil velocity</div>
          <div className="text-lg font-extrabold text-rose-900">{round(Vg, 3)} m/s</div>
          <div className="text-rose-700">−mv/M (opposite direction)</div>
        </div>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
          <div className="font-bold text-sky-900">Kinetic energy split</div>
          <div>Bullet: <b>{round(KEbullet)}</b> J ({round(bulletPct, 1)}%)</div>
          <div>Gun: <b>{round(KEgun, 2)}</b> J ({round(gunPct, 1)}%)</div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={fire}>🔫 Fire</button>
        <button className="btn-ghost text-sm" onClick={reset}>Reset</button>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Momentum is always conserved equally, but kinetic energy isn't shared equally — the heavier gun gets very little KE because KE depends on v².
      </p>
    </div>
  )
}
