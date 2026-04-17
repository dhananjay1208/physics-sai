import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import CoolingCurveSim from '../../../components/sims/CoolingCurveSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { newtonsCoolingMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function NewtonsLawCooling() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Newton's Law of Cooling"
      subtitle="A simple, powerful shortcut: the hotter a body is compared to its surroundings, the faster it loses heat — linearly."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A cup of tea fresh off the stove cools <b>fast</b> at first — steam pouring off, condensation on your glasses — and then slower and slower as it nears room temperature. Newton's law says the rate of cooling is proportional to how far above the room you are. Double the gap, double the cooling rate.
        </Callout>
      </Section>

      <Section title="2️⃣ The law">
        <FBlock>{`\\frac{dT}{dt} = -k(T - T_0)`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>T</F> is the body's temperature, <F>T_0</F> the ambient temperature, and <F>k &gt; 0</F> a cooling constant (depends on surface area, emissivity, geometry). The minus sign says the body is cooling when <F>{`T > T_0`}</F>.
        </p>
        <p className="text-sm leading-relaxed">
          The exact solution — a straight-line exponential decay of the excess temperature:
        </p>
        <FBlock>{`T(t) = T_0 + (T_i - T_0)\\,e^{-k t}`}</FBlock>
        <p className="text-sm leading-relaxed">
          So <F>{`\\ln(T - T_0)`}</F> vs <F>t</F> is a straight line with slope <F>-k</F>.
        </p>
      </Section>

      <Section title="3️⃣ Why it works (link to Stefan)">
        <p className="text-sm leading-relaxed">
          Stefan's law gives the <i>exact</i> radiation rate <F>{`P_{net} = \\varepsilon \\sigma A (T^4 - T_0^4)`}</F>. For small excess temperatures, Taylor-expand around <F>T_0</F>:
        </p>
        <FBlock>{`T^4 - T_0^4 \\approx 4 T_0^3 (T - T_0)`}</FBlock>
        <p className="text-sm leading-relaxed">
          which is linear in the excess temperature — that's the entire justification for Newton's law. It is an approximation, valid only when <F>{`T - T_0 \\ll T_0`}</F>.
        </p>
      </Section>

      <Section title="4️⃣ The average-temperature trick">
        <p className="text-sm leading-relaxed">
          In NEET problems, the most useful form rewrites the differential equation as a discrete approximation:
        </p>
        <FBlock>{`\\frac{T_1 - T_2}{t} = k\\left(\\frac{T_1 + T_2}{2} - T_0\\right)`}</FBlock>
        <p className="text-sm leading-relaxed">
          "Rate of cooling equals <F>k</F> times the <i>average</i> excess temperature." Use this to connect two cooling intervals in a single problem.
        </p>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Two-step cooling</p>
          <p className="text-sm">A body cools from 60°C to 40°C in 8 min in surroundings at 20°C. Time to cool from 40°C to 30°C?</p>
          <FBlock>{`\\text{Step 1: } \\frac{60-40}{8} = k(50 - 20) \\Rightarrow k = \\frac{1}{12}`}</FBlock>
          <FBlock>{`\\text{Step 2: } \\frac{40-30}{t} = k(35 - 20) \\Rightarrow t = \\frac{10 \\cdot 12}{15} = 8\\,\\text{min}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Exponential ratio</p>
          <p className="text-sm">A body at 3T cools to 2T in 10 min in surroundings at T. Temperature after the next 10 min?</p>
          <FBlock>{`\\frac{2T - T}{3T - T} = e^{-10k} \\Rightarrow e^{-10k} = \\tfrac{1}{2}`}</FBlock>
          <FBlock>{`T_f - T = (2T - T) e^{-10k} = T\\cdot\\tfrac{1}{2} \\Rightarrow T_f = \\tfrac{3T}{2}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Finding k</p>
          <p className="text-sm">A liquid cools from 80°C to 60°C in 5 min in a 20°C room. Find the cooling constant <F>k</F>.</p>
          <FBlock>{`\\frac{80 - 60}{5} = k\\left(\\frac{80 + 60}{2} - 20\\right) = 50 k`}</FBlock>
          <FBlock>{`k = \\frac{4}{50} = 0.08\\ \\text{min}^{-1}`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using Newton's law for large ΔT — it fails once <F>{`(T - T_0)`}</F> becomes comparable to <F>T_0</F>. Use Stefan directly.</li>
            <li>Using the instantaneous-rate form <F>{`(T_1-T_2)/t = k(T_1 - T_0)`}</F> instead of the average-T form — this gives wrong answers in two-step problems.</li>
            <li>Not realising that the <b>same</b> 10°C drop takes <i>longer</i> the cooler you get — each interval is not equal time.</li>
            <li>Assuming <F>k</F> depends on mass — it actually depends on surface area and emissivity, not on mass or material per se.</li>
            <li>Mixing absolute and Celsius temperatures — Newton's law uses differences, so either scale works, but don't mix them in one equation.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <CoolingCurveSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.newton-cooling" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.newton-cooling" title="Newton's Cooling MCQs" questions={newtonsCoolingMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
