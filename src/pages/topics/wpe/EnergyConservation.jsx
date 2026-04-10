import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { FBlock } from '../../../components/ui/Formula.jsx'
import EnergyConservationSim from '../../../components/sims/EnergyConservationSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { energyMCQs } from '../../../data/wpe/concept-mcqs.js'
import { energyNumericals } from '../../../data/wpe/numericals.js'

export default function EnergyConservation() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Conservation of Energy"
      subtitle="Energy is never lost — only converted from one form to another."
    >
      <Section title="The intuition">
        <Callout kind="analogy">
          A roller-coaster cart has lots of potential energy at the top of a hill. As it rolls down, that PE turns into KE — and at the bottom it's moving fastest. Going up the next hill, KE turns back into PE.
        </Callout>
        <p className="text-sm">
          Mechanical energy (KE + PE) stays constant when only conservative forces (like gravity, springs) do work. With friction, some mechanical energy converts to heat — total energy is still conserved.
        </p>
      </Section>

      <Section title="The formulas">
        <FBlock>{`KE = \\tfrac{1}{2}mv^2 \\quad,\\quad PE_{grav} = mgh \\quad,\\quad PE_{spring} = \\tfrac{1}{2}kx^2`}</FBlock>
        <FBlock>{`KE_i + PE_i = KE_f + PE_f \\quad (\\text{no friction})`}</FBlock>
      </Section>

      <Section title="🎮 Roller-coaster simulation">
        <EnergyConservationSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.energy" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.energy" title="Energy Conservation MCQs" questions={energyMCQs} />
        </div>
      </Section>

      <Section title="🧮 Solved Numericals">
        <div className="grid gap-3">
          {energyNumericals.map((p, i) => <NumericalProblem key={i} problem={p} index={i} />)}
        </div>
      </Section>
    </TopicPage>
  )
}
