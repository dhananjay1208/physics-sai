import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import ElectricFieldSim from '../../../components/sims/ElectricFieldSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { fieldMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function ElectricField() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Electric Field"
      subtitle="The force-per-unit-charge that fills space around every charge — and the language electrostatics actually speaks."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A charge doesn't reach across empty space and pull on another charge — it <b>fills the space around it</b> with an invisible influence called the electric field. Any other charge dropped into that field just feels the local field around it. Think of it as <i>charges are sources, the field is the messenger</i>. Once you can draw the field, every force, energy and motion problem becomes routine.
        </Callout>
      </Section>

      <Section title="2️⃣ Definition">
        <FBlock>{`\\vec{E} = \\lim_{q_0 \\to 0}\\,\\frac{\\vec{F}}{q_0}`}</FBlock>
        <p className="text-sm leading-relaxed">
          The electric field at a point is the force per unit positive test charge placed there (in the limit that the test charge is so small it doesn't disturb the field). It is a vector, measured in <b>N/C</b> (equivalently <b>V/m</b>).
        </p>
        <Callout kind="formula">
          Once <F>\vec{'{E}'}</F> is known, the force on any charge <F>q</F> dropped in is just <F>{`\\vec{F} = q\\vec{E}`}</F>.
        </Callout>
      </Section>

      <Section title="3️⃣ Field of a point charge">
        <FBlock>{`\\vec{E} = \\frac{kq}{r^2}\\,\\hat{r}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <F>\hat{'{r}'}</F> points from the source charge to the field point. If <F>q &gt; 0</F>, the field points <b>outward</b> (away from <F>+q</F>); if <F>q &lt; 0</F>, it points <b>inward</b> (toward <F>-q</F>). Magnitude is the inverse-square <F>{`k|q|/r^2`}</F>.
        </p>
      </Section>

      <Section title="4️⃣ Superposition of fields">
        <p className="text-sm leading-relaxed">
          The field at a point due to several charges is the <b>vector sum</b> of their individual fields:
        </p>
        <FBlock>{`\\vec{E}_{\\text{net}} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + \\dots`}</FBlock>
        <p className="text-sm leading-relaxed">
          Each charge contributes independently — just like Coulomb's law forces. For continuous charge distributions the sum becomes an integral over <F>{`dq`}</F>.
        </p>
      </Section>

      <Section title="5️⃣ Field lines">
        <p className="text-sm leading-relaxed">
          Field lines are an imaginary picture that show the direction (tangent at every point) and the magnitude (density of lines) of the field.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Start on <b>positive</b> charges, end on <b>negative</b> charges (or at infinity).</li>
          <li><b>Never</b> cross — the field would be ambiguous at a crossing point.</li>
          <li>Denser lines ⇒ stronger field; sparser ⇒ weaker.</li>
          <li>Always meet a conductor's surface <b>perpendicularly</b>.</li>
          <li>For a single positive (or negative) charge in isolation, the lines are radial — outward (or inward).</li>
        </ul>
      </Section>

      <Section title="6️⃣ Standard field results">
        <p className="text-sm leading-relaxed">
          A handful of distributions appear again and again in NEET. Memorize the results — derivations use Gauss's law, but the formulas are standard:
        </p>
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Infinite line charge (linear density <F>\lambda</F>)</p>
          <FBlock>{`E = \\frac{\\lambda}{2\\pi\\varepsilon_0\\,r}`}</FBlock>
          <p className="text-sm">Falls as <F>1/r</F>, not <F>{`1/r^2`}</F>.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Infinite plane sheet (surface density <F>\sigma</F>)</p>
          <FBlock>{`E = \\frac{\\sigma}{2\\varepsilon_0}`}</FBlock>
          <p className="text-sm">Independent of distance — uniform on either side.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Parallel-plate capacitor (uniform charge densities <F>{`+\\sigma, -\\sigma`}</F>)</p>
          <FBlock>{`E_{\\text{between}} = \\frac{\\sigma}{\\varepsilon_0}, \\quad E_{\\text{outside}} = 0`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Ring on axis (charge <F>Q</F>, radius <F>R</F>, axial distance <F>x</F>)</p>
          <FBlock>{`E_{\\text{axial}} = \\frac{kQx}{(R^2 + x^2)^{3/2}}`}</FBlock>
          <p className="text-sm">Maximum at <F>{`x = R/\\sqrt{2}`}</F>.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Electric dipole (moment <F>p = q\cdot 2a</F>, short dipole)</p>
          <FBlock>{`E_{\\text{axial}} = \\frac{2kp}{r^3}, \\quad E_{\\text{equatorial}} = \\frac{kp}{r^3}`}</FBlock>
          <p className="text-sm">Both fall as <F>{`1/r^3`}</F>; axial field is twice the equatorial, oppositely directed.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Uniformly charged spherical shell</p>
          <FBlock>{`E_{\\text{inside}} = 0, \\quad E_{\\text{outside}} = \\frac{kQ}{r^2}`}</FBlock>
          <p className="text-sm">Outside, the shell acts as if all charge is at the centre.</p>
        </div>
      </Section>

      <Section title="7️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Field of a point charge</p>
          <p className="text-sm">Find the magnitude of the field at 30 cm from a charge of <F>{`+5\\,\\mu\\text{C}`}</F>.</p>
          <FBlock>{`E = \\frac{9\\times10^9\\times5\\times10^{-6}}{(0.30)^2} = \\frac{45\\times10^3}{0.09} = 5\\times10^5\\ \\text{N/C}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Two equal-and-opposite charges</p>
          <p className="text-sm">Charges <F>+q</F> and <F>-q</F> are 10 cm apart. Find the field at the midpoint.</p>
          <p className="text-sm">Both charges' fields at the midpoint point in the <i>same</i> direction (away from <F>+q</F> and toward <F>-q</F>). Net:</p>
          <FBlock>{`E_{\\text{net}} = 2\\cdot\\frac{kq}{(0.05)^2}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Dipole on equatorial line</p>
          <p className="text-sm">A short dipole of moment <F>p = 1.0\times10^{'{-7}'}</F> C·m is observed from 10 cm on its equatorial side. Find the field.</p>
          <FBlock>{`E = \\frac{kp}{r^3} = \\frac{9\\times10^9\\times10^{-7}}{(0.1)^3} = 9\\times10^5\\ \\text{N/C}`}</FBlock>
        </div>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting <F>\vec{'{E}'}</F> is a vector — superposition requires components, not magnitudes.</li>
            <li>Using <F>{`E = k q / r`}</F> for a point charge — it's <F>{`k q / r^2`}</F>.</li>
            <li>Writing <F>{`E = \\sigma / \\varepsilon_0`}</F> for a single sheet — it's <F>{`\\sigma / (2\\varepsilon_0)`}</F>. The <F>1/\varepsilon_0</F> form is for a parallel-plate capacitor (two sheets).</li>
            <li>Mixing up axial and equatorial dipole fields — axial is twice the equatorial, and they point oppositely (along/against the dipole moment).</li>
            <li>Drawing two field lines that cross — physically impossible.</li>
            <li>Believing field lines are real "tubes" of force — they are a visualization, not material objects.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it — see the field around a charge">
        <ElectricFieldSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.field" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.field" title="Electric Field MCQs" questions={fieldMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
