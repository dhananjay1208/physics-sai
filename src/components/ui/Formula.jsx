import { InlineMath, BlockMath } from 'react-katex'

export function F({ children }) {
  return <InlineMath math={children} />
}

export function FBlock({ children }) {
  return (
    <div className="my-3 overflow-x-auto">
      <BlockMath math={children} />
    </div>
  )
}

export default F
