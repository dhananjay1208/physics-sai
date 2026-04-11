import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MomentumConservationSim from '../../../components/sims/MomentumConservationSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { momentumMCQs } from '../../../data/laws/concept-mcqs.js'

export default function ConservationOfMomentum() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Conservation of Momentum"
      subtitle="If no outside push, the total momentum of the system never changes — and that one rule solves dozens of NEET problems."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Two ice skaters facing each other push off — both glide away. The push is internal to the "two-skater system", so the system's total momentum stays the same: zero before, zero after. One moves left, the other moves right; their momenta add to zero.
        </Callout>
        <p className="text-sm leading-relaxed">
          This idea — that <i>internal</i> forces don't change total momentum — is the most powerful problem-solving tool in mechanics. Every collision, every explosion, every recoil problem reduces to "write momentum before = momentum after" and solve.
        </p>
      </Section>

      <Section title="2️⃣ Statement">
        <p className="text-sm leading-relaxed">
          For an isolated system (no external forces, or external forces sum to zero), the total linear momentum is conserved:
        </p>
        <FBlock>{`\\vec p_{total} = \\sum_i m_i \\vec v_i = \\text{constant}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Important: momentum is a <b>vector</b>. Conservation applies to each component independently. So in 2D collision problems, you write conservation in <F>x</F> and <F>y</F> separately.
        </p>
      </Section>

      <Section title="3️⃣ Derivation from Newton's laws">
        <p className="text-sm leading-relaxed">
          From Newton's second law applied to a system of particles:
        </p>
        <FBlock>{`\\frac{d\\vec p_{total}}{dt} = \\vec F_{ext}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Internal forces between particles cancel pairwise by Newton's third law. So only external forces appear on the right side. If <F>{`\\vec F_{ext} = 0`}</F>, then <F>{`d\\vec p_{total}/dt = 0`}</F>, which means <F>{`\\vec p_{total}`}</F> is constant in time.
        </p>
        <Callout kind="tip">
          The system can have huge internal forces (like an explosion) and momentum is <i>still</i> conserved. As long as there's no external force, the total momentum can't change.
        </Callout>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Bomb explosion</p>
          <p className="text-sm leading-relaxed">
            A stationary bomb of mass <F>{`4`}</F> kg explodes into two pieces of masses <F>{`1`}</F> kg and <F>{`3`}</F> kg. The 1 kg piece flies off at <F>{`30`}</F> m/s. Find the velocity of the 3 kg piece.
          </p>
          <FBlock>{`p_{before} = 0,\\ p_{after} = 1(30) + 3 v = 0`}</FBlock>
          <FBlock>{`v = -10\\,\\text{m/s}`}</FBlock>
          <p className="text-sm">The 3 kg piece moves at 10 m/s in the opposite direction.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Inelastic collision</p>
          <p className="text-sm leading-relaxed">
            A 2 kg ball moving at 6 m/s collides head-on with a 4 kg ball at rest and they stick. Find the common velocity and the loss in KE.
          </p>
          <FBlock>{`(2)(6) = (6) v \\Rightarrow v = 2\\,\\text{m/s}`}</FBlock>
          <FBlock>{`KE_i = \\tfrac{1}{2}(2)(36) = 36\\,\\text{J}`}</FBlock>
          <FBlock>{`KE_f = \\tfrac{1}{2}(6)(4) = 12\\,\\text{J}`}</FBlock>
          <p className="text-sm">Loss = 24 J — gone to heat and deformation. Note: momentum is conserved, KE is <i>not</i>.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Astronaut throwing a tool</p>
          <p className="text-sm leading-relaxed">
            A <F>{`70`}</F> kg astronaut floating in space throws a <F>{`2`}</F> kg tool at <F>{`5`}</F> m/s. Her recoil speed is:
          </p>
          <FBlock>{`70 v + 2(5) = 0 \\Rightarrow v = -\\tfrac{10}{70} \\approx -0.143\\,\\text{m/s}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Assuming KE is also conserved. KE is conserved only in <i>elastic</i> collisions; momentum is conserved in all types (when no external force).</li>
            <li>Forgetting to assign signs to velocities — momentum is a vector. Pick a positive direction and stick to it.</li>
            <li>Applying conservation when an external force <i>is</i> acting (e.g. gravity during an inelastic vertical collision over a finite time).</li>
            <li>Mixing up "system" definitions. If you exclude one body from the system, its push counts as external.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it: collide two balls">
        <p className="text-sm text-slate-600 mb-2">Change masses, velocities and elasticity. Watch how momentum stays the same — but kinetic energy may not.</p>
        <MomentumConservationSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="laws.momentum" />
        <div className="mt-4">
          <MCQQuiz topicId="laws.momentum" title="Conservation of Momentum MCQs" questions={momentumMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
