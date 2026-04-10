import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import NewtonsFirstLawSim from '../../../components/sims/NewtonsFirstLawSim.jsx'
import NewtonsSecondLawSim from '../../../components/sims/NewtonsSecondLawSim.jsx'
import NewtonsThirdLawSim from '../../../components/sims/NewtonsThirdLawSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { newtonsLawsMCQs } from '../../../data/laws/concept-mcqs.js'

export default function NewtonsLaws() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Newton's 3 Laws"
      subtitle="The three simple rules that explain almost everything around you."
    >
      <Section title="1️⃣ First Law — The law of Inertia">
        <Callout kind="analogy">
          When a bus suddenly brakes, your body lurches forward. Your body was already moving with the bus and doesn't want to stop. That "wanting to keep doing what you were doing" is <b>inertia</b>.
        </Callout>
        <p className="text-sm leading-relaxed">
          A body at rest stays at rest, and a body in uniform motion stays in uniform motion in a straight line, unless acted upon by an external unbalanced force.
        </p>
        <Callout kind="formula">
          If <F>{`\\vec{F}_{net} = 0`}</F>, then <F>{`\\vec{v} = \\text{constant}`}</F>.
        </Callout>
        <NewtonsFirstLawSim />
      </Section>

      <Section title="2️⃣ Second Law — F = ma">
        <Callout kind="analogy">
          Push an empty shopping cart vs. push a fully loaded one with the same effort. The empty one accelerates faster — that's <b>F = ma</b>.
        </Callout>
        <p className="text-sm leading-relaxed">
          The rate of change of momentum of a body is proportional to the applied force, and takes place in the direction of the force.
        </p>
        <FBlock>{`\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}`}</FBlock>
        <NewtonsSecondLawSim />
      </Section>

      <Section title="3️⃣ Third Law — Action and Reaction">
        <Callout kind="analogy">
          When you jump off a small boat, the boat moves backwards while you go forward. You push the boat back (action) and the boat pushes you forward (reaction).
        </Callout>
        <p className="text-sm leading-relaxed">
          To every action, there is an equal and opposite reaction. The two forces act on <b>different bodies</b> — that's why they don't cancel.
        </p>
        <FBlock>{`\\vec{F}_{AB} = -\\vec{F}_{BA}`}</FBlock>
        <NewtonsThirdLawSim />
        <Callout kind="warning">
          A common mistake is to add the action and reaction forces and conclude they cancel. They <b>don't</b> cancel because they act on different bodies.
        </Callout>
      </Section>

      <Section title="🎯 Quick Concept Check">
        <ScoreBoard topicId="laws.newtons" />
        <div className="mt-4">
          <MCQQuiz topicId="laws.newtons" title="Newton's Laws MCQs" questions={newtonsLawsMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
