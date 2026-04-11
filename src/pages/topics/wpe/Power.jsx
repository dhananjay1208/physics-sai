import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import PowerSim from '../../../components/sims/PowerSim.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { powerMCQs } from '../../../data/wpe/concept-mcqs.js'

export default function Power() {
  return (
    <TopicPage
      chapterTo="/wpe"
      chapterTitle="Work, Power & Energy"
      title="Power"
      subtitle="How fast work is being done — and the secret behind why your bike has gears."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Two people lift the same 20 kg bag onto a shelf. One does it in 1 second, one in 5 seconds. They did the <b>same work</b>, but the first one was <b>5× more powerful</b>. Power is about <i>rate</i>, not amount.
        </Callout>
      </Section>

      <Section title="2️⃣ Definitions">
        <FBlock>{`P_{avg} = \\frac{W}{t}`}</FBlock>
        <FBlock>{`P_{inst} = \\frac{dW}{dt} = \\vec F\\cdot\\vec v`}</FBlock>
        <p className="text-sm leading-relaxed">
          The instantaneous form <F>{`P = \\vec F\\cdot\\vec v`}</F> is the most useful in NEET problems. It says: at any moment, the power being delivered equals the dot product of the force on the body and its velocity.
        </p>
        <p className="text-sm leading-relaxed">
          <b>SI unit:</b> Watt (W) = J/s. <b>1 horsepower</b> ≈ 746 W. The kilowatt-hour (kWh) used in electricity bills is a unit of <i>energy</i>, not power: 1 kWh = <F>{`3.6\\times 10^6`}</F> J.
        </p>
      </Section>

      <Section title="3️⃣ Two key applications">
        <p className="text-sm leading-relaxed">
          <b>(a) Maximum velocity at constant power.</b> An engine delivering constant power <F>P</F> against a constant friction <F>f</F> reaches a top speed when <F>{`P = f v_{max}`}</F>:
        </p>
        <FBlock>{`v_{max} = \\frac{P}{f}`}</FBlock>
        <p className="text-sm leading-relaxed">
          <b>(b) Pumping water.</b> A pump lifting <F>m</F> kg of water per second to height <F>h</F> needs power:
        </p>
        <FBlock>{`P = \\frac{(\\text{mass per second})(g h)}{1}`}</FBlock>
        <p className="text-sm leading-relaxed">
          which is just <F>{`(dm/dt) g h`}</F> when efficiency = 100%.
        </p>
      </Section>

      <Section title="4️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Pump</p>
          <p className="text-sm leading-relaxed">
            A pump lifts 600 kg of water per minute to a height of 20 m. Find the power needed (g = 10).
          </p>
          <FBlock>{`W = m g h = 600 \\times 10 \\times 20 = 1.2\\times 10^5\\,\\text{J in 60 s}`}</FBlock>
          <FBlock>{`P = 1.2\\times 10^5/60 = 2000\\,\\text{W} = 2\\,\\text{kW}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Truck top speed</p>
          <p className="text-sm leading-relaxed">
            A 60 kW engine drives a truck against a constant friction of 1500 N. Find the top speed.
          </p>
          <FBlock>{`v = P/f = 60000/1500 = 40\\,\\text{m/s}`}</FBlock>
        </div>

        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 3 — Power as a function of time</p>
          <p className="text-sm leading-relaxed">
            A 2 kg body starts from rest under a constant force of 4 N. Find the instantaneous power at <F>{`t = 3`}</F> s.
          </p>
          <FBlock>{`a = F/m = 2\\,\\text{m/s}^2,\\ v(t=3) = 6\\,\\text{m/s}`}</FBlock>
          <FBlock>{`P = F\\cdot v = 4 \\times 6 = 24\\,\\text{W}`}</FBlock>
        </div>
      </Section>

      <Section title="5️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Confusing kilowatt-hour (energy) with kilowatt (power).</li>
            <li>Using average power when the question asks for instantaneous, or vice versa.</li>
            <li>Forgetting the dot product: only the component of force along velocity contributes to power. A force perpendicular to velocity (e.g. centripetal) gives <i>zero</i> instantaneous power.</li>
            <li>Mixing minutes and seconds when computing pump power.</li>
            <li>Forgetting efficiency. If a pump is 80% efficient, you need <F>{`P_{input} = P_{useful}/0.8`}</F>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <PowerSim />
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="wpe.power" />
        <div className="mt-4">
          <MCQQuiz topicId="wpe.power" title="Power MCQs" questions={powerMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
