import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { fbdMCQs } from '../../../data/friction/concept-mcqs.js'

export default function FreeBodyDiagrams() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="Free Body Diagrams"
      subtitle="A recipe for drawing every force on every object — and resolving them without panic."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A free-body diagram (FBD) is like a <b>selfie with arrows</b>. You isolate one body, pretend nothing else in the problem matters, and draw every force that touches it — gravity, contact forces from surfaces, tensions, applied pushes. No "internal" forces, no abstractions. Just what acts <i>on this one body</i>. Get the FBD right and Newton's laws practically solve themselves.
        </Callout>
      </Section>

      <Section title="2️⃣ The 5-step recipe">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Step 1 — Isolate one body</p>
          <p className="text-sm">Redraw the body alone as a box or dot. Erase everything else (walls, strings, other blocks) — their effects appear only as forces.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Step 2 — Weight, always</p>
          <p className="text-sm">Draw <F>W = m g</F> pointing vertically down from the centre of mass. Always.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Step 3 — Normal reaction, perpendicular to contact surface</p>
          <p className="text-sm">For a body on a horizontal floor, <F>N</F> is straight up. On an incline, <F>N</F> is perpendicular to the incline, <i>not</i> vertical. Every rigid surface contact gives one normal.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Step 4 — Friction, along the surface, opposing relative motion (or tendency)</p>
          <p className="text-sm">Friction is <i>parallel</i> to the contact surface. If the body is about to slide right, friction points left. If it's in static equilibrium, friction points whichever way balances the other tangential forces.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Step 5 — Applied forces, tensions, and resolve</p>
          <p className="text-sm">Add any pulls, pushes, or string tensions. Then choose axes (for inclines, pick axes along and perpendicular to the slope), resolve every force, and write <F>\Sigma F = m a</F> for each axis.</p>
        </div>
      </Section>

      <Section title="3️⃣ The classic inclined-plane FBD">
        <p className="text-sm leading-relaxed">
          A block of mass <F>m</F> on a rough incline of angle <F>\theta</F>, at rest or moving along the slope. Rotate your axes so x is along the slope, y perpendicular to it.
        </p>
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm">Force components</p>
          <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
            <li>Weight along slope (down): <F>m g \sin\theta</F></li>
            <li>Weight perpendicular to slope (into incline): <F>m g \cos\theta</F></li>
            <li>Normal: <F>N = m g \cos\theta</F> (from perpendicular equilibrium)</li>
            <li>Friction along slope: <F>f</F>, directed opposite to (tendency of) motion</li>
          </ul>
        </div>
        <FBlock>{`\\text{Along slope:}\\quad m a = m g \\sin\\theta - f`}</FBlock>
        <FBlock>{`\\text{Perp. to slope:}\\quad 0 = N - m g \\cos\\theta`}</FBlock>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Block pulled at an angle</p>
          <p className="text-sm">A 5 kg block on a rough floor (<F>\mu_s = 0.3</F>) is pulled by a rope at <F>30°</F> above horizontal with 20 N. Is it moving? (g = 10 m/s²)</p>
          <FBlock>{`N = m g - T\\sin 30° = 50 - 10 = 40\\,\\text{N}`}</FBlock>
          <FBlock>{`f_s^{max} = \\mu_s N = 0.3 \\times 40 = 12\\,\\text{N}`}</FBlock>
          <FBlock>{`T\\cos 30° = 20 \\times 0.866 \\approx 17.3\\,\\text{N} > 12\\,\\text{N}`}</FBlock>
          <p className="text-sm">Horizontal pull beats the max static friction — block moves.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Block sliding down a rough incline</p>
          <p className="text-sm">A 2 kg block on a rough 45° incline, <F>\mu_k = 0.2</F>. Find the acceleration down the slope. (g = 10 m/s²)</p>
          <FBlock>{`a = g(\\sin 45° - \\mu_k \\cos 45°) = 10(0.707 - 0.141) \\approx 5.66\\,\\text{m/s}^2`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Stacked blocks</p>
          <p className="text-sm">Block A (2 kg) sits on block B (3 kg), which rests on a smooth floor. You push B horizontally with 20 N. Coefficient between A and B is <F>\mu_s = 0.4</F>. Do they move together?</p>
          <FBlock>{`a_{common} = \\frac{F}{m_A + m_B} = \\frac{20}{5} = 4\\,\\text{m/s}^2`}</FBlock>
          <FBlock>{`a_{max} \\text{ of A via friction} = \\mu_s g = 4\\,\\text{m/s}^2`}</FBlock>
          <p className="text-sm">Required = maximum. They just barely move together. Any larger push and A slips on B.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 4 — Connected via pulley</p>
          <p className="text-sm">A 2 kg block on a smooth table is connected over a pulley to a 1 kg hanging block. Find the acceleration. (g = 10 m/s²)</p>
          <FBlock>{`a = \\frac{m_2 g}{m_1 + m_2} = \\frac{10}{3} \\approx 3.33\\,\\text{m/s}^2`}</FBlock>
          <p className="text-sm">Two FBDs: the horizontal block sees tension right and friction (zero here) left; the hanging block sees gravity down and tension up.</p>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Including "internal" forces (inside the body itself) in the FBD — only forces from <i>outside</i> count.</li>
            <li>Drawing normal straight up on an incline — it's perpendicular to the <i>incline</i>, not to the ground.</li>
            <li>Using <F>N = m g</F> when a force has a vertical component. Re-derive <F>N</F> from vertical equilibrium every time.</li>
            <li>Drawing friction along gravity, or perpendicular to it, or in random directions. Friction is parallel to the contact surface, opposing relative motion/tendency.</li>
            <li>Forgetting that stacked blocks exert both normal <i>and</i> friction on each other.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="friction.fbd" />
        <div className="mt-4">
          <MCQQuiz topicId="friction.fbd" title="FBD MCQs" questions={fbdMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
