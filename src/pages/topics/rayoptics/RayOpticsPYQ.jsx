import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { rayOpticsPYQs } from '../../../data/rayoptics/pyqs.js'

export default function RayOpticsPYQ() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="NEET PYQs — Ray Optics"
      subtitle="A mixed quiz covering refraction, refractive index, Snell's law, normal shift, total internal reflection and prisms."
    >
      <Callout kind="tip">
        Three NEET signatures to watch for: (1) "just grazes" or "emerges normally" ⇒ a face angle is exactly the critical angle or zero — set <i>r</i> accordingly before using Snell's law. (2) Any prism question with "minimum deviation" unlocks <i>i = e</i> and <i>r₁ = r₂ = A/2</i>. (3) "Thin prism" ⇒ jump straight to δ = (n − 1)A and ignore the angle of incidence.
      </Callout>
      <ScoreBoard topicId="rayoptics.pyq" label="PYQ progress" />
      <MCQQuiz topicId="rayoptics.pyq" title="Ray Optics — NEET PYQs" questions={rayOpticsPYQs} />
    </TopicPage>
  )
}
