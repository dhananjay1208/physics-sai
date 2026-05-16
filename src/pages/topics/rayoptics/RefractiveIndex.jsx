import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import RefractionSim from '../../../components/sims/RefractionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { refractiveIndexMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function RefractiveIndex() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Refractive Index"
      subtitle="The single number that says how strongly a medium slows down — and bends — light."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Refractive index is a medium's <b>"speed tax"</b> on light. In vacuum light runs free at <F>c</F>. Glass charges a tax of 1.5 — light moves at only <F>c/1.5</F> inside. Diamond is a brutal 2.42. The bigger the tax, the more light slows, and the harder the ray bends at the doorway.
        </Callout>
      </Section>

      <Section title="2️⃣ Absolute refractive index">
        <FBlock>{`n = \\frac{c}{v}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>c</F> is the speed of light in vacuum and <F>v</F> its speed in the medium. Since nothing outruns light in vacuum, <F>v \le c</F>, so <b>absolute <F>n \ge 1</F></b> always.
        </p>
        <Callout kind="formula">
          A medium with a larger <F>n</F> is <b>optically denser</b>. Optical density tracks how slow light is — not how mass-dense the material is (kerosene is optically denser than water but lighter).
        </Callout>
      </Section>

      <Section title="3️⃣ Relative refractive index">
        <p className="text-sm leading-relaxed">
          The index of medium 2 with respect to medium 1 compares the speeds in the two media:
        </p>
        <FBlock>{`n_{21} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Indices chain: <F>n_{'{31}'} = n_{'{32}'} \times n_{'{21}'}</F>, and they reverse cleanly — <F>n_{'{12}'} = 1/n_{'{21}'}</F>.
        </p>
      </Section>

      <Section title="4️⃣ Index from real and apparent depth">
        <FBlock>{`n = \\frac{\\text{real depth}}{\\text{apparent depth}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Look straight down into water and the bottom seems raised. The ratio of true depth to the depth you perceive is the refractive index — a handy way to <i>measure</i> <F>n</F>. (More on this in <b>Normal Shift</b>.)
        </p>
      </Section>

      <Section title="5️⃣ What the index depends on">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><b>Wavelength / colour:</b> <F>n</F> is larger for violet, smaller for red — this is the cause of dispersion.</li>
          <li><b>Temperature:</b> <F>n</F> generally decreases as temperature rises.</li>
          <li><b>The pair of media</b> (for relative index).</li>
          <li>It does <b>not</b> depend on the angle of incidence or the intensity of light.</li>
        </ul>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Speed in a medium</p>
          <p className="text-sm">Light travels at <F>{`2.25\\times10^8`}</F> m/s in a liquid. Find its refractive index.</p>
          <FBlock>{`n = \\frac{c}{v} = \\frac{3\\times10^8}{2.25\\times10^8} = 1.33`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Chaining indices</p>
          <p className="text-sm">If <F>n_{'{water}'} = 1.33</F> and the index of glass with respect to water is 1.13, find the absolute index of glass.</p>
          <FBlock>{`n_{glass} = n_{glass,water}\\times n_{water} = 1.13\\times1.33 \\approx 1.5`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Apparent depth</p>
          <p className="text-sm">A tank of water (<F>n = 4/3</F>) is 1.2 m deep. How deep does it look from above?</p>
          <FBlock>{`\\text{apparent} = \\frac{\\text{real}}{n} = \\frac{1.2}{4/3} = 0.9\\ \\text{m}`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Writing <F>n = v/c</F> — it is <F>c/v</F>, and absolute <F>n</F> is never less than 1.</li>
            <li>Equating optical density with mass density.</li>
            <li>Forgetting <F>n</F> depends on wavelength — assuming one value for all colours.</li>
            <li>Inverting a relative index the wrong way: <F>n_{'{21}'} = n_2/n_1</F>, not <F>n_1/n_2</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — change the indices">
        <RefractionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.refractive-index" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.refractive-index" title="Refractive Index MCQs" questions={refractiveIndexMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
