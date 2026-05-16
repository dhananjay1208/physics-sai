import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const DEG = Math.PI / 180

// rotate vector by φ (positive φ rotates towards +y, i.e. downward in canvas)
const rot = (v, phi) => ({
  x: v.x * Math.cos(phi) - v.y * Math.sin(phi),
  y: v.x * Math.sin(phi) + v.y * Math.cos(phi),
})

export default function PrismSim() {
  const [A, setA] = useState(60)
  const [i, setI] = useState(48)
  const [n, setN] = useState(1.5)
  const canvasRef = useRef(null)

  const aRad = A * DEG
  const iRad = i * DEG
  const r1 = Math.asin(Math.sin(iRad) / n)
  const r2 = aRad - r1
  const sinE = n * Math.sin(r2)
  const tir2 = sinE > 1 || r2 < 0
  const eRad = tir2 ? null : Math.asin(sinE)
  const e = tir2 ? null : eRad / DEG
  const delta = tir2 ? null : (i + e - A)
  const nearMin = !tir2 && Math.abs(i - e) < 2

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    ctx.clearRect(0, 0, W, H)

    const cx = W / 2, topY = 70, FL = 180
    const A2 = aRad / 2
    const apex = { x: cx, y: topY }
    const leftBase = { x: cx - FL * Math.sin(A2), y: topY + FL * Math.cos(A2) }
    const rightBase = { x: cx + FL * Math.sin(A2), y: topY + FL * Math.cos(A2) }

    // prism body
    ctx.beginPath()
    ctx.moveTo(apex.x, apex.y)
    ctx.lineTo(leftBase.x, leftBase.y)
    ctx.lineTo(rightBase.x, rightBase.y)
    ctx.closePath()
    ctx.fillStyle = 'rgba(56,130,246,0.12)'
    ctx.fill()
    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2; ctx.stroke()

    const arrow = (x1, y1, x2, y2, color, width = 3) => {
      ctx.strokeStyle = color; ctx.lineWidth = width
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
      const ang = Math.atan2(y2 - y1, x2 - x1)
      ctx.beginPath()
      ctx.moveTo(x2, y2)
      ctx.lineTo(x2 - 11 * Math.cos(ang - 0.4), y2 - 11 * Math.sin(ang - 0.4))
      ctx.lineTo(x2 - 11 * Math.cos(ang + 0.4), y2 - 11 * Math.sin(ang + 0.4))
      ctx.closePath(); ctx.fillStyle = color; ctx.fill()
    }

    // inward normal of left face, outward normal of right face
    const nLin = { x: Math.cos(A2), y: Math.sin(A2) }
    const nRout = { x: Math.cos(A2), y: -Math.sin(A2) }

    // entry point: midpoint of left face
    const entry = { x: (apex.x + leftBase.x) / 2, y: (apex.y + leftBase.y) / 2 }
    const incidentDir = rot(nLin, -iRad)
    const internalDir = rot(nLin, -r1)

    // intersect internal ray with right face segment
    const S1 = apex, S2 = rightBase
    const Ex = S2.x - S1.x, Ey = S2.y - S1.y
    const det = -internalDir.x * Ey + Ex * internalDir.y
    let hit = { x: (apex.x + rightBase.x) / 2, y: (apex.y + rightBase.y) / 2 }
    if (Math.abs(det) > 1e-6) {
      const t = ((S1.x - entry.x) * -Ey - -Ex * (S1.y - entry.y)) / det
      if (t > 0) hit = { x: entry.x + t * internalDir.x, y: entry.y + t * internalDir.y }
    }

    // dashed normals at entry & exit
    ctx.setLineDash([4, 4]); ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(entry.x - nLin.x * 46, entry.y - nLin.y * 46)
    ctx.lineTo(entry.x + nLin.x * 46, entry.y + nLin.y * 46)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(hit.x - nRout.x * 46, hit.y - nRout.y * 46)
    ctx.lineTo(hit.x + nRout.x * 46, hit.y + nRout.y * 46)
    ctx.stroke()
    ctx.setLineDash([])

    // incident ray
    arrow(entry.x - incidentDir.x * 150, entry.y - incidentDir.y * 150, entry.x, entry.y, '#dc2626')
    // internal ray
    arrow(entry.x, entry.y, hit.x, hit.y, '#7c3aed')

    if (!tir2) {
      const emergentDir = rot(incidentDir, delta * DEG)
      // dashed extension of incident direction (undeviated path) for the deviation angle
      ctx.setLineDash([5, 5]); ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(hit.x, hit.y)
      ctx.lineTo(hit.x + incidentDir.x * 150, hit.y + incidentDir.y * 150)
      ctx.stroke()
      ctx.setLineDash([])
      // emergent ray
      arrow(hit.x, hit.y, hit.x + emergentDir.x * 150, hit.y + emergentDir.y * 150, '#059669')
      ctx.font = 'bold 12px Inter'
      ctx.fillStyle = '#059669'
      ctx.fillText(`δ = ${round(delta, 1)}°`, hit.x + emergentDir.x * 90 + 6, hit.y + emergentDir.y * 90)
    } else {
      // total internal reflection at the second face
      const d = internalDir
      const dot = d.x * nRout.x + d.y * nRout.y
      const refl = { x: d.x - 2 * dot * nRout.x, y: d.y - 2 * dot * nRout.y }
      arrow(hit.x, hit.y, hit.x + refl.x * 130, hit.y + refl.y * 130, '#dc2626')
      ctx.font = 'bold 12px Inter'
      ctx.fillStyle = '#dc2626'
      ctx.fillText('TIR at 2nd face', hit.x + 8, hit.y + 4)
    }

    ctx.font = 'bold 12px Inter'
    ctx.fillStyle = '#dc2626'; ctx.fillText(`i = ${i}°`, entry.x - incidentDir.x * 90 - 30, entry.y - incidentDir.y * 90)
    ctx.fillStyle = '#7c3aed'; ctx.fillText(`r₁ = ${round(r1 / DEG, 1)}°`, entry.x + 8, entry.y + 16)
    ctx.fillStyle = '#0f172a'; ctx.fillText(`A = ${A}°`, apex.x - 16, apex.y - 10)
  }, [A, i, n, aRad, iRad, r1, r2, tir2, e, delta])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={320} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="Prism angle A" value={A} min={45} max={70} step={1} unit="°" onChange={setA} />
        <Slider label="Angle of incidence i" value={i} min={25} max={85} step={1} unit="°" onChange={setI} />
        <Slider label="Refractive index n" value={n} min={1.3} max={1.9} step={0.02} onChange={setN} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">r₁ + r₂ = A</div>
          <div className="font-bold">{round(r1 / DEG, 1)}° + {round(r2 / DEG, 1)}°</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">Emergence e</div>
          <div className="font-bold">{tir2 ? '—' : `${round(e, 1)}°`}</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Deviation δ</div>
          <div className="font-bold">{tir2 ? 'TIR' : `${round(delta, 1)}°`}</div>
        </div>
        <div className="bg-sky-50 rounded-lg p-2">
          <div className="text-sky-700">State</div>
          <div className="font-bold">{tir2 ? 'trapped' : nearMin ? 'min δ (i ≈ e)' : 'i ≠ e'}</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        A + δ = i + e, and r₁ + r₂ = A. Slide i until i ≈ e — the deviation reaches its <b>minimum</b>, where the ray passes symmetrically (r₁ = r₂ = A/2). Crank A or lower i and the ray can get totally internally reflected at the second face.
      </p>
    </div>
  )
}
