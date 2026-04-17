import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { thermalPYQs } from '../../../data/thermal/pyqs.js'

export default function ThermalPYQ() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="NEET PYQs — Thermal Properties of Matter"
      subtitle="A mixed quiz covering thermometry, calorimetry, specific & latent heat, Stefan's law, Newton's cooling, conduction and radiation."
    >
      <Callout kind="tip">
        Two NEET signatures to watch for: (1) any question with a temperature ratio is probably testing Stefan's T⁴ or Wien's 1/T scaling — convert to Kelvin first. (2) In calorimetry, always check whether the hot side has enough heat to fully melt the ice or fully boil the water before equating final temperatures.
      </Callout>
      <ScoreBoard topicId="thermal.pyq" label="PYQ progress" />
      <MCQQuiz topicId="thermal.pyq" title="Thermal Properties of Matter — PYQs" questions={thermalPYQs} />
    </TopicPage>
  )
}
