import TopicPage, { Section } from '../../../components/layout/TopicPage.jsx'
import Callout from '../../../components/ui/Callout.jsx'
import { F, FBlock } from '../../../components/ui/Formula.jsx'
import MCQQuiz from '../../../components/practice/MCQQuiz.jsx'
import ScoreBoard from '../../../components/practice/ScoreBoard.jsx'
import { propertiesMCQs } from '../../../data/electrostatics/concept-mcqs.js'

export default function PropertiesOfCharge() {
  return (
    <TopicPage
      chapterTo="/electrostatics"
      chapterTitle="Electrostatics"
      title="Properties of Charge"
      subtitle="What charge is, the rules it obeys, and the three ways one body becomes charged."
    >
      <Section title="1️⃣ Intuition">
        <Callout kind="analogy">
          Charge is the <b>electrical fingerprint</b> of matter. Every electron carries the same tiny stamp of <F>{`-1.6\\times10^{-19}`}</F> C; every proton carries its mirror image. You can't have half a stamp — charge comes in integer multiples of one electron. And in any isolated process, the total stamp count is conserved: charge can move from one body to another, but it never disappears.
        </Callout>
      </Section>

      <Section title="2️⃣ Two kinds of charge">
        <p className="text-sm leading-relaxed">
          Matter carries two kinds of charge — <b>positive</b> (on the proton) and <b>negative</b> (on the electron). They obey the universal rule:
        </p>
        <Callout kind="formula">
          Like charges <b>repel</b>; unlike charges <b>attract</b>.
        </Callout>
        <p className="text-sm leading-relaxed">
          A neutral body has equal numbers of protons and electrons. Charging means moving electrons in or out — never protons (in everyday processes).
        </p>
      </Section>

      <Section title="3️⃣ Quantization of charge">
        <FBlock>{`q = n\\,e, \\qquad e = 1.6\\times10^{-19}\\ \\text{C},\\quad n \\in \\mathbb{Z}`}</FBlock>
        <p className="text-sm leading-relaxed">
          Every isolated charge is an integer multiple of <F>e</F>. You can have <F>1.6\times10^{'{-19}'}</F> C or <F>3.2\times10^{'{-19}'}</F> C — but never <F>2.4\times10^{'{-19}'}</F> C. (NEET loves this trap.)
        </p>
      </Section>

      <Section title="4️⃣ Conservation of charge">
        <p className="text-sm leading-relaxed">
          The total charge of an isolated system is constant. Charge can move from one body to another (rubbing, contact, induction, even pair production), but the sum stays the same.
        </p>
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="text-sm">Example: when a glass rod (+q) and a silk cloth (−q) form by friction, the pair's total charge is still zero.</p>
        </div>
      </Section>

      <Section title="5️⃣ Three ways to charge a body">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Friction</p>
          <p className="text-sm">Rub two insulators together. Electrons hop from one to the other; the giver becomes positive, the receiver negative. (Glass rubbed with silk: glass becomes +; silk becomes −.)</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Conduction (contact)</p>
          <p className="text-sm">Touch a charged conductor to a neutral conductor; charge spreads until both share. Like-signed result on both.</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Induction (no contact)</p>
          <p className="text-sm">Bring a charged body close to a neutral conductor; charges in it rearrange. Ground the far side, then break contact, and the conductor is left with the <i>opposite</i> sign — without any direct contact.</p>
        </div>
      </Section>

      <Section title="6️⃣ Other useful facts">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><b>Additive:</b> total charge of a body is the algebraic sum of all charges on it.</li>
          <li><b>Scalar:</b> charge has magnitude and sign but no direction.</li>
          <li><b>Invariant:</b> charge does not change with velocity (unlike mass in relativity).</li>
          <li><b>Sharing:</b> two identical conductors brought into contact split the total charge equally between them.</li>
        </ul>
      </Section>

      <Section title="7️⃣ Worked Examples">
        <div className="card p-4 bg-slate-50 border-slate-200">
          <p className="font-semibold text-sm mb-1">Example 1 — Quantization check</p>
          <p className="text-sm">Can a body carry a charge of <F>{`8.0\\times10^{-19}`}</F> C?</p>
          <FBlock>{`n = \\frac{8.0\\times10^{-19}}{1.6\\times10^{-19}} = 5`}</FBlock>
          <p className="text-sm">Integer — yes, it's valid (5 elementary charges).</p>
        </div>
        <div className="card p-4 bg-slate-50 border-slate-200 mt-3">
          <p className="font-semibold text-sm mb-1">Example 2 — Charge sharing</p>
          <p className="text-sm">Two identical metal spheres carry charges +6 µC and −2 µC. After being touched and separated, each carries:</p>
          <FBlock>{`q = \\frac{+6 + (-2)}{2} = +2\\,\\mu\\text{C}`}</FBlock>
        </div>
      </Section>

      <Section title="8️⃣ Common Mistakes">
        <Callout kind="warning">
          <ul className="list-disc pl-5 space-y-1">
            <li>Believing charge transfers in continuous amounts — it doesn't; only integer multiples of <F>e</F>.</li>
            <li>Confusing conduction with induction — induction needs no contact.</li>
            <li>Thinking charging by friction creates new charge — it only redistributes existing electrons.</li>
            <li>Forgetting that on contact between identical bodies, the charge is shared equally.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="🎯 Concept MCQs">
        <ScoreBoard topicId="electro.properties" />
        <div className="mt-4">
          <MCQQuiz topicId="electro.properties" title="Properties of Charge MCQs" questions={propertiesMCQs} />
        </div>
      </Section>
    </TopicPage>
  )
}
