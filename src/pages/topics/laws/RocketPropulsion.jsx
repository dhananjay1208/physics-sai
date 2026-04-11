import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import RocketPropulsionSim from '../../../components/sims/RocketPropulsionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { rocketMCQs } from '../../../data/laws/concept-mcqs.js'
import { rocketNumericals } from '../../../data/laws/numericals.js'

export default function RocketPropulsion() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Rocket Propulsion 🚀"
      subtitle="A perfect example of Newton's 3rd law and the only easy variable-mass problem you'll see at NEET."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Imagine sitting on a skateboard and throwing heavy basketballs backwards. Every ball you throw shoves you forwards. A rocket is doing exactly this — throwing hot gas backwards, continuously.
        </Callout>
        <p className="text-sm leading-relaxed">
          A rocket is a <b>variable-mass system</b>: as it burns fuel, its mass <i>decreases</i>. The hot gases ejected backward carry momentum, and by conservation, the rocket gains an equal and opposite momentum forward. This is why a rocket works in vacuum — it doesn't need air to "push against".
        </p>
      </Section>

      <Section title="2️⃣ The Thrust Equation — derivation">
        <p className="text-sm leading-relaxed">
          In a small time <F>dt</F>, the rocket ejects mass <F>{`dm`}</F> at velocity <F>{`v_e`}</F> (relative to the rocket, opposite to motion). Momentum conservation in the rocket's frame:
        </p>
        <FBlock>{`0 = (m - dm) dv - v_e\\,dm`}</FBlock>
        <p className="text-sm leading-relaxed">
          To first order in <F>dm</F>:
        </p>
        <FBlock>{`m\\,dv = v_e\\,dm \\quad\\Rightarrow\\quad m\\,\\frac{dv}{dt} = v_e\\,\\frac{dm}{dt}`}</FBlock>
        <p className="text-sm leading-relaxed">
          The right side is the <b>thrust force</b>:
        </p>
        <Callout kind="formula">
          <FBlock>{`F_{thrust} = v_e\\,\\frac{dm}{dt}`}</FBlock>
        </Callout>
        <p className="text-sm leading-relaxed">
          Including gravity, net upward force on the rocket:
        </p>
        <FBlock>{`a = \\frac{v_e\\,(dm/dt) - m g}{m}`}</FBlock>
        <Callout kind="tip">
          For lift-off, we need <F>{`v_e (dm/dt) > m g`}</F>. Burning fuel faster <i>or</i> using a higher exhaust velocity both help.
        </Callout>
      </Section>

      <Section title="3️⃣ Tsiolkovsky Rocket Equation">
        <p className="text-sm leading-relaxed">
          Ignore gravity and integrate <F>{`m\\,dv = v_e\\,dm`}</F> (with <F>{`dm`}</F> being mass <i>lost</i>, so we replace by <F>{`-dm`}</F>):
        </p>
        <FBlock>{`\\int_0^v dv = -v_e \\int_{m_0}^{m} \\frac{dm}{m}`}</FBlock>
        <FBlock>{`v = v_e\\,\\ln\\!\\left(\\dfrac{m_0}{m}\\right)`}</FBlock>
        <p className="text-sm leading-relaxed">
          This is the famous <b>Tsiolkovsky rocket equation</b>. It says: to gain a velocity equal to the exhaust speed, you must burn ~63% of your initial mass (since <F>{`\\ln(1/(1-0.63)) \\approx 1`}</F>). This is why rockets are mostly fuel.
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Lift-off check</p>
          <p className="text-sm leading-relaxed">
            A rocket of mass <F>{`5000`}</F> kg ejects gas at <F>{`v_e = 1500`}</F> m/s at <F>{`30`}</F> kg/s. Will it lift off? (<F>{`g = 10`}</F>)
          </p>
          <FBlock>{`F_{thrust} = 1500 \\times 30 = 45000\\,\\text{N}`}</FBlock>
          <FBlock>{`m g = 5000 \\times 10 = 50000\\,\\text{N}`}</FBlock>
          <p className="text-sm">Thrust &lt; weight → it does <b>not</b> lift off.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Tsiolkovsky</p>
          <p className="text-sm leading-relaxed">
            A rocket has <F>{`v_e = 2`}</F> km/s. It burns until <F>{`m = m_0/4`}</F>. Find the burn-out velocity (no gravity).
          </p>
          <FBlock>{`v = 2000 \\times \\ln 4 = 2000 \\times 1.386 \\approx 2772\\,\\text{m/s}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Confusing <F>{`v_e`}</F> (exhaust speed relative to <i>rocket</i>) with the exhaust speed in the ground frame.</li>
            <li>Forgetting to subtract gravity when asked for the rocket's <i>actual</i> acceleration during launch.</li>
            <li>Using <F>{`F = ma`}</F> with constant mass — wrong for rockets. Use <F>{`F = dp/dt`}</F> or the explicit thrust formula.</li>
            <li>Plugging mass <i>burnt</i> into Tsiolkovsky instead of mass <i>remaining</i>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it: launch a rocket">
        <RocketPropulsionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="laws.rocket" />
        <div className="mt-4">
          <MCQQuiz topicId="laws.rocket" title="Rocket Propulsion MCQs" questions={rocketMCQs} />
        </div>
      </Section>

      <Section title="🧮 Solved Numericals">
        <div className="grid gap-3">
          {rocketNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>
    </TopicPage>
  )
}
