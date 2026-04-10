import { useState } from 'react'
import { F, FBlock } from '../ui/Formula.jsx'
import { Lightbulb, ChevronDown } from 'lucide-react'

function render(text) {
  if (typeof text !== 'string') return text
  const parts = text.split(/(\$[^$]+\$)/g)
  return parts.map((p, i) => {
    if (p.startsWith('$') && p.endsWith('$')) return <F key={i}>{p.slice(1, -1)}</F>
    return <span key={i}>{p}</span>
  })
}

export default function NumericalProblem({ problem, index }) {
  const [hintIdx, setHintIdx] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [open, setOpen] = useState(true)

  const totalHints = problem.hints?.length || 0

  return (
    <div className="card p-5">
      <button onClick={() => setOpen(o => !o)} className="w-full text-left flex items-start justify-between gap-3">
        <div>
          <span className="chip mb-2">Numerical {index != null ? `#${index + 1}` : ''}</span>
          <p className="font-semibold text-slate-900 leading-relaxed">{render(problem.q)}</p>
        </div>
        <ChevronDown size={18} className={`mt-1 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="mt-4">
          {problem.given && (
            <div className="text-sm text-slate-600 mb-3">
              <b>Given: </b>{render(problem.given)}
            </div>
          )}

          {totalHints > 0 && (
            <div className="space-y-2 mb-3">
              {problem.hints.slice(0, hintIdx).map((h, i) => (
                <div key={i} className="text-sm rounded-xl bg-amber-50 border border-amber-200 p-3 text-amber-900">
                  <b>Hint {i + 1}: </b>{render(h)}
                </div>
              ))}
              {hintIdx < totalHints && (
                <button
                  onClick={() => setHintIdx(i => i + 1)}
                  className="btn-ghost text-sm inline-flex"
                >
                  <Lightbulb size={14}/> Reveal hint {hintIdx + 1}
                </button>
              )}
            </div>
          )}

          <button onClick={() => setShowAnswer(s => !s)} className="btn-primary text-sm">
            {showAnswer ? 'Hide solution' : 'Show solution'}
          </button>

          {showAnswer && (
            <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-900">
              {problem.solution?.map((line, i) => (
                <div key={i} className="mb-1">{render(line)}</div>
              ))}
              {problem.formula && <FBlock>{problem.formula}</FBlock>}
              <p className="font-bold mt-2">Answer: {render(problem.answer)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
