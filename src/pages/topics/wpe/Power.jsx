import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { FBlock } from '../../../components/ui/Formula.jsx'
import PowerSim from '../../../components/sims/PowerSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { powerMCQs } from '../../../data/wpe/concept-mcqs.js'

export default function Power() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Power"
      subtitle="How fast work is being done."
    >
      <Section title="The intuition">
        <Callout kind="analogy">
          Two people lift the same 20 kg bag onto a shelf. One does it in 1 second, one in 5 seconds. They did the <b>same work</b>, but the first one was <b>5× more powerful</b>.
        </Callout>
      </Section>

      <Section title="Formulas">
        <FBlock>{`P_{avg} = \\frac{W}{t} \\qquad P_{inst} = \\frac{dW}{dt} = \\vec F \\cdot \\vec v`}</FBlock>
        <p className="text-sm">SI unit: <b>Watt (W) = J/s</b>. 1 HP ≈ 746 W.</p>
      </Section>

      <Section title="🎮 Try it">
        <PowerSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.power" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.power" title="Power MCQs" questions={powerMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
