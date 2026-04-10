export const G = 9.8

export const round = (n, d = 2) => {
  const f = Math.pow(10, d)
  return Math.round(n * f) / f
}

// 1D elastic collision: returns [v1', v2']
export function elasticCollision1D(m1, u1, m2, u2) {
  const v1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2)
  const v2 = ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2)
  return [v1, v2]
}

// General 1D collision with coefficient of restitution e
export function collision1D(m1, u1, m2, u2, e = 1) {
  const v1 = (m1 * u1 + m2 * u2 - m2 * e * (u1 - u2)) / (m1 + m2)
  const v2 = (m1 * u1 + m2 * u2 + m1 * e * (u1 - u2)) / (m1 + m2)
  return [v1, v2]
}

export const ke = (m, v) => 0.5 * m * v * v
export const momentum = (m, v) => m * v
