import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import WorkEnergySim from '../../../components/sims/WorkEnergySim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { workMCQs } from '../../../data/wpe/concept-mcqs.js'

export default function WorkEnergyTheorem() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Work & Work–Energy Theorem"
      subtitle="What does 'doing work' really mean in physics? And why does the math care about the angle?"
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Pushing a wall makes you sweat — but the wall doesn't move, so in physics you've done <b>zero work</b>. Work needs both a force <b>and</b> a displacement <i>in the direction of the force</i>.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          In daily life, "work" is anything that makes you tired. In physics it has a precise meaning: an exchange of energy from one body to another via a force acting through a distance. If nothing moves, no energy was transferred — no work.
        </p>
      </Section>

      <Section title="2️⃣ Definition of Work">
        <FBlock>{`W = \\vec F \\cdot \\vec s = F\\,s\\,\\cos\\theta`}</FBlock>
        <p className="text-sm leading-relaxed">where <F>\theta</F> is the angle between the force and the displacement.</p>
        <ul className="text-sm list-disc ml-5 space-y-1">
          <li><F>{`\\theta = 0°`}</F> → <b>positive</b> work (force along motion). Example: pushing a box across the floor.</li>
          <li><F>{`\\theta = 90°`}</F> → <b>zero</b> work (perpendicular). Example: gravity on a ball moving horizontally; centripetal force in uniform circular motion.</li>
          <li><F>{`\\theta = 180°`}</F> → <b>negative</b> work (opposes motion). Example: friction stopping a sliding block.</li>
        </ul>
        <p className="text-sm leading-relaxed mt-2">
          For a variable force, sum up infinitely many tiny pieces by integration:
        </p>
        <FBlock>{`W = \\int_{\\vec r_1}^{\\vec r_2} \\vec F\\cdot d\\vec r`}</FBlock>
        <p className="text-sm leading-relaxed">
          Geometrically: work is the <b>area under the F-x graph</b>. NEET often tests this directly.
        </p>
      </Section>

      <Section title="3️⃣ Work–Energy Theorem — derivation">
        <p className="text-sm leading-relaxed">
          Take a body of mass <F>m</F> moving in a straight line under net force <F>F</F>. From Newton's second law <F>F = m\,a</F>. Multiply both sides by <F>{`dx`}</F> and integrate:
        </p>
        <FBlock>{`\\int F\\,dx = \\int m\\,a\\,dx = \\int m\\,\\frac{dv}{dt}\\,dx = \\int m\\,v\\,dv`}</FBlock>
        <FBlock>{`W_{net} = \\int_{v_i}^{v_f} m\\,v\\,dv = \\tfrac{1}{2} m v_f^2 - \\tfrac{1}{2} m v_i^2 = \\Delta KE`}</FBlock>
        <Callout kind="formula">
          The net work done on a body equals the change in its kinetic energy:
          <FBlock>{`W_{net} = \\Delta KE = \\tfrac{1}{2} m v_f^2 - \\tfrac{1}{2} m v_i^2`}</FBlock>
        </Callout>
        <p className="text-sm leading-relaxed">
          The theorem is universal — it works for constant forces, variable forces, and even forces that change direction. Wherever you can compute net work, you immediately know the speed change.
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Stopping distance from work-energy</p>
          <p className="text-sm leading-relaxed">
            A 4 kg block moves at 6 m/s on a rough surface (<F>{`\\mu = 0.2`}</F>). How far does it travel before stopping? (<F>{`g = 10`}</F>)
          </p>
          <FBlock>{`f = \\mu m g = 0.2 \\times 4 \\times 10 = 8\\,\\text{N}`}</FBlock>
          <FBlock>{`W_{friction} = -f \\cdot s = -\\Delta KE = -\\tfrac{1}{2}(4)(6^2) = -72\\,\\text{J}`}</FBlock>
          <FBlock>{`s = 72/8 = 9\\,\\text{m}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Variable force</p>
          <p className="text-sm leading-relaxed">
            A 2 kg body starts from rest and is acted upon by force <F>{`F = 5x`}</F> N from <F>{`x = 0`}</F> to <F>{`x = 4`}</F> m. Find the speed at <F>{`x = 4`}</F>.
          </p>
          <FBlock>{`W = \\int_0^4 5x\\,dx = \\frac{5\\cdot 16}{2} = 40\\,\\text{J}`}</FBlock>
          <FBlock>{`\\tfrac{1}{2}(2)v^2 = 40 \\Rightarrow v = \\sqrt{40} \\approx 6.32\\,\\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Force at an angle</p>
          <p className="text-sm leading-relaxed">
            A 50 N force is applied at <F>{`60°`}</F> above horizontal to a box that moves 4 m horizontally on a smooth surface. Work done by the force?
          </p>
          <FBlock>{`W = F s\\cos\\theta = 50 \\times 4 \\times 0.5 = 100\\,\\text{J}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting the <F>{`\\cos\\theta`}</F> factor when force is at an angle.</li>
            <li>Treating "force × distance" as work even when the force is perpendicular to motion. Centripetal force does <b>zero</b> work.</li>
            <li>Applying <F>{`W = F s`}</F> to a variable force. You need to integrate.</li>
            <li>Forgetting to include the negative sign on friction's work. Friction always does negative work on a sliding body.</li>
            <li>Adding work done by <i>each</i> force separately — that's fine, but the <b>work-energy theorem</b> uses the <i>net</i> work, not just one force's contribution.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <WorkEnergySim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.work" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.work" title="Work MCQs" questions={workMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
