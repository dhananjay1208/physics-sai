import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Rocket, Zap, ArrowRight, Sparkles, Target, Thermometer, Hand, Glasses, Atom } from 'lucide-react'
import { useLocalProgress } from '../hooks/useLocalProgress.js'

const chapters = [
  {
    to: '/laws',
    title: 'Laws of Motion',
    blurb: 'Newton\'s 3 laws, rocket propulsion, momentum conservation, gun-bullet recoil & NEET PYQs.',
    icon: Rocket,
    color: 'from-brand-500 to-brand-700',
    topics: 5,
  },
  {
    to: '/wpe',
    title: 'Work, Power & Energy',
    blurb: 'Work-energy theorem, energy conservation, power, elastic & inelastic collisions, PYQs.',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    topics: 5,
  },
  {
    to: '/motion-plane',
    title: 'Motion in a Plane',
    blurb: 'Projectile motion, equation of trajectory, juggling-type relative motion, PYQs.',
    icon: Target,
    color: 'from-emerald-500 to-teal-700',
    topics: 4,
  },
  {
    to: '/thermal',
    title: 'Thermal Properties of Matter',
    blurb: "Thermometry, calorimetry, specific & latent heat, conduction, Stefan's law, Newton's cooling, radiation & PYQs.",
    icon: Thermometer,
    color: 'from-rose-500 to-orange-600',
    topics: 8,
  },
  {
    to: '/friction',
    title: 'Friction in Solids',
    blurb: 'Static & kinetic friction, limiting friction, angle of repose, free-body diagrams, applications & NEET PYQs.',
    icon: Hand,
    color: 'from-indigo-500 to-purple-700',
    topics: 6,
  },
  {
    to: '/ray-optics',
    title: 'Ray Optics',
    blurb: 'Refraction, refractive index, Snell\'s law, normal shift, total internal reflection, prisms & NEET PYQs.',
    icon: Glasses,
    color: 'from-cyan-500 to-blue-600',
    topics: 8,
  },
  {
    to: '/electrostatics',
    title: 'Electrostatics',
    blurb: "Properties of charge, Coulomb's law, equilibrium, electric field, work & KE, flux & NEET PYQs.",
    icon: Atom,
    color: 'from-fuchsia-500 to-pink-600',
    topics: 7,
  },
]

export default function Home() {
  const { stats, resetAll } = useLocalProgress()
  const totalAttempted = stats.totalAttempted || 0
  const totalCorrect = stats.totalCorrect || 0
  const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0

  return (
    <div className="container-page">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6 sm:p-8 mb-6 bg-gradient-to-br from-brand-600 to-brand-800 text-white border-0"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="uppercase tracking-widest text-xs text-brand-100 font-bold flex items-center gap-1">
              <Sparkles size={14}/> NEET Physics
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">Hi Sai 👋</h1>
            <p className="text-brand-50 mt-2 max-w-xl">
              Physics, made simple. Pick a chapter, play with the simulations, then test yourself.
              Small steps, big wins. 💪
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-2xl p-4 min-w-[180px]">
            <p className="text-xs uppercase tracking-wider text-brand-100">Your progress</p>
            <p className="text-3xl font-extrabold mt-1">{accuracy}%</p>
            <p className="text-xs text-brand-100">{totalCorrect} / {totalAttempted} correct</p>
            {totalAttempted > 0 && (
              <button onClick={resetAll} className="text-[11px] underline text-brand-100 mt-2">Reset progress</button>
            )}
          </div>
        </div>
      </motion.section>

      <h2 className="text-xl font-bold mb-3">Chapters</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {chapters.map((c, i) => {
          const Icon = c.icon
          return (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={c.to} className="block card p-6 hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center mb-4 shadow-soft`}>
                  <Icon size={22}/>
                </div>
                <h3 className="text-lg font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-slate-500">{c.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="chip">{c.topics} topics</span>
                  <span className="text-brand-700 font-semibold text-sm inline-flex items-center gap-1">
                    Start <ArrowRight size={16}/>
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-8 card p-5 bg-amber-50 border-amber-200">
        <p className="text-sm text-amber-900">
          <b>Tip:</b> Each topic begins with an everyday <i>analogy</i>, then the formula, then a
          live simulation you can play with, and finally MCQs & NEET PYQs. Don't rush — understand first, then practice. 🎯
        </p>
      </div>
    </div>
  )
}
