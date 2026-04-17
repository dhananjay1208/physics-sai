import { useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

const SIGMA = 5.67e-8

export default function StefanRadiationSim() {
  const [T, setT] = useState(500)
  const [T0, setT0] = useState(300)
  const [eps, setEps] = useState(1)
  const [A, setA] = useState(1)

  const Pemit = eps * SIGMA * A * Math.pow(T, 4)
  const Pnet = eps * SIGMA * A * (Math.pow(T, 4) - Math.pow(T0, 4))
  const P1 = eps * SIGMA * A * Math.pow(T, 4)
  const P2 = eps * SIGMA * A * Math.pow(2 * T, 4)
  const P3 = eps * SIGMA * A * Math.pow(3 * T, 4)
  const maxP = Math.max(P1, P2, P3)

  const fmtKW = (p) => p >= 1000 ? `${round(p / 1000, 2)} kW` : `${round(p, 1)} W`

  return (
    <div className="card p-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Slider label="Body T" value={T} min={200} max={2000} step={50} unit=" K" onChange={setT} />
        <Slider label="Surroundings T₀" value={T0} min={200} max={1000} step={50} unit=" K" onChange={setT0} />
        <Slider label="Emissivity ε" value={eps} min={0.1} max={1} step={0.05} onChange={setEps} />
        <Slider label="Area A" value={A} min={0.1} max={5} step={0.1} unit=" m²" onChange={setA} />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 text-center text-xs">
        <div className="bg-amber-50 rounded-lg p-3">
          <div className="text-amber-700">Emitted power (εσAT⁴)</div>
          <div className="font-bold text-base">{fmtKW(Pemit)}</div>
        </div>
        <div className="bg-rose-50 rounded-lg p-3">
          <div className="text-rose-700">Net power emitted</div>
          <div className="font-bold text-base">{fmtKW(Pnet)}</div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold text-slate-600 mb-2">Scaling with temperature — P ∝ T⁴</p>
        <div className="space-y-1.5">
          {[
            { label: `T = ${T} K`, val: P1, color: 'bg-sky-400' },
            { label: `2T = ${2 * T} K`, val: P2, color: 'bg-orange-400' },
            { label: `3T = ${3 * T} K`, val: P3, color: 'bg-rose-500' },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2 text-xs">
              <div className="w-20 text-slate-600">{row.label}</div>
              <div className="flex-1 bg-slate-100 rounded h-5 overflow-hidden">
                <div className={`${row.color} h-full`} style={{ width: `${(row.val / maxP) * 100}%` }}></div>
              </div>
              <div className="w-24 text-right font-mono">{fmtKW(row.val)}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Doubling T makes the emitted power <b>{round(P2 / P1, 0)}×</b>, tripling makes it <b>{round(P3 / P1, 0)}×</b>. The T⁴ scaling is why a tungsten filament glowing white-hot gives off vastly more radiation than when it is merely red-hot.
        </p>
      </div>
    </div>
  )
}
