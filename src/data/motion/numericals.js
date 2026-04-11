// Stepwise numerical problems for Motion in a Plane.

export const projectileNumericals = [
  {
    q: "A ball is thrown with a speed of $40$ m/s at an angle of $30°$ with the horizontal. Find (a) the time of flight, (b) the maximum height, (c) the horizontal range. Take $g = 10$ m/s².",
    given: "u = 40 m/s, θ = 30°, g = 10 m/s²",
    hints: [
      "Split into $u_x = u\\cos\\theta$ and $u_y = u\\sin\\theta$.",
      "Use $T = 2u\\sin\\theta/g$, $H = u^2\\sin^2\\theta/2g$, $R = u^2\\sin 2\\theta/g$.",
    ],
    formula: "T = \\frac{2u\\sin\\theta}{g},\\ H = \\frac{u^2\\sin^2\\theta}{2g},\\ R = \\frac{u^2\\sin 2\\theta}{g}",
    solution: [
      "$u_x = 40\\cos 30° = 20\\sqrt 3 \\approx 34.64$ m/s",
      "$u_y = 40\\sin 30° = 20$ m/s",
      "$T = 2(20)/10 = 4$ s",
      "$H = 20^2/(2\\cdot 10) = 20$ m",
      "$R = u_x \\cdot T = 20\\sqrt 3 \\cdot 4 = 80\\sqrt 3 \\approx 138.6$ m (or $R = 1600\\sin 60°/10 = 80\\sqrt 3$)",
    ],
    answer: "T = 4 s, H = 20 m, R ≈ 138.6 m",
  },
  {
    q: "A stone is thrown horizontally with speed $15$ m/s from the top of a cliff $125$ m high. Find the time to reach the ground and the horizontal distance from the base of the cliff. ($g = 10$)",
    given: "u = 15 m/s (horizontal), h = 125 m, g = 10",
    hints: [
      "Horizontal and vertical motions are independent.",
      "Time of fall from $h = (1/2) g t^2$.",
      "Horizontal distance = $u t$.",
    ],
    formula: "t = \\sqrt{2h/g},\\ x = u t",
    solution: [
      "$t = \\sqrt{2(125)/10} = \\sqrt{25} = 5$ s",
      "$x = 15 \\times 5 = 75$ m",
    ],
    answer: "t = 5 s, x = 75 m",
  },
  {
    q: "A projectile is fired with velocity $50$ m/s at $53°$ above the horizontal. Find the velocity (magnitude and direction) after 2 s. ($\\sin 53° = 0.8$, $\\cos 53° = 0.6$, $g = 10$)",
    given: "u = 50 m/s, θ = 53°, t = 2 s",
    hints: [
      "$v_x$ is constant = $u\\cos\\theta$.",
      "$v_y = u\\sin\\theta - g t$.",
      "Magnitude = $\\sqrt{v_x^2 + v_y^2}$, direction $= \\tan^{-1}(v_y/v_x)$.",
    ],
    formula: "\\vec v = (u\\cos\\theta,\\ u\\sin\\theta - g t)",
    solution: [
      "$v_x = 50 \\times 0.6 = 30$ m/s",
      "$v_y = 50 \\times 0.8 - 10 \\times 2 = 40 - 20 = 20$ m/s",
      "$|\\vec v| = \\sqrt{30^2 + 20^2} = \\sqrt{1300} \\approx 36.06$ m/s",
      "$\\tan\\alpha = 20/30 = 2/3 \\Rightarrow \\alpha \\approx 33.7°$ above horizontal",
    ],
    answer: "|v| ≈ 36.06 m/s, ≈ 33.7° above horizontal",
  },
  {
    q: "A football is kicked at $20$ m/s and just clears a wall $5$ m high located $10$ m from the kick point. Find the angle of projection. ($g = 10$)",
    given: "u = 20 m/s, wall: x = 10 m, y = 5 m",
    hints: [
      "Substitute $(x, y)$ into the trajectory equation $y = x\\tan\\theta - gx^2/(2u^2\\cos^2\\theta)$.",
      "Use $1/\\cos^2\\theta = 1+\\tan^2\\theta$ to get a quadratic in $\\tan\\theta$.",
    ],
    formula: "y = x\\tan\\theta - \\frac{g x^2 (1+\\tan^2\\theta)}{2 u^2}",
    solution: [
      "$5 = 10\\tan\\theta - \\frac{10 \\cdot 100 (1+\\tan^2\\theta)}{2\\cdot 400}$",
      "$5 = 10\\tan\\theta - 1.25(1+\\tan^2\\theta)$",
      "$1.25\\tan^2\\theta - 10\\tan\\theta + 6.25 = 0$",
      "$\\tan\\theta = (10 \\pm\\sqrt{100 - 31.25})/2.5 = (10 \\pm 8.29)/2.5$",
      "Two angles: $\\tan\\theta \\approx 7.32$ ($\\theta\\approx 82.2°$) or $\\tan\\theta \\approx 0.684$ ($\\theta \\approx 34.4°$)",
    ],
    answer: "Either ≈ 34.4° (low) or ≈ 82.2° (high)",
  },
  {
    q: "A projectile lands at the same height from which it was fired. If the time of flight is $4$ s and the horizontal range is $60$ m, find (a) initial speed and (b) angle of projection. ($g = 10$)",
    given: "T = 4 s, R = 60 m, g = 10",
    hints: [
      "$u_y = g T / 2$.",
      "$u_x = R / T$.",
      "$u = \\sqrt{u_x^2 + u_y^2}$, $\\tan\\theta = u_y/u_x$.",
    ],
    formula: "u_x = R/T,\\ u_y = gT/2",
    solution: [
      "$u_y = 10 \\times 4 / 2 = 20$ m/s",
      "$u_x = 60 / 4 = 15$ m/s",
      "$u = \\sqrt{15^2 + 20^2} = \\sqrt{625} = 25$ m/s",
      "$\\tan\\theta = 20/15 = 4/3 \\Rightarrow \\theta \\approx 53°$",
    ],
    answer: "u = 25 m/s, θ ≈ 53°",
  },
  {
    q: "A ball is projected at $60°$ with speed $20$ m/s. Find the time when its velocity is perpendicular to the initial velocity. ($g = 10$)",
    given: "u = 20, θ = 60°",
    hints: [
      "$\\vec v \\cdot \\vec u = 0$ when velocity is perpendicular to $\\vec u$.",
      "$\\vec u = (u\\cos\\theta, u\\sin\\theta)$; $\\vec v = (u\\cos\\theta, u\\sin\\theta - g t)$.",
    ],
    formula: "t = \\frac{u}{g\\sin\\theta}",
    solution: [
      "$\\vec u \\cdot \\vec v = u^2\\cos^2\\theta + u\\sin\\theta(u\\sin\\theta - g t) = u^2 - u t g \\sin\\theta = 0$",
      "$t = u/(g\\sin\\theta) = 20/(10\\cdot \\sin 60°) = 20/(10\\cdot 0.866) \\approx 2.31$ s",
    ],
    answer: "t ≈ 2.31 s",
  },
]

