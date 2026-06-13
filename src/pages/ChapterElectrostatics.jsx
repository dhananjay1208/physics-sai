import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  {
    id: 'electro.properties',
    to: '/electrostatics/properties',
    title: 'Properties of Charge',
    blurb: "Two kinds of charge, quantization (q = ne), conservation, and the three ways to charge a body.",
  },
  {
    id: 'electro.coulomb',
    to: '/electrostatics/coulomb',
    title: "Coulomb's Law",
    blurb: "F = k q₁q₂/r² — the inverse-square law in vacuum and inside a dielectric, plus superposition.",
  },
  {
    id: 'electro.equilibrium',
    to: '/electrostatics/equilibrium',
    title: 'Charge in Equilibrium',
    blurb: "Three-charge problems on a line — where to place a charge so the forces cancel, and when the equilibrium is stable.",
  },
  {
    id: 'electro.field',
    to: '/electrostatics/field',
    title: 'Electric Field',
    blurb: "E = F/q₀, field of a point charge, superposition, field lines, and the standard results for line / sheet / ring / dipole.",
  },
  {
    id: 'electro.work-energy',
    to: '/electrostatics/work-energy',
    title: 'Work & Kinetic Energy',
    blurb: "Work done by/against the electric field, KE gained by an accelerated charge, and the path-independence of electrostatic work.",
  },
  {
    id: 'electro.flux',
    to: '/electrostatics/flux',
    title: 'Electric Flux',
    blurb: "Φ = E·A·cos θ, the area-vector convention, flux through closed surfaces, and a one-line peek at Gauss's law.",
  },
  {
    id: 'electro.pyq',
    to: '/electrostatics/pyq',
    title: 'NEET PYQs',
    blurb: "Mixed previous-year questions covering every sub-topic in Electrostatics.",
  },
]

export default function ChapterElectrostatics() {
  return (
    <ChapterLanding
      title="Electrostatics"
      blurb="Static charges, the forces they exert, and the fields they fill space with. From the tiny e = 1.6×10⁻¹⁹ C to the inverse-square Coulomb law and the idea of an electric field, this chapter is the bedrock of every electricity question in NEET — and a NEET favourite."
      accent="fuchsia"
      topics={topics}
    />
  )
}
