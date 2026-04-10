export default function ProgressBar({ value = 0, max = 100, label }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div>
      {label && <div className="flex justify-between text-xs text-slate-500 mb-1"><span>{label}</span><span>{Math.round(pct)}%</span></div>}
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-brand-600 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
