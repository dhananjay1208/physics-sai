import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLocalProgress } from '../../hooks/useLocalProgress.js'

export default function ChapterLanding({ title, blurb, accent = 'brand', topics }) {
  const { getTopic } = useLocalProgress()
  const accentBg = accent === 'amber' ? 'from-amber-500 to-orange-600' : 'from-brand-500 to-brand-700'

  return (
    <div className="container-page">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`card p-6 mb-6 bg-gradient-to-br ${accentBg} text-white border-0`}
      >
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="mt-2 text-white/90 max-w-2xl">{blurb}</p>
      </motion.div>

      <h2 className="text-lg font-bold mb-3">Topics</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {topics.map((t, i) => {
          const stats = getTopic(t.id)
          const acc = stats.attempted ? Math.round((stats.correct / stats.attempted) * 100) : null
          return (
            <motion.div
              key={t.to}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={t.to} className="card p-5 block hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Topic {i + 1}</p>
                    <h3 className="font-bold text-lg mt-1">{t.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{t.blurb}</p>
                  </div>
                  <ArrowRight size={18} className="text-brand-600 mt-1"/>
                </div>
                {acc != null && (
                  <div className="mt-3 text-xs text-slate-500">
                    Best so far: <b className="text-brand-700">{acc}%</b> ({stats.correct}/{stats.attempted})
                  </div>
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
