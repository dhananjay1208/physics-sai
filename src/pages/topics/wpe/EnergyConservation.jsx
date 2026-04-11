import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import EnergyConservationSim from '../../../components/sims/EnergyConservationSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { energyMCQs } from '../../../data/wpe/concept-mcqs.js'
import { energyNumericals } from '../../../data/wpe/numericals.js'

export default function EnergyConservation() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Conservation of Energy"
      subtitle="Energy is never lost — only converted from one form to another. The most universal law in all of physics."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A roller-coaster cart has lots of potential energy at the top of a hill. As it rolls down, that PE turns into KE — and at the bottom it's moving fastest. Going up the next hill, KE turns back into PE. Friction nibbles a little off as heat at every turn, which is why no roller coaster makes it back to the original height.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          Mechanical energy <F>{`E = KE + PE`}</F> stays constant when only conservative forces (gravity, springs) do work. With friction or other dissipative forces, mechanical energy decreases — but the <i>total</i> energy (including heat) is still conserved.
        </p>
      </Section>

      <Section title="2️⃣ Energy types — formulas">
        <FBlock>{`KE = \\tfrac{1}{2} m v^2`}</FBlock>
        <FBlock>{`PE_{grav} = m g h \\quad (\\text{near Earth's surface})`}</FBlock>
        <FBlock>{`PE_{spring} = \\tfrac{1}{2} k x^2`}</FBlock>
        <p className="text-sm leading-relaxed">
          Each kind of PE is associated with a conservative force:
        </p>
        <FBlock>{`F = -\\frac{dU}{dx}`}</FBlock>
        <p className="text-sm leading-relaxed">
          So if you know the potential energy as a function of position, you immediately know the force on the body. NEET loves the reverse: given <F>U(x)</F>, find equilibrium points (where <F>{`F = 0`}</F>) and check stability (<F>{`d^2 U/dx^2 > 0`}</F> = stable).
        </p>
      </Section>

      <Section title="3️⃣ Conservation principle (derivation)">
        <p className="text-sm leading-relaxed">
          For a conservative force, work-energy theorem says <F>{`W_{cons} = \\Delta KE`}</F>, but also <F>{`W_{cons} = -\\Delta PE`}</F>. Equating:
        </p>
        <FBlock>{`-\\Delta PE = \\Delta KE \\Rightarrow \\Delta(KE + PE) = 0`}</FBlock>
        <p className="text-sm leading-relaxed">
          So <F>{`KE + PE`}</F> is constant — mechanical energy is conserved. With friction added:
        </p>
        <FBlock>{`KE_i + PE_i = KE_f + PE_f + W_{friction}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>{`W_{friction} = f \\cdot d`}</F> is the energy dissipated as heat over distance <F>d</F>.
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Drop from a height</p>
          <p className="text-sm leading-relaxed">
            A ball is dropped from <F>{`h = 20`}</F> m. Find its speed just before hitting the ground (no air resistance, <F>{`g = 10`}</F>).
          </p>
          <FBlock>{`m g h = \\tfrac{1}{2} m v^2 \\Rightarrow v = \\sqrt{2 g h} = 20\\,\\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Spring launcher</p>
          <p className="text-sm leading-relaxed">
            A spring with <F>{`k = 400`}</F> N/m is compressed by 10 cm and released, launching a 0.2 kg ball horizontally. Find the launch speed.
          </p>
          <FBlock>{`\\tfrac{1}{2} k x^2 = \\tfrac{1}{2} m v^2`}</FBlock>
          <FBlock>{`v = x\\sqrt{k/m} = 0.1 \\sqrt{400/0.2} \\approx 4.47\\,\\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Friction on incline</p>
          <p className="text-sm leading-relaxed">
            A 2 kg block slides down a 5 m incline of angle <F>{`30°`}</F> with <F>{`\\mu = 0.2`}</F>. Find the speed at the bottom.
          </p>
          <FBlock>{`h = 5\\sin 30° = 2.5\\,\\text{m},\\quad PE = m g h = 50\\,\\text{J}`}</FBlock>
          <FBlock>{`f = \\mu m g \\cos 30° = 0.2(2)(10)(0.866) \\approx 3.46\\,\\text{N}`}</FBlock>
          <FBlock>{`W_f = f\\cdot 5 \\approx 17.3\\,\\text{J}`}</FBlock>
          <FBlock>{`\\tfrac{1}{2} m v^2 = 50 - 17.3 = 32.7\\,\\text{J} \\Rightarrow v \\approx 5.72\\,\\text{m/s}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Applying mechanical energy conservation when friction is present without subtracting <F>{`W_{friction}`}</F>.</li>
            <li>Mixing up the reference level for PE. Pick zero PE somewhere and stick to it.</li>
            <li>Forgetting that on a smooth incline, the speed at the bottom depends only on the vertical drop, not the slope length.</li>
            <li>Using <F>{`mgh`}</F> for high altitudes — it only works near Earth's surface where <F>g</F> is constant.</li>
            <li>Setting up spring problems with the relaxed length as PE = 0 but then using <F>{`mgh`}</F> from the floor — be consistent.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Roller-coaster simulation">
        <EnergyConservationSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.energy" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.energy" title="Energy Conservation MCQs" questions={energyMCQs} />
        </div>
      </Section>

      <Section title="🧮 Solved Numericals">
        <div className="grid gap-3">
          {energyNumericals.map((p, i) => <NumericalProblem key={i} problem={p} index={i} />)}
        </div>
      </Section>
    </TopicPage>
  )
}
