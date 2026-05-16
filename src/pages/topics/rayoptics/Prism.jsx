import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import PrismSim from '../../../components/sims/PrismSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { prismMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function Prism() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Prism"
      subtitle="Two refractions, one triangular block — and the deviation that bends light off course."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A prism is a <b>double doorway</b> for light. The ray refracts once going in and once coming out, and because the two faces are tilted, the bends add up rather than cancel — the ray leaves deflected by the <b>angle of deviation</b> <F>\delta</F>. Tilt the entry just right and the deviation hits a minimum; that sweet spot lets you measure the prism's refractive index.
        </Callout>
      </Section>

      <Section title="2️⃣ The prism relations">
        <p className="text-sm leading-relaxed">
          With angle of incidence <F>i</F>, emergence <F>e</F>, the two internal refraction angles <F>r_1, r_2</F>, prism angle <F>A</F> and deviation <F>\delta</F>:
        </p>
        <FBlock>{`r_1 + r_2 = A`}</FBlock>
        <FBlock>{`i + e = A + \\delta`}</FBlock>
        <p className="text-sm leading-relaxed">
          The deviation is how far the emergent ray has been turned from the original incident direction.
        </p>
      </Section>

      <Section title="3️⃣ The deviation curve and minimum deviation">
        <p className="text-sm leading-relaxed">
          As <F>i</F> increases from small values, <F>\delta</F> first falls, reaches a lowest value <F>\delta_m</F>, then rises again — a U-shaped curve. Any deviation above <F>\delta_m</F> can be produced by <b>two</b> different angles of incidence (the path is reversible, so <F>i</F> and <F>e</F> just swap).
        </p>
        <Callout kind="formula">
          At minimum deviation the ray passes <b>symmetrically</b>: <F>i = e</F> and <F>r_1 = r_2 = A/2</F>. Inside an equilateral prism the ray then runs parallel to the base.
        </Callout>
      </Section>

      <Section title="4️⃣ The prism formula">
        <p className="text-sm leading-relaxed">
          At minimum deviation the refractive index of the prism is:
        </p>
        <FBlock>{`n = \\frac{\\sin\\!\\left(\\dfrac{A + \\delta_m}{2}\\right)}{\\sin\\!\\left(\\dfrac{A}{2}\\right)}`}</FBlock>
        <p className="text-sm leading-relaxed">
          This is the standard laboratory method for finding <F>n</F>: measure <F>A</F> and <F>\delta_m</F>, then compute.
        </p>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Index from minimum deviation</p>
          <p className="text-sm">An equilateral prism (<F>A = 60°</F>) gives <F>\delta_m = 30°</F>. Find <F>n</F>.</p>
          <FBlock>{`n = \\frac{\\sin\\!\\left(\\frac{60°+30°}{2}\\right)}{\\sin\\!\\left(\\frac{60°}{2}\\right)} = \\frac{\\sin45°}{\\sin30°} = \\frac{0.707}{0.5} \\approx 1.414`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Deviation from i and e</p>
          <p className="text-sm">For a <F>60°</F> prism, a ray enters at <F>i = 50°</F> and emerges at <F>e = 40°</F>. Find <F>\delta</F>.</p>
          <FBlock>{`\\delta = i + e - A = 50° + 40° - 60° = 30°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Symmetric ray</p>
          <p className="text-sm">An equilateral prism (<F>n = 1.5</F>) is set at minimum deviation. Find the internal refraction angles and <F>\delta_m</F>.</p>
          <FBlock>{`r_1 = r_2 = A/2 = 30°,\\quad \\sin i = n\\sin r_1 = 1.5\\times0.5 = 0.75`}</FBlock>
          <FBlock>{`i = 48.6°,\\quad \\delta_m = 2i - A = 97.2° - 60° = 37.2°`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using the prism formula for any deviation — it holds <b>only</b> at minimum deviation.</li>
            <li>Forgetting <F>r_1 + r_2 = A</F>, the geometric backbone of every prism problem.</li>
            <li>Assuming a given deviation comes from a single <F>i</F> — above <F>\delta_m</F> there are two.</li>
            <li>Mixing up <F>A</F> (the prism's refracting angle) with the angle of incidence.</li>
            <li>Thinking minimum deviation means <F>i = 0</F> — it means <F>i = e</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — find minimum deviation">
        <PrismSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.prism" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.prism" title="Prism MCQs" questions={prismMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
