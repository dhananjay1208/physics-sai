import { useCallback, useEffect, useState } from 'react'

const KEY = 'sai-physics-progress-v1'

function read() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { topics: {} }
  } catch {
    return { topics: {} }
  }
}

function write(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)) } catch {}
}

export function useLocalProgress() {
  const [data, setData] = useState(read)

  useEffect(() => { write(data) }, [data])

  const recordAttempt = useCallback((topicId, isCorrect) => {
    setData(prev => {
      const t = prev.topics[topicId] || { attempted: 0, correct: 0 }
      const next = {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            attempted: t.attempted + 1,
            correct: t.correct + (isCorrect ? 1 : 0),
            lastAt: Date.now(),
          },
        },
      }
      return next
    })
  }, [])

  const getTopic = useCallback((topicId) => {
    return data.topics[topicId] || { attempted: 0, correct: 0 }
  }, [data])

  const resetAll = useCallback(() => setData({ topics: {} }), [])

  const stats = (() => {
    let totalAttempted = 0, totalCorrect = 0
    for (const k in data.topics) {
      totalAttempted += data.topics[k].attempted
      totalCorrect += data.topics[k].correct
    }
    return { totalAttempted, totalCorrect }
  })()

  return { data, stats, recordAttempt, getTopic, resetAll }
}
