import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import PrismSim from '../../../components/sims/PrismSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { thinPrismMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function ThinPrism() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Thin Prism"
      subtitle="Small-angle prisms — where the deviation formula collapses to one clean line."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A thin prism is a prism with a tiny refracting angle — barely a wedge. The maths of the full prism is messy, but shrink <F>A</F> and everything simplifies: the deviation no longer cares how you aim the ray. One formula, <F>\delta = (n-1)A</F>, handles it all. Thin prisms are the workhorses of <b>dispersion</b> — splitting white light into colours.
        </Callout>
      </Section>

      <Section title="2️⃣ Deviation by a thin prism">
        <FBlock>{`\\delta = (n - 1)\\,A`}</FBlock>
        <p className="text-sm leading-relaxed">
          For a small refracting angle <F>A</F>, the deviation depends only on the material's index and the prism angle — it is <b>independent of the angle of incidence</b>. Every small-angle ray is deviated by the same amount.
        </p>
      </Section>

      <Section title="3️⃣ Dispersion — colours split">
        <p className="text-sm leading-relaxed">
          Because <F>n</F> is larger for violet than for red, each colour is deviated differently. The spread between the extreme colours is the <b>angular dispersion</b>:
        </p>
        <FBlock>{`\\theta = \\delta_v - \\delta_r = (n_v - n_r)\\,A`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>n_v</F> and <F>n_r</F> are the indices for violet and red light.
        </p>
      </Section>

      <Section title="4️⃣ Dispersive power">
        <p className="text-sm leading-relaxed">
          The <b>dispersive power</b> <F>\omega</F> compares the colour spread to the mean deviation (for mean/yellow light, index <F>n_y</F>):
        </p>
        <FBlock>{`\\omega = \\frac{\\delta_v - \\delta_r}{\\delta_y} = \\frac{n_v - n_r}{n_y - 1}`}</FBlock>
        <Callout kind="formula">
          Dispersive power depends only on the <b>material</b> — the prism angle <F>A</F> cancels out completely.
        </Callout>
      </Section>

      <Section title="5️⃣ Combining two thin prisms">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Dispersion without deviation</p>
          <p className="text-sm">Two prisms are placed in opposition so the mean-colour deviations cancel: <F>(n_y - 1)A = (n_y' - 1)A'</F>. White light is split into colours but the central (yellow) ray goes straight — a direct-vision spectroscope.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Deviation without dispersion (achromatic)</p>
          <p className="text-sm">The prisms are chosen so the net angular dispersion is zero — the beam is deviated but its colours stay together. This is how achromatic prisms and lenses fight chromatic aberration.</p>
        </div>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Deviation of a thin prism</p>
          <p className="text-sm">A thin prism of angle <F>5°</F> is made of glass with <F>n = 1.5</F>. Find the deviation.</p>
          <FBlock>{`\\delta = (n-1)A = (1.5 - 1)\\times5° = 2.5°`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Dispersive power</p>
          <p className="text-sm">For a glass, <F>n_v = 1.532</F>, <F>n_r = 1.514</F>, <F>n_y = 1.522</F>. Find <F>\omega</F>.</p>
          <FBlock>{`\\omega = \\frac{n_v - n_r}{n_y - 1} = \\frac{0.018}{0.522} \\approx 0.0345`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Dispersion without deviation</p>
          <p className="text-sm">A crown prism (<F>n_y = 1.5</F>, <F>A = 6°</F>) is combined with a flint prism (<F>n_y' = 1.75</F>). Find the flint prism's angle for zero net deviation.</p>
          <FBlock>{`(1.5-1)\\times6° = (1.75-1)\\times A' \\Rightarrow A' = \\frac{3°}{0.75} = 4°`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using <F>\delta = (n-1)A</F> for a thick prism — it holds only for small <F>A</F>.</li>
            <li>Thinking a thin prism's deviation depends on the angle of incidence — it does not.</li>
            <li>Putting the prism angle into the dispersive-power formula — <F>\omega</F> depends only on the material.</li>
            <li>Swapping the two combinations: <i>dispersion without deviation</i> cancels deviation; <i>achromatic</i> cancels dispersion.</li>
            <li>Forgetting that <F>n_v &gt; n_r</F>, so violet always deviates more than red.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — shrink the prism angle">
        <PrismSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.thin-prism" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.thin-prism" title="Thin Prism MCQs" questions={thinPrismMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
