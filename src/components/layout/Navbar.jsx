import { Link, NavLink } from 'react-router-dom'
import { Atom, Home as HomeIcon } from 'lucide-react'

export default function Navbar() {
  const linkBase = 'px-3 py-2 rounded-lg text-sm font-semibold transition'
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
            <Atom size={18} />
          </span>
          <span className="font-extrabold text-slate-900 tracking-tight">Sai Physics</span>
          <span className="chip ml-2 hidden sm:inline-flex">NEET Prep</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}>
            <span className="inline-flex items-center gap-1"><HomeIcon size={16}/> Home</span>
          </NavLink>
          <NavLink to="/laws" className={({isActive}) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}>Laws of Motion</NavLink>
          <NavLink to="/wpe" className={({isActive}) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}>Work • Energy</NavLink>
          <NavLink to="/motion-plane" className={({isActive}) => `${linkBase} ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}>Motion in a Plane</NavLink>
        </nav>
      </div>
    </header>
  )
}
