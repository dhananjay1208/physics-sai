import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import ElectricFluxSim from '../../../components/sims/ElectricFluxSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { fluxMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function ElectricFlux() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Electric Flux"
      subtitle="How much field is poking through a surface — and the doorway to Gauss's law."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Picture the electric field as <b>rain falling sideways</b>. The flux through a surface is the rate at which the rain crosses it — biggest when the surface faces into the rain, zero when it lies along the rain, negative when the surface turns away from it. Replace "rain" with "field lines" and you have electric flux.
        </Callout>
      </Section>

      <Section title="2️⃣ Definition">
        <p className="text-sm leading-relaxed">
          For a flat surface in a uniform field:
        </p>
        <FBlock>{`\\Phi = \\vec{E}\\cdot\\vec{A} = E\\,A\\,\\cos\\theta`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>\vec{'{A}'}</F> is the <b>area vector</b> — perpendicular to the surface with magnitude equal to the surface area; <F>\theta</F> is the angle between <F>\vec{'{E}'}</F> and <F>\vec{'{A}'}</F>.
        </p>
        <p className="text-sm leading-relaxed">
          For a non-uniform field or a curved surface, sum (integrate) over small patches:
        </p>
        <FBlock>{`\\Phi = \\int \\vec{E}\\cdot d\\vec{A}`}</FBlock>
        <Callout kind="formula">
          SI unit: <b>N·m²/C</b> (equivalently V·m).
        </Callout>
      </Section>

      <Section title="3️⃣ Area-vector convention">
        <p className="text-sm leading-relaxed">
          For an <b>open</b> surface you choose which side is the "outside" — the area vector points that way. For a <b>closed</b> surface (a bag with no holes) the area vector always points <i>outward</i>. Flux is then unambiguous.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><F>\theta = 0°</F> (field along normal): <F>\Phi = EA</F> — maximum.</li>
          <li><F>\theta = 90°</F> (field in the surface): <F>\Phi = 0</F>.</li>
          <li><F>\theta &gt; 90°</F> (field pointing into the back of the surface): <F>\Phi &lt; 0</F>.</li>
        </ul>
      </Section>

      <Section title="4️⃣ Flux through a closed surface — Gauss's law preview">
        <p className="text-sm leading-relaxed">
          A startling fact: the total flux through any closed surface depends only on the charge it encloses — not on the shape of the surface or where inside the charge sits. This is <b>Gauss's law</b>:
        </p>
        <FBlock>{`\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}`}</FBlock>
        <Callout kind="tip">
          Charge outside the surface contributes zero net flux — every field line that enters the closed surface also leaves it. Only enclosed charges build up flux. (Gauss's law and its applications — sphere, cylinder, infinite sheet — belong to the next chapter; here it's a preview.)
        </Callout>
      </Section>

      <Section title="5️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Flux through a normal surface</p>
          <p className="text-sm">A uniform field of 200 N/C is perpendicular to a flat circle of area 0.1 m². Find the flux.</p>
          <FBlock>{`\\Phi = EA\\cos0° = 200\\times0.1 = 20\\ \\text{N·m}^2/\\text{C}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Tilted surface</p>
          <p className="text-sm">The same surface is now tilted so its normal makes 60° with the field. Find the flux.</p>
          <FBlock>{`\\Phi = EA\\cos60° = 200\\times0.1\\times0.5 = 10\\ \\text{N·m}^2/\\text{C}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Cube symmetry</p>
          <p className="text-sm">A charge <F>+Q</F> sits at the centre of a cube. Find the flux through one face.</p>
          <FBlock>{`\\Phi_{\\text{total}} = Q/\\varepsilon_0, \\quad \\Phi_{\\text{one face}} = \\frac{Q}{6\\varepsilon_0}`}</FBlock>
          <p className="text-sm">Symmetry distributes the total flux evenly among the six faces.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 4 — Charge at a corner</p>
          <p className="text-sm">A charge <F>+Q</F> sits at the corner of a cube. Find the flux through the entire cube.</p>
          <p className="text-sm">Imagine 8 identical cubes meeting at that corner; together they make a closed surface of total flux <F>Q/\varepsilon_0</F>. One cube gets <F>{`\\dfrac{Q}{8\\varepsilon_0}`}</F>.</p>
        </div>
      </Section>

      <Section title="6️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Confusing the angle between the field and the <b>surface</b> with the angle between the field and the <b>normal</b> — these differ by 90°.</li>
            <li>Writing flux as <F>{`\\vec{E}\\times\\vec{A}`}</F> instead of <F>{`\\vec{E}\\cdot\\vec{A}`}</F> — it's a dot product, not a cross product.</li>
            <li>Including charges <i>outside</i> the closed surface in Gauss's law — only the enclosed charge counts.</li>
            <li>Believing the surface shape matters — for the net flux through a closed surface, it does not.</li>
            <li>Forgetting that for a closed surface the area vector always points <b>outward</b>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — tilt a surface and watch the flux">
        <ElectricFluxSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.flux" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.flux" title="Electric Flux MCQs" questions={fluxMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
