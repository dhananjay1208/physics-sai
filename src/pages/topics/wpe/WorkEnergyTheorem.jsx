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
      subtitle="What does 'doing work' really mean in physics?"
    >
      <Section title="The intuition">
        <Callout kind="analogy">
          Pushing a wall makes you sweat — but the wall doesn't move, so in physics you've done <b>zero work</b>. Work needs both force <b>and</b> displacement in the direction of force.
        </Callout>
      </Section>

      <Section title="Definition of work">
        <FBlock>{`W = \\vec{F} \\cdot \\vec{s} = F\\,s\\,\\cos\\theta`}</FBlock>
        <ul className="text-sm list-disc ml-5 space-y-1">
          <li><F>{`\\theta = 0°`}</F> ⇒ positive work (force along motion)</li>
          <li><F>{`\\theta = 90°`}</F> ⇒ zero work (perpendicular)</li>
          <li><F>{`\\theta = 180°`}</F> ⇒ negative work (opposite to motion)</li>
        </ul>
        <p className="text-sm mt-2">For a variable force, integrate: <F>{`W = \\int \\vec F\\cdot d\\vec s`}</F>.</p>
      </Section>

      <Section title="Work–Energy Theorem">
        <Callout kind="formula">
          The net work done on a body equals the change in its kinetic energy.
          <FBlock>{`W_{net} = \\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2`}</FBlock>
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
