export default function Slider({ label, value, min, max, step = 1, unit = '', onChange }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        <span className="text-sm font-mono tabular-nums text-brand-700">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-600"
      />
    </label>
  )
}
