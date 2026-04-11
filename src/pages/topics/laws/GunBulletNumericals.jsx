import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import GunRecoilSim from '../../../components/sims/GunRecoilSim.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import { gunBulletNumericals } from '../../../data/laws/numericals.js'

export default function GunBulletNumericals() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Gun–Bullet Numericals 🔫"
      subtitle="The classic application of momentum conservation. Master the recoil + KE-split combo and you've handled an entire NEET sub-topic."
    >
      <Section title="1️⃣ The Setup">
        <Callout kind="analogy">
          Standing on a skateboard, throw a heavy ball forward — you roll backwards. A gun firing a bullet does the same: the bullet shoots forward, the gun "rolls" backward. We call this <b>recoil</b>.
        </Callout>
        <p className="text-sm leading-relaxed">
          Before firing, gun and bullet are both at rest, so total momentum = 0. After firing, momentum is still zero (the firing is an internal force). So:
        </p>
        <FBlock>{`m\\,v + M\\,V = 0 \\Rightarrow V = -\\frac{m v}{M}`}</FBlock>
        <p className="text-sm">where <F>{`m, v`}</F> = bullet mass and velocity, <F>{`M, V`}</F> = gun mass and recoil velocity.</p>
      </Section>

      <Section title="2️⃣ Why the bullet does the damage — KE split">
        <p className="text-sm leading-relaxed">
          Momentum magnitudes are equal: <F>{`|p_{bullet}| = |p_{gun}|`}</F>. But kinetic energies are <i>not</i> equal:
        </p>
        <FBlock>{`KE = \\frac{p^2}{2 m}`}</FBlock>
        <p className="text-sm leading-relaxed">
          For equal momenta, KE is inversely proportional to mass. Since <F>{`M \\gg m`}</F>:
        </p>
        <Callout kind="formula">
          <FBlock>{`\\frac{KE_{bullet}}{KE_{gun}} = \\frac{M}{m}`}</FBlock>
        </Callout>
        <p className="text-sm leading-relaxed">
          So the bullet (small mass) walks away with hundreds of times more KE than the gun. This is why a 5 kg gun can comfortably absorb the recoil of a 10 g bullet that has enough KE to penetrate steel.
        </p>
      </Section>

      <Section title="3️⃣ The other classic: machine-gun thrust">
        <p className="text-sm leading-relaxed">
          If a gun fires <F>n</F> bullets per second, each of mass <F>m</F> at velocity <F>v</F>, the average force needed to hold the gun is:
        </p>
        <FBlock>{`F = \\frac{\\Delta p}{\\Delta t} = n\\,m\\,v`}</FBlock>
        <p className="text-sm leading-relaxed">
          Same idea as rocket thrust: rate of momentum change equals force.
        </p>
      </Section>

      <Section title="4️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Saying "the bullet and gun share KE equally". They share <i>momentum</i> equally (magnitude), not KE.</li>
            <li>Forgetting the negative sign on the gun's recoil velocity — it tells you the direction.</li>
            <li>Using <F>{`v + V`}</F> in momentum equation when bullet and gun move in opposite directions. Use vector signs, not magnitudes.</li>
            <li>For "bullet held against shoulder" type problems, the recoiling mass is gun + person, not just gun.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎮 Try it">
        <GunRecoilSim />
      </Section>

      <Section title="🧮 Solved Problems">
        <div className="grid gap-3">
          {gunBulletNumericals.map((p, i) => (
            <NumericalProblem key={i} problem={p} index={i} />
          ))}
        </div>
      </Section>
    </TopicPage>
  )
}
