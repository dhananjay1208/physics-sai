import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { normalShiftMCQs } from '../../../data/rayoptics/concept-mcqs.js'

export default function NormalShift() {
  return (
    <TopicPage
      chapterTo="/ray-optics"
      chapterTitle="Ray Optics"
      title="Normal Shift"
      subtitle="Apparent depth — why objects seen through water or glass look closer than they are."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Reach for a coin at the bottom of a bucket of water and you'll miss — it's deeper than it looks. Light from the coin bends away from the normal as it escapes the water, and your brain, assuming light travels straight, traces it back to a <b>raised</b> image. The gap between the real and apparent positions is the <b>normal shift</b>.
        </Callout>
      </Section>

      <Section title="2️⃣ Apparent depth">
        <p className="text-sm leading-relaxed">
          Viewed nearly straight down, an object at real depth <F>d</F> in a medium of index <F>n</F> appears at a shallower apparent depth:
        </p>
        <FBlock>{`\\text{apparent depth} = \\frac{\\text{real depth}}{n} = \\frac{d}{n}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Because <F>n &gt; 1</F>, the apparent depth is always smaller — the object looks raised. Rearranged, this gives a neat way to measure the index: <F>n = d/d_{'{app}'}</F>.
        </p>
      </Section>

      <Section title="3️⃣ Normal shift of a slab">
        <p className="text-sm leading-relaxed">
          For a transparent slab of thickness <F>t</F> and index <F>n</F> placed over an object, the object appears raised (shifted towards the observer) by:
        </p>
        <FBlock>{`\\text{shift} = t\\left(1 - \\frac{1}{n}\\right)`}</FBlock>
        <Callout kind="formula">
          The shift depends <b>only</b> on the slab's thickness and index — not on how far the object or the eye is from the slab, and (for near-normal viewing) not on the angle.
        </Callout>
      </Section>

      <Section title="4️⃣ Stacked layers">
        <p className="text-sm leading-relaxed">
          When light passes through several layers, the apparent depths simply add. For layers of thicknesses <F>t_1, t_2, \dots</F> and indices <F>n_1, n_2, \dots</F>:
        </p>
        <FBlock>{`d_{\\text{app}} = \\frac{t_1}{n_1} + \\frac{t_2}{n_2} + \\dots`}</FBlock>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Coin in a beaker</p>
          <p className="text-sm">A coin lies under 12 cm of water (<F>n = 4/3</F>). How deep does it appear, and by how much is it raised?</p>
          <FBlock>{`d_{app} = \\frac{12}{4/3} = 9\\ \\text{cm}, \\quad \\text{shift} = 12 - 9 = 3\\ \\text{cm}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Dot under a glass slab</p>
          <p className="text-sm">A 9 cm glass slab (<F>n = 1.5</F>) sits over an ink dot. How far does the dot appear to rise?</p>
          <FBlock>{`\\text{shift} = 9\\left(1 - \\frac{1}{1.5}\\right) = 9\\times\\frac{1}{3} = 3\\ \\text{cm}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Two liquids</p>
          <p className="text-sm">A vessel has 8 cm of oil (<F>n = 1.6</F>) over 9 cm of water (<F>n = 1.5</F>). Find the apparent depth of the base.</p>
          <FBlock>{`d_{app} = \\frac{8}{1.6} + \\frac{9}{1.5} = 5 + 6 = 11\\ \\text{cm}`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Using <F>\text{shift} = t/n</F> — the shift is <F>t(1 - 1/n)</F>; <F>t/n</F> is the apparent <i>thickness</i>.</li>
            <li>Thinking the object appears deeper — it always appears <b>shallower</b> (raised).</li>
            <li>Believing the shift depends on the object's distance from the slab — it does not.</li>
            <li>Multiplying instead of dividing: apparent depth is real depth <i>÷</i> <F>n</F>.</li>
            <li>Forgetting that for viewing from the denser side the geometry flips — the standard formulae above assume the observer is in air (the rarer medium).</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="rayoptics.normal-shift" />
        <div className="mt-4">
          <MCQQuiz topicId="rayoptics.normal-shift" title="Normal Shift MCQs" questions={normalShiftMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
