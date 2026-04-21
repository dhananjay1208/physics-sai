import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import FrictionSliderSim from '../../../components/sims/FrictionSliderSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { staticFrictionMCQs } from '../../../data/friction/concept-mcqs.js'

export default function StaticFriction() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="Static Friction"
      subtitle="The silent, self-adjusting force that stops a pushed object from moving — until you push just a bit harder."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Static friction is like a <b>lazy bouncer</b>. If no one pushes on the door, he stands still and does nothing. A gentle shove — he pushes back with exactly the same force. Shove harder — he pushes harder. But he has a limit: push past <F>\mu_s N</F> and he lets go. Up to that limit, static friction <i>matches whatever you apply</i>. That's why a book sitting on a table has zero friction until you try to slide it.
        </Callout>
      </Section>

      <Section title="2️⃣ The law of static friction">
        <p className="text-sm leading-relaxed">
          As long as the body is not sliding, static friction <F>f_s</F> equals the net tangential force trying to move it, up to a maximum value:
        </p>
        <FBlock>{`f_s \\leq \\mu_s\\,N`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>N</F> is the normal reaction and <F>\mu_s</F> is the <b>coefficient of static friction</b> — a dimensionless number that depends only on the pair of surfaces (rubber on concrete ≈ 1.0, steel on ice ≈ 0.03).
        </p>
        <Callout kind="formula">
          Maximum (limiting) static friction: <F>f_s^{'{max}'} = \mu_s N</F>.
        </Callout>
      </Section>

      <Section title="3️⃣ Key properties">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Independent of contact area</p>
          <p className="text-sm">A brick on its flat side and on its narrow edge need the <i>same</i> force to start sliding. Intuition: smaller area → more pressure per bump → same total grip.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Self-adjusting</p>
          <p className="text-sm">Friction takes whatever value is needed to keep the body at rest — right up to its maximum. It does <b>not</b> blindly equal <F>\mu_s N</F>.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">μ_s depends on the surface pair</p>
          <p className="text-sm">Not on mass, not on normal force, not on area. Just on the two surfaces in contact.</p>
        </div>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Book on a table</p>
          <p className="text-sm">A 2 kg book rests on a table. <F>\mu_s = 0.4</F>. You push horizontally with 5 N. What is the friction force? (g = 10 m/s²)</p>
          <FBlock>{`f_s^{max} = \\mu_s N = 0.4 \\times 20 = 8\\,\\text{N}`}</FBlock>
          <p className="text-sm">Since 5 N &lt; 8 N, the book doesn't move. Static friction self-adjusts to 5 N, exactly cancelling your push.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Minimum force to just start motion</p>
          <p className="text-sm">Same book, same <F>\mu_s</F>. What's the minimum horizontal force to make it start sliding?</p>
          <FBlock>{`F_{min} = \\mu_s m g = 0.4 \\times 2 \\times 10 = 8\\,\\text{N}`}</FBlock>
          <p className="text-sm">Push with any force above 8 N — the block breaks loose and kinetic friction takes over.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Angled pull</p>
          <p className="text-sm">A 3 kg crate on a floor (<F>\mu_s = 0.5</F>). You pull it with a rope at <F>30°</F> above horizontal. What's the minimum rope tension for it to start moving?</p>
          <FBlock>{`T\\cos 30° = \\mu_s (m g - T\\sin 30°)`}</FBlock>
          <FBlock>{`T = \\frac{\\mu_s m g}{\\cos 30° + \\mu_s\\sin 30°} = \\frac{0.5 \\times 30}{0.866 + 0.25} = 13.4\\,\\text{N}`}</FBlock>
          <p className="text-sm">Note: pulling at an angle <i>reduces</i> the normal, making friction easier to beat.</p>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Writing <F>f_s = \mu_s N</F> when the block is stationary. That's only the <i>maximum</i>. Actual <F>f_s</F> equals the opposing applied force.</li>
            <li>Assuming friction increases with area of contact. It doesn't — only normal force and surface type matter.</li>
            <li>Using <F>N = m g</F> when a force has a vertical component. Write vertical equilibrium first.</li>
            <li>Confusing <F>\mu_s</F> (the max coefficient) with the <i>actual</i> friction experienced below the limit.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — watch friction self-adjust">
        <FrictionSliderSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="friction.static" />
        <div className="mt-4">
          <MCQQuiz topicId="friction.static" title="Static Friction MCQs" questions={staticFrictionMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
