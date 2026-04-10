const styles = {
  intuition: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-900', label: '💡 Intuition' },
  formula:   { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-900', label: '📐 Formula' },
  warning:   { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-900', label: '⚠️ Common mistake' },
  tip:       { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', label: '🎯 NEET tip' },
  analogy:   { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', label: '🧠 Analogy' },
}

export default function Callout({ kind = 'intuition', title, children }) {
  const s = styles[kind] || styles.intuition
  return (
    <div className={`rounded-2xl border ${s.bg} ${s.border} p-4 my-3`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${s.text} mb-1`}>
        {title || s.label}
      </p>
      <div className={`text-sm ${s.text} leading-relaxed`}>{children}</div>
    </div>
  )
}
