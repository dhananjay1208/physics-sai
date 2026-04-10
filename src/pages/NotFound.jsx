import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page text-center py-20">
      <h1 className="text-3xl font-extrabold mb-2">Page not found</h1>
      <p className="text-slate-500 mb-6">That page doesn't exist (yet).</p>
      <Link to="/" className="btn-primary inline-flex">Back to Home</Link>
    </div>
  )
}
