import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { workEnergyMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function WorkAndKineticEnergy() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Work & Kinetic Energy"
      subtitle="Work done by the electric force on a charge, and the kinetic energy the charge gains in return."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A charge in an electric field is like a marble on a tilted floor — the field does <b>work</b> on it as it slides, and that work shows up as <b>kinetic energy</b>. Push a charge against the field and you (the external agent) pay the energy; let it go with the field and the field pays it back. Work and KE are how electrostatics bridges to mechanics.
        </Callout>
      </Section>

      <Section title="2️⃣ Work done by the electric force">
        <p className="text-sm leading-relaxed">
          For a charge <F>q</F> moving through displacement <F>\vec{'{d}'}</F> in a <b>uniform</b> field <F>\vec{'{E}'}</F>:
        </p>
        <FBlock>{`W = \\vec{F}\\cdot\\vec{d} = q\\vec{E}\\cdot\\vec{d} = qE\\,d\\,\\cos\\theta`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>\theta</F> is the angle between the displacement and the field direction. Sign convention: <F>W</F> is positive when the displacement has a component along the force on the charge.
        </p>
      </Section>

      <Section title="3️⃣ Work-energy theorem">
        <FBlock>{`W_{\\text{net}} = \\Delta\\text{KE} = \\tfrac{1}{2}m v_f^2 - \\tfrac{1}{2}m v_i^2`}</FBlock>
        <p className="text-sm leading-relaxed">
          When the only force acting on the charge is the electric force, all the work done by the field becomes kinetic energy:
        </p>
        <Callout kind="formula">
          For a charge starting at rest and moving distance <F>d</F> parallel to a uniform field <F>E</F>: <F>{`\\text{KE} = qE\\,d`}</F>.
        </Callout>
      </Section>

      <Section title="4️⃣ Charge accelerated through a potential difference">
        <p className="text-sm leading-relaxed">
          A charge of magnitude <F>q</F> accelerated through a potential difference <F>V</F> (e.g., between two parallel plates) gains:
        </p>
        <FBlock>{`\\text{KE} = qV`}</FBlock>
        <p className="text-sm leading-relaxed">
          This is the cleanest way to find an accelerated charge's KE — even when the field is non-uniform, you only need to know <F>V</F>. The unit <b>electronvolt</b> follows directly: one electron accelerated through 1 V gains <F>{`1\\,\\text{eV} = 1.6\\times10^{-19}`}</F> J of kinetic energy.
        </p>
      </Section>

      <Section title="5️⃣ Work done by the field vs by an external agent">
        <p className="text-sm leading-relaxed">
          To move a charge slowly (no change in KE) against the electric force, an external agent must apply a force equal and opposite to the electric force at every step. The work done by the two agents is then:
        </p>
        <FBlock>{`W_{\\text{ext}} = -W_{\\text{field}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          If the field would push the charge in one direction, the external agent pushes the other way; their works are negatives of each other.
        </p>
      </Section>

      <Section title="6️⃣ Path independence — the conservative field">
        <Callout kind="tip">
          The work done by the electrostatic force on a charge between two points depends only on the start and end positions — never on the path. Equivalently, the work done around any <b>closed loop</b> is zero. This conservativeness is what makes electric potential a well-defined concept (covered in the next chapter on Potential).
        </Callout>
      </Section>

      <Section title="7️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Charge accelerated between plates</p>
          <p className="text-sm">An electron (charge <F>e</F>) is accelerated from rest through 200 V. Find its kinetic energy and speed. (Mass <F>m_e = 9.1\times10^{'{-31}'}</F> kg.)</p>
          <FBlock>{`\\text{KE} = eV = (1.6\\times10^{-19})(200) = 3.2\\times10^{-17}\\ \\text{J} = 200\\ \\text{eV}`}</FBlock>
          <FBlock>{`v = \\sqrt{\\frac{2\\,\\text{KE}}{m_e}} = \\sqrt{\\frac{6.4\\times10^{-17}}{9.1\\times10^{-31}}} \\approx 8.4\\times10^6\\ \\text{m/s}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Work in a uniform field</p>
          <p className="text-sm">A 2 µC charge is moved 50 cm in a uniform field of 1000 N/C, at an angle of 60° with the field. Find the work done by the field.</p>
          <FBlock>{`W = qE d\\cos60° = (2\\times10^{-6})(1000)(0.5)(0.5) = 5\\times10^{-4}\\ \\text{J}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Proton and alpha through the same V</p>
          <p className="text-sm">A proton and an alpha particle are accelerated from rest through the same potential difference. Compare their kinetic energies.</p>
          <FBlock>{`\\frac{\\text{KE}_p}{\\text{KE}_\\alpha} = \\frac{e\\cdot V}{2e\\cdot V} = \\frac{1}{2}`}</FBlock>
          <p className="text-sm">The alpha gains twice the kinetic energy. (Their speeds aren't the same — mass also differs.)</p>
        </div>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting the <F>\cos\theta</F> factor in <F>{`W = qEd\\cos\\theta`}</F>.</li>
            <li>Using <F>{`W = qE/d`}</F> — work is force <i>times</i> displacement, not divided.</li>
            <li>Mixing up the sign: when the external agent does positive work, the field does negative work.</li>
            <li>Forgetting that <F>{`\\text{KE} = qV`}</F> is for a charge starting at rest — if it has initial KE, use <F>{`\\Delta\\text{KE} = qV`}</F>.</li>
            <li>Believing the work depends on the path — in an electrostatic field it never does.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.work-energy" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.work-energy" title="Work & Kinetic Energy MCQs" questions={workEnergyMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
