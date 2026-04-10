import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { FBlock } from '../../../components/ui/Formula.jsx'
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
      subtitle="If no outside push, the total momentum of the system never changes."
    >
      <Section title="The intuition">
        <Callout kind="analogy">
          Two ice skaters facing each other push off — both glide away. The push between them is internal, so the system's total momentum stays the same: zero before, zero after (one moves left, one moves right).
        </Callout>
        <p className="text-sm leading-relaxed">
          In the absence of external forces, the total linear momentum of a system of particles is conserved.
        </p>
      </Section>

      <Section title="Where it comes from">
        <p className="text-sm">From Newton's 2nd law: <b>F = dp/dt</b>. If <b>F = 0</b>, then <b>dp/dt = 0</b> ⇒ <b>p = constant</b>.</p>
        <p className="text-sm mt-2">For internal forces, Newton's 3rd law guarantees they cancel pairwise — only external forces can change total momentum.</p>
        <FBlock>{`\\vec{p}_{total} = \\sum_i m_i \\vec{v}_i = \\text{constant}`}</FBlock>
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
