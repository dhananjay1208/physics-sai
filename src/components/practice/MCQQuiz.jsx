import { useMemo, useState } from 'react'
import MCQCard from './MCQCard.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'
import { useLocalProgress } from '../../hooks/useLocalProgress.js'

export default function MCQQuiz({ topicId, title = 'Practice', questions }) {
  const { recordAttempt, getTopic } = useLocalProgress()
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [answeredThis, setAnsweredThis] = useState(false)

  const total = questions.length
  const stats = getTopic(topicId)

  const ordered = useMemo(() => questions, [questions])
  const q = ordered[idx]

  const onAnswered = (correct) => {
    if (answeredThis) return
    setAnsweredThis(true)
    if (correct) setScore(s => s + 1)
    recordAttempt(topicId, correct)
  }

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true)
    } else {
      setIdx(i => i + 1)
      setAnsweredThis(false)
    }
  }

  const restart = () => {
    setIdx(0); setScore(0); setDone(false); setAnsweredThis(false)
  }

  if (!questions || questions.length === 0) {
    return <p className="text-sm text-slate-500">No questions yet.</p>
  }

  if (done) {
    const pct = Math.round((score / total) * 100)
    return (
      <div className="card p-6 text-center">
        <h3 className="text-2xl font-extrabold mb-1">{pct}%</h3>
        <p className="text-slate-500 mb-4">{score} of {total} correct</p>
        <button className="btn-primary" onClick={restart}>Try again</button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-slate-600">{title} · Q {idx + 1}/{total}</p>
        <p className="text-xs text-slate-500">All-time: {stats.correct}/{stats.attempted}</p>
      </div>
      <ProgressBar value={idx} max={total} />
      <div className="mt-4">
        <MCQCard key={idx} question={q} onAnswered={onAnswered} />
      </div>
      <div className="mt-4 flex justify-end">
        <button className="btn-primary" onClick={next} disabled={!answeredThis}>
          {idx + 1 >= total ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
