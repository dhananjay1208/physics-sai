import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { frictionPYQs } from '../../../data/friction/pyqs.js'

export default function FrictionPYQ() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="NEET PYQs — Friction in Solids"
      subtitle="A mixed quiz covering static & kinetic friction, angle of repose, FBDs, and applications."
    >
      <Callout kind="tip">
        Three NEET signatures to watch for: (1) "just begins to slide" ⇒ limiting friction <i>equality</i>, use <b>tan θ = μ</b>. (2) "Minimum force at an angle" ⇒ pull angle equals angle of friction. (3) "Moves together" vs "slides on top" ⇒ compare required common acceleration with the maximum μg that inter-block friction can supply.
      </Callout>
      <ScoreBoard topicId="friction.pyq" label="PYQ progress" />
      <MCQQuiz topicId="friction.pyq" title="Friction — NEET PYQs" questions={frictionPYQs} />
    </TopicPage>
  )
}
