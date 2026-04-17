import ChapterLanding from '../components/layout/ChapterLanding.jsx'

const topics = [
  {
    id: 'thermal.thermometry',
    to: '/thermal/thermometry',
    title: 'Thermometry',
    blurb: 'Temperature scales (C/F/K), linear interpolation, faulty thermometers, thermometric properties and thermometer types.',
  },
  {
    id: 'thermal.calorimetry',
    to: '/thermal/calorimetry',
    title: 'Calorimetry',
    blurb: "Heat capacity, water equivalent, principle of calorimetry (ΣQ = 0), method of mixtures.",
  },
  {
    id: 'thermal.specific-latent',
    to: '/thermal/specific-latent-heat',
    title: 'Specific & Latent Heat',
    blurb: 'Specific heat, cp vs cv, latent heat of fusion and vaporization, ice + steam mixing problems, the heating curve.',
  },
  {
    id: 'thermal.stefan',
    to: '/thermal/stefans-law',
    title: "Stefan's Law",
    blurb: 'Stefan–Boltzmann radiation law, T⁴ scaling, net radiation, the classic "temperature doubled → power × 16" trap.',
  },
  {
    id: 'thermal.newton-cooling',
    to: '/thermal/newtons-cooling',
    title: "Newton's Law of Cooling",
    blurb: 'Exponential decay of excess temperature, the average-temperature trick, validity, link to Stefan.',
  },
  {
    id: 'thermal.conduction',
    to: '/thermal/conduction',
    title: 'Conduction (Series & Parallel)',
    blurb: "Fourier's law, thermal resistance, composite slabs, junction temperature, equivalent conductivities.",
  },
  {
    id: 'thermal.radiation',
    to: '/thermal/radiation',
    title: 'Radiation',
    blurb: "Emissive & absorptive power, Kirchhoff's law, black body, Wien's displacement law, solar constant.",
  },
  {
    id: 'thermal.pyq',
    to: '/thermal/pyq',
    title: 'NEET PYQs',
    blurb: 'Mixed previous-year questions covering every sub-topic in Thermal Properties of Matter.',
  },
]

export default function ChapterThermal() {
  return (
    <ChapterLanding
      title="Thermal Properties of Matter"
      blurb="Temperature is molecular jiggle; heat is energy in transit. From a mercury thermometer to the Sun radiating across vacuum, the same few equations describe it all — and NEET loves to test every one of them."
      accent="rose"
      topics={topics}
    />
  )
}
