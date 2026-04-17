import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function CoolingCurveSim() {
  const [T0, setT0] = useState(25)
  const [Ti, setTi] = useState(90)
  const [k, setK] = useState(0.02)
  const [t, setT] = useState(30)
  const canvasRef = useRef(null)

  const tMax = 300
  const Tat = (tt) => T0 + (Ti - T0) * Math.exp(-k * tt)
  const currentT = Tat(t)
  const halfLife = Math.log(2) / k

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    ctx.clearRect(0, 0, W, H)

    const padL = 40, padR = 14, padT = 14, padB = 26
    const plotW = W - padL - padR
    const plotH = H - padT - padB

    const Tmax = Math.max(Ti, T0) + 5
    const Tmin = Math.min(T0, Ti) - 5
    const xOf = (tt) => padL + (tt / tMax) * plotW
    const yOf = (TT) => padT + (1 - (TT - Tmin) / (Tmax - Tmin)) * plotH

    // axes
    ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, padT + plotH); ctx.lineTo(padL + plotW, padT + plotH); ctx.stroke()

    // ambient line
    ctx.strokeStyle = '#94a3b8'; ctx.setLineDash([4, 4])
    ctx.beginPath(); ctx.moveTo(padL, yOf(T0)); ctx.lineTo(padL + plotW, yOf(T0)); ctx.stroke()
    ctx.setLineDash([])

    // curve
    ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 2.5
    ctx.beginPath()
    for (let i = 0; i <= 120; i++) {
      const tt = (i / 120) * tMax
      const px = xOf(tt), py = yOf(Tat(tt))
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
    }
    ctx.stroke()

    // current-time marker
    const mx = xOf(t), my = yOf(currentT)
    ctx.fillStyle = '#dc2626'; ctx.beginPath(); ctx.arc(mx, my, 5, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(mx, padT); ctx.lineTo(mx, padT + plotH); ctx.stroke()

    // labels
    ctx.fillStyle = '#475569'; ctx.font = '11px system-ui'
    ctx.fillText('T (°C)', 4, padT + 10)
    ctx.fillText('t (s)', padL + plotW - 24, padT + plotH + 18)
    ctx.fillText(`T₀ = ${T0}°`, padL + plotW - 60, yOf(T0) - 4)
  }, [T0, Ti, k, t, currentT])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={520} height={220} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Ambient T₀" value={T0} min={0} max={40} step={1} unit=" °C" onChange={setT0} />
        <Slider label="Initial Tᵢ" value={Ti} min={40} max={100} step={1} unit=" °C" onChange={setTi} />
        <Slider label="Cooling constant k" value={k} min={0.005} max={0.1} step={0.005} unit=" /s" onChange={setK} />
        <Slider label="Time t" value={t} min={0} max={tMax} step={1} unit=" s" onChange={setT} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
        <div className="bg-rose-50 rounded-lg p-2">
          <div className="text-rose-700">T at t = {t} s</div>
          <div className="font-bold">{round(currentT, 1)} °C</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Excess ΔT</div>
          <div className="font-bold">{round(currentT - T0, 1)} °C</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">Half-life (ln 2 / k)</div>
          <div className="font-bold">{round(halfLife, 1)} s</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Watch how the excess ΔT = T − T₀ halves every <b>{round(halfLife, 1)} s</b>. That's the signature of exponential decay — the NEET fingerprint of Newton's law.
      </p>
    </div>
  )
}
