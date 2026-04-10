import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { FBlock } from '../../../components/ui/Formula.jsx'
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
      subtitle="Elastic, inelastic, and the coefficient of restitution."
    >
      <Section title="Two big rules">
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li><b>Linear momentum is ALWAYS conserved</b> in collisions (no external force).</li>
          <li><b>Kinetic energy is conserved only in elastic collisions.</b></li>
        </ul>
      </Section>

      <Section title="Coefficient of restitution (e)">
        <FBlock>{`e = \\frac{\\text{relative velocity of separation}}{\\text{relative velocity of approach}}`}</FBlock>
        <ul className="text-sm list-disc ml-5">
          <li><b>e = 1</b> ⇒ perfectly elastic (KE conserved)</li>
          <li><b>0 &lt; e &lt; 1</b> ⇒ inelastic (KE partially lost)</li>
          <li><b>e = 0</b> ⇒ perfectly inelastic (bodies stick together)</li>
        </ul>
      </Section>

      <Section title="Elastic collision formulas (1D)">
        <FBlock>{`v_1' = \\frac{m_1 - m_2}{m_1+m_2}u_1 + \\frac{2m_2}{m_1+m_2}u_2`}</FBlock>
        <FBlock>{`v_2' = \\frac{m_2 - m_1}{m_1+m_2}u_2 + \\frac{2m_1}{m_1+m_2}u_1`}</FBlock>
        <Callout kind="tip">
          NEET shortcut: when <b>m₁ = m₂</b> in an elastic collision, the velocities are simply <b>swapped</b>.
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
