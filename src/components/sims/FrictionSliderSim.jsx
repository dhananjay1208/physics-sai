import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round, G } from '../../lib/physics.js'

export default function FrictionSliderSim() {
  const [m, setM] = useState(4)
  const [F, setF] = useState(0)
  const [mus, setMus] = useState(0.5)
  const [muk, setMuk] = useState(0.3)

  const stateRef = useRef({ x: 40, v: 0, sliding: false })
  const canvasRef = useRef(null)

  const N = m * G
  const fsMax = mus * N
  const fk = muk * N

  let f, state, netF, a
  if (!stateRef.current.sliding) {
    if (F <= fsMax) {
      f = F
      state = F < fsMax ? 'Static (stuck)' : 'At limit'
      netF = 0
      a = 0
    } else {
      stateRef.current.sliding = true
      f = fk
      state = 'Kinetic (sliding)'
      netF = F - fk
      a = netF / m
    }
  } else {
    f = fk
    state = 'Kinetic (sliding)'
    netF = F - fk
    a = netF / m
  }

  useEffect(() => {
    if (F <= fk && stateRef.current.v <= 0) {
      stateRef.current.sliding = false
      stateRef.current.v = 0
    }
  }, [F, fk])

  useEffect(() => {
    let raf
    let last = performance.now()
    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      const s = stateRef.current
      const localF = F
      const localFk = fk
      if (s.sliding || s.v > 0.01) {
        const effF = s.sliding ? localF - localFk : -localFk
        s.v += (effF / m) * dt
        if (s.v < 0) { s.v = 0; s.sliding = false }
        s.x += s.v * 6 * dt
      } else {
        s.v = 0
      }
      const c = canvasRef.current
      if (!c) return
      const W = c.width, H = c.height
      if (s.x > W - 80) { s.x = 40; s.v = 0 }
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, W, H)
      // ground
      ctx.fillStyle = '#e2e8f0'
      ctx.fillRect(0, H - 20, W, 20)
      // hatching for rough surface
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1
      for (let i = 0; i < W; i += 10) {
        ctx.beginPath(); ctx.moveTo(i, H - 20); ctx.lineTo(i + 8, H); ctx.stroke()
      }
      // block (size scales mildly with mass)
      const size = 30 + m * 4
      const bx = s.x, by = H - 20 - size
      const isStatic = !s.sliding
      ctx.fillStyle = isStatic ? '#0ea5e9' : '#f97316'
      ctx.fillRect(bx, by, size, size)
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Inter'
      ctx.fillText(`${m}kg`, bx + 6, by + size / 2 + 4)
      // applied force arrow (right)
      if (F > 0) {
        const len = Math.min(F * 3, 140)
        ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 4
        ctx.beginPath()
        ctx.moveTo(bx + size, by + size / 2)
        ctx.lineTo(bx + size + len, by + size / 2)
        ctx.stroke()
        ctx.beginPath()
        const tip = bx + size + len
        ctx.moveTo(tip, by + size / 2 - 6)
        ctx.lineTo(tip + 8, by + size / 2)
        ctx.lineTo(tip, by + size / 2 + 6)
        ctx.fillStyle = '#dc2626'; ctx.fill()
        ctx.font = 'bold 12px Inter'
        ctx.fillText(`F=${F}N`, bx + size + 6, by + size / 2 - 10)
      }
      // friction arrow (left) — proportional to current f
      if (f > 0) {
        const len = Math.min(f * 3, 140)
        ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 4
        ctx.beginPath()
        ctx.moveTo(bx, by + size / 2)
        ctx.lineTo(bx - len, by + size / 2)
        ctx.stroke()
        ctx.beginPath()
        const tip = bx - len
        ctx.moveTo(tip, by + size / 2 - 6)
        ctx.lineTo(tip - 8, by + size / 2)
        ctx.lineTo(tip, by + size / 2 + 6)
        ctx.fillStyle = '#7c3aed'; ctx.fill()
        ctx.font = 'bold 12px Inter'
        ctx.fillText(`f=${round(f, 1)}N`, bx - len - 10, by + size / 2 - 10)
      }
      // weight arrow (down)
      ctx.strokeStyle = '#334155'; ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(bx + size / 2, by + size)
      ctx.lineTo(bx + size / 2, by + size + 30)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(bx + size / 2 - 5, by + size + 24)
      ctx.lineTo(bx + size / 2, by + size + 32)
      ctx.lineTo(bx + size / 2 + 5, by + size + 24)
      ctx.fillStyle = '#334155'; ctx.fill()
      // normal arrow (up, from top of block)
      ctx.strokeStyle = '#10b981'; ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(bx + size / 2, by)
      ctx.lineTo(bx + size / 2, by - 30)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(bx + size / 2 - 5, by - 24)
      ctx.lineTo(bx + size / 2, by - 32)
      ctx.lineTo(bx + size / 2 + 5, by - 24)
      ctx.fillStyle = '#10b981'; ctx.fill()
      ctx.font = 'bold 11px Inter'
      ctx.fillStyle = '#10b981'; ctx.fillText(`N=${round(N, 1)}`, bx + size / 2 + 6, by - 16)
      ctx.fillStyle = '#334155'; ctx.fillText(`W=${round(N, 1)}`, bx + size / 2 + 6, by + size + 26)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [F, m, fk, f, N])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={620} height={200} className="w-full bg-slate-50 rounded-xl" />

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Mass (m)" value={m} min={1} max={12} step={1} unit=" kg" onChange={setM} />
        <Slider label="Applied force (F)" value={F} min={0} max={80} step={1} unit=" N" onChange={setF} />
        <Slider label="μₛ (static)" value={mus} min={0} max={1} step={0.05} onChange={(v) => { setMus(v); if (v < muk) setMuk(v) }} />
        <Slider label="μₖ (kinetic)" value={muk} min={0} max={1} step={0.05} onChange={(v) => setMuk(Math.min(v, mus))} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-center text-xs">
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">Normal N</div>
          <div className="font-bold">{round(N, 1)} N</div>
        </div>
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">Friction f</div>
          <div className="font-bold">{round(f, 1)} N</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Max static μₛN</div>
          <div className="font-bold">{round(fsMax, 1)} N</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">State</div>
          <div className="font-bold">{state}</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-3">
        Push gently: friction (violet) grows to match $F$. Push past $\mu_s N$ (amber) and the block breaks loose — friction drops to the kinetic value $\mu_k N$ and the block accelerates. Raise $F$ from zero slowly to feel the snap.
      </p>
    </div>
  )
}
