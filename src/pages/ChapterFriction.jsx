import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  {
    id: 'friction.static',
    to: '/friction/static',
    title: 'Static Friction',
    blurb: "Self-adjusting friction before any motion begins, with its upper limit μₛN — why a pushed-but-not-moving block still obeys Newton.",
  },
  {
    id: 'friction.kinetic',
    to: '/friction/kinetic',
    title: 'Kinetic Friction',
    blurb: "The constant μₖN drag while a surface slides — independent of speed and contact area, with μₖ < μₛ.",
  },
  {
    id: 'friction.limiting',
    to: '/friction/limiting',
    title: 'Limiting Friction',
    blurb: "The breaking point: angle of friction, angle of repose, and the classic tanθ = μₛ condition.",
  },
  {
    id: 'friction.fbd',
    to: '/friction/fbd',
    title: 'Free Body Diagrams',
    blurb: "A step-by-step recipe for drawing weight, normal, applied force, and friction — and resolving them on inclines and stacked blocks.",
  },
  {
    id: 'friction.applications',
    to: '/friction/applications',
    title: 'Applications of Friction',
    blurb: "Walking, braking, banked curves, conveyor belts, stacked blocks moving together — where friction is the hero, not the villain.",
  },
  {
    id: 'friction.pyq',
    to: '/friction/pyq',
    title: 'NEET PYQs',
    blurb: "Mixed previous-year questions spanning every sub-topic in Friction in Solids.",
  },
]

export default function ChapterFriction() {
  return (
    <ChapterLanding
      title="Friction in Solids"
      blurb="Friction is not a flaw — it is the quiet handshake between every pair of touching surfaces. Push a book, walk to school, brake a car: the same law, f ≤ μN, is doing the work. Master its two regimes (static and kinetic), learn to draw a clean FBD, and half the NEET mechanics paper falls out."
      accent="indigo"
      topics={topics}
    />
  )
}
