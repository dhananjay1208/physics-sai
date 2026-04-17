import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { specificLatentMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function SpecificLatentHeat() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Specific & Latent Heat"
      subtitle="Two heats, two jobs: raising temperature, and paying the phase-change toll."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Think of heat as <b>money</b> you pour into a substance. <i>Specific heat</i> is how much money is needed per gram per degree — the price of warming. But at melting or boiling, the substance hits a <b>toll booth</b>: you must pay the <i>latent heat</i> to cross the phase boundary, and while you pay, the temperature doesn't rise at all. Only after the toll is cleared does further heating continue the climb.
        </Callout>
      </Section>

      <Section title="2️⃣ Specific heat">
        <FBlock>{`s = \\frac{Q}{m\\,\\Delta T}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Units: J/(kg·K) in SI, or cal/(g·°C) in older texts. <b>Benchmark value</b>: <F>{`s_{water} = 4186`}</F> J/(kg·K) = 1 cal/(g·°C) — unusually high, which is why water dominates Earth's heat storage and why your morning coffee takes so long to cool.
        </p>
        <p className="text-sm leading-relaxed">
          For gases, you must specify conditions: <F>c_p</F> (constant pressure) vs <F>c_v</F> (constant volume). Always <F>{`c_p > c_v`}</F> because at constant pressure some heat does expansion work. Mayer's relation (per mole): <F>{`c_p - c_v = R`}</F>.
        </p>
      </Section>

      <Section title="3️⃣ Latent heat">
        <FBlock>{`Q = m\\,L`}</FBlock>
        <p className="text-sm leading-relaxed">
          No temperature change appears in this formula — all the heat is spent breaking intermolecular bonds. Two benchmarks to memorize cold:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-3">
          <div className="card p-3 bg-sky-50 border-sky-200">
            <p className="text-xs uppercase tracking-wider text-sky-700 font-bold">Latent heat of fusion</p>
            <p className="text-sm mt-1"><F>{`L_f = 80\\,\\text{cal/g} = 334\\,\\text{J/g}`}</F> (ice → water at 0°C)</p>
          </div>
          <div className="card p-3 bg-rose-50 border-rose-200">
            <p className="text-xs uppercase tracking-wider text-rose-700 font-bold">Latent heat of vaporization</p>
            <p className="text-sm mt-1"><F>{`L_v = 540\\,\\text{cal/g} = 2260\\,\\text{J/g}`}</F> (water → steam at 100°C)</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          The enormous vaporization value (≈7× fusion) is why steam scalds so violently and why sweat evaporating off your skin is such an efficient cooler.
        </p>
      </Section>

      <Section title="4️⃣ The heating curve">
        <p className="text-sm leading-relaxed">
          If you heat ice at constant rate from −20°C until it becomes superheated steam, the temperature-vs-heat graph has five stages:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Slope <F>{`1/(m s_{ice})`}</F>: ice warms from −20°C to 0°C.</li>
          <li><b>Flat at 0°C</b>: ice melts (latent heat of fusion).</li>
          <li>Slope <F>{`1/(m s_{water})`}</F>: water warms from 0°C to 100°C.</li>
          <li><b>Flat at 100°C</b>: water boils (latent heat of vaporization — a much wider plateau).</li>
          <li>Slope <F>{`1/(m s_{steam})`}</F>: steam warms above 100°C.</li>
        </ol>
        <p className="text-sm leading-relaxed">
          Learn to read this graph — many NEET questions show it and ask for a missing heat, temperature, or slope ratio.
        </p>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Ice to steam</p>
          <p className="text-sm">Heat needed to convert 1 g of ice at −10°C into steam at 100°C. (s_ice = 0.5 cal/g·°C)</p>
          <FBlock>{`Q = \\underbrace{1(0.5)(10)}_{\\text{warm ice}} + \\underbrace{1(80)}_{\\text{melt}} + \\underbrace{1(1)(100)}_{\\text{warm water}} + \\underbrace{1(540)}_{\\text{vaporize}}`}</FBlock>
          <FBlock>{`Q = 5 + 80 + 100 + 540 = 725\\,\\text{cal}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Ice into hot water (ice remains)</p>
          <p className="text-sm">100 g of ice at 0°C is added to 200 g of water at 20°C.</p>
          <FBlock>{`\\text{Heat to melt all ice} = 100 \\times 80 = 8000\\,\\text{cal}`}</FBlock>
          <FBlock>{`\\text{Heat water can release to 0°C} = 200 \\times 20 = 4000\\,\\text{cal}`}</FBlock>
          <p className="text-sm">Only 4000 cal is available, so only half the ice (50 g) melts. Final state: 300 g of water at 0°C with 50 g of ice floating in it.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Steam into cold water</p>
          <p className="text-sm">10 g of steam at 100°C is passed into 90 g of water at 20°C.</p>
          <FBlock>{`\\underbrace{10 \\cdot 540}_{\\text{condense}} + \\underbrace{10(100 - T)}_{\\text{cool 100→T}} = \\underbrace{90(T - 20)}_{\\text{heat 20→T}}`}</FBlock>
          <FBlock>{`5400 + 1000 - 10 T = 90 T - 1800 \\Rightarrow T = 82°C`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Applying <F>{`Q = m s \\Delta T`}</F> through a phase-change plateau (ΔT = 0, so the formula is useless — use <F>{`Q = m L`}</F>).</li>
            <li>Forgetting to check whether the hot side has enough heat to melt <i>all</i> the ice. If it doesn't, final T = 0°C with ice still present.</li>
            <li>Mixing units: if <F>s</F> is in cal/g·°C, all masses must be in grams; if in J/kg·K, in kilograms.</li>
            <li>Using <F>c_p</F> when <F>c_v</F> is relevant (or vice versa) in gas problems.</li>
            <li>Ignoring that condensing steam releases <b>both</b> its latent heat <i>and</i> then cools from 100°C to the final T.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.specific-latent" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.specific-latent" title="Specific & Latent Heat MCQs" questions={specificLatentMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
