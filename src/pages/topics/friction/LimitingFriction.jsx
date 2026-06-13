import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import InclineFrictionSim from '../../../components/sims/InclineFrictionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { limitingFrictionMCQs } from '../../../data/friction/concept-mcqs.js'

export default function LimitingFriction() {
  return (
    <TopicPage
      chapterTo="/friction"
      chapterTitle="Friction in Solids"
      title="Limiting Friction"
      subtitle="The exact instant of slipping — where angle of friction equals angle of repose."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Tilt a tray slowly with a coin on it. Nothing happens for a while — then, at one particular angle, the coin suddenly slides. That critical tilt is the <b>angle of repose</b>, and at that instant, static friction is at its maximum. This is the single moment where equality, not inequality, holds: <F>f_s = \mu_s N</F>.
        </Callout>
      </Section>

      <Section title="2️⃣ Angle of friction">
        <p className="text-sm leading-relaxed">
          When a body is on the verge of slipping, the total contact force on it is the vector sum of the normal <F>N</F> and the limiting friction <F>\mu_s N</F>. The angle this resultant makes with the normal is the <b>angle of friction</b> <F>\phi</F>:
        </p>
        <FBlock>{`\\tan\\phi = \\frac{\\mu_s N}{N} = \\mu_s`}</FBlock>
      </Section>

      <Section title="3️⃣ Angle of repose">
        <p className="text-sm leading-relaxed">
          Place a block on a plane and tilt it gradually. At a critical angle <F>\theta_r</F>, gravity's slope component just beats the maximum static friction:
        </p>
        <FBlock>{`m g \\sin\\theta_r = \\mu_s\\,m g \\cos\\theta_r \\quad\\Rightarrow\\quad \\tan\\theta_r = \\mu_s`}</FBlock>
        <Callout kind="tip">
          Angle of friction = Angle of repose. Both satisfy <F>{`\\tan(\\text{angle}) = \\mu_s`}</F>. NEET often asks about one but gives you the other — they're numerically identical for the same surface pair.
        </Callout>
      </Section>

      <Section title="4️⃣ Minimum force at the optimal angle">
        <p className="text-sm leading-relaxed">
          If you pull a block along a rough floor with force <F>F</F> at angle <F>\theta</F> above horizontal, the force needed to just start motion is:
        </p>
        <FBlock>{`F(\\theta) = \\frac{\\mu_s m g}{\\cos\\theta + \\mu_s \\sin\\theta}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Minimising this over <F>\theta</F> gives <F>\tan\theta = \mu_s = \tan\phi</F>. So the <b>best angle to pull at is the angle of friction</b> — and the minimum force is:
        </p>
        <FBlock>{`F_{min} = \\frac{\\mu_s\\,m g}{\\sqrt{1 + \\mu_s^2}} = m g \\sin\\phi`}</FBlock>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Coefficient from angle of repose</p>
          <p className="text-sm">A block just begins to slide when the incline angle reaches <F>30°</F>. Find <F>\mu_s</F>.</p>
          <FBlock>{`\\mu_s = \\tan 30° = \\frac{1}{\\sqrt{3}} \\approx 0.577`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Angle of friction from μ</p>
          <p className="text-sm">If <F>\mu_s = \sqrt{'{3}'}</F>, find the angle of friction.</p>
          <FBlock>{`\\phi = \\tan^{-1}(\\sqrt{3}) = 60°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Optimal pull angle</p>
          <p className="text-sm">A 10 kg box (<F>\mu_s = 0.25</F>) is dragged by a rope. At what angle should the rope make with the horizontal for minimum tension? What is that minimum? (g = 10 m/s²)</p>
          <FBlock>{`\\theta_{opt} = \\tan^{-1}(0.25) \\approx 14°`}</FBlock>
          <FBlock>{`T_{min} = \\frac{\\mu_s m g}{\\sqrt{1 + \\mu_s^2}} = \\frac{25}{\\sqrt{1.0625}} \\approx 24.25\\,\\text{N}`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Writing <F>\sin\theta_r = \mu_s</F> instead of <F>\tan\theta_r = \mu_s</F>. Always tangent.</li>
            <li>Treating angle of friction and angle of repose as different things — they're numerically equal.</li>
            <li>Using the minimum-force formula for <i>any</i> direction of pull. It only applies at the optimal angle <F>\tan\theta = \mu_s</F>.</li>
            <li>Forgetting that on the incline, the component of gravity along the slope is <F>m g \sin\theta</F> (uphill-downhill), and the normal is <F>m g \cos\theta</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — find the angle of repose">
        <InclineFrictionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="friction.limiting" />
        <div className="mt-4">
          <MCQQuiz topicId="friction.limiting" title="Limiting Friction MCQs" questions={limitingFrictionMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
