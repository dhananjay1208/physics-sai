import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { thermometryMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function Thermometry() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Thermometry"
      subtitle="What 'temperature' means, the scales we use to measure it, and the physical properties that thermometers exploit."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Temperature is like the <b>loudness</b> of molecular motion. A hot cup of coffee is a ballroom of molecules jostling frantically; an ice cube is the same molecules barely shuffling. A thermometer is just any physical property that changes predictably with that motion — the length of a mercury column, the resistance of a platinum wire, the pressure of a trapped gas. Calibrate it against two reference points and you have a temperature scale.
        </Callout>
      </Section>

      <Section title="2️⃣ Temperature scales">
        <p className="text-sm leading-relaxed">
          Every scale is built on two fixed points. Celsius uses the ice point (0°C) and steam point (100°C); Fahrenheit uses 32°F and 212°F; Kelvin is absolute, anchored at the triple point of water (273.16 K).
        </p>
        <FBlock>{`\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5} = \\frac{R - 492}{9}`}</FBlock>
        <p className="text-sm leading-relaxed">
          More generally, any linear scale with ice point <F>L_0</F> and steam point <F>L_{'{100}'}</F> reads a temperature <F>T</F> when its thermometric property has value <F>L</F>:
        </p>
        <FBlock>{`T = 100 \\times \\frac{L - L_0}{L_{100} - L_0}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Memorize: Celsius and Kelvin differ only by the constant offset <F>{`273.15`}</F>, and one degree Celsius equals one kelvin in size. Fahrenheit and Celsius coincide numerically at <F>{`-40°`}</F>.
        </p>
      </Section>

      <Section title="3️⃣ Common thermometer types">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Mercury-in-glass</p>
          <p className="text-sm">Uses thermal expansion of mercury. Range roughly −39°C (mercury freezes) to 357°C (mercury boils). Simple but non-linear at extremes.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Platinum resistance thermometer</p>
          <p className="text-sm">Uses <F>{`R_t = R_0(1 + \\alpha t)`}</F>. Accurate over a wide range (−200°C to 850°C).</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Constant-volume gas thermometer</p>
          <p className="text-sm">Uses pressure of a trapped ideal gas. <F>{`T \\propto P`}</F> at constant V. It is the most accurate reference for the Kelvin scale.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Thermocouple</p>
          <p className="text-sm">Two dissimilar metal wires joined at two junctions at different temperatures produce a small EMF (Seebeck effect). Used for high temperatures.</p>
        </div>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Faulty thermometer</p>
          <p className="text-sm">A Celsius thermometer reads the ice point as 2°C and the steam point as 102°C. What is the true temperature when it reads 77°C?</p>
          <FBlock>{`C = 100 \\times \\frac{77 - 2}{102 - 2} = 100 \\times \\frac{75}{100} = 75°C`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Where do C and F coincide?</p>
          <p className="text-sm">Set <F>C = F</F> in the conversion formula:</p>
          <FBlock>{`\\frac{C}{5} = \\frac{C - 32}{9} \\Rightarrow 9C = 5C - 160 \\Rightarrow C = -40°`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — New scale</p>
          <p className="text-sm">A new scale X has ice point at 40°X and steam point at 240°X. A body at 60°C reads what on X?</p>
          <FBlock>{`\\frac{X - 40}{240 - 40} = \\frac{C}{100} \\Rightarrow X = 40 + 2 \\times 60 = 160°X`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Adding 273 instead of 273.15 in precision calculations (fine for NEET, not for lab work).</li>
            <li>Forgetting that the <b>size</b> of 1 K equals 1°C but they don't equal 1°F.</li>
            <li>On a faulty thermometer, using the formula with 0 and 100 instead of the <i>actual</i> reading at ice/steam points.</li>
            <li>Confusing triple point (273.16 K) with ice point (273.15 K) — they differ by 0.01 K.</li>
            <li>Assuming thermometric property is linear with temperature when it isn't (e.g. thermocouple EMF vs T is roughly linear only in short ranges).</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.thermometry" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.thermometry" title="Thermometry MCQs" questions={thermometryMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
