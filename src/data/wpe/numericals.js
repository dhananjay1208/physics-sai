export const energyNumericals = [
  {
    q: "A 2 kg block slides down a smooth incline of height 5 m. Find its speed at the bottom (g = 10).",
    given: "m = 2 kg, h = 5 m, smooth surface",
    hints: ["Use energy conservation: PE at top = KE at bottom.", "$mgh = \\frac{1}{2}mv^2$"],
    formula: "v = \\sqrt{2gh}",
    solution: ["$v = \\sqrt{2 \\times 10 \\times 5} = 10$ m/s"],
    answer: "10 m/s",
  },
  {
    q: "A spring with force constant 200 N/m is compressed by 10 cm. A 0.5 kg block is placed against it and released. Find the maximum speed of the block (no friction).",
    given: "k = 200 N/m, x = 0.1 m, m = 0.5 kg",
    hints: ["Spring PE = KE.", "$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$"],
    formula: "v = x\\sqrt{k/m}",
    solution: [
      "Spring PE = $\\frac{1}{2}(200)(0.01) = 1$ J",
      "$\\frac{1}{2}(0.5)v^2 = 1 ⇒ v = 2$ m/s",
    ],
    answer: "2 m/s",
  },
  {
    q: "A body of mass 4 kg is moving with velocity 6 m/s on a rough horizontal surface (μ = 0.2). How far does it go before stopping (g = 10)?",
    given: "m = 4, v = 6, μ = 0.2",
    hints: ["Friction does negative work = $\\mu m g \\cdot s$.", "Set equal to initial KE."],
    formula: "s = \\frac{v^2}{2\\mu g}",
    solution: ["$s = 36/(2 \\times 0.2 \\times 10) = 9$ m"],
    answer: "9 m",
  },
  {
    q: "A pump lifts 1500 kg of water per minute from a well 10 m deep. Power required (g = 10).",
    given: "rate = 1500 kg/min, h = 10 m",
    hints: ["Work per minute = mgh.", "Power = work/time."],
    formula: "P = \\frac{mgh}{t}",
    solution: [
      "$W = 1500 \\times 10 \\times 10 = 150000$ J in 60 s",
      "$P = 2500$ W = 2.5 kW",
    ],
    answer: "2.5 kW",
  },
  {
    q: "A body of mass 5 kg is acted upon by a force $F = (3x + 2)$ N. Find the work done in moving it from x = 0 to x = 4 m.",
    given: "$F = 3x+2$, 0 → 4 m",
    hints: ["Variable force ⇒ integrate F dx."],
    formula: "W = \\int_0^4 (3x+2)\\,dx",
    solution: ["$W = [\\frac{3x^2}{2} + 2x]_0^4 = 24 + 8 = 32$ J"],
    answer: "32 J",
  },
]

export const collisionNumericals = [
  {
    q: "A 3 kg ball moving at 5 m/s collides head-on perfectly inelastically with a 2 kg ball at rest. Find: (a) common velocity, (b) loss in KE.",
    given: "m₁=3, u₁=5, m₂=2, u₂=0, e=0",
    hints: ["Use momentum conservation for v.", "$\\Delta KE = KE_i - KE_f$"],
    formula: "v = \\frac{m_1 u_1}{m_1+m_2}",
    solution: [
      "$v = 15/5 = 3$ m/s",
      "KE_i = 0.5(3)(25) = 37.5 J",
      "KE_f = 0.5(5)(9) = 22.5 J",
      "Loss = 15 J",
    ],
    answer: "v = 3 m/s, loss = 15 J",
  },
  {
    q: "A ball is dropped from a height of 5 m on a floor. Coefficient of restitution = 0.6. Find the height after the first bounce.",
    given: "h = 5 m, e = 0.6",
    hints: ["After bounce, $v' = e v$.", "New height $h' = e^2 h$."],
    formula: "h' = e^2 h",
    solution: ["$h' = 0.36 \\times 5 = 1.8$ m"],
    answer: "1.8 m",
  },
  {
    q: "A 4 kg ball moving with 10 m/s collides elastically head-on with a 2 kg ball at rest. Find their velocities after collision.",
    given: "m₁=4, u₁=10, m₂=2, u₂=0",
    hints: ["Use elastic collision formulas."],
    formula: "v_1' = \\frac{m_1-m_2}{m_1+m_2}u_1, \\ v_2' = \\frac{2m_1}{m_1+m_2}u_1",
    solution: [
      "$v_1' = (2/6)(10) = 3.33$ m/s",
      "$v_2' = (8/6)(10) = 13.33$ m/s",
    ],
    answer: "v₁' ≈ 3.33 m/s, v₂' ≈ 13.33 m/s",
  },
  {
    q: "A 1 kg body moving with 10 m/s collides elastically with a stationary 1 kg body. Find velocities after collision.",
    given: "m₁ = m₂ = 1 kg, u₁=10, u₂=0",
    hints: ["Equal masses elastic collision: velocities exchange."],
    solution: ["$v_1' = 0$, $v_2' = 10$ m/s"],
    answer: "v₁' = 0, v₂' = 10 m/s",
  },
  {
    q: "A bullet of mass 50 g moving at 200 m/s embeds in a 4.95 kg block hanging from a string (ballistic pendulum). To what height does the block rise? (g = 10)",
    given: "m=0.05, u=200, M=4.95",
    hints: ["First find common velocity by momentum conservation.", "Then use energy conservation $\\frac{1}{2}(m+M)v^2 = (m+M)gh$."],
    formula: "h = \\frac{v^2}{2g}",
    solution: [
      "$v = (0.05 \\times 200)/5 = 2$ m/s",
      "$h = 4/(20) = 0.2$ m = 20 cm",
    ],
    answer: "0.2 m (20 cm)",
  },
]
