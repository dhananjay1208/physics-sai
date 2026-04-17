import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { calorimetryMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function Calorimetry() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Calorimetry"
      subtitle="Bookkeeping for heat: what goes in must come out. The principle behind every mixing problem in NEET."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Calorimetry is just an <b>accountant's ledger</b> for heat. In a closed insulated box, no heat is created or destroyed — the hot bodies' "deposits" (heat lost) must exactly match the cold bodies' "withdrawals" (heat gained). Get the ledger right and the equilibrium temperature falls out on its own.
        </Callout>
      </Section>

      <Section title="2️⃣ Key definitions">
        <FBlock>{`Q = m\\,s\\,\\Delta T`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>m</F> is mass, <F>s</F> is specific heat, and <F>\Delta T</F> the temperature change. The <b>heat capacity</b> of a body is <F>{`C = m s`}</F> (units J/K); it answers "how much heat for 1 K rise?". The <b>water equivalent</b> <F>w</F> is the mass of water that would absorb the same heat for the same ΔT:
        </p>
        <FBlock>{`w = \\frac{m s}{s_{water}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          In calorie units (where <F>{`s_{water} = 1`}</F> cal/g·°C), <F>{`w = m s`}</F> directly.
        </p>
      </Section>

      <Section title="3️⃣ Principle of calorimetry">
        <Callout kind="formula">
          In an isolated system (no heat loss to surroundings): <F>{`\\sum Q = 0`}</F>, equivalently:
          <FBlock>{`\\text{Heat lost by hot bodies} = \\text{Heat gained by cold bodies}`}</FBlock>
        </Callout>
        <p className="text-sm leading-relaxed">
          If two bodies at temperatures <F>T_1</F> and <F>T_2</F> (with <F>T_1 &gt; T_2</F>) with masses <F>m_1, m_2</F> and specific heats <F>s_1, s_2</F> are mixed, the final temperature is:
        </p>
        <FBlock>{`T = \\frac{m_1 s_1 T_1 + m_2 s_2 T_2}{m_1 s_1 + m_2 s_2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          A weighted average of the two temperatures, weighted by <i>heat capacity</i> (not mass alone).
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Simple water mixing</p>
          <p className="text-sm">Mix 100 g of water at 80°C with 300 g of water at 20°C. Find the final temperature.</p>
          <FBlock>{`100(80 - T) = 300(T - 20)`}</FBlock>
          <FBlock>{`8000 - 100 T = 300 T - 6000 \\Rightarrow T = 35°C`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Metal into water with calorimeter</p>
          <p className="text-sm">A copper calorimeter (water equivalent 10 g) contains 90 g of water at 20°C. 50 g of water at 80°C is added.</p>
          <FBlock>{`\\underbrace{(10 + 90)}_{\\text{cold side: 100 g water-equiv}}(T - 20) = 50(80 - T)`}</FBlock>
          <FBlock>{`100 T - 2000 = 4000 - 50 T \\Rightarrow T = 40°C`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Finding unknown specific heat</p>
          <p className="text-sm">A 50 g metal piece at 200°C is dropped into 100 g of water at 20°C. Final temperature is 25°C. Find the specific heat of the metal (neglect calorimeter).</p>
          <FBlock>{`50\\,s\\,(200 - 25) = 100 \\times 1 \\times (25 - 20)`}</FBlock>
          <FBlock>{`s = \\frac{500}{50 \\times 175} \\approx 0.057\\ \\text{cal/g·°C}`}</FBlock>
          <p className="text-sm">That's roughly the specific heat of copper.</p>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting to include the <b>calorimeter's</b> water equivalent in the heat balance.</li>
            <li>Using the wrong sign convention — pick one: heat gained is positive, or heat lost is positive. Stick with it.</li>
            <li>Mixing up specific heat units — 1 cal/g·°C = 4186 J/kg·K.</li>
            <li>Applying <F>{`Q = ms\\Delta T`}</F> across a phase change where temperature is constant — that needs latent heat, not specific heat.</li>
            <li>Assuming the mixture's temperature is the arithmetic mean of the two starting temperatures — only true when heat capacities are equal.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.calorimetry" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.calorimetry" title="Calorimetry MCQs" questions={calorimetryMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
