import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  { id: 'laws.newtons', to: '/laws/newtons-laws', title: "Newton's 3 Laws", blurb: 'Inertia, F=ma, action–reaction. The foundation of mechanics.' },
  { id: 'laws.rocket', to: '/laws/rocket-propulsion', title: 'Rocket Propulsion', blurb: 'Variable mass, thrust, and the famous rocket equation.' },
  { id: 'laws.momentum', to: '/laws/conservation-of-momentum', title: 'Conservation of Momentum', blurb: 'Why the total momentum of a closed system never changes.' },
  { id: 'laws.gunbullet', to: '/laws/gun-bullet', title: 'Gun–Bullet Numericals', blurb: 'Recoil, kinetic energy split, and step-by-step solved problems.' },
  { id: 'laws.pyq', to: '/laws/pyq', title: 'NEET PYQs', blurb: 'Mixed previous-year questions covering the whole chapter.' },
]

export default function ChapterLaws() {
  return (
    <ChapterLanding
      title="Laws of Motion"
      blurb="Newton wrote three rules that describe how everything around you moves — from a falling apple to a rocket leaving Earth. Let's understand the why behind each."
      accent="brand"
      topics={topics}
    />
  )
}
