import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { wpePYQs } from '../../../data/wpe/pyqs.js'

export default function WPEPYQ() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="NEET PYQs — Work, Power & Energy"
      subtitle="A mixed quiz covering work, energy, power and collisions."
    >
      <Callout kind="tip">
        Look out for sign of work, conservative vs. non-conservative forces, and elastic vs. inelastic collisions — these are NEET favourites.
      </Callout>
      <ScoreBoard topicId="wpe.pyq" label="PYQ progress" />
      <MCQQuiz topicId="wpe.pyq" title="WPE PYQs" questions={wpePYQs} />
    </TopicPage>
  )
}