export const trajectoryNumericals = [
  {
    q: "A particle is projected with speed $u$ at angle $\\theta$ with the horizontal. Derive the equation of its trajectory.",
    given: "u, θ, g; origin at launch point",
    hints: [
      "Write $x = u\\cos\\theta\\cdot t$ and $y = u\\sin\\theta\\cdot t - \\frac{1}{2}g t^2$.",
      "Eliminate $t$ using $t = x/(u\\cos\\theta)$.",
    ],
    formula: "y = x\\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}",
    solution: [
      "$x = u\\cos\\theta\\ t \\Rightarrow t = x/(u\\cos\\theta)$",
      "$y = u\\sin\\theta\\cdot t - \\frac 1 2 g t^2$",
      "Substitute: $y = u\\sin\\theta \\cdot \\frac{x}{u\\cos\\theta} - \\frac{1}{2} g \\frac{x^2}{u^2\\cos^2\\theta}$",
      "$y = x\\tan\\theta - \\frac{g x^2}{2 u^2\\cos^2\\theta}$",
      "This is of the form $y = ax - bx^2$ — a parabola.",
    ],
    answer: "y = x tan θ − gx²/(2u² cos²θ) — a parabola",
  },
  {
    q: "The equation of a projectile's trajectory is $y = 12 x - \\frac{3 x^2}{4}$ (SI units). Find the (a) angle of projection, (b) range, (c) maximum height, (d) initial speed. (Take $g = 10$.)",
    given: "$y = 12x - (3/4)x^2$",
    hints: [
      "Compare with $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.",
      "Range: set $y = 0$ and solve for non-zero $x$.",
      "Max height: use calculus $dy/dx = 0$.",
    ],
    formula: "\\tan\\theta = 12,\\ \\frac{g}{2u^2\\cos^2\\theta} = 3/4",
    solution: [
      "$\\tan\\theta = 12 \\Rightarrow \\theta \\approx 85.24°$",
      "Range: $x(12 - 3x/4)=0 \\Rightarrow x = 16$ m",
      "Max height: $dy/dx = 12 - (3x/2) = 0 \\Rightarrow x = 8$ m, $y = 12(8) - (3/4)(64) = 96 - 48 = 48$ m",
      "$\\cos^2\\theta = 1/(1+144) = 1/145$. $u^2 = g/(2\\cdot 3/4 \\cdot \\cos^2\\theta) = (10/1.5)\\cdot 145 \\approx 966.7$, $u\\approx 31.1$ m/s",
    ],
    answer: "θ ≈ 85.24°, R = 16 m, H = 48 m, u ≈ 31.1 m/s",
  },
  {
    q: "A projectile is fired from the base of an incline of angle $30°$ with speed $20$ m/s at angle $60°$ with the horizontal. Find the range of the projectile along the incline. ($g = 10$)",
    given: "α = 30°, u = 20, θ = 60°",
    hints: [
      "Range on incline (up) $= \\frac{2u^2 \\sin(\\theta-\\alpha)\\cos\\theta}{g\\cos^2\\alpha}$.",
      "Or use rotated axes: x along incline, y perpendicular.",
    ],
    formula: "R_{incline} = \\frac{2 u^2 \\sin(\\theta-\\alpha)\\cos\\theta}{g\\cos^2\\alpha}",
    solution: [
      "$\\sin(\\theta-\\alpha) = \\sin 30° = 0.5$",
      "$\\cos\\theta = 0.5$, $\\cos^2\\alpha = 3/4$",
      "$R = \\frac{2\\cdot 400 \\cdot 0.5 \\cdot 0.5}{10 \\cdot 0.75} = \\frac{200}{7.5} \\approx 26.67$ m",
    ],
    answer: "≈ 26.67 m up the incline",
  },
  {
    q: "A ball projected from ground passes through two points at heights $h_1$ and $h_2$ at the same horizontal distance $x_0$ on its way up and down. Prove that $h_1 + h_2$ equals $x_0\\tan\\theta$ when… (evaluate the concept).",
    given: "Trajectory y(x) = x tan θ − g x²/(2u²cos²θ)",
    hints: [
      "The trajectory is symmetric about the peak. If the ball is at height h at horizontal positions $x_1$ and $x_2$, then $x_1 + x_2 = R$ (same height twice).",
      "Plug $x_1 + x_2$ into $y(x_1) + y(x_2)$ and simplify.",
    ],
    formula: "y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}",
    solution: [
      "This problem is a conceptual check — not a single-answer numerical. The statement as phrased isn't a universal identity; the correct symmetry fact is $x_1 + x_2 = R$ for equal heights $h_1 = h_2$.",
      "For symmetric trajectory, if the ball reaches height $h$ twice, the two $x$-values satisfy $x_1 + x_2 = R$ (sum of roots of the quadratic $h = x\\tan\\theta - (g/(2u^2\\cos^2\\theta)) x^2$).",
    ],
    answer: "Symmetry: x₁ + x₂ = R for equal heights",
  },
  {
    q: "A cricket ball is thrown with $30$ m/s at an elevation angle of $37°$. It must clear a fielder at horizontal distance $40$ m. Does the ball clear a fielder of height $1.8$ m standing there? ($\\sin 37° = 0.6, \\cos 37° = 0.8, g = 10$)",
    given: "u = 30, θ = 37°, x = 40",
    hints: [
      "Compute $y$ at $x = 40$ using the trajectory equation.",
      "Compare to the fielder's height.",
    ],
    formula: "y = x\\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}",
    solution: [
      "$\\tan 37° = 0.75$, $\\cos^2 37° = 0.64$",
      "$y = 40(0.75) - \\frac{10(1600)}{2(900)(0.64)} = 30 - \\frac{16000}{1152}$",
      "$y = 30 - 13.89 \\approx 16.11$ m",
      "$16.11 > 1.8$ → ball clears the fielder easily.",
    ],
    answer: "y ≈ 16.11 m — ball clears the 1.8 m fielder",
  },
  {
    q: "A particle launched with speed $u$ at angle $\\theta$ lands at a point whose horizontal distance is $R$. Express the minimum speed of the projectile during its flight in terms of $R$ and $\\theta$. ($g$ known.)",
    given: "u, θ, R, g",
    hints: [
      "Minimum speed occurs at the highest point and equals $u\\cos\\theta$.",
      "$R = u^2 \\sin 2\\theta / g$, so $u^2 = R g /\\sin 2\\theta$.",
    ],
    formula: "v_{min} = u\\cos\\theta = \\sqrt{\\frac{R g \\cos\\theta}{2\\sin\\theta}}",
    solution: [
      "$u^2 = Rg/\\sin 2\\theta = Rg/(2\\sin\\theta\\cos\\theta)$",
      "$v_{min}^2 = u^2\\cos^2\\theta = Rg\\cos\\theta/(2\\sin\\theta) = (Rg/2)\\cot\\theta$",
      "$v_{min} = \\sqrt{R g \\cot\\theta / 2}$",
    ],
    answer: "v_min = √(Rg cot θ / 2)",
  },
]

