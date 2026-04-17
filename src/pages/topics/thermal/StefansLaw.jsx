import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import StefanRadiationSim from '../../../components/sims/StefanRadiationSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { stefansMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function StefansLaw() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Stefan–Boltzmann Law"
      subtitle="Why doubling the temperature does not double the radiation — it multiplies it by sixteen."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A glowing body doesn't emit "proportionally" to its temperature — it emits with a <b>vengeance</b>. Go from 300 K to 600 K and the radiated power is not 2× but <i>16×</i>. This fourth-power scaling is the single most exploited trap in NEET thermal questions. If you see "temperature doubled" → immediately think ×16.
        </Callout>
      </Section>

      <Section title="2️⃣ The law">
        <FBlock>{`P = \\varepsilon\\,\\sigma\\,A\\,T^4`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>P</F> is the power (W) radiated, <F>\varepsilon</F> is emissivity (between 0 and 1; 1 for a perfect black body), <F>A</F> is the surface area, <F>T</F> is absolute temperature in <b>kelvin</b>, and <F>\sigma</F> is Stefan's constant:
        </p>
        <Callout kind="formula">
          <F>{`\\sigma = 5.67 \\times 10^{-8}`}</F> W/(m²·K⁴)
        </Callout>
        <p className="text-sm leading-relaxed">
          If the body is in an environment at temperature <F>T_0</F>, it simultaneously absorbs radiation from those surroundings. The <b>net</b> power lost is:
        </p>
        <FBlock>{`P_{\\text{net}} = \\varepsilon\\,\\sigma\\,A\\,(T^4 - T_0^4)`}</FBlock>
        <p className="text-sm leading-relaxed">
          This is the version that produces Newton's law of cooling in the small-ΔT limit (see next topic).
        </p>
      </Section>

      <Section title="3️⃣ Ratios — the NEET trick">
        <p className="text-sm leading-relaxed">
          Since <F>{`P \\propto T^4`}</F>, comparing a body at two temperatures <F>T_1, T_2</F> (both absolute!):
        </p>
        <FBlock>{`\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4`}</FBlock>
        <p className="text-sm leading-relaxed">
          Always convert °C to K first — that's where most mistakes happen. The ratio of absolute temperatures is not the same as the ratio of Celsius temperatures.
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Classic NEET ratio</p>
          <p className="text-sm">A body radiates 7 cal/cm²·s at 227°C. How much at 727°C?</p>
          <FBlock>{`T_1 = 500\\,\\text{K},\\ T_2 = 1000\\,\\text{K}`}</FBlock>
          <FBlock>{`\\frac{P_2}{P_1} = (1000/500)^4 = 16`}</FBlock>
          <FBlock>{`P_2 = 7 \\times 16 = 112\\ \\text{cal/cm}^2\\cdot\\text{s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Net power radiated</p>
          <p className="text-sm">A body of emissivity 0.6 and surface area 2 m² is at 500 K in surroundings at 300 K. Net power radiated?</p>
          <FBlock>{`500^4 = 6.25\\times 10^{10},\\ 300^4 = 8.1\\times 10^{9}`}</FBlock>
          <FBlock>{`P_{\\text{net}} = 0.6(5.67\\times 10^{-8})(2)(5.44\\times 10^{10}) \\approx 3.7\\,\\text{kW}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Two spheres</p>
          <p className="text-sm">Two spheres of same material, radii <F>r</F> and <F>2r</F>, are at the same temperature. Ratio of power emitted?</p>
          <FBlock>{`P \\propto A = 4\\pi r^2 \\Rightarrow \\frac{P_1}{P_2} = \\frac{r^2}{(2r)^2} = \\frac{1}{4}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using °C instead of K — always convert first. The formula is rigidly absolute-T.</li>
            <li>Forgetting the <F>{`- T_0^4`}</F> term when surroundings are non-negligible — that gives net, not emitted power.</li>
            <li>Confusing T⁴ scaling with T² or T³ (cubic comes from a volume thing, not radiation).</li>
            <li>Ignoring area scaling in comparisons of different-sized bodies.</li>
            <li>Applying the full Stefan law when NEET wants you to notice it simplifies to Newton's cooling (small ΔT).</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <StefanRadiationSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.stefan" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.stefan" title="Stefan–Boltzmann Law MCQs" questions={stefansMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
