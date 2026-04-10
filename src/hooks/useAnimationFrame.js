import { useEffect, useRef } from 'react'

export function useAnimationFrame(callback, running = true) {
  const cbRef = useRef(callback)
  cbRef.current = callback

  useEffect(() => {
    if (!running) return
    let raf
    let last = performance.now()
    const tick = (now) => {
      const dt = (now - last) / 1000
      last = now
      cbRef.current(dt)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running])
}
