import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { FBlock } from '../../../components/ui/Formula.jsx'
import GunRecoilSim from '../../../components/sims/GunRecoilSim.jsx'
import NumericalProblem from '../../../components/practice/NumericalProblem.jsx'
import { gunBulletNumericals } from '../../../data/laws/numericals.js'

export default function GunBulletNumericals() {
  return (
    <TopicPage
      chapterTo="/laws"
      chapterTitle="Laws of Motion"
      title="Gun–Bullet Numericals 🔫"
      subtitle="The classic application of momentum conservation."
    >
      <Section title="The setup">
        <Callout kind="analogy">
          Standing on a skateboard, throw a heavy ball forward — you roll backwards. A gun firing a bullet does the same: the bullet shoots forward, the gun "rolls" backward. We call that <b>recoil</b>.
        </Callout>
        <p className="text-sm">Before firing, both gun and bullet are at rest, so total momentum = 0.</p>
        <FBlock>{`m\\,v + M\\,V = 0 \\;\\Rightarrow\\; V = -\\frac{m v}{M}`}</FBlock>
        <p className="text-sm">Where <b>m, v</b> = bullet, <b>M, V</b> = gun.</p>
      </Section>

      <Section title="Why the bullet does the damage">
        <Callout kind="tip">
          Momentum is shared equally (in magnitude) but kinetic energy is NOT.
          <FBlock>{`\\dfrac{KE_{bullet}}{KE_{gun}} = \\dfrac{M}{m}`}</FBlock>
          Since <b>M ≫ m</b>, the bullet ends up with hundreds of times more KE.
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
