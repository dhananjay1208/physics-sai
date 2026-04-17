import { useState } from 'react'
import Slider from '../ui/Slider.jsx'
import { round } from '../../lib/physics.js'

export default function ConductionSim() {
  const [mode, setMode] = useState('series')
  const [K1, setK1] = useState(200)
  const [K2, setK2] = useState(50)
  const [L, setL] = useState(0.5)
  const [A, setA] = useState(0.01)
  const [Thot, setThot] = useState(100)
  const [Tcold, setTcold] = useState(0)

  const dT = Thot - Tcold
  let Keq, Rtotal, I, Tjunction = null, extra = ''
  if (mode === 'series') {
    Keq = (2 * K1 * K2) / (K1 + K2)
    Rtotal = L / (K1 * A) + L / (K2 * A)
    I = dT / Rtotal
    Tjunction = Thot - I * (L / (K1 * A))
    extra = `K_eq = 2K₁K₂/(K₁+K₂) = ${round(Keq, 2)} W/m·K`
  } else {
    Keq = (K1 + K2) / 2
    Rtotal = L / (Keq * (2 * A))
    I = dT / Rtotal
    extra = `K_eq = (K₁+K₂)/2 = ${round(Keq, 2)} W/m·K`
  }

  return (
    <div className="card p-4">
      <div className="flex gap-2 mb-3">
        <button
          className={`text-sm px-3 py-1.5 rounded-lg font-semibold ${mode === 'series' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          onClick={() => setMode('series')}
        >Series</button>
        <button
          className={`text-sm px-3 py-1.5 rounded-lg font-semibold ${mode === 'parallel' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          onClick={() => setMode('parallel')}
        >Parallel</button>
      </div>

      <div className="flex items-stretch gap-1 mb-3 h-16">
        {mode === 'series' ? (
          <>
            <div className="flex-1 rounded-l-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#ef4444' }}>
              {Thot}°
            </div>
            <div className="flex-1 bg-orange-400 flex items-center justify-center text-white text-xs font-semibold">K₁ = {K1}</div>
            <div className="flex-1 bg-sky-400 flex items-center justify-center text-white text-xs font-semibold">K₂ = {K2}</div>
            <div className="flex-1 rounded-r-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#3b82f6' }}>
              {Tcold}°
            </div>
          </>
        ) : (
          <>
            <div className="w-14 rounded-l-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#ef4444' }}>
              {Thot}°
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex-1 bg-orange-400 flex items-center justify-center text-white text-xs font-semibold rounded">K₁ = {K1}</div>
              <div className="flex-1 bg-sky-400 flex items-center justify-center text-white text-xs font-semibold rounded">K₂ = {K2}</div>
            </div>
            <div className="w-14 rounded-r-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#3b82f6' }}>
              {Tcold}°
            </div>
          </>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Slider label="K₁ (W/m·K)" value={K1} min={10} max={400} step={10} onChange={setK1} />
        <Slider label="K₂ (W/m·K)" value={K2} min={10} max={400} step={10} onChange={setK2} />
        <Slider label="Slab thickness L" value={L} min={0.1} max={2} step={0.1} unit=" m" onChange={setL} />
        <Slider label="Cross-section A" value={A} min={0.005} max={0.05} step={0.005} unit=" m²" onChange={setA} />
        <Slider label="T_hot" value={Thot} min={50} max={500} step={10} unit=" °C" onChange={setThot} />
        <Slider label="T_cold" value={Tcold} min={-20} max={50} step={5} unit=" °C" onChange={setTcold} />
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
        <div className="bg-violet-50 rounded-lg p-2">
          <div className="text-violet-700">Total resistance R</div>
          <div className="font-bold">{round(Rtotal, 3)} K/W</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-2">
          <div className="text-amber-700">Heat current dQ/dt</div>
          <div className="font-bold">{round(I, 1)} W</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-2">
          <div className="text-emerald-700">{mode === 'series' ? 'Junction T' : 'Equivalent K'}</div>
          <div className="font-bold">{mode === 'series' ? `${round(Tjunction, 1)} °C` : `${round(Keq, 2)}`}</div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2">{extra}. In <b>series</b>, the slab with <i>smaller</i> K has the <i>larger</i> ΔT across it. In <b>parallel</b>, both slabs share the same ΔT and their conductances add.</p>
    </div>
  )
}
