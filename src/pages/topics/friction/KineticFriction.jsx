import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import FrictionSliderSim from '../../../components/sims/FrictionSliderSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { kineticFrictionMCQs } from '../../../data/friction/concept-mcqs.js'

export default function KineticFriction() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="Kinetic Friction"
      subtitle="Once the block breaks loose: a constant drag that opposes motion, independent of speed."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Think of walking through a crowd: standing still, the crowd grips you more tightly than once you're pushing forward. The instant you move, people "let go" slightly — that's why the force to <i>keep</i> a box sliding is less than the force to <i>start</i> it. Kinetic friction is also <b>lazy about speed</b> — whether you drag the box at 1 m/s or 3 m/s, the drag feels about the same.
        </Callout>
      </Section>

      <Section title="2️⃣ The law of kinetic friction">
        <FBlock>{`f_k = \\mu_k\\,N`}</FBlock>
        <p className="text-sm leading-relaxed">
          Unlike static friction, kinetic friction has a <i>fixed</i> magnitude the moment the body is sliding. The coefficient <F>\mu_k</F> (kinetic coefficient) is always less than <F>\mu_s</F> for the same surface pair, which is why a pushed block often "jumps" forward once it breaks free.
        </p>
        <Callout kind="formula">
          Direction: <b>always opposite to the relative velocity</b> of the sliding surface.
        </Callout>
      </Section>

      <Section title="3️⃣ Key properties">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Independent of sliding speed</p>
          <p className="text-sm">At ordinary speeds, <F>\mu_k</F> is essentially constant. The drag is the same at 1 m/s and 10 m/s (to a very good approximation).</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Independent of contact area</p>
          <p className="text-sm">Same as static friction — only the normal and surface pair matter.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">μ<sub>k</sub> &lt; μ<sub>s</sub></p>
          <p className="text-sm">Breaking micro-welds is harder than keeping them broken. That's why the block suddenly accelerates the instant it starts moving.</p>
        </div>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Stopping distance</p>
          <p className="text-sm">A 4 kg block is sliding at 6 m/s on a rough floor (<F>\mu_k = 0.2</F>). How far does it travel before stopping? (g = 10 m/s²)</p>
          <FBlock>{`a = \\mu_k g = 0.2 \\times 10 = 2\\,\\text{m/s}^2\\ (\\text{deceleration})`}</FBlock>
          <FBlock>{`s = \\frac{u^2}{2a} = \\frac{36}{4} = 9\\,\\text{m}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Constant-velocity drag</p>
          <p className="text-sm">A 10 kg crate is pulled along a floor at constant speed by a horizontal force of 30 N. What is <F>\mu_k</F>? (g = 10 m/s²)</p>
          <FBlock>{`\\text{constant speed} \\Rightarrow F = f_k = \\mu_k m g`}</FBlock>
          <FBlock>{`\\mu_k = \\frac{30}{10 \\times 10} = 0.3`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Block sliding down an incline</p>
          <p className="text-sm">A 2 kg block slides down a rough incline of <F>30°</F> with <F>\mu_k = 0.2</F>. Find its acceleration. (g = 10 m/s²)</p>
          <FBlock>{`a = g(\\sin\\theta - \\mu_k\\cos\\theta) = 10(0.5 - 0.2 \\times 0.866) \\approx 3.27\\,\\text{m/s}^2`}</FBlock>
          <p className="text-sm">On a smooth incline it would have been 5 m/s² — friction eats roughly 1.7 m/s² of the acceleration.</p>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using <F>\mu_s</F> in place of <F>\mu_k</F> once the block is sliding.</li>
            <li>Drawing kinetic friction in the direction of motion — it always opposes it.</li>
            <li>Forgetting that on an incline, <F>N = m g \cos\theta</F>, not <F>m g</F>.</li>
            <li>Mixing up deceleration (<F>\mu_k g</F>) with friction force (<F>\mu_k m g</F>) in energy problems.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — push past the breaking point">
        <FrictionSliderSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="friction.kinetic" />
        <div className="mt-4">
          <MCQQuiz topicId="friction.kinetic" title="Kinetic Friction MCQs" questions={kineticFrictionMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
