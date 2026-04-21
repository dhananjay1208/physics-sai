import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import InclineFrictionSim from '../../../components/sims/InclineFrictionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { applicationsMCQs } from '../../../data/friction/concept-mcqs.js'

export default function ApplicationsOfFriction() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="Applications of Friction"
      subtitle="Walking, braking, circular motion, and stacked blocks — where friction is the hero, not the villain."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Without friction, the world would be a theme park of sliding disasters. You couldn't walk, cars couldn't turn, you couldn't hold a pen. Every "grip" in your day — shoelaces, door handles, ladder against wall — is a friction machine. These applications all reduce to the same two laws: <F>f_s \leq \mu_s N</F> and <F>f_k = \mu_k N</F>.
        </Callout>
      </Section>

      <Section title="2️⃣ Walking — friction on the rear foot">
        <p className="text-sm leading-relaxed">
          Your back foot pushes the ground <i>backward</i>. By Newton's third law, the ground pushes your foot <i>forward</i> — and that's static friction (your foot doesn't slip). On ice, where <F>\mu_s</F> is tiny, the ground can't push you forward enough and you slip.
        </p>
        <Callout kind="tip">
          Walking = static friction. Sliding on ice = kinetic friction. Running = alternating large static pushes.
        </Callout>
      </Section>

      <Section title="3️⃣ Car braking">
        <p className="text-sm leading-relaxed">
          For a car of mass <F>m</F> braking on a level road with coefficient <F>\mu_k</F> (wheels locked) or <F>\mu_s</F> (ABS — tyres don't skid), the stopping distance from speed <F>u</F> is:
        </p>
        <FBlock>{`s = \\frac{u^2}{2\\mu g}`}</FBlock>
        <p className="text-sm leading-relaxed">
          ABS deliberately keeps wheels just below skidding so the stronger <F>\mu_s</F> is active — shorter stopping distance.
        </p>
      </Section>

      <Section title="4️⃣ Circular motion — friction supplies centripetal force">
        <p className="text-sm leading-relaxed">
          A car on a level circular road of radius <F>r</F> relies on <i>static</i> friction for centripetal force:
        </p>
        <FBlock>{`\\mu_s m g \\geq \\frac{m v^2}{r} \\Rightarrow v_{max} = \\sqrt{\\mu_s g r}`}</FBlock>
        <p className="text-sm leading-relaxed">
          On a <b>banked</b> road (angle <F>\theta</F>), the normal reaction itself has a horizontal component. With friction as well:
        </p>
        <FBlock>{`v_{max} = \\sqrt{\\frac{g r(\\tan\\theta + \\mu_s)}{1 - \\mu_s\\tan\\theta}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          If <F>\mu_s = 0</F>, the "design speed" is <F>v = \sqrt{'{g r \\tan\\theta}'}</F> — the speed at which <i>no friction is needed at all</i>.
        </p>
      </Section>

      <Section title={`5️⃣ Stacked blocks and "moving together"`}>
        <p className="text-sm leading-relaxed">
          Block A on top of block B on a smooth floor, friction <F>\mu</F> between A and B. A horizontal force <F>F</F> is applied to B. For both to accelerate together, the required friction on A must not exceed <F>\mu m_A g</F>:
        </p>
        <FBlock>{`a_{common} = \\frac{F}{m_A + m_B} \\leq \\mu g`}</FBlock>
        <FBlock>{`F_{max} = \\mu g (m_A + m_B)`}</FBlock>
        <p className="text-sm leading-relaxed">
          Push harder than <F>F_{'{max}'}</F> and A slips on B — the system breaks into two different accelerations.
        </p>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Maximum cornering speed</p>
          <p className="text-sm">A car takes a level curve of radius 50 m with <F>\mu_s = 0.4</F>. Max safe speed? (g = 10 m/s²)</p>
          <FBlock>{`v_{max} = \\sqrt{0.4 \\times 10 \\times 50} = \\sqrt{200} \\approx 14.1\\,\\text{m/s}\\ (\\approx 51\\,\\text{km/h})`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Stacked blocks</p>
          <p className="text-sm">A 2 kg block on a 6 kg block, smooth floor, <F>\mu_s = 0.5</F> between blocks. What maximum horizontal force on the lower block keeps them moving together? (g = 10 m/s²)</p>
          <FBlock>{`F_{max} = \\mu_s g (m_A + m_B) = 0.5 \\times 10 \\times 8 = 40\\,\\text{N}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Rough incline energy loss</p>
          <p className="text-sm">A 1 kg block slides from rest down a 2 m rough incline of 30° with <F>\mu_k = 0.2</F>. Find speed at the bottom. (g = 10 m/s²)</p>
          <FBlock>{`a = g(\\sin 30° - \\mu_k\\cos 30°) = 10(0.5 - 0.173) = 3.27\\,\\text{m/s}^2`}</FBlock>
          <FBlock>{`v = \\sqrt{2 a L} = \\sqrt{2 \\times 3.27 \\times 2} \\approx 3.62\\,\\text{m/s}`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Rolling vs sliding">
        <Callout kind="tip">
          Rolling friction is <b>much</b> smaller than sliding friction — typically <F>\mu_r \sim 0.001</F> vs <F>\mu_k \sim 0.3</F>. That's why wheels and ball-bearings exist. At NEET level we treat rolling friction as negligible unless a problem explicitly gives <F>\mu_r</F>.
        </Callout>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Writing <F>v_{'{max}'} = \mu_s g r</F> (missing the square root).</li>
            <li>Using <F>\mu_k</F> for the banked-road design speed formula — it doesn't appear when <F>\mu = 0</F>.</li>
            <li>In stacked-blocks problems, forgetting that the friction between the blocks <i>is</i> what accelerates the upper block — it can't exceed <F>\mu_s m_A g</F>.</li>
            <li>Treating friction as the <i>cause</i> of circular motion rather than what <i>supplies</i> the centripetal force (the centripetal direction is the <i>effect</i>).</li>
            <li>Assuming ABS stops cars faster because kinetic friction is larger. It's the opposite — ABS keeps tyres in the static regime where <F>{`\\mu_s > \\mu_k`}</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — rough incline slide">
        <InclineFrictionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="friction.applications" />
        <div className="mt-4">
          <MCQQuiz topicId="friction.applications" title="Applications MCQs" questions={applicationsMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
