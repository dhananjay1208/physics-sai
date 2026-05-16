import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import RefractionSim from '../../../components/sims/RefractionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { refractionMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function RefractionOfLight() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Refraction of Light"
      subtitle="Why a ray of light bends when it crosses from one transparent medium into another."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Picture a marching band walking from a paved road onto muddy grass at an angle. The musicians who hit the mud first slow down while the rest are still on the road — so the whole line <b>pivots</b>. Light does exactly this: when it enters a slower medium, the part of the wavefront that arrives first slows first, and the ray swings towards the normal. Refraction is just light changing speed at a boundary.
        </Callout>
      </Section>

      <Section title="2️⃣ What refraction is">
        <p className="text-sm leading-relaxed">
          <b>Refraction</b> is the bending of light as it passes from one medium to another because its <i>speed</i> changes. The ray, the normal at the point of incidence, and the refracted ray all lie in the same plane.
        </p>
        <Callout kind="formula">
          Rarer → denser: ray bends <b>towards</b> the normal. Denser → rarer: ray bends <b>away</b> from the normal. Along the normal (<F>i = 0</F>): no bending.
        </Callout>
      </Section>

      <Section title="3️⃣ What changes and what doesn't">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Speed — changes</p>
          <p className="text-sm">Light slows down in an optically denser medium (<F>v = c/n</F>).</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Wavelength — changes</p>
          <p className="text-sm">Since <F>v = f\lambda</F> and speed drops, wavelength shrinks by the same factor: <F>\lambda' = \lambda/n</F>.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Frequency — does NOT change</p>
          <p className="text-sm">Frequency is fixed by the source. This is the single most-tested fact about refraction.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Direction — changes (unless <F>i = 0</F>)</p>
          <p className="text-sm">The ray bends towards or away from the normal depending on the media.</p>
        </div>
      </Section>

      <Section title="4️⃣ Everyday refraction">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><b>A straw in a glass of water</b> looks bent at the surface.</li>
          <li><b>A swimming pool</b> looks shallower than it really is.</li>
          <li><b>Stars twinkle</b> — starlight is refracted continuously by moving layers of atmosphere.</li>
          <li><b>The Sun is seen before sunrise and after sunset</b> — atmospheric refraction lifts its image.</li>
          <li><b>A mirage</b> on a hot road — light curves through air layers of different density.</li>
        </ul>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Wavelength in glass</p>
          <p className="text-sm">Yellow light of wavelength 600 nm in air enters glass of refractive index 1.5. Find its wavelength and speed in glass.</p>
          <FBlock>{`\\lambda' = \\frac{\\lambda}{n} = \\frac{600}{1.5} = 400\\ \\text{nm}`}</FBlock>
          <FBlock>{`v = \\frac{c}{n} = \\frac{3\\times10^8}{1.5} = 2\\times10^8\\ \\text{m/s}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Frequency check</p>
          <p className="text-sm">Does the colour of light change when it enters water? </p>
          <p className="text-sm">No — colour is set by frequency, and frequency does not change in refraction. Only speed and wavelength change.</p>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Thinking frequency changes during refraction — it never does.</li>
            <li>Saying light bends towards the normal entering <i>any</i> new medium — only when entering a <b>denser</b> one.</li>
            <li>Forgetting that at normal incidence (<F>i = 0</F>) the ray passes straight through, though it still slows down.</li>
            <li>Confusing "optically denser" with "more mass-dense" — they are not the same thing.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — bend a ray at an interface">
        <RefractionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.refraction" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.refraction" title="Refraction of Light MCQs" questions={refractionMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
