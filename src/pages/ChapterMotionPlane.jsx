import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  {
    id: 'motion.projectile',
    to: '/motion-plane/projectile',
    title: 'Projectile Motion',
    blurb: 'Horizontal & angular projection, time of flight, max height, range, symmetry of the parabola.',
  },
  {
    id: 'motion.trajectory',
    to: '/motion-plane/trajectory',
    title: 'Equation of Trajectory',
    blurb: 'Derive y = x tan θ − gx²/(2u²cos²θ). Read the trajectory to find u and θ. Incline brief.',
  },
  {
    id: 'motion.juggling',
    to: '/motion-plane/juggling',
    title: 'Juggling & Relative Motion',
    blurb: 'Two balls in the air, throws from moving trains/carts, relative projectile — the classic trick problems.',
  },
  {
    id: 'motion.pyq',
    to: '/motion-plane/pyq',
    title: 'NEET PYQs',
    blurb: 'Mixed previous-year questions covering all of Motion in a Plane.',
  },
]

export default function ChapterMotionPlane() {
  return (
    <ChapterLanding
      title="Motion in a Plane"
      blurb="Step off the straight line. In two dimensions, horizontal and vertical motions are independent — that single idea unlocks projectiles, juggling, and every NEET 2D problem."
      accent="emerald"
      topics={topics}
    />
  )
}
