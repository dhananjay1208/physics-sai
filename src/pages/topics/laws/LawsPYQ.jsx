import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { lawsPYQs } from '../../../data/laws/pyqs.js'

export default function LawsPYQ() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="NEET PYQs — Laws of Motion"
      subtitle="A mixed quiz covering all topics of this chapter."
    >
      <Callout kind="tip">
        Tip: read each question twice. NEET physics MCQs often hide the trick in the wording. Don't rush — accuracy first, speed second.
      </Callout>
      <ScoreBoard topicId="laws.pyq" label="PYQ progress" />
      <MCQQuiz topicId="laws.pyq" title="Laws of Motion PYQs" questions={lawsPYQs} />
    </TopicPage>
  )
}
