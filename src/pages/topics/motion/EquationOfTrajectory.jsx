import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import ProjectileSim from '../../../components/sims/ProjectileSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { trajectoryMCQs } from '../../../data/motion/concept-mcqs.js'
import { trajectoryNumericals } from '../../../data/motion/numericals.js'

export default function EquationOfTrajectory() {
  return (
    <TopicPage
      chapterTo="/motion-plane"
      chapterTitle="Motion in a Plane"
      title="Equation of Trajectory"
      subtitle="Eliminate time, and the projectile's path becomes a single equation — a parabola."
    >
      <Section title="1️⃣ Intuition — why a parabola?">
        <Callout kind="analogy">
          If gravity were switched off, a thrown ball would go in a straight line forever. Gravity pulls it down a little more with every passing second — like a straight line being continuously bent. The amount of bending grows with the <i>square</i> of time, and that's exactly what a parabola is.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          The time variable <F>t</F> is hidden when we ask the question "what is the path?". So we eliminate <F>t</F> and get a direct relation between <F>y</F> and <F>x</F>. That relation is the equation of trajectory.
        </p>
      </Section>

      <Section title="2️⃣ Setup">
        <p className="text-sm leading-relaxed">
          A particle is projected from origin with speed <F>u</F> at angle <F>\theta</F> above horizontal. We already know the parametric motion:
        </p>
        <FBlock>{`x = u\\cos\\theta \\cdot t \\qquad (1)`}</FBlock>
        <FBlock>{`y = u\\sin\\theta \\cdot t - \\tfrac{1}{2} g t^2 \\qquad (2)`}</FBlock>
        <p className="text-sm leading-relaxed">
          We want <F>y</F> as a function of <F>x</F> alone. So we need to kill the <F>t</F>.
        </p>
      </Section>

      <Section title="3️⃣ Derivation">
        <p className="text-sm leading-relaxed">
          From equation (1), <F>{`t = x / (u\\cos\\theta)`}</F>. Substitute this into equation (2):
        </p>
        <FBlock>{`y = u\\sin\\theta \\cdot \\frac{x}{u\\cos\\theta} - \\frac{1}{2} g \\left(\\frac{x}{u\\cos\\theta}\\right)^2`}</FBlock>
        <FBlock>{`\\boxed{\\ y = x\\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}\\ }`}</FBlock>
        <p className="text-sm leading-relaxed">
          This is of the form <F>{`y = a x - b x^2`}</F> with:
        </p>
        <FBlock>{`a = \\tan\\theta, \\qquad b = \\frac{g}{2 u^2 \\cos^2\\theta}`}</FBlock>
        <p className="text-sm leading-relaxed">
          A parabola — because of the single <F>{`x^2`}</F> term. The first term <F>{`x\\tan\\theta`}</F> is the straight-line path the ball <i>would</i> follow without gravity; the second term is "how much gravity has dragged it down by the time it got to horizontal position <F>x</F>".
        </p>
        <Callout kind="tip">
          You can <b>read</b> the launch conditions straight off the trajectory equation: the coefficient of <F>x</F> gives <F>{`\\tan\\theta`}</F>, and once you know <F>\theta</F>, the coefficient of <F>{`x^2`}</F> gives you <F>u</F>. NEET loves this reverse problem.
        </Callout>
        <ProjectileSim />
      </Section>

      <Section title="4️⃣ Range and max height from the trajectory">
        <p className="text-sm leading-relaxed">
          <b>Range:</b> Set <F>y = 0</F>. Factor out <F>x</F>:
        </p>
        <FBlock>{`x\\left(\\tan\\theta - \\frac{g x}{2 u^2 \\cos^2\\theta}\\right) = 0`}</FBlock>
        <p className="text-sm">The non-zero root is:</p>
        <FBlock>{`R = \\frac{2 u^2 \\sin\\theta \\cos\\theta}{g} = \\frac{u^2 \\sin 2\\theta}{g}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <b>Max height:</b> Setting <F>{`dy/dx = 0`}</F> gives <F>{`x = R/2`}</F> (by symmetry). Substituting back:
        </p>
        <FBlock>{`H = \\frac{u^2 \\sin^2\\theta}{2 g}`}</FBlock>
      </Section>

      <Section title="5️⃣ Projectile on an incline (brief)">
        <p className="text-sm leading-relaxed">
          If the "ground" is itself tilted at angle <F>\alpha</F>, the usual formulas don't apply directly. Rotate your axes so that the x-axis lies along the incline. Gravity then has components <F>{`-g\\sin\\alpha`}</F> along the incline and <F>{`-g\\cos\\alpha`}</F> perpendicular. The range up the incline works out to:
        </p>
        <FBlock>{`R_{incline} = \\frac{2 u^2 \\sin(\\theta - \\alpha)\\cos\\theta}{g\\cos^2\\alpha}`}</FBlock>
        <p className="text-sm">Maximum when the launch angle with respect to the incline equals <F>{`45° - \\alpha/2`}</F>.</p>
      </Section>

      <Section title="6️⃣ Worked examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Read the trajectory</p>
          <p className="text-sm leading-relaxed">
            A projectile has trajectory <F>{`y = \\sqrt 3\\, x - \\tfrac{x^2}{20}`}</F> (in meters, <F>{`g=10`}</F>). Find <F>\theta</F> and <F>u</F>.
          </p>
          <FBlock>{`\\tan\\theta = \\sqrt 3 \\Rightarrow \\theta = 60°`}</FBlock>
          <FBlock>{`\\frac{g}{2 u^2 \\cos^2 60°} = \\frac{1}{20}`}</FBlock>
          <FBlock>{`u^2 = \\frac{10 \\cdot 20}{2 \\cdot 1/4} = 400 \\Rightarrow u = 20\\ \\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Find max height from trajectory</p>
          <p className="text-sm leading-relaxed">
            Given <F>{`y = 4 x - x^2/40`}</F>, find H.
          </p>
          <FBlock>{`\\frac{dy}{dx} = 4 - \\frac{x}{20} = 0 \\Rightarrow x = 80`}</FBlock>
          <FBlock>{`H = 4(80) - (80)^2/40 = 320 - 160 = 160\\,\\text{m}`}</FBlock>
        </div>
      </Section>

      <Section title="7️⃣ Common mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Confusing the coefficient of <F>x</F> with <F>\theta</F> instead of <F>{`\\tan\\theta`}</F>.</li>
            <li>Forgetting that <F>{`1/\\cos^2\\theta = 1 + \\tan^2\\theta`}</F> — this identity is what converts the trajectory equation into a quadratic in <F>{`\\tan\\theta`}</F> when you're solving for the angle given a point on the path.</li>
            <li>Applying <F>{`R = u^2\\sin 2\\theta/g`}</F> to an inclined plane. Wrong — use the incline formula.</li>
            <li>Treating <F>{`y = x\\tan\\theta`}</F> (the "no gravity" straight line) as the trajectory. That's only the first term.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🧮 Practice numericals">
        <div className="space-y-4">
          {trajectoryNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>

      <Section title="🎯 Quick Concept Check">
        <ScoreBoard topicId="motion.trajectory" />
        <div className="mt-4">
          <MCQQuiz topicId="motion.trajectory" title="Equation of Trajectory MCQs" questions={trajectoryMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
