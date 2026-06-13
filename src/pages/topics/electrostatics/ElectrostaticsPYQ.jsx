import TopicPage from '../../../components/layout/TopicPage.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { electrostaticsPYQs } from '../../../data/electrostatics/pyqs.js'

export default function ElectrostaticsPYQ() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="NEET PYQs — Electrostatics"
      subtitle="A mixed quiz covering properties of charge, Coulomb's law, equilibrium, electric field, work-energy and flux."
    >
      <Callout kind="tip">
        Three NEET signatures to watch for: (1) "identical conducting spheres are touched" ⇒ charges average — sum, halve. (2) "Charge accelerated through V" ⇒ jump straight to KE = qV in joules or eV. (3) Anything with closed surfaces / cubes / flux ⇒ Gauss's law Φ = q_enc/ε₀ and exploit symmetry to split it across faces.
      </Callout>
      <ScoreBoard topicId="electro.pyq" label="PYQ progress" />
      <MCQQuiz topicId="electro.pyq" title="Electrostatics — NEET PYQs" questions={electrostaticsPYQs} />
    </TopicPage>
  )
}
