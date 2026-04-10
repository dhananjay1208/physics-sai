// Stepwise numerical problems for Laws of Motion.

export const gunBulletNumericals = [
  {
    q: "A bullet of mass 10 g is fired from a gun of mass 5 kg with a velocity of 400 m/s. Find the recoil velocity of the gun.",
    given: "m = 0.01 kg, v = 400 m/s, M = 5 kg",
    hints: [
      "Use conservation of momentum. Total momentum before firing = 0.",
      "$mv + MV = 0 ⇒ V = -mv/M$",
    ],
    formula: "V_{gun} = -\\frac{m v}{M}",
    solution: [
      "Before firing both gun and bullet are at rest, so total momentum = 0.",
      "After firing: $p = 0.01 \\times 400 + 5 \\times V = 0$",
      "$V = -4/5 = -0.8$ m/s",
    ],
    answer: "0.8 m/s, opposite to bullet",
  },
  {
    q: "A 4 kg gun fires a 20 g bullet with a muzzle velocity of 300 m/s. What is the kinetic energy of the gun and that of the bullet? Why is the bullet's KE much larger?",
    given: "M = 4 kg, m = 0.02 kg, v = 300 m/s",
    hints: [
      "First find the recoil velocity using momentum conservation.",
      "Then use $KE = (1/2)mv^2$ for both.",
      "Notice $KE = p^2/(2m)$. For equal $p$, KE is inversely proportional to mass.",
    ],
    formula: "KE = \\frac{1}{2}mv^2",
    solution: [
      "Recoil velocity: $V = -mv/M = -(0.02)(300)/4 = -1.5$ m/s",
      "$KE_{bullet} = 0.5 \\times 0.02 \\times 300^2 = 900$ J",
      "$KE_{gun} = 0.5 \\times 4 \\times 1.5^2 = 4.5$ J",
      "Both have equal momentum, but the bullet (smaller mass) gets ~200× more KE.",
    ],
    answer: "Bullet 900 J, Gun 4.5 J",
  },
  {
    q: "A machine gun fires bullets each of mass 50 g at a speed of 1000 m/s. The man holding the gun can exert a maximum force of 200 N. The maximum number of bullets he can fire per second is:",
    given: "m = 0.05 kg, v = 1000 m/s, F = 200 N",
    hints: [
      "Force = rate of change of momentum.",
      "$F = n m v$, where n = bullets per second.",
    ],
    formula: "n = \\frac{F}{mv}",
    solution: [
      "Each bullet carries momentum $p = mv = 0.05 \\times 1000 = 50$ kg·m/s",
      "$n = F/p = 200/50 = 4$",
    ],
    answer: "4 bullets per second",
  },
  {
    q: "A bullet of mass 20 g hits a wooden block of mass 980 g at rest and embeds in it. The block (with bullet) moves with 2 m/s after impact. Find the initial speed of the bullet.",
    given: "m = 0.02 kg, M = 0.98 kg, V = 2 m/s",
    hints: [
      "Apply conservation of momentum (perfectly inelastic).",
      "$mu = (m+M)V$",
    ],
    formula: "u = \\frac{(m+M)V}{m}",
    solution: [
      "$0.02 \\times u = (0.02 + 0.98) \\times 2 = 2$",
      "$u = 100$ m/s",
    ],
    answer: "100 m/s",
  },
  {
    q: "A gun of mass 10 kg fires 4 bullets per second. Each bullet has mass 20 g and emerges with velocity 300 m/s. What force is needed to keep the gun in position?",
    given: "M = 10 kg, n = 4/s, m = 0.02 kg, v = 300 m/s",
    hints: [
      "Force on gun = rate of change of bullet momentum.",
      "$F = nmv$",
    ],
    formula: "F = nmv",
    solution: [
      "Momentum per bullet = $0.02 \\times 300 = 6$ kg·m/s",
      "Per second 4 bullets ⇒ $\\Delta p / \\Delta t = 24$ N",
    ],
    answer: "24 N",
  },
  {
    q: "A bullet of mass 5 g, moving with 300 m/s, strikes a 1 kg target at rest and gets embedded. Find: (a) the common velocity, (b) loss in KE.",
    given: "m = 0.005 kg, v = 300 m/s, M = 1 kg",
    hints: [
      "Use momentum conservation for common velocity.",
      "Then use $\\Delta KE = KE_i - KE_f$.",
    ],
    formula: "v_{common} = \\frac{mv}{m+M}",
    solution: [
      "$v = 0.005 \\times 300 / 1.005 ≈ 1.49$ m/s",
      "$KE_i = 0.5(0.005)(300)^2 = 225$ J",
      "$KE_f = 0.5(1.005)(1.49)^2 ≈ 1.116$ J",
      "$\\Delta KE ≈ 223.88$ J (lost as heat / deformation)",
    ],
    answer: "v ≈ 1.49 m/s, ΔKE ≈ 223.9 J",
  },
  {
    q: "A rifle of mass 4 kg fires a 50 g bullet horizontally with 200 m/s. If the rifle is held loosely (free to recoil), find recoil velocity. If held firmly against the shoulder of a 70 kg man, find the recoil velocity of the man+rifle system.",
    given: "M_r = 4 kg, m = 0.05 kg, v = 200 m/s, M_man = 70 kg",
    hints: [
      "Case 1: only rifle recoils.",
      "Case 2: rifle + man recoil together (much larger mass).",
    ],
    formula: "V = -\\frac{mv}{M_{total}}",
    solution: [
      "Free rifle: $V = -0.05 \\times 200 / 4 = -2.5$ m/s",
      "With man: $V = -0.05 \\times 200 / (70+4) ≈ -0.135$ m/s",
    ],
    answer: "Free: 2.5 m/s, Held: 0.135 m/s",
  },
  {
    q: "A bullet of mass 0.04 kg moving at 90 m/s enters a block of wood and is brought to rest after penetrating 60 cm. What is the average resistive force exerted by the wood?",
    given: "m = 0.04 kg, u = 90 m/s, v = 0, s = 0.6 m",
    hints: [
      "Use work-energy theorem: work done by resistive force = change in KE.",
      "$F \\cdot s = \\frac{1}{2}m u^2$",
    ],
    formula: "F = \\frac{m u^2}{2s}",
    solution: [
      "$F = (0.04 \\times 8100)/(2 \\times 0.6) = 324/1.2 = 270$ N",
    ],
    answer: "270 N",
  },
  {
    q: "Two bullets are fired horizontally with the same momentum from the same gun. One has mass m and the other 2m. The ratio of distances they cover before stopping in a wooden block of constant resistive force is:",
    given: "Equal momentum, masses m and 2m",
    hints: [
      "Distance from $F\\cdot s = KE = p^2/(2m)$.",
      "For equal $p$, $s \\propto 1/m$.",
    ],
    solution: [
      "$s_1/s_2 = (1/m)/(1/2m) = 2/1$",
    ],
    answer: "2 : 1",
  },
  {
    q: "A man fires bullets of mass 10 g at the rate of 5 per second. Each bullet has speed 600 m/s. What is the average force exerted on the man's shoulder?",
    given: "m = 0.01 kg, n = 5/s, v = 600 m/s",
    hints: [
      "Force = rate of change of momentum = $nmv$.",
    ],
    formula: "F = n m v",
    solution: ["$F = 5 \\times 0.01 \\times 600 = 30$ N"],
    answer: "30 N",
  },
]

