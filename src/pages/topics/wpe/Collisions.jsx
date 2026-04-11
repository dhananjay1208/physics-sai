import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import CollisionSim from '../../../components/sims/CollisionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { collisionMCQs } from '../../../data/wpe/concept-mcqs.js'
import { collisionNumericals } from '../../../data/wpe/numericals.js'

export default function Collisions() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Collisions"
      subtitle="Elastic, inelastic, and the coefficient of restitution. The single most-tested topic in NEET mechanics."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A cricket ball hitting a bat behaves very differently from a lump of clay hitting a wall. The cricket ball bounces back almost as fast as it came (<i>elastic</i>); the clay sticks (<i>perfectly inelastic</i>). Most real collisions sit somewhere in between.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          What separates these cases is whether <b>kinetic energy</b> is preserved or converted to heat/sound/deformation. Momentum, on the other hand, is conserved in <i>every</i> collision (when no external force acts during the collision).
        </p>
      </Section>

      <Section title="2️⃣ Two big rules">
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li><b>Linear momentum is ALWAYS conserved</b> in a collision (no external force during contact).</li>
          <li><b>Kinetic energy is conserved only in elastic collisions.</b> In all others, some KE is lost to heat, sound, or deformation.</li>
        </ul>
      </Section>

      <Section title="3️⃣ Coefficient of restitution (e)">
        <FBlock>{`e = \\frac{\\text{relative velocity of separation}}{\\text{relative velocity of approach}}`}</FBlock>
        <ul className="text-sm list-disc ml-5">
          <li><b>e = 1</b> → perfectly elastic (KE conserved)</li>
          <li><b>0 &lt; e &lt; 1</b> → inelastic (KE partially lost)</li>
          <li><b>e = 0</b> → perfectly inelastic (bodies stick together)</li>
        </ul>
        <p className="text-sm leading-relaxed mt-2">
          For a ball bouncing on a floor: if dropped from height <F>h</F> and rebounds to <F>{`h'`}</F>, then <F>{`e = \\sqrt{h'/h}`}</F> (since <F>{`v\\propto\\sqrt h`}</F>). After <F>n</F> bounces, the height becomes <F>{`e^{2n} h`}</F>.
        </p>
      </Section>

      <Section title="4️⃣ Elastic collision formulas — derivation">
        <p className="text-sm leading-relaxed">
          For a 1D elastic collision between masses <F>{`m_1`}</F> (initial velocity <F>{`u_1`}</F>) and <F>{`m_2`}</F> (initial velocity <F>{`u_2`}</F>), apply both conservation laws:
        </p>
        <FBlock>{`m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'`}</FBlock>
        <FBlock>{`\\tfrac{1}{2} m_1 u_1^2 + \\tfrac{1}{2} m_2 u_2^2 = \\tfrac{1}{2} m_1 v_1'^2 + \\tfrac{1}{2} m_2 v_2'^2`}</FBlock>
        <p className="text-sm leading-relaxed">
          Solving this system gives the textbook results:
        </p>
        <FBlock>{`v_1' = \\frac{m_1 - m_2}{m_1 + m_2} u_1 + \\frac{2 m_2}{m_1 + m_2} u_2`}</FBlock>
        <FBlock>{`v_2' = \\frac{m_2 - m_1}{m_1 + m_2} u_2 + \\frac{2 m_1}{m_1 + m_2} u_1`}</FBlock>
        <Callout kind="tip">
          Three NEET-favourite limits: (i) <F>{`m_1 = m_2`}</F>: velocities are <b>swapped</b>. (ii) <F>{`m_1 \\gg m_2`}</F>: heavy body unaffected, light body bounces off at twice the heavy body's velocity. (iii) <F>{`m_1 \\ll m_2`}</F>: light body bounces back with reversed velocity.
        </Callout>
      </Section>

      <Section title="5️⃣ Inelastic collisions and energy loss">
        <p className="text-sm leading-relaxed">
          For perfectly inelastic, the bodies stick: <F>{`v_f = (m_1 u_1 + m_2 u_2)/(m_1+m_2)`}</F>. The kinetic energy loss is:
        </p>
        <FBlock>{`\\Delta KE = \\frac{1}{2} \\frac{m_1 m_2}{m_1 + m_2}(u_1 - u_2)^2`}</FBlock>
        <p className="text-sm leading-relaxed">
          This depends on the <i>relative</i> velocity, not the absolute velocities — which makes sense, because energy lost is what was needed to bring them to a common velocity.
        </p>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Equal masses, elastic</p>
          <p className="text-sm leading-relaxed">
            A 2 kg ball moving at 5 m/s collides head-on elastically with a stationary 2 kg ball. Find the final velocities.
          </p>
          <FBlock>{`\\text{Equal masses elastic} \\Rightarrow v_1' = 0,\\ v_2' = 5\\,\\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Bouncing ball</p>
          <p className="text-sm leading-relaxed">
            A ball is dropped from <F>{`h = 4`}</F> m. After the first bounce it rises to <F>{`h' = 1`}</F> m. Find <F>e</F> and the height after the second bounce.
          </p>
          <FBlock>{`e = \\sqrt{1/4} = 0.5`}</FBlock>
          <FBlock>{`h_2 = e^2 h_1 = 0.25 \\times 1 = 0.25\\,\\text{m}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Inelastic collision energy loss</p>
          <p className="text-sm leading-relaxed">
            A 3 kg block moving at 4 m/s collides perfectly inelastically with a 1 kg block at rest. Find the loss in KE.
          </p>
          <FBlock>{`v_f = (3\\cdot 4)/4 = 3\\,\\text{m/s}`}</FBlock>
          <FBlock>{`KE_i = \\tfrac{1}{2}(3)(16) = 24\\,\\text{J},\\ KE_f = \\tfrac{1}{2}(4)(9) = 18\\,\\text{J}`}</FBlock>
          <FBlock>{`\\Delta KE = 6\\,\\text{J}`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Assuming KE is conserved in inelastic collisions. It is not.</li>
            <li>Forgetting that <F>e</F> is defined using <i>relative</i> velocities, not absolute ones.</li>
            <li>Confusing the elastic collision formulas — sign of <F>{`(m_1 - m_2)`}</F> matters.</li>
            <li>Treating "perfectly inelastic" as "no momentum conserved". Momentum is still conserved; only KE is not.</li>
            <li>For ball-on-floor problems, forgetting that the floor's mass is effectively infinite, so <F>{`e = v_{after}/v_{before}`}</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Collision playground">
        <CollisionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.collision" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.collision" title="Collisions MCQs" questions={collisionMCQs} />
        </div>
      </Section>

      <Section title="🧮 Solved Numericals">
        <div className="grid gap-3">
          {collisionNumericals.map((p, i) => <NumericalProblem key={i} problem={p} index={i} />)}
        </div>
      </Section>
    </TopicPage>
  )
}
