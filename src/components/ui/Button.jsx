export default function Button({ variant = 'primary', className = '', children, ...rest }) {
  const cls = variant === 'ghost' ? 'btn-ghost' : 'btn-primary'
  return (
    <button className={`${cls} ${className}`} {...rest}>
      {children}
    </button>
  )
}
