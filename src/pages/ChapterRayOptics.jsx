import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  {
    id: 'rayoptics.refraction',
    to: '/ray-optics/refraction',
    title: 'Refraction of Light',
    blurb: "Why light bends when it changes medium — speed changes, wavelength changes, frequency stays put.",
  },
  {
    id: 'rayoptics.refractive-index',
    to: '/ray-optics/refractive-index',
    title: 'Refractive Index',
    blurb: "Absolute and relative index, n = c/v, real vs apparent depth, optical density, dependence on colour.",
  },
  {
    id: 'rayoptics.snells-law',
    to: '/ray-optics/snells-law',
    title: "Snell's Law",
    blurb: "n₁ sin θ₁ = n₂ sin θ₂, reversibility of light, chained media, lateral shift through a glass slab.",
  },
  {
    id: 'rayoptics.normal-shift',
    to: '/ray-optics/normal-shift',
    title: 'Normal Shift',
    blurb: "Apparent depth and the shift t(1 − 1/n) — why a coin in water and a dot under glass look raised.",
  },
  {
    id: 'rayoptics.tir',
    to: '/ray-optics/tir',
    title: 'Total Internal Reflection',
    blurb: "Critical angle, the two conditions for TIR, optical fibres, diamonds, mirages and reflecting prisms.",
  },
  {
    id: 'rayoptics.prism',
    to: '/ray-optics/prism',
    title: 'Prism',
    blurb: "Deviation through a prism, A + δ = i + e, the minimum-deviation condition and the prism formula.",
  },
  {
    id: 'rayoptics.thin-prism',
    to: '/ray-optics/thin-prism',
    title: 'Thin Prism',
    blurb: "Small-angle prisms: δ = (n − 1)A, angular dispersion, dispersive power and prism combinations.",
  },
  {
    id: 'rayoptics.pyq',
    to: '/ray-optics/pyq',
    title: 'NEET PYQs',
    blurb: "Mixed previous-year questions covering every sub-topic in Ray Optics (refraction).",
  },
]

export default function ChapterRayOptics() {
  return (
    <ChapterLanding
      title="Ray Optics"
      blurb="Light, treated as straight-line rays. When a ray crosses from one medium into another it slows, bends, and sometimes refuses to leave at all. From Snell's law to prisms and total internal reflection, this chapter is the refraction half of Optics — and a NEET favourite."
      accent="cyan"
      topics={topics}
    />
  )
}
