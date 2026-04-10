import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import RocketPropulsionSim from '../../../components/sims/RocketPropulsionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { rocketMCQs } from '../../../data/laws/concept-mcqs.js'
import { rocketNumericals } from '../../../data/laws/numericals.js'

export default function RocketPropulsion() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Rocket Propulsion 🚀"
      subtitle="A perfect example of Newton's 3rd law and a system with variable mass."
    >
      <Section title="The big idea">
        <Callout kind="analogy">
          Imagine sitting on a skateboard and throwing heavy basketballs backwards. Every ball you throw shoves you forwards. A rocket is doing exactly this — throwing hot gas backwards continuously.
        </Callout>
        <p className="text-sm leading-relaxed">
          A rocket is a <b>variable-mass system</b>: as it burns fuel, its mass decreases. The hot gases ejected backwards carry momentum, and by conservation, the rocket gets equal and opposite momentum forward.
        </p>
      </Section>

      <Section title="The thrust equation">
        <Callout kind="formula">
          Thrust force = (exhaust velocity) × (rate of mass ejection)
          <FBlock>{`F_{thrust} = v_e\\,\\frac{dm}{dt}`}</FBlock>
        </Callout>
        <p className="text-sm">
          Net upward force on the rocket = Thrust − Weight, so
        </p>
        <FBlock>{`a = \\frac{v_e\\,\\dfrac{dm}{dt} - mg}{m}`}</FBlock>
      </Section>

      <Section title="Tsiolkovsky Rocket Equation">
        <p className="text-sm">If you ignore gravity and integrate, you get the famous result:</p>
        <FBlock>{`v = v_e \\,\\ln\\!\\left(\\dfrac{m_0}{m}\\right)`}</FBlock>
        <Callout kind="tip">
          NEET often asks for velocity when mass becomes <F>{`m_0/2`}</F> or <F>{`m_0/10`}</F>. Just plug into <F>{`v_e \\ln(m_0/m)`}</F>.
        </Callout>
      </Section>

      <Section title="🎮 Try it: launch a rocket">
        <RocketPropulsionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="laws.rocket" />
        <div className="mt-4">
          <MCQQuiz topicId="laws.rocket" title="Rocket Propulsion MCQs" questions={rocketMCQs} />
        </div>
      </Section>

      <Section title="🧮 Solved Numericals">
        <div className="grid gap-3">
          {rocketNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>
    </TopicPage>
  )
}
