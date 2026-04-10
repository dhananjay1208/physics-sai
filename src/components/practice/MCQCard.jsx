import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { F } from '../ui/Formula.jsx'

function renderText(text) {
  // Allow inline LaTeX with $...$ markers
  if (typeof text !== 'string') return text
  const parts = text.split(/(\$[^$]+\$)/g)
  return parts.map((p, i) => {
    if (p.startsWith('$') && p.endsWith('$')) {
      return <F key={i}>{p.slice(1, -1)}</F>
    }
    return <span key={i}>{p}</span>
  })
}

export default function MCQCard({ question, onAnswered }) {
  const [picked, setPicked] = useState(null)
  const [showSol, setShowSol] = useState(false)

  const submit = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    setShowSol(true)
    onAnswered && onAnswered(idx === question.answer)
  }

  return (
    <div className="card p-5">
      {question.tag && <span className="chip mb-2">{question.tag}</span>}
      <p className="font-semibold text-slate-900 leading-relaxed">{renderText(question.q)}</p>
      <div className="mt-4 grid gap-2">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.answer
          const isPicked = i === picked
          let cls = 'border-slate-200 hover:bg-slate-50'
          if (picked !== null) {
            if (isCorrect) cls = 'border-emerald-300 bg-emerald-50 text-emerald-900'
            else if (isPicked) cls = 'border-rose-300 bg-rose-50 text-rose-900'
            else cls = 'border-slate-200 opacity-60'
          }
          return (
            <button
              key={i}
              onClick={() => submit(i)}
              disabled={picked !== null}
              className={`text-left border rounded-xl px-4 py-2 text-sm flex items-start gap-2 transition ${cls}`}
            >
              <span className="font-bold">{String.fromCharCode(65 + i)}.</span>
              <span className="flex-1">{renderText(opt)}</span>
              {picked !== null && isCorrect && <Check size={16} className="text-emerald-600"/>}
              {picked !== null && isPicked && !isCorrect && <X size={16} className="text-rose-600"/>}
            </button>
          )
        })}
      </div>
      {showSol && question.explanation && (
        <div className="mt-4 p-3 rounded-xl bg-sky-50 border border-sky-200 text-sm text-sky-900">
          <p className="font-bold mb-1">Solution</p>
          <div>{renderText(question.explanation)}</div>
        </div>
      )}
    </div>
  )
}