export const jugglingNumericals = [
  {
    q: "A juggler juggles $5$ balls at a time. Each ball is thrown so that it rises $10$ m. Find the time interval between successive throws. ($g = 10$)",
    given: "n = 5, h = 10 m, g = 10",
    hints: [
      "Total air time per ball $T_{air} = 2\\sqrt{2h/g}$.",
      "Interval between successive throws = $T_{air}/n$.",
    ],
    formula: "\\Delta t = \\frac{2}{n}\\sqrt{\\frac{2h}{g}}",
    solution: [
      "$T_{air} = 2\\sqrt{2(10)/10} = 2\\sqrt 2 \\approx 2.83$ s",
      "$\\Delta t = T_{air}/5 \\approx 0.566$ s",
    ],
    answer: "≈ 0.566 s",
  },
  {
    q: "Two stones are thrown vertically upwards simultaneously from the ground with speeds $30$ m/s and $40$ m/s. Find the height at which they cross each other. ($g = 10$)",
    given: "$u_1 = 30, u_2 = 40$, same start time",
    hints: [
      "They never 'cross' if thrown from the same point — both rise straight up along the same line. The question is classic: if thrown from same point they pass through the same heights at different times.",
      "Re-reading: likely asks the *time* at which their heights are equal and the corresponding height.",
    ],
    formula: "y_1 = u_1 t - \\frac{1}{2}g t^2,\\ y_2 = u_2 t - \\frac{1}{2}g t^2",
    solution: [
      "$y_1 = y_2 \\Rightarrow 30 t = 40 t$, only at $t = 0$. They are never at the same height for $t > 0$ if thrown simultaneously from the same point.",
      "If thrown from points separated vertically, or at different times, the problem becomes meaningful.",
      "NEET interpretation: a 30 m/s stone and a 40 m/s stone from the same point — at $t = 4$ s ball 1 is at $30(4) - 80 = 40$ m and ball 2 at $40(4) - 80 = 80$ m. They don't meet except at $t = 0$.",
    ],
    answer: "With simultaneous same-point launch, no meeting for t > 0",
  },
  {
    q: "Ball A is thrown vertically up with $20$ m/s. $1$ s later, ball B is thrown up from the same point with $20$ m/s. At what height do they meet? ($g = 10$)",
    given: "$u_A = u_B = 20$ m/s, B thrown 1 s later",
    hints: [
      "Measure time $t$ from B's throw.",
      "Set $y_A(t+1) = y_B(t)$ and solve for $t$.",
    ],
    formula: "y = ut - \\frac{1}{2}g t^2",
    solution: [
      "$y_A = 20(t+1) - 5(t+1)^2 = 20 t + 20 - 5(t^2 + 2 t + 1)$",
      "$= 20 t + 20 - 5 t^2 - 10 t - 5 = 10 t + 15 - 5 t^2$",
      "$y_B = 20 t - 5 t^2$",
      "Set equal: $10 t + 15 - 5 t^2 = 20 t - 5 t^2 \\Rightarrow 15 = 10 t \\Rightarrow t = 1.5$ s",
      "Height = $20(1.5) - 5(1.5)^2 = 30 - 11.25 = 18.75$ m",
    ],
    answer: "18.75 m above launch point",
  },
  {
    q: "A juggler tosses a ball vertically with $10$ m/s from a cart moving horizontally at $4$ m/s on a smooth road. Find (a) the time of flight, (b) the horizontal distance the ball travels in the ground frame, (c) where it lands relative to the juggler. ($g = 10$)",
    given: "$u_y = 10$ m/s, $v_{cart} = 4$ m/s (constant), g = 10",
    hints: [
      "Vertical motion: unaffected by cart's velocity.",
      "In the cart's frame (inertial) the ball has no horizontal velocity and lands in the juggler's hand.",
      "In the ground frame, both juggler and ball share $v = 4$ m/s horizontal.",
    ],
    formula: "T = 2u_y/g",
    solution: [
      "$T = 2(10)/10 = 2$ s",
      "Horizontal distance in ground frame $= 4 \\times 2 = 8$ m",
      "Relative to juggler (also moving at 4 m/s): lands exactly in his hand (0 m)",
    ],
    answer: "T = 2 s, ground-frame horizontal = 8 m, relative to juggler = 0 m",
  },
  {
    q: "A stone is dropped from a train moving horizontally at $20$ m/s at a height of $45$ m. Find (a) time to reach ground, (b) horizontal distance from drop point (ground frame), (c) trajectory shape in both frames. ($g = 10$)",
    given: "$u_x = 20$ m/s (train speed at release), h = 45 m",
    hints: [
      "Dropping from moving frame → initial horizontal velocity = train's velocity.",
      "Vertical: free fall.",
    ],
    formula: "t = \\sqrt{2h/g},\\ x = u_x t",
    solution: [
      "$t = \\sqrt{2(45)/10} = 3$ s",
      "$x = 20 \\times 3 = 60$ m",
      "Ground frame: parabola. Train frame: straight vertical line.",
    ],
    answer: "t = 3 s, x = 60 m; parabola in ground, vertical in train",
  },
  {
    q: "A juggler on a platform throws a ball vertically up with speed $u$. If he keeps $n$ balls in continuous motion (each reaching max height and returning) with instantaneous throw-catch, show that the max height must be $h = g(nT_{min})^2/8$ where $T_{min}$ is throw interval.",
    given: "n balls, speed u, max height h",
    hints: [
      "$T_{air} = 2u/g = 2\\sqrt{2h/g}$.",
      "$T_{air} = n \\cdot T_{min}$.",
    ],
    formula: "T_{air} = 2\\sqrt{2h/g} = n T_{min}",
    solution: [
      "$2\\sqrt{2h/g} = n T_{min}$",
      "$\\sqrt{2h/g} = n T_{min}/2$",
      "$2h/g = n^2 T_{min}^2/4$",
      "$h = g n^2 T_{min}^2/8$",
    ],
    answer: "h = g (n T_min)² / 8",
  },
]
