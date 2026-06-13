import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import CoulombForceSim from '../../../components/sims/CoulombForceSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { coulombMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function CoulombsLaw() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Coulomb's Law"
      subtitle="The inverse-square rule that fixes the force between two point charges — and the cornerstone of all electrostatics."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Coulomb's law is gravity's <b>electric twin</b>: same <F>1/r^2</F> shape, but instead of mass-pulling-mass, charge-pulling-charge (or pushing, when signs match). And it's about <i>40 orders of magnitude</i> stronger between two protons. Memorize the form, internalize the 1/r² scaling — the rest is bookkeeping.
        </Callout>
      </Section>

      <Section title="2️⃣ The law — scalar form">
        <FBlock>{`F = \\frac{k\\,q_1 q_2}{r^2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>q_1, q_2</F> are the two point charges (signed), <F>r</F> is the distance between them, and <F>k = 1/(4\pi\varepsilon_0) \approx 9\times10^9</F> N·m²/C². If <F>q_1 q_2 &gt; 0</F> the force is repulsive (positive); if <F>q_1 q_2 &lt; 0</F> it is attractive (negative).
        </p>
        <Callout kind="formula">
          The permittivity of free space: <F>\varepsilon_0 = 8.854\times10^{'{-12}'}</F> C²/(N·m²).
        </Callout>
      </Section>

      <Section title="3️⃣ Vector form">
        <FBlock>{`\\vec{F}_{12} = \\frac{k\\,q_1 q_2}{r^2}\\,\\hat{r}_{12}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>\hat{'{r}'}_{'{12}'}</F> points <b>from charge 2 to charge 1</b>. If the product <F>q_1 q_2</F> is positive, the force on charge 1 is along <F>\hat{'{r}'}_{'{12}'}</F> (away from charge 2). The action-reaction pair satisfies <F>{`\\vec{F}_{21} = -\\vec{F}_{12}`}</F>, as Newton demands.
        </p>
      </Section>

      <Section title="4️⃣ Principle of superposition">
        <p className="text-sm leading-relaxed">
          For three or more charges, the force on any one charge is the <b>vector sum</b> of forces from each of the others — calculated as if no other charges were present.
        </p>
        <FBlock>{`\\vec{F}_{\\text{net on }1} = \\vec{F}_{12} + \\vec{F}_{13} + \\vec{F}_{14} + \\dots`}</FBlock>
        <p className="text-sm leading-relaxed">
          Each pair force obeys Coulomb's law independently; superposition lets us tackle any multi-charge configuration by summing pair contributions.
        </p>
      </Section>

      <Section title="5️⃣ Force in a medium (dielectric)">
        <p className="text-sm leading-relaxed">
          Inside a uniform dielectric of relative permittivity <F>\varepsilon_r</F> (also called dielectric constant <F>K</F>), the Coulomb force is reduced:
        </p>
        <FBlock>{`F_{\\text{med}} = \\frac{F_{\\text{vac}}}{\\varepsilon_r} = \\frac{k\\,q_1 q_2}{\\varepsilon_r\\,r^2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          For water <F>\varepsilon_r \approx 80</F>; for glass <F>\approx 5</F>. The medium polarizes and partially screens the original charges.
        </p>
      </Section>

      <Section title="6️⃣ Comparison with gravitation">
        <p className="text-sm leading-relaxed">
          Coulomb's law and Newton's gravitation share the same algebraic form. For two protons separated by any distance:
        </p>
        <FBlock>{`\\frac{F_e}{F_g} = \\frac{k\\,e^2}{G\\,m_p^2} \\approx 1.2\\times10^{36}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Gravity is utterly negligible at atomic scales. Distance <F>r</F> cancels in this ratio (both forces are <F>1/r^2</F>), so the answer is the same at any separation.
        </p>
      </Section>

      <Section title="7️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Force on two µC charges</p>
          <p className="text-sm">Two point charges <F>{`+2\\,\\mu\\text{C}`}</F> and <F>{`+3\\,\\mu\\text{C}`}</F> are 30 cm apart in vacuum. Find the force.</p>
          <FBlock>{`F = \\frac{9\\times10^9\\cdot(2\\times10^{-6})(3\\times10^{-6})}{(0.30)^2} = \\frac{54\\times10^{-3}}{0.09} = 0.6\\ \\text{N}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Charges on an equilateral triangle</p>
          <p className="text-sm">Three charges <F>+q</F> sit on the corners of an equilateral triangle of side <F>a</F>. Find the magnitude of force on one of them.</p>
          <FBlock>{`F_{\\text{each pair}} = \\frac{kq^2}{a^2}, \\quad \\vec{F}_{\\text{net}}\\ \\text{by vector sum at }60°`}</FBlock>
          <FBlock>{`|\\vec{F}_{\\text{net}}| = 2F\\cos30° = F\\sqrt{3} = \\frac{\\sqrt{3}\\,kq^2}{a^2}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Reducing the force with a medium</p>
          <p className="text-sm">Two charges in vacuum feel a force of 2 N. They are placed in oil with <F>K = 4</F> at the same distance. The new force is:</p>
          <FBlock>{`F_{\\text{oil}} = F_{\\text{vac}}/K = 2/4 = 0.5\\ \\text{N}`}</FBlock>
        </div>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting to square the distance — Coulomb's law is <F>{`1/r^2`}</F>, not <F>{`1/r`}</F>.</li>
            <li>Plugging in <F>{`\\mu\\text{C}`}</F> as if it were C — always convert to coulombs first.</li>
            <li>Treating the force as a scalar in multi-charge problems — superposition requires <b>vector</b> addition.</li>
            <li>Inserting <F>{`\\varepsilon_r`}</F> in the wrong place — <F>{`F_{\\text{med}} = F_{\\text{vac}}/\\varepsilon_r`}</F>, so the medium <i>weakens</i> the force.</li>
            <li>Forgetting Newton's third law: <F>{`\\vec{F}_{12} = -\\vec{F}_{21}`}</F> — equal and opposite, even for unequal charges.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — flip signs, scale distance">
        <CoulombForceSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.coulomb" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.coulomb" title="Coulomb's Law MCQs" questions={coulombMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
