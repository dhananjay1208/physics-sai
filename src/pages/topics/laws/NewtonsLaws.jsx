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
      subtitle="The three rules that explain almost everything around you — from a falling apple to a launching rocket."
    >
      <Section title="1️⃣ First Law — The Law of Inertia">
        <Callout kind="analogy">
          When a bus suddenly brakes, your body lurches forward. Your body was already moving with the bus and doesn't want to stop. That "wanting to keep doing what you were doing" is <b>inertia</b>.
        </Callout>
        <p className="text-sm leading-relaxed">
          <b>Statement:</b> A body at rest remains at rest, and a body in uniform motion continues moving in a straight line with the same speed, unless acted upon by an external unbalanced force.
        </p>
        <Callout kind="formula">
          If <F>{`\\vec{F}_{net} = 0`}</F>, then <F>{`\\vec{v} = \\text{constant}`}</F>.
        </Callout>
        <p className="text-sm leading-relaxed">
          <b>What it really says:</b> "Force is what's needed to <i>change</i> motion, not to maintain it." A common pre-Newton mistake was to think that motion needs constant pushing — Newton said no, motion is the natural state. <b>Inertia</b> is the tendency to resist change in motion, and its measure is <b>mass</b>: heavier things are harder to start or stop.
        </p>
        <NewtonsFirstLawSim />
      </Section>

      <Section title="2️⃣ Second Law — F = ma">
        <Callout kind="analogy">
          Push an empty shopping cart vs. a fully loaded one with the same effort. The empty one accelerates faster — that's <b>F = ma</b> in your hands.
        </Callout>
        <p className="text-sm leading-relaxed">
          <b>Statement:</b> The rate of change of linear momentum of a body is equal to the net external force, and takes place in the direction of the force.
        </p>
        <FBlock>{`\\vec{F} = \\frac{d\\vec{p}}{dt}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <b>Derivation of F = ma:</b> Linear momentum is <F>{`\\vec p = m\\vec v`}</F>. Differentiate:
        </p>
        <FBlock>{`\\vec F = \\frac{d(m \\vec v)}{dt} = m\\,\\frac{d\\vec v}{dt} + \\vec v\\,\\frac{dm}{dt}`}</FBlock>
        <p className="text-sm leading-relaxed">
          For a body of constant mass, the second term vanishes, leaving:
        </p>
        <FBlock>{`\\vec F = m\\,\\vec a`}</FBlock>
        <p className="text-sm leading-relaxed">
          For variable mass (like a rocket), you keep both terms — this is exactly how rocket propulsion works.
        </p>
        <NewtonsSecondLawSim />
      </Section>

      <Section title="3️⃣ Third Law — Action and Reaction">
        <Callout kind="analogy">
          When you jump off a small boat, the boat moves backwards while you go forward. You push the boat back (action) and the boat pushes you forward (reaction).
        </Callout>
        <p className="text-sm leading-relaxed">
          <b>Statement:</b> To every action there is an equal and opposite reaction. The two forces always act on <b>different bodies</b>.
        </p>
        <FBlock>{`\\vec{F}_{AB} = -\\vec{F}_{BA}`}</FBlock>
        <NewtonsThirdLawSim />
        <Callout kind="warning">
          A common mistake: adding action and reaction and concluding they cancel. They don't cancel because they act on <b>different bodies</b>. Cancellation requires forces on the <i>same</i> body.
        </Callout>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Lift problem</p>
          <p className="text-sm leading-relaxed">
            A person of mass <F>{`60`}</F> kg stands inside a lift accelerating <i>upward</i> at <F>{`2`}</F> m/s². Find the normal reaction on his feet. (<F>{`g = 10`}</F>)
          </p>
          <FBlock>{`N - m g = m a \\Rightarrow N = m(g + a) = 60(12) = 720\\,\\text{N}`}</FBlock>
          <p className="text-xs text-slate-600">If the lift accelerated downwards, replace <F>{`+a`}</F> with <F>{`-a`}</F>. In free fall <F>{`a = g`}</F> and <F>{`N = 0`}</F> — the person feels weightless.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Two blocks in contact</p>
          <p className="text-sm leading-relaxed">
            Blocks <F>{`m_1 = 3`}</F> kg and <F>{`m_2 = 2`}</F> kg are in contact on a smooth surface. Force <F>{`F = 10`}</F> N is applied on the 3 kg block. Find the contact force between the blocks.
          </p>
          <FBlock>{`a = \\frac{F}{m_1+m_2} = \\frac{10}{5} = 2\\,\\text{m/s}^2`}</FBlock>
          <FBlock>{`N_{contact} = m_2 \\cdot a = 2 \\times 2 = 4\\,\\text{N}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Atwood machine</p>
          <p className="text-sm leading-relaxed">
            Two masses <F>{`m_1 = 5`}</F> kg and <F>{`m_2 = 3`}</F> kg hang on either side of a frictionless pulley. Find the acceleration and string tension. (<F>{`g = 10`}</F>)
          </p>
          <FBlock>{`a = \\frac{(m_1 - m_2) g}{m_1 + m_2} = \\frac{20}{8} = 2.5\\,\\text{m/s}^2`}</FBlock>
          <FBlock>{`T = \\frac{2 m_1 m_2 g}{m_1 + m_2} = \\frac{300}{8} = 37.5\\,\\text{N}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes (NEET Traps)">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>"Action and reaction cancel each other" — they don't, they act on different bodies.</li>
            <li>Treating mass and weight as the same. Mass is in kg, weight is a force <F>{`mg`}</F> in newtons.</li>
            <li>Using <F>{`F = ma`}</F> for variable mass systems (like rockets). The full form is <F>{`F = dp/dt`}</F>.</li>
            <li>Forgetting to write a free-body diagram. Always identify <i>all</i> forces on <i>one</i> body before applying <F>{`F = ma`}</F>.</li>
            <li>In a non-inertial (accelerating) frame, applying <F>{`F = ma`}</F> without including a pseudo-force.</li>
          </ul>
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
