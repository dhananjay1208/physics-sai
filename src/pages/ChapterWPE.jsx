import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  { id: 'wpe.work', to: '/wpe/work-energy-theorem', title: 'Work & Work–Energy Theorem', blurb: 'What does "doing work" mean in physics — and how it changes kinetic energy.' },
  { id: 'wpe.energy', to: '/wpe/energy-conservation', title: 'Conservation of Energy', blurb: 'Energy is never created or destroyed — only converted. See it live.' },
  { id: 'wpe.power', to: '/wpe/power', title: 'Power', blurb: 'How fast work is done. Average vs instantaneous, P = F·v.' },
  { id: 'wpe.collision', to: '/wpe/collisions', title: 'Collisions', blurb: 'Elastic, inelastic, and the coefficient of restitution — 1D & 2D.' },
  { id: 'wpe.pyq', to: '/wpe/pyq', title: 'NEET PYQs', blurb: 'Mixed previous-year questions covering the whole chapter.' },
]

export default function ChapterWPE() {
  return (
    <ChapterLanding
      title="Work, Power & Energy"
      blurb="Energy is the currency of physics. Push, lift, drop, crash — every motion is just energy moving from one form to another."
      accent="amber"
      topics={topics}
    />
  )
}
