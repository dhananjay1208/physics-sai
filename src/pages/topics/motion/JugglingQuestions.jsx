import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { jugglingMCQs } from '../../../data/motion/concept-mcqs.js'
import { jugglingNumericals } from '../../../data/motion/numericals.js'

export default function JugglingQuestions() {
  return (
    <TopicPage
      chapterTo="/motion-plane"
      chapterTitle="Motion in a Plane"
      title="Juggling & Relative Motion"
      subtitle="Two balls in the air, a stone dropped from a train, a ball thrown from a moving cart — classic NEET trick problems."
    >
      <Section title="1️⃣ Intuition — the juggler's rhythm">
        <Callout kind="analogy">
          A juggler keeping <b>n</b> balls in the air is really just managing <i>timing</i>. Each ball has a fixed air time <F>{`T = 2u/g`}</F> (depends on how hard you throw). If you throw a new one every <F>{`T/n`}</F> seconds, you always have <F>n</F> balls in flight and one landing perfectly into your hand.
        </Callout>
        <p className="text-sm leading-relaxed mt-2">
          Juggling problems are really two kinds of question rolled into one:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-1 mt-2">
          <li><b>Timing problems:</b> when/where do two thrown objects meet?</li>
          <li><b>Frame-of-reference problems:</b> what does the trajectory look like to a moving observer?</li>
        </ul>
      </Section>

      <Section title="2️⃣ The juggler's key formula">
        <p className="text-sm leading-relaxed">
          A ball thrown vertically up with speed <F>u</F> takes total air time:
        </p>
        <FBlock>{`T_{air} = \\frac{2 u}{g} = 2\\sqrt{\\frac{2 h}{g}}`}</FBlock>
        <p className="text-sm leading-relaxed">
          where <F>{`h = u^2/(2g)`}</F> is the max height. To juggle <F>n</F> balls continuously, the time interval between successive throws must satisfy:
        </p>
        <FBlock>{`\\Delta t = \\frac{T_{air}}{n} = \\frac{2 u}{n g}`}</FBlock>
        <p className="text-sm leading-relaxed">
          So at any instant the juggler has <F>{`n-1`}</F> balls in the air and <F>1</F> ball in hand (assuming instantaneous catch-and-throw).
        </p>
      </Section>

      <Section title="3️⃣ Two balls thrown with a time gap">
        <p className="text-sm leading-relaxed">
          A second ball B is thrown up with speed <F>u</F> exactly <F>\tau</F> seconds after ball A (same speed, same point). When and where do they meet?
        </p>
        <p className="text-sm leading-relaxed">
          Measure time <F>t</F> from B's throw. Positions:
        </p>
        <FBlock>{`y_A(t) = u(t+\\tau) - \\tfrac{1}{2} g (t+\\tau)^2`}</FBlock>
        <FBlock>{`y_B(t) = u t - \\tfrac{1}{2} g t^2`}</FBlock>
        <p className="text-sm leading-relaxed">
          Setting <F>{`y_A = y_B`}</F> and solving:
        </p>
        <FBlock>{`t = \\frac{u}{g} - \\frac{\\tau}{2}`}</FBlock>
        <p className="text-sm leading-relaxed">
          At that moment the meeting height is <F>{`y_B(t)`}</F>, which you can plug in.
        </p>
      </Section>

      <Section title="4️⃣ The Galilean frame trick">
        <p className="text-sm leading-relaxed">
          Any observer moving at <b>constant</b> velocity sees exactly the same physics as a stationary observer (Galilean relativity). This means:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>If you throw a ball straight up from a uniformly moving train/car/platform, it comes back into your hand — even though from the ground it looked like a parabola.</li>
          <li>If you drop a stone from a moving train, it falls vertically in the train's frame but traces a parabola in the ground frame.</li>
        </ul>
        <Callout kind="tip">
          NEET trick: whenever the platform is <b>accelerating</b> (not constant velocity), the ball does <i>not</i> return to your hand — the frame is non-inertial and you'll feel a pseudo-force that tilts the effective gravity. Watch for words like "accelerating car/cart".
        </Callout>
      </Section>

      <Section title="5️⃣ Worked examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Juggling 4 balls</p>
          <p className="text-sm leading-relaxed">
            A juggler keeps 4 balls in motion, each reaching <F>{`h = 5`}</F> m. What is the minimum time interval between successive throws? (<F>g = 10</F>)
          </p>
          <FBlock>{`T_{air} = 2\\sqrt{2 h / g} = 2\\sqrt{1} = 2\\ \\text{s}`}</FBlock>
          <FBlock>{`\\Delta t = T_{air}/n = 2/4 = 0.5\\ \\text{s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Two balls, 1 s gap</p>
          <p className="text-sm leading-relaxed">
            Ball A is thrown up at <F>{`20`}</F> m/s. 1 s later, ball B is thrown up at <F>{`20`}</F> m/s from the same point. Where and when do they meet? (<F>g = 10</F>)
          </p>
          <FBlock>{`t = u/g - \\tau/2 = 2 - 0.5 = 1.5\\,\\text{s (after B's throw)}`}</FBlock>
          <FBlock>{`y = 20(1.5) - 5(1.5)^2 = 30 - 11.25 = 18.75\\,\\text{m}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Stone from a moving train</p>
          <p className="text-sm leading-relaxed">
            A train moves at <F>{`15`}</F> m/s. A stone is dropped (not thrown) from a height of <F>{`20`}</F> m. Find the time to hit the ground and how far behind the drop point it lands in the ground frame. (<F>g = 10</F>)
          </p>
          <FBlock>{`t = \\sqrt{2 h / g} = 2\\,\\text{s}`}</FBlock>
          <FBlock>{`x = u_x t = 15 \\times 2 = 30\\,\\text{m (horizontal)}`}</FBlock>
          <p className="text-sm">The stone shares the train's <F>{`15`}</F> m/s horizontal velocity at release — so in the ground frame it travels 30 m horizontally. In the train's frame, it falls straight down.</p>
        </div>
      </Section>

      <Section title="6️⃣ Common mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>"A ball dropped from a uniformly moving train falls behind the drop point." <b>Wrong</b> (ground frame) — it travels with the train horizontally. In the train frame it drops straight down.</li>
            <li>Forgetting that "dropped" means initial <i>relative</i> velocity zero (in the carrier's frame), not in the ground frame.</li>
            <li>Forgetting the 1-second offset when one ball is thrown later — you must use <F>{`t+\\tau`}</F> for the first ball, not <F>t</F>.</li>
            <li>Assuming accelerating trains behave like uniformly moving ones. They do not — pseudo-forces kick in.</li>
            <li>Using juggling formula <F>{`\\Delta t = T_{air}/n`}</F> when the juggler holds each ball for finite time — then interval is larger than <F>{`T_{air}/n`}</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🧮 Practice numericals">
        <div className="space-y-4">
          {jugglingNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>

      <Section title="🎯 Quick Concept Check">
        <ScoreBoard topicId="motion.juggling" />
        <div className="mt-4">
          <MCQQuiz topicId="motion.juggling" title="Juggling & Relative Motion MCQs" questions={jugglingMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
