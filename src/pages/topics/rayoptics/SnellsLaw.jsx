import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import RefractionSim from '../../../components/sims/RefractionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { snellsLawMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function SnellsLaw() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Snell's Law"
      subtitle="The exact rule that fixes how much a ray bends at every interface."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Snell's law is a <b>conservation rule</b> for light crossing a boundary: the quantity <F>n\sin\theta</F> is the same on both sides. Think of it as a "toll" each ray must keep balanced — bend a lot in a high-<F>n</F> medium, bend a little in a low-<F>n</F> one, but <F>n\sin\theta</F> stays put.
        </Callout>
      </Section>

      <Section title="2️⃣ The law">
        <FBlock>{`n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>\theta_1</F> is the angle of incidence and <F>\theta_2</F> the angle of refraction, both measured <b>from the normal</b>. The ratio <F>\sin\theta_1/\sin\theta_2 = n_2/n_1 = n_{'{21}'}</F> is constant for a given pair of media.
        </p>
        <Callout kind="formula">
          Equivalent forms: <F>{`\\dfrac{\\sin\\theta_1}{\\sin\\theta_2} = \\dfrac{v_1}{v_2} = \\dfrac{\\lambda_1}{\\lambda_2} = n_{21}`}</F>.
        </Callout>
      </Section>

      <Section title="3️⃣ Reversibility of light">
        <p className="text-sm leading-relaxed">
          If a ray is reversed, it retraces its exact path. This means <F>n_{'{12}'} \times n_{'{21}'} = 1</F> — refraction is perfectly symmetric in both directions.
        </p>
      </Section>

      <Section title="4️⃣ Chained media and the glass slab">
        <p className="text-sm leading-relaxed">
          Across several parallel layers, <F>n\sin\theta</F> is conserved at <i>every</i> interface, so:
        </p>
        <FBlock>{`n_1\\sin\\theta_1 = n_2\\sin\\theta_2 = n_3\\sin\\theta_3 = \\dots`}</FBlock>
        <p className="text-sm leading-relaxed">
          The middle layers drop out — the final angle depends only on the first and last media. For a <b>parallel-sided slab</b> the emergent ray is therefore parallel to the incident ray, merely displaced sideways by the <b>lateral shift</b>:
        </p>
        <FBlock>{`d = \\frac{t\\,\\sin(i - r)}{\\cos r}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>t</F> is the slab thickness, <F>i</F> the incidence angle and <F>r</F> the refraction angle.
        </p>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Air into glass</p>
          <p className="text-sm">Light hits glass (<F>n = 1.5</F>) from air at <F>i = 30°</F>. Find the angle of refraction.</p>
          <FBlock>{`1\\times\\sin30° = 1.5\\times\\sin r \\Rightarrow \\sin r = \\frac{0.5}{1.5} = \\frac{1}{3}`}</FBlock>
          <FBlock>{`r = \\sin^{-1}(0.333) \\approx 19.5°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Into water</p>
          <p className="text-sm">A ray enters water (<F>n = 4/3</F>) from air at <F>i = 53°</F> (<F>\sin53° = 0.8</F>). Find <F>r</F>.</p>
          <FBlock>{`\\sin r = \\frac{1\\times0.8}{4/3} = 0.6 \\Rightarrow r = 37°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Lateral shift</p>
          <p className="text-sm">A 6 cm glass slab (<F>n = 1.5</F>) is hit at <F>i = 60°</F>. With <F>r = 35°</F>, the lateral shift is:</p>
          <FBlock>{`d = \\frac{6\\,\\sin(60° - 35°)}{\\cos35°} = \\frac{6\\times0.423}{0.819} \\approx 3.1\\ \\text{cm}`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Measuring angles from the <i>surface</i> instead of the <b>normal</b>.</li>
            <li>Using <F>\cos</F> or <F>\tan</F> in Snell's law — it is strictly <F>\sin</F>.</li>
            <li>Putting the indices on the wrong sides — pair each <F>n</F> with the angle <i>in its own medium</i>.</li>
            <li>Forgetting that a glass slab only shifts the ray sideways — it does not change its direction.</li>
            <li>Assuming the intermediate layer matters in chained media — only the first and last do.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — verify Snell's law">
        <RefractionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.snells-law" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.snells-law" title="Snell's Law MCQs" questions={snellsLawMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
