import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { equilibriumMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function ChargeInEquilibrium() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Charge in Equilibrium"
      subtitle="Three-charge problems on a line — where a charge can sit so the forces balance, and whether the balance is stable."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          A charge in equilibrium is like a marble balanced exactly on the ridge between two slopes — the forces from its neighbours cancel. Between two like charges that's the midpoint (or shifted, if magnitudes differ). For two unlike charges, the balance point sits <i>outside</i> the line. And like every balance, it can be <b>stable</b> (a dip) or <b>unstable</b> (a knife-edge).
        </Callout>
      </Section>

      <Section title="2️⃣ The three-charge collinear problem">
        <p className="text-sm leading-relaxed">
          Two charges <F>q_1</F> and <F>q_2</F> are fixed along the <F>x</F>-axis a distance <F>L</F> apart. Where can a third charge <F>q_3</F> sit on the line so that the net force on it is zero?
        </p>
        <FBlock>{`\\frac{kq_1 q_3}{x^2} = \\frac{kq_2 q_3}{(L-x)^2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Cancelling <F>k q_3</F> and re-arranging:
        </p>
        <FBlock>{`\\left(\\frac{L-x}{x}\\right)^2 = \\frac{q_2}{q_1} \\quad\\Rightarrow\\quad \\frac{L-x}{x} = \\sqrt{\\frac{q_2}{q_1}}`}</FBlock>
        <Callout kind="formula">
          The position of equilibrium depends only on the <i>ratio</i> of the two outer charges, not on their absolute size or on <F>q_3</F>.
        </Callout>
      </Section>

      <Section title="3️⃣ Like-signed vs unlike-signed outer charges">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Same sign (both + or both −)</p>
          <p className="text-sm">The balance point lies <b>between</b> the two charges. The third charge can have either sign (equilibrium of <F>q_3</F> is unstable either way along the line — see stability below).</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Opposite signs (+ and −)</p>
          <p className="text-sm">The balance point lies <b>outside</b> the line, on the side of the smaller-magnitude charge. (Closer to the smaller charge because its field can match the bigger one only at a larger distance.)</p>
        </div>
      </Section>

      <Section title="4️⃣ When the whole system is in equilibrium">
        <p className="text-sm leading-relaxed">
          So far we've made <F>q_3</F> balance. For the <b>outer</b> charges to also balance, the middle one must attract them. So if the outer charges are both +, the middle must be −. Magnitude follows from forces:
        </p>
        <FBlock>{`\\text{Outer +}Q, \\text{ midpoint }q:\\quad \\frac{kQ^2}{L^2} = \\frac{kQ|q|}{(L/2)^2} \\Rightarrow |q| = \\frac{Q}{4}`}</FBlock>
        <p className="text-sm leading-relaxed">
          So <F>q = -Q/4</F> makes the entire three-charge system collinear equilibrium.
        </p>
      </Section>

      <Section title="5️⃣ Stability">
        <Callout kind="tip">
          Earnshaw's theorem (qualitative): no system of point charges held only by electrostatic forces can be in <b>stable</b> equilibrium in three dimensions. Along the line, however, equilibria exist; they are stable in one direction and unstable in the other. For NEET, the key facts:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Between two like charges: equilibrium of a third charge is <b>unstable along the line</b>.</li>
            <li>The 3-charge collinear-equilibrium (e.g. <F>+Q, -Q/4, +Q</F>) is unstable overall.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="6️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Position between unequal like charges</p>
          <p className="text-sm">Charges <F>+Q</F> and <F>+4Q</F> are placed a distance <F>L</F> apart. Where on the line joining them should a third charge <F>q</F> be placed for it to be in equilibrium?</p>
          <FBlock>{`\\sqrt{\\frac{4Q}{Q}} = \\frac{L-x}{x} \\Rightarrow 2x = L - x \\Rightarrow x = \\frac{L}{3}`}</FBlock>
          <p className="text-sm">From <F>+Q</F>: a distance <F>L/3</F>. From <F>+4Q</F>: <F>2L/3</F>.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Whole system in equilibrium</p>
          <p className="text-sm">Two charges <F>+Q</F> are placed a distance <F>L</F> apart. Find the charge <F>q</F> and its position so that the whole system is in equilibrium.</p>
          <FBlock>{`q = -\\frac{Q}{4}\\ \\text{at the midpoint}`}</FBlock>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Unlike charges, null point outside</p>
          <p className="text-sm">A charge <F>+4q</F> is at the origin, <F>-q</F> is at <F>x = L</F>. Where is the null point?</p>
          <FBlock>{`\\frac{4q}{x^2} = \\frac{q}{(x - L)^2} \\Rightarrow 2(x-L) = x \\Rightarrow x = 2L`}</FBlock>
          <p className="text-sm">Lies beyond the smaller charge <F>-q</F>, at <F>x = 2L</F>.</p>
        </div>
      </Section>

      <Section title="7️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting that for unlike outer charges the null point is <i>outside</i> the line, not between them.</li>
            <li>Solving without squaring properly: <F>{`(L-x)/x = \\sqrt{q_2/q_1}`}</F>, not just <F>{`q_2/q_1`}</F>.</li>
            <li>Believing the balance position depends on the third charge <F>q_3</F> — it doesn't (cancels out).</li>
            <li>Confusing <b>position</b> equilibrium of <F>q_3</F> with <b>system</b> equilibrium — they need different conditions.</li>
            <li>Assuming a collinear equilibrium is stable — it is not, in general.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.equilibrium" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.equilibrium" title="Charge in Equilibrium MCQs" questions={equilibriumMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
