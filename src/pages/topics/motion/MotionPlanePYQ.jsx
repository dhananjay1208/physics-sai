import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { motionPYQs } from '../../../data/motion/pyqs.js'

export default function MotionPlanePYQ() {
  return (
    <TopicPage
      chapterTo="/motion-plane"
      chapterTitle="Motion in a Plane"
      title="NEET PYQs — Motion in a Plane"
      subtitle="A mixed quiz spanning projectile motion, trajectory, and relative motion — picked from past NEET papers."
    >
      <Callout kind="tip">
        Tip: most 2D-motion NEET questions are <i>really</i> just 1D questions in disguise — one horizontal, one vertical. Before you panic, decompose.
      </Callout>
      <ScoreBoard topicId="motion.pyq" label="PYQ progress" />
      <MCQQuiz topicId="motion.pyq" title="Motion in a Plane PYQs" questions={motionPYQs} />
    </TopicPage>
  )
}