export const rocketNumericals = [
  {
    q: "A rocket burns fuel at a rate of 50 kg/s and ejects it with velocity 2 km/s. Calculate the thrust on the rocket.",
    given: "dm/dt = 50 kg/s, $v_e$ = 2000 m/s",
    hints: ["Thrust = $v_e \\cdot dm/dt$"],
    formula: "F = v_e \\frac{dm}{dt}",
    solution: ["$F = 2000 \\times 50 = 10^5$ N = 100 kN"],
    answer: "10⁵ N (100 kN)",
  },
  {
    q: "A rocket of initial mass 6000 kg burns fuel at 60 kg/s with exhaust velocity 1.5 km/s. Find the initial acceleration. (Take g = 9.8)",
    given: "$m_0 = 6000$ kg, dm/dt = 60, $v_e = 1500$",
    hints: ["Thrust = $v_e (dm/dt)$. Net force = thrust − mg. $a = (F - mg)/m$."],
    formula: "a = \\frac{v_e\\,dm/dt - mg}{m}",
    solution: [
      "Thrust = 1500 × 60 = 90000 N",
      "Weight = 6000 × 9.8 = 58800 N",
      "Net = 31200 N. $a = 31200/6000 = 5.2$ m/s²",
    ],
    answer: "5.2 m/s²",
  },
  {
    q: "Find the velocity gained by a rocket when its mass becomes one-tenth of the initial mass. Exhaust velocity = 2 km/s. (Ignore gravity.)",
    given: "$m/m_0 = 1/10$, $v_e = 2000$ m/s",
    hints: ["Use Tsiolkovsky equation: $v = v_e \\ln(m_0/m)$."],
    formula: "v = v_e \\ln\\frac{m_0}{m}",
    solution: ["$v = 2000 \\times \\ln 10 ≈ 2000 \\times 2.303 = 4606$ m/s"],
    answer: "≈ 4606 m/s",
  },
  {
    q: "A rocket has a mass of 1000 kg and ejects fuel at 800 m/s. The mass of fuel ejected per second is 10 kg. After 30 s, find: (a) thrust, (b) mass remaining, (c) acceleration ignoring gravity.",
    given: "$m_0 = 1000, v_e = 800, dm/dt = 10$, t = 30 s",
    hints: ["Thrust constant = $v_e \\cdot dm/dt$. Mass = $m_0 - (dm/dt) t$. $a = F/m$."],
    formula: "F = v_e\\frac{dm}{dt},\\ a = \\frac{F}{m_0 - (dm/dt)t}",
    solution: [
      "Thrust = 800 × 10 = 8000 N",
      "Mass after 30 s = 1000 − 300 = 700 kg",
      "$a = 8000/700 ≈ 11.43$ m/s²",
    ],
    answer: "F = 8000 N, m = 700 kg, a ≈ 11.43 m/s²",
  },
  {
    q: "What should be the minimum exhaust velocity from a rocket of mass 5000 kg ejecting 25 kg of fuel per second so that it can lift off the ground? (g = 10)",
    given: "m = 5000 kg, dm/dt = 25, g = 10",
    hints: ["For lift off: thrust ≥ mg ⇒ $v_e (dm/dt) ≥ mg$."],
    formula: "v_e \\geq \\frac{mg}{dm/dt}",
    solution: ["$v_e ≥ 5000 \\times 10 / 25 = 2000$ m/s"],
    answer: "2000 m/s",
  },
]
