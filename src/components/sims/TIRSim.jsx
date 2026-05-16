import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const DEG = Math.PI / 180

export default function TIRSim() {
  const [theta1, setTheta1] = useState(30)
  const [n, setN] = useState(1.5)
  const canvasRef = useRef(null)

  const t1 = theta1 * DEG
  const critical = Math.asin(1 / n) / DEG
  const s2 = n * Math.sin(t1) // denser -> rarer (air)
  const tir = s2 >= 1
  const t2 = tir ? null : Math.asin(s2)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    const ox = W / 2, oy = H / 2
    const L = 155
    ctx.clearRect(0, 0, W, H)

    // top = rarer (air), bottom = denser medium
    ctx.fillStyle = '#eff6ff'
    ctx.fillRect(0, 0, W, oy)
    ctx.fillStyle = `rgba(56,130,246,${Math.min(0.12 + (n - 1) * 0.2, 0.55)})`
    ctx.fillRect(0, oy, W, H - oy)

    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke()

    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1
    ctx.setLineDash([6, 5])
    ctx.beginPath(); ctx.moveTo(ox, oy - L - 20); ctx.lineTo(ox, oy + L + 20); ctx.stroke()
    ctx.setLineDash([])

    const arrow = (x1, y1, x2, y2, color, width = 3) => {
      ctx.strokeStyle = color; ctx.lineWidth = width
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
      const ang = Math.atan2(y2 - y1, x2 - x1)
      ctx.beginPath()
      ctx.moveTo(x2, y2)
      ctx.lineTo(x2 - 10 * Math.cos(ang - 0.4), y2 - 10 * Math.sin(ang - 0.4))
      ctx.lineTo(x2 - 10 * Math.cos(ang + 0.4), y2 - 10 * Math.sin(ang + 0.4))
      ctx.closePath(); ctx.fillStyle = color; ctx.fill()
    }

    // incident ray inside denser medium (from lower-left up to O)
    const ix = ox - L * Math.sin(t1), iy = oy + L * Math.cos(t1)
    arrow(ix, iy, ox, oy, '#dc2626')

    if (!tir) {
      // refracted ray into air (bends away from normal) + partial reflection
      const fx = ox + L * Math.sin(t2), fy = oy - L * Math.cos(t2)
      arrow(ox, oy, fx, fy, '#059669')
      const rx = ox + L * 0.55 * Math.sin(t1), ry = oy + L * 0.55 * Math.cos(t1)
      arrow(ox, oy, rx, ry, '#f59e0b', 2)
    } else {
      // total internal reflection — full-strength reflected ray back into denser medium
      const rx = ox + L * Math.sin(t1), ry = oy + L * Math.cos(t1)
      arrow(ox, oy, rx, ry, '#7c3aed')
    }

    ctx.font = 'bold 12px Inter'
    ctx.fillStyle = '#0f172a'
    ctx.fillText('Rarer medium (air, n = 1.00)', 10, 18)
    ctx.fillText(`Denser medium  n = ${n.toFixed(2)}`, 10, H - 12)
    ctx.fillStyle = '#dc2626'; ctx.fillText(`i = ${theta1}°`, ix + 4, iy + 4)
    if (!tir) {
      ctx.fillStyle = '#059669'; ctx.fillText(`r = ${round(t2 / DEG, 1)}°`, ox + L * Math.sin(t2) + 6, oy - L * Math.cos(t2))
    } else {
      ctx.fillStyle = '#7c3aed'; ctx.fillText('reflected (100%)', ox + L * 0.55 * Math.sin(t1) + 6, oy + L * 0.55 * Math.cos(t1))
    }
  }, [t1, n, theta1, t2, tir])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={300} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Slider label="Angle of incidence i" value={theta1} min={0} max={89} step={1} unit="°" onChange={setTheta1} />
        <Slider label="n of denser medium" value={n} min={1.1} max={2.42} step={0.02} onChange={setN} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">Critical angle C</div>
          <div className="font-bold">{round(critical, 1)}°</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">i vs C</div>
          <div className="font-bold">{theta1 < critical ? 'i < C' : theta1 > critical ? 'i > C' : 'i = C'}</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">Outcome</div>
          <div className="font-bold">{tir ? 'TIR' : 'Refracts out'}</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Light going from a denser medium to air refracts <i>away</i> from the normal. As i approaches the critical angle C (where sin C = 1/n), the refracted ray grazes the surface — and once i &gt; C it disappears entirely: 100% of the light is reflected back.
      </p>
    </div>
  )
}
