import { useLocalProgress } from '../../hooks/useLocalProgress.js'

export default function ScoreBoard({ topicId, label = 'Your stats' }) {
  const { getTopic } = useLocalProgress()
  const t = getTopic(topicId)
  const acc = t.attempted ? Math.round((t.correct / t.attempted) * 100) : 0
  return (
    <div className="card p-4 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-lg font-extrabold">{t.correct}/{t.attempted} <span className="text-sm font-semibold text-slate-500">correct</span></p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-extrabold text-brand-700">{acc}%</p>
        <p className="text-xs text-slate-500">accuracy</p>
      </div>
    </div>
  )
}
