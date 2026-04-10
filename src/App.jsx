import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import ChapterLaws from './pages/ChapterLaws.jsx'
import ChapterWPE from './pages/ChapterWPE.jsx'
import NotFound from './pages/NotFound.jsx'

import NewtonsLaws from './pages/topics/laws/NewtonsLaws.jsx'
import RocketPropulsion from './pages/topics/laws/RocketPropulsion.jsx'
import ConservationOfMomentum from './pages/topics/laws/ConservationOfMomentum.jsx'
import GunBulletNumericals from './pages/topics/laws/GunBulletNumericals.jsx'
import LawsPYQ from './pages/topics/laws/LawsPYQ.jsx'

import WorkEnergyTheorem from './pages/topics/wpe/WorkEnergyTheorem.jsx'
import EnergyConservation from './pages/topics/wpe/EnergyConservation.jsx'
import Power from './pages/topics/wpe/Power.jsx'
import Collisions from './pages/topics/wpe/Collisions.jsx'
import WPEPYQ from './pages/topics/wpe/WPEPYQ.jsx'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/laws" element={<ChapterLaws />} />
          <Route path="/laws/newtons-laws" element={<NewtonsLaws />} />
          <Route path="/laws/rocket-propulsion" element={<RocketPropulsion />} />
          <Route path="/laws/conservation-of-momentum" element={<ConservationOfMomentum />} />
          <Route path="/laws/gun-bullet" element={<GunBulletNumericals />} />
          <Route path="/laws/pyq" element={<LawsPYQ />} />

          <Route path="/wpe" element={<ChapterWPE />} />
          <Route path="/wpe/work-energy-theorem" element={<WorkEnergyTheorem />} />
          <Route path="/wpe/energy-conservation" element={<EnergyConservation />} />
          <Route path="/wpe/power" element={<Power />} />
          <Route path="/wpe/collisions" element={<Collisions />} />
          <Route path="/wpe/pyq" element={<WPEPYQ />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
