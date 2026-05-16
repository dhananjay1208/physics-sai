import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import TIRSim from '../../../components/sims/TIRSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { tirMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function TotalInternalReflection() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Total Internal Reflection"
      subtitle="When light hits a boundary so steeply that none of it can escape."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Imagine trying to leave a crowded room through a doorway. Walk up gently and you slip out. Approach at too sharp an angle and the doorframe blocks you — you bounce back inside. Light leaving a denser medium behaves the same way: beyond a certain "critical" angle the boundary refuses to let it out, and <b>100%</b> of the light is reflected back in.
        </Callout>
      </Section>

      <Section title="2️⃣ The critical angle">
        <p className="text-sm leading-relaxed">
          As a ray goes from a denser to a rarer medium it bends <i>away</i> from the normal. Increase the incidence angle and the refracted ray tilts further until, at the <b>critical angle</b> <F>C</F>, it grazes along the surface (<F>\theta_2 = 90°</F>):
        </p>
        <FBlock>{`n\\sin C = 1\\times\\sin90° \\;\\Rightarrow\\; \\sin C = \\frac{1}{n}`}</FBlock>
        <p className="text-sm leading-relaxed">
          More generally, for a denser→rarer pair: <F>{`\\sin C = n_{\\text{rarer}}/n_{\\text{denser}}`}</F>.
        </p>
      </Section>

      <Section title="3️⃣ The two conditions for TIR">
        <Callout kind="formula">
          Total internal reflection happens only when <b>both</b> hold:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Light travels from a <b>denser</b> medium towards a <b>rarer</b> one.</li>
            <li>The angle of incidence <b>exceeds</b> the critical angle: <F>i &gt; C</F>.</li>
          </ul>
        </Callout>
        <p className="text-sm leading-relaxed">
          At <F>i &gt; C</F> there is no refracted ray at all — unlike ordinary reflection, <i>no</i> light is lost to refraction, which is why TIR gives perfectly bright reflections.
        </p>
      </Section>

      <Section title="4️⃣ Index ↔ critical angle">
        <p className="text-sm leading-relaxed">
          A larger index means a smaller critical angle (light is trapped more easily):
        </p>
        <div className="card p-4 bg-slate-50 border-slate-200">
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Water, <F>n = 1.33</F> → <F>C \approx 48.6°</F></li>
            <li>Crown glass, <F>n = 1.5</F> → <F>C \approx 41.8°</F></li>
            <li>Diamond, <F>n = 2.42</F> → <F>C \approx 24.4°</F></li>
          </ul>
        </div>
      </Section>

      <Section title="5️⃣ Applications">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><b>Optical fibres:</b> light bounces along the core by repeated TIR, carrying signals with almost no loss.</li>
          <li><b>Sparkling diamonds:</b> a tiny critical angle traps light inside, which exits in dazzling flashes.</li>
          <li><b>Mirage:</b> hot air near the ground is rarer; light from the sky curves and is internally reflected, mimicking a pool of water.</li>
          <li><b>Totally reflecting prisms</b> in binoculars and periscopes — a 45°–45°–90° prism reflects light through 90° or 180° with no silvering needed.</li>
        </ul>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Critical angle of glass</p>
          <p className="text-sm">Find the critical angle for glass of index 1.5.</p>
          <FBlock>{`\\sin C = \\frac{1}{1.5} = 0.667 \\Rightarrow C = \\sin^{-1}(0.667) \\approx 41.8°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Will it TIR?</p>
          <p className="text-sm">A ray inside glass (<F>C = 42°</F>) hits the glass–air surface at 48°. What happens?</p>
          <p className="text-sm">Since <F>48° &gt; 42°</F>, the ray is totally internally reflected — no light escapes into air.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Index from critical angle</p>
          <p className="text-sm">A medium has a critical angle of 30°. Find its refractive index.</p>
          <FBlock>{`n = \\frac{1}{\\sin C} = \\frac{1}{\\sin30°} = \\frac{1}{0.5} = 2.0`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Expecting TIR when light goes from a rarer to a denser medium — it can only happen the other way.</li>
            <li>Writing <F>\sin C = n</F> instead of <F>\sin C = 1/n</F>.</li>
            <li>Thinking some light still refracts out beyond <F>C</F> — beyond the critical angle <b>all</b> of it reflects.</li>
            <li>Confusing TIR with ordinary reflection — TIR loses no energy to refraction, so it is far brighter.</li>
            <li>Forgetting that exactly at <F>i = C</F> the refracted ray grazes the surface (<F>r = 90°</F>); TIR is for <F>i &gt; C</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — cross the critical angle">
        <TIRSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.tir" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.tir" title="Total Internal Reflection MCQs" questions={tirMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
