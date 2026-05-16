import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const DEG = Math.PI / 180

export default function RefractionSim() {
  const [theta1, setTheta1] = useState(40)
  const [n1, setN1] = useState(1.0)
  const [n2, setN2] = useState(1.5)
  const canvasRef = useRef(null)

  const t1 = theta1 * DEG
  const s2 = (n1 / n2) * Math.sin(t1)
  const tir = s2 > 1
  const t2 = tir ? null : Math.asin(s2)
  const theta2 = tir ? null : (t2 / DEG)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    const ox = W / 2, oy = H / 2
    const L = 150
    ctx.clearRect(0, 0, W, H)

    // media tints
    ctx.fillStyle = '#eff6ff'
    ctx.fillRect(0, 0, W, oy)
    ctx.fillStyle = `rgba(56,130,246,${Math.min(0.10 + (n2 - 1) * 0.18, 0.5)})`
    ctx.fillRect(0, oy, W, H - oy)

    // interface
    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke()

    // normal (dashed)
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1
    ctx.setLineDash([6, 5])
    ctx.beginPath(); ctx.moveTo(ox, oy - L - 20); ctx.lineTo(ox, oy + L + 20); ctx.stroke()
    ctx.setLineDash([])

    const arrow = (x1, y1, x2, y2, color) => {
      ctx.strokeStyle = color; ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
      const ang = Math.atan2(y2 - y1, x2 - x1)
      ctx.beginPath()
      ctx.moveTo(x2, y2)
      ctx.lineTo(x2 - 10 * Math.cos(ang - 0.4), y2 - 10 * Math.sin(ang - 0.4))
      ctx.lineTo(x2 - 10 * Math.cos(ang + 0.4), y2 - 10 * Math.sin(ang + 0.4))
      ctx.closePath(); ctx.fillStyle = color; ctx.fill()
    }

    // incident ray (from upper-left to O)
    const ix = ox - L * Math.sin(t1), iy = oy - L * Math.cos(t1)
    arrow(ix, iy, ox, oy, '#dc2626')

    // reflected ray (to upper-right) — faint
    const rx = ox + L * 0.7 * Math.sin(t1), ry = oy - L * 0.7 * Math.cos(t1)
    arrow(ox, oy, rx, ry, '#f59e0b')

    // refracted ray or TIR note
    if (!tir) {
      const fx = ox + L * Math.sin(t2), fy = oy + L * Math.cos(t2)
      arrow(ox, oy, fx, fy, '#059669')
    }

    // labels
    ctx.font = 'bold 12px Inter'
    ctx.fillStyle = '#dc2626'; ctx.fillText(`i = ${theta1}°`, ix - 6, iy - 6)
    ctx.fillStyle = '#f59e0b'; ctx.fillText('reflected', rx + 4, ry)
    ctx.fillStyle = '#0f172a'
    ctx.fillText(`Medium 1  n₁ = ${n1.toFixed(2)}`, 10, 18)
    ctx.fillText(`Medium 2  n₂ = ${n2.toFixed(2)}`, 10, H - 12)
    if (!tir) {
      ctx.fillStyle = '#059669'
      ctx.fillText(`r = ${round(theta2, 1)}°`, ox + L * Math.sin(t2) + 6, oy + L * Math.cos(t2))
    } else {
      ctx.fillStyle = '#dc2626'
      ctx.fillText('Total internal reflection — no refracted ray', ox - 130, oy + 30)
    }
  }, [t1, n1, n2, theta1, theta2, tir])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={300} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="Angle of incidence i" value={theta1} min={0} max={89} step={1} unit="°" onChange={setTheta1} />
        <Slider label="n₁ (medium 1)" value={n1} min={1} max={2.4} step={0.05} onChange={(v) => setN1(v)} />
        <Slider label="n₂ (medium 2)" value={n2} min={1} max={2.4} step={0.05} onChange={(v) => setN2(v)} />
      </div>
      <div className="mt-3 text-center bg-brand-50 border border-brand-100 rounded-xl py-2">
        <span className="text-sm font-mono">n₁ sin i = n₂ sin r → </span>
        {tir ? (
          <span className="font-extrabold text-rose-600">sin r &gt; 1 ⇒ TIR</span>
        ) : (
          <span className="font-extrabold text-brand-700">r = {round(theta2, 1)}°</span>
        )}
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Going into a denser medium (larger n) the ray bends <b>towards</b> the normal; into a rarer medium it bends <b>away</b>. Push the incidence angle high with n₁ &gt; n₂ and the refracted ray vanishes — total internal reflection.
      </p>
    </div>
  )
}
