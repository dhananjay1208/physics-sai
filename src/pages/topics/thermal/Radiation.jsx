import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { radiationMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function Radiation() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Radiation"
      subtitle="Heat transfer without a medium. The Sun's warmth, Wien's peak, Kirchhoff's balance — and why a pinhole in a box is the best black body we can make."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Conduction needs touching, convection needs a flowing fluid, but <b>radiation</b> is the one mode that crosses a vacuum. That's how the Sun heats us through 150 million km of empty space. Every body with <F>{`T > 0`}</F> K emits electromagnetic radiation — you included — and hotter bodies emit with more intensity <i>and</i> at shorter wavelengths.
        </Callout>
      </Section>

      <Section title="2️⃣ Definitions">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Emissive power <F>e</F></p>
          <p className="text-sm">Energy radiated per unit area per unit time by a body — units W/m².</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Absorptive power <F>a</F></p>
          <p className="text-sm">Fraction of incident radiation absorbed — dimensionless, between 0 and 1.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Black body</p>
          <p className="text-sm">An idealized body for which <F>{`a = 1`}</F> (absorbs all incident radiation) and, correspondingly, is the best emitter. Best physical realization: a small pinhole in a large cavity — radiation that enters bounces around inside until fully absorbed.</p>
        </div>
      </Section>

      <Section title="3️⃣ Kirchhoff's law">
        <Callout kind="formula">
          At a given temperature and wavelength, the ratio of emissive power to absorptive power is the same for all bodies and equals the emissive power of a black body:
          <FBlock>{`\\frac{e_\\lambda}{a_\\lambda} = e_{BB,\\lambda}`}</FBlock>
          Equivalently: <b>good absorbers are good emitters</b>. A body that absorbs 60% of incident radiation at some wavelength also emits 60% of what a black body would at the same wavelength and temperature.
        </Callout>
        <p className="text-sm leading-relaxed">
          This is why a polished silver teapot keeps tea warm (low <F>\varepsilon</F> ⇒ low emission) while a matt-black one cools faster.
        </p>
      </Section>

      <Section title="4️⃣ Wien's displacement law">
        <FBlock>{`\\lambda_m\\,T = b`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>\lambda_m</F> is the wavelength at which emission peaks and <F>{`b = 2.898 \\times 10^{-3}`}</F> m·K is Wien's constant. Hotter bodies emit more at shorter wavelengths — as a tungsten filament heats up it goes red-hot → orange → white → blue-white.
        </p>
        <p className="text-sm leading-relaxed">
          Solar surface at ~5800 K ⇒ <F>{`\\lambda_m = 500`}</F> nm, right in the middle of the visible spectrum. Evolution didn't have to put our eyes there; physics did.
        </p>
      </Section>

      <Section title="5️⃣ Stefan's law (cross-link)">
        <p className="text-sm leading-relaxed">
          Stefan–Boltzmann is the <b>total-intensity</b> law: integrating Planck's spectrum over all wavelengths gives <F>{`P = \\varepsilon \\sigma A T^4`}</F>. Wien tells you where the peak sits; Stefan tells you the total area under the curve. Together they describe the full thermal radiation picture covered by NEET.
        </p>
      </Section>

      <Section title="6️⃣ Solar constant">
        <p className="text-sm leading-relaxed">
          Solar energy received per unit area per unit time outside Earth's atmosphere, perpendicular to sunlight: <F>{`S \\approx 1367`}</F> W/m² (often taken as 1370 or 1.4 kW/m²). Useful for estimating the Sun's total luminosity and surface temperature.
        </p>
      </Section>

      <Section title="7️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Wavelength from temperature</p>
          <p className="text-sm">Surface of the Sun is at 5800 K. Peak wavelength?</p>
          <FBlock>{`\\lambda_m = \\frac{b}{T} = \\frac{2.9\\times 10^{-3}}{5800} \\approx 500\\,\\text{nm}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Two stars</p>
          <p className="text-sm">Two stars have peak wavelengths in the ratio 1:2. Ratio of their temperatures?</p>
          <FBlock>{`T \\propto 1/\\lambda_m \\Rightarrow T_1:T_2 = 2:1`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Kirchhoff in action</p>
          <p className="text-sm">A body has absorptivity 0.4 at a wavelength λ and temperature T. Its emissivity at the same λ, T?</p>
          <FBlock>{`\\varepsilon = a = 0.4`}</FBlock>
          <p className="text-sm">By Kirchhoff's law — not 1 − 0.4, a common wrong answer.</p>
        </div>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Thinking radiation needs a medium — it doesn't.</li>
            <li>Applying Wien's law with wavelength in a peculiar unit — always use SI (metres) unless you're tracking <F>b</F> in the same units.</li>
            <li>Writing emissivity as <F>{`1 - a`}</F> — that's reflectivity + transmissivity, not emissivity. Kirchhoff says emissivity <i>equals</i> absorptivity.</li>
            <li>Forgetting that the solar constant is at normal incidence, outside the atmosphere — at Earth's surface it's much less (clouds, absorption, angle).</li>
            <li>Assuming a polished surface and a matt surface radiate equally — polished reflects, matt emits.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.radiation" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.radiation" title="Radiation MCQs" questions={radiationMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
