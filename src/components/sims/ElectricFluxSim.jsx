import { useEffect, useRef, useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const DEG = Math.PI / 180

export default function ElectricFluxSim() {
  const [E, setE] = useState(100) // N/C
  const [A, setA] = useState(0.10) // m²
  const [theta, setTheta] = useState(30) // degrees between normal and field
  const canvasRef = useRef(null)

  const flux = E * A * Math.cos(theta * DEG)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const W = c.width, H = c.height
    ctx.clearRect(0, 0, W, H)

    // background field arrows (left → right)
    ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2
    for (let y = 30; y < H - 20; y += 26) {
      ctx.beginPath(); ctx.moveTo(20, y); ctx.lineTo(W - 24, y); ctx.stroke()
      // arrowhead
      ctx.beginPath()
      ctx.moveTo(W - 24, y)
      ctx.lineTo(W - 32, y - 5)
      ctx.lineTo(W - 32, y + 5)
      ctx.closePath(); ctx.fillStyle = '#cbd5e1'; ctx.fill()
    }
    ctx.fillStyle = '#64748b'; ctx.font = 'bold 12px Inter'
    ctx.fillText(`E = ${E} N/C →`, 24, 20)

    // surface (rectangle, tilted about a vertical hinge axis)
    // visible width shrinks as |cos(theta)|. height is the natural full height.
    const cx = W / 2, cy = H / 2
    const fullW = 130
    const visW = fullW * Math.abs(Math.cos(theta * DEG))
    const visH = 130
    ctx.fillStyle = 'rgba(217,70,239,0.25)' // fuchsia tint
    ctx.strokeStyle = '#a21caf'; ctx.lineWidth = 2
    ctx.fillRect(cx - visW / 2, cy - visH / 2, visW, visH)
    ctx.strokeRect(cx - visW / 2, cy - visH / 2, visW, visH)

    // normal arrow (rotated by theta from the +x axis)
    const nx = Math.cos(theta * DEG), ny = -Math.sin(theta * DEG) // canvas y down
    ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + nx * 70, cy + ny * 70)
    ctx.stroke()
    // arrowhead on normal
    const ang = Math.atan2(ny, nx)
    ctx.beginPath()
    ctx.moveTo(cx + nx * 70, cy + ny * 70)
    ctx.lineTo(cx + nx * 70 - 10 * Math.cos(ang - 0.4), cy + ny * 70 - 10 * Math.sin(ang - 0.4))
    ctx.lineTo(cx + nx * 70 - 10 * Math.cos(ang + 0.4), cy + ny * 70 - 10 * Math.sin(ang + 0.4))
    ctx.closePath(); ctx.fillStyle = '#7c3aed'; ctx.fill()
    ctx.fillStyle = '#7c3aed'; ctx.font = 'bold 12px Inter'
    ctx.fillText('n̂', cx + nx * 80, cy + ny * 80)

    // angle label
    ctx.fillStyle = '#0f172a'; ctx.font = 'bold 12px Inter'
    ctx.fillText(`θ = ${theta}°`, cx - 30, cy + visH / 2 + 22)
    ctx.fillText(`A = ${A.toFixed(2)} m²`, cx + 40, cy + visH / 2 + 22)
  }, [E, A, theta])

  return (
    <div className="card p-4">
      <canvas ref={canvasRef} width={580} height={260} className="w-full bg-slate-50 rounded-xl" />
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Slider label="Field E" value={E} min={0} max={500} step={10} unit=" N/C" onChange={setE} />
        <Slider label="Area A" value={A} min={0.02} max={0.3} step={0.01} unit=" m²" onChange={setA} />
        <Slider label="Angle θ (n̂ vs E)" value={theta} min={0} max={180} step={1} unit="°" onChange={setTheta} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">cos θ</div>
          <div className="font-bold">{round(Math.cos(theta * DEG), 3)}</div>
        </div>
        <div className="bg-fuchsia-50 rounded-lg p-2">
          <div className="text-fuchsia-700">Effective area A·cos θ</div>
          <div className="font-bold">{round(A * Math.cos(theta * DEG), 4)} m²</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">Flux Φ</div>
          <div className="font-bold">{round(flux, 2)} N·m²/C</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Φ = E · A · cos θ. Tilt the surface (slide θ) and the effective area shrinks — at θ = 90° the field skims the surface and flux is zero. Beyond 90°, the normal flips with respect to the field and the flux turns negative.
      </p>
    </div>
  )
}
