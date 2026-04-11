import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import ProjectileSim from '../../../components/sims/ProjectileSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { projectileMCQs } from '../../../data/motion/concept-mcqs.js'
import { projectileNumericals } from '../../../data/motion/numericals.js'

export default function ProjectileMotion() {
  return (
    <TopicPage
      chapterTo="/motion-plane"
      chapterTitle="Motion in a Plane"
      title="Projectile Motion"
      subtitle="A ball thrown at an angle is really doing two simple motions at once — one steady, one accelerating."
    >
      <Section title="1️⃣ Intuition — why 2D motion feels new">
        <Callout kind="analogy">
          Imagine a cricketer hitting a six. While the ball is in the air, two things happen <b>at the same time</b>: it keeps moving forward horizontally, and it rises then falls vertically. Gravity only acts on the up-down part — it doesn't care about the forward part at all.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          This is the single most important idea in all of projectile motion: <b>horizontal and vertical motions are independent</b>. The horizontal component has zero force on it (ignoring air drag), so it is uniform motion. The vertical component has only gravity, so it is uniformly accelerated motion. Solve them separately, then stitch them together.
        </p>
        <Callout kind="intuition">
          Think of a projectile as two problems glued together: a 1D uniform-velocity problem (x-direction) + a 1D free-fall problem (y-direction). Every projectile question you'll ever see is just "pick the right one of these two".
        </Callout>
      </Section>

      <Section title="2️⃣ Setup — components and equations">
        <p className="text-sm leading-relaxed">
          Launch a particle from the ground at speed <F>u</F> making angle <F>\theta</F> with the horizontal. Decompose the initial velocity:
        </p>
        <FBlock>{`u_x = u\\cos\\theta, \\qquad u_y = u\\sin\\theta`}</FBlock>
        <p className="text-sm leading-relaxed">
          After time <F>t</F>, since <F>{`a_x = 0`}</F> and <F>{`a_y = -g`}</F>:
        </p>
        <FBlock>{`x(t) = u\\cos\\theta \\cdot t`}</FBlock>
        <FBlock>{`y(t) = u\\sin\\theta \\cdot t - \\tfrac{1}{2} g t^2`}</FBlock>
        <FBlock>{`v_x(t) = u\\cos\\theta, \\qquad v_y(t) = u\\sin\\theta - g t`}</FBlock>
        <p className="text-sm leading-relaxed">
          That is the entire physics. Everything else — range, height, time of flight, trajectory equation — follows algebraically.
        </p>
      </Section>

      <Section title="3️⃣ Derivation — range, max height, time of flight">
        <p className="text-sm leading-relaxed">
          <b>Time of flight (T):</b> The projectile lands when <F>y = 0</F>. Solving <F>{`u\\sin\\theta \\cdot T - \\tfrac{1}{2} g T^2 = 0`}</F> gives two roots, <F>{`T = 0`}</F> (launch) and:
        </p>
        <FBlock>{`T = \\frac{2 u \\sin\\theta}{g}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <b>Maximum height (H):</b> At the peak, <F>{`v_y = 0`}</F>. Using <F>{`v_y^2 = u_y^2 - 2 g H`}</F>:
        </p>
        <FBlock>{`H = \\frac{u^2 \\sin^2\\theta}{2 g}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <b>Horizontal range (R):</b> Total horizontal distance = <F>{`u_x \\cdot T`}</F>. Substituting T:
        </p>
        <FBlock>{`R = u\\cos\\theta \\cdot \\frac{2 u\\sin\\theta}{g} = \\frac{u^2 \\sin 2\\theta}{g}`}</FBlock>
        <Callout kind="tip">
          Since <F>{`\\sin 2\\theta`}</F> peaks at <F>{`\\theta = 45°`}</F>, the range is maximum when <F>{`\\theta = 45°`}</F>. And because <F>{`\\sin 2\\theta = \\sin(180° - 2\\theta)`}</F>, the angles <F>\theta</F> and <F>{`90° - \\theta`}</F> (complementary) give the <b>same</b> range.
        </Callout>
        <ProjectileSim />
      </Section>

      <Section title="4️⃣ Worked examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Basic split</p>
          <p className="text-sm leading-relaxed">
            A ball is projected at <F>{`30\\,\\text{m/s}`}</F> at <F>{`\\theta = 53°`}</F>. Find T, H, R. (Take <F>{`g = 10, \\sin 53° = 0.8, \\cos 53° = 0.6`}</F>.)
          </p>
          <FBlock>{`u_x = 30(0.6) = 18,\\quad u_y = 30(0.8) = 24`}</FBlock>
          <FBlock>{`T = 2(24)/10 = 4.8\\,\\text{s}`}</FBlock>
          <FBlock>{`H = 24^2/(2\\cdot 10) = 28.8\\,\\text{m}`}</FBlock>
          <FBlock>{`R = 18 \\times 4.8 = 86.4\\,\\text{m}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Horizontal projection from height</p>
          <p className="text-sm leading-relaxed">
            A stone is thrown horizontally from a <F>{`80\\,\\text{m}`}</F> cliff at <F>{`20\\,\\text{m/s}`}</F>. When does it hit the ground and how far from the base?
          </p>
          <FBlock>{`t = \\sqrt{2 h / g} = \\sqrt{16} = 4\\,\\text{s}`}</FBlock>
          <FBlock>{`x = u_x \\cdot t = 20 \\times 4 = 80\\,\\text{m}`}</FBlock>
          <p className="text-xs text-slate-600 mt-1">The vertical motion is independent — starts from rest and falls under gravity. The horizontal motion is independent — stays at 20 m/s throughout.</p>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Velocity at a given time</p>
          <p className="text-sm leading-relaxed">
            A particle is launched at <F>{`u = 25`}</F> m/s, <F>{`\\theta = 37°`}</F>. Find the speed and direction of velocity at <F>{`t = 1.5`}</F> s. (<F>{`\\sin 37° = 0.6, \\cos 37° = 0.8, g = 10`}</F>)
          </p>
          <FBlock>{`v_x = 25(0.8) = 20,\\ v_y = 25(0.6) - 10(1.5) = 15 - 15 = 0`}</FBlock>
          <p className="text-sm">So the ball is momentarily at its highest point — speed is <b>20 m/s horizontal</b>.</p>
        </div>
      </Section>

      <Section title="5️⃣ Common mistakes NEET loves to test">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>"At the highest point, velocity is zero." <b>Wrong.</b> Only the <i>vertical</i> component is zero. Horizontal velocity <F>{`u\\cos\\theta`}</F> continues.</li>
            <li>"Time to reach max height = total time of flight / 2." True only if the projectile lands at the same height it was launched from. From a tower, the two halves are unequal.</li>
            <li>Forgetting to split <F>u</F> into components before plugging into equations. Always decompose first.</li>
            <li>Using <F>{`R = u^2\\sin 2\\theta/g`}</F> when the ground is not level. That formula assumes same launch and landing height.</li>
            <li>Ignoring the sign of <F>{`g`}</F>. If you take up as positive, <F>{`a_y = -g`}</F>; be consistent all the way through.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🧮 Practice numericals">
        <div className="space-y-4">
          {projectileNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>

      <Section title="🎯 Quick Concept Check">
        <ScoreBoard topicId="motion.projectile" />
        <div className="mt-4">
          <MCQQuiz topicId="motion.projectile" title="Projectile Motion MCQs" questions={projectileMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
