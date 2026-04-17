import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import ConductionSim from '../../../components/sims/ConductionSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { conductionMCQs } from '../../../data/thermal/concept-mcqs.js'

export default function ConductionParallelSeries() {
  return (
    <TopicPage
      chapterTo="/thermal"
      chapterTitle="Thermal Properties of Matter"
      title="Conduction of Heat (Parallel & Series)"
      subtitle="Think of heat flow like electric current. Once you do, series and parallel slabs become the same problem you solved in Current Electricity."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Heat flowing through a rod is just like <b>current flowing through a wire</b>. Temperature difference plays the role of voltage, heat current <F>dQ/dt</F> plays the role of electric current, and <i>thermal resistance</i> <F>{`R = L/(KA)`}</F> plays the role of electrical resistance. Series slabs? Resistances add. Parallel slabs? Conductances add. That's the whole game.
        </Callout>
      </Section>

      <Section title="2️⃣ Fourier's law">
        <FBlock>{`\\frac{dQ}{dt} = KA\\,\\frac{T_1 - T_2}{L}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>K</F> is thermal conductivity (W/m·K), <F>A</F> cross-sectional area, <F>L</F> length, and <F>{`T_1 > T_2`}</F> the end temperatures. Define thermal resistance:
        </p>
        <FBlock>{`R_{\\text{th}} = \\frac{L}{K A},\\qquad \\frac{dQ}{dt} = \\frac{\\Delta T}{R_{\\text{th}}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          In steady state, the same heat current flows through every cross-section of a single rod; temperature falls linearly with position.
        </p>
      </Section>

      <Section title="3️⃣ Series combination">
        <p className="text-sm leading-relaxed">
          Two slabs stacked end to end, same area, thicknesses <F>L_1, L_2</F>, conductivities <F>K_1, K_2</F>, end temperatures <F>T_1</F> and <F>T_2</F>. The same heat current flows through both (steady state). Resistances add:
        </p>
        <FBlock>{`R_{\\text{eq}} = \\frac{L_1}{K_1 A} + \\frac{L_2}{K_2 A}`}</FBlock>
        <p className="text-sm leading-relaxed">
          For equal lengths (<F>{`L_1 = L_2 = L`}</F>) and same area, the equivalent conductivity is the <b>harmonic mean</b>:
        </p>
        <FBlock>{`K_{\\text{series}} = \\frac{2 K_1 K_2}{K_1 + K_2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Junction temperature <F>T_j</F> is found by equating the heat current through either slab:
        </p>
        <FBlock>{`K_1\\,\\frac{T_1 - T_j}{L_1} = K_2\\,\\frac{T_j - T_2}{L_2}`}</FBlock>
      </Section>

      <Section title="4️⃣ Parallel combination">
        <p className="text-sm leading-relaxed">
          Two slabs side-by-side with the same length, end temperatures, and the same ΔT across each. The total heat current is the sum. Conductances add:
        </p>
        <FBlock>{`\\left(\\frac{dQ}{dt}\\right)_{\\text{total}} = \\frac{(K_1 A_1 + K_2 A_2)(T_1 - T_2)}{L}`}</FBlock>
        <p className="text-sm leading-relaxed">
          For identical dimensions (<F>{`A_1 = A_2 = A`}</F>), the equivalent conductivity is the <b>arithmetic mean</b>:
        </p>
        <FBlock>{`K_{\\text{parallel}} = \\frac{K_1 + K_2}{2}`}</FBlock>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Junction temperature</p>
          <p className="text-sm">Two slabs of equal thickness and area with conductivities <F>K</F> and <F>3K</F> are joined in series. Free ends at 100°C and 0°C.</p>
          <FBlock>{`K \\cdot \\frac{100 - T_j}{L} = 3K \\cdot \\frac{T_j - 0}{L}`}</FBlock>
          <FBlock>{`100 - T_j = 3 T_j \\Rightarrow T_j = 25°C`}</FBlock>
          <p className="text-sm">The higher-K slab has a smaller ΔT across it — it barely resists heat flow.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Composite K</p>
          <p className="text-sm">A composite slab has layer 1 of thickness <F>L</F>, conductivity <F>K</F>, followed by layer 2 of thickness <F>2L</F>, conductivity <F>2K</F>. Equivalent conductivity?</p>
          <FBlock>{`\\frac{3 L}{K_{\\text{eq}} A} = \\frac{L}{K A} + \\frac{2 L}{2 K A} = \\frac{2 L}{K A}`}</FBlock>
          <FBlock>{`K_{\\text{eq}} = \\frac{3K}{2}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Rod reshaped</p>
          <p className="text-sm">A rod conducts <F>Q</F> in time <F>t</F>. It is melted and recast into a rod of half the radius (same material, same temperatures). New heat conducted in time <F>t</F>?</p>
          <FBlock>{`\\text{Volume conserved: } r^2 L = \\text{const} \\Rightarrow L' = 4 L`}</FBlock>
          <FBlock>{`\\frac{Q'}{Q} = \\frac{A'/L'}{A/L} = \\frac{(r/2)^2 / (4L)}{r^2/L} = \\frac{1}{16}`}</FBlock>
          <FBlock>{`Q' = \\frac{Q}{16}`}</FBlock>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Confusing series and parallel — if the <i>heat current</i> is the same through two slabs, it's series; if the <i>temperature drop</i> is the same, it's parallel.</li>
            <li>Adding conductivities in series (wrong) — resistances add in series, not conductivities.</li>
            <li>Forgetting that Fourier's law only applies in <b>steady state</b>. Before steady state, heat can pile up in the rod and temperature is not linear.</li>
            <li>Mixing units: K in W/m·K, L in m, A in m² → dQ/dt in watts. Don't plug cm directly.</li>
            <li>Assuming junction temperature is the arithmetic mean of the end temperatures — only true when the two resistances are equal.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <ConductionSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="thermal.conduction" />
        <div className="mt-4">
          <MCQQuiz topicId="thermal.conduction" title="Conduction MCQs" questions={conductionMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
