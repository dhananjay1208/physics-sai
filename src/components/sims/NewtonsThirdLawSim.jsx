import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'

export default function NewtonsThirdLawSim() {
  const [m1, setM1] = useState(60)
  const [m2, setM2] = useState(40)
  const stateRef = useRef({ x1: 180, x2: 320, v1: 0, v2: 0, pushed: false })
  const canvasRef = useRef(null)

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      s.x1 += s.v1 * 30 * dt
      s.x2 += s.v2 * 30 * dt
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // ice rink
      ctx.fillStyle = '#e0f2fe'; ctx.fillRect(0, H - 30, W, 30)
      // skater 1 (left)
      ctx.fillStyle = '#3478f6'; ctx.beginPath(); ctx.arc(s.x1, H - 50, 18, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Inter'
      ctx.fillText(`${m1}kg`, s.x1 - 13, H - 47)
      // skater 2
      ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(s.x2, H - 50, 18, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#fff'
      ctx.fillText(`${m2}kg`, s.x2 - 13, H - 47)
      // force arrows after push
      if (s.pushed) {
        ctx.strokeStyle = '#3478f6'; ctx.lineWidth = 3
        ctx.beginPath(); ctx.moveTo(s.x1 + 18, H - 50); ctx.lineTo(s.x1 + 18 - 30, H - 50); ctx.stroke()
        ctx.strokeStyle = '#f59e0b'
        ctx.beginPath(); ctx.moveTo(s.x2 - 18, H - 50); ctx.lineTo(s.x2 - 18 + 30, H - 50); ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  const doPush = () => {
    // Equal & opposite impulse → momentum conserved → v1*m1 = -v2*m2
    const impulse = 200
    stateRef.current.v1 = -impulse / m1
    stateRef.current.v2 = +impulse / m2
    stateRef.current.pushed = true
  }
  const reset = () => {
    stateRef.current = { x1: 180, x2: 320, v1: 0, v2: 0, pushed: false }
  }

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={140} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Skater A mass" value={m1} min={20} max={120} step={5} unit=" kg" onChange={setM1} />
        <Slider label="Skater B mass" value={m2} min={20} max={120} step={5} unit=" kg" onChange={setM2} />
      </div>
      <div className="flex gap-2 mt-3">
        <button className="btn-primary text-sm" onClick={doPush}>Push each other</button>
        <button className="btn-ghost text-sm" onClick={reset}>Reset</button>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Both skaters feel the <b>same force magnitude</b> but the lighter one gets a bigger acceleration (a = F/m). That's Newton's 3rd law + 2nd law together.
      </p>
    </div>
  )
}
