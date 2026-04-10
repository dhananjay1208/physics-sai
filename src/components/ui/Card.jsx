export default function Card({ className = '', children, ...rest }) {
  return (
    <div className={`card p-5 ${className}`} {...rest}>
      {children}
    </div>
  )
}
