import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'

export default function NewtonsFirstLawSim() {
  const [friction, setFriction] = useState(0.0)
  const [pushed, setPushed] = useState(false)
  const stateRef = useRef({ x: 40, v: 0 })
  const canvasRef = useRef(null)

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      // friction deceleration
      const a = -friction * 9.8 * Math.sign(s.v)
      s.v += a * dt
      if (Math.abs(s.v) < 0.02) s.v = 0
      s.x += s.v * 30 * dt
      // walls
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      if (s.x < 30) { s.x = 30; s.v = Math.abs(s.v) * 0.4 }
      if (s.x > W - 50) { s.x = W - 50; s.v = -Math.abs(s.v) * 0.4 }
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // floor
      ctx.fillStyle = '#e2e8f0'
      ctx.fillRect(0, H - 20, W, 20)
      // friction marks
      if (friction > 0) {
        ctx.fillStyle = '#cbd5e1'
        for (let i = 0; i < W; i += 12) ctx.fillRect(i, H - 20, 6, 4)
      }
      // block
      ctx.fillStyle = '#3478f6'
      ctx.fillRect(s.x, H - 60, 40, 40)
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 14px Inter'
      ctx.fillText('m', s.x + 14, H - 36)
      // velocity arrow
      if (Math.abs(s.v) > 0.05) {
        ctx.strokeStyle = '#16a34a'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(s.x + 20, H - 70)
        ctx.lineTo(s.x + 20 + s.v * 6, H - 70)
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [friction])

  const push = () => {
    stateRef.current.v = 6
    setPushed(true)
  }
  const reset = () => {
    stateRef.current = { x: 40, v: 0 }
    setPushed(false)
  }

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={140} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Friction coefficient (μ)" value={friction} min={0} max={0.8} step={0.05} onChange={setFriction} />
        <div className="flex items-end gap-2">
          <button className="btn-primary text-sm" onClick={push}>Push the block →</button>
          <button className="btn-ghost text-sm" onClick={reset}>Reset</button>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        With <b>μ = 0</b> the block keeps moving forever (no force needed) — that's the law of inertia.
        Add friction and watch it slow down. Newton's 1st law in action.
      </p>
    </div>
  )
}
