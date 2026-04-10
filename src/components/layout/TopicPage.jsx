import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function TopicPage({ chapterTo, chapterTitle, title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="container-page"
    >
      <Link to={chapterTo} className="inline-flex items-center gap-1 text-sm text-brand-700 font-semibold hover:underline mb-3">
        <ArrowLeft size={14}/> {chapterTitle}
      </Link>
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
      <div className="mt-6 space-y-6">{children}</div>
    </motion.div>
  )
}

export function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </section>
  )
}
