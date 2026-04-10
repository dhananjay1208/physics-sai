import { useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function PowerSim() {
  const [m, setM] = useState(20)
  const [h, setH] = useState(2)
  const [t, setT] = useState(4)
  const work = m * 9.8 * h
  const power = work / t
  return (
    <div className="card p-4">
      <p className="text-sm text-slate-600 mb-3">
        Lifting a <b>{m} kg</b> dumbbell to a height of <b>{h} m</b> in <b>{t} s</b>.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider label="Mass" value={m} min={1} max={100} step={1} unit=" kg" onChange={setM} />
        <Slider label="Height" value={h} min={0.5} max={5} step={0.1} unit=" m" onChange={setH} />
        <Slider label="Time" value={t} min={0.5} max={10} step={0.1} unit=" s" onChange={setT} />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 text-center">
        <div className="bg-violet-50 rounded-xl p-3">
          <div className="text-xs text-violet-700">Work done (W = mgh)</div>
          <div className="text-2xl font-extrabold text-violet-900">{round(work)} J</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-3">
          <div className="text-xs text-amber-700">Power (P = W/t)</div>
          <div className="text-2xl font-extrabold text-amber-900">{round(power)} W</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Lift the same weight in half the time → power doubles. Power measures how <b>fast</b> work is done.
      </p>
    </div>
  )
}
