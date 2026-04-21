import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import ChapterLaws from './pages/ChapterLaws.jsx'
import ChapterWPE from './pages/ChapterWPE.jsx'
import ChapterMotionPlane from './pages/ChapterMotionPlane.jsx'
import ChapterThermal from './pages/ChapterThermal.jsx'
import ChapterFriction from './pages/ChapterFriction.jsx'
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

import ProjectileMotion from './pages/topics/motion/ProjectileMotion.jsx'
import EquationOfTrajectory from './pages/topics/motion/EquationOfTrajectory.jsx'
import JugglingQuestions from './pages/topics/motion/JugglingQuestions.jsx'
import MotionPlanePYQ from './pages/topics/motion/MotionPlanePYQ.jsx'

import Thermometry from './pages/topics/thermal/Thermometry.jsx'
import Calorimetry from './pages/topics/thermal/Calorimetry.jsx'
import SpecificLatentHeat from './pages/topics/thermal/SpecificLatentHeat.jsx'
import StefansLaw from './pages/topics/thermal/StefansLaw.jsx'
import NewtonsLawCooling from './pages/topics/thermal/NewtonsLawCooling.jsx'
import ConductionParallelSeries from './pages/topics/thermal/ConductionParallelSeries.jsx'
import Radiation from './pages/topics/thermal/Radiation.jsx'
import ThermalPYQ from './pages/topics/thermal/ThermalPYQ.jsx'

import StaticFriction from './pages/topics/friction/StaticFriction.jsx'
import KineticFriction from './pages/topics/friction/KineticFriction.jsx'
import LimitingFriction from './pages/topics/friction/LimitingFriction.jsx'
import FreeBodyDiagrams from './pages/topics/friction/FreeBodyDiagrams.jsx'
import ApplicationsOfFriction from './pages/topics/friction/ApplicationsOfFriction.jsx'
import FrictionPYQ from './pages/topics/friction/FrictionPYQ.jsx'

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

          <Route path="/motion-plane" element={<ChapterMotionPlane />} />
          <Route path="/motion-plane/projectile" element={<ProjectileMotion />} />
          <Route path="/motion-plane/trajectory" element={<EquationOfTrajectory />} />
          <Route path="/motion-plane/juggling" element={<JugglingQuestions />} />
          <Route path="/motion-plane/pyq" element={<MotionPlanePYQ />} />

          <Route path="/thermal" element={<ChapterThermal />} />
          <Route path="/thermal/thermometry" element={<Thermometry />} />
          <Route path="/thermal/calorimetry" element={<Calorimetry />} />
          <Route path="/thermal/specific-latent-heat" element={<SpecificLatentHeat />} />
          <Route path="/thermal/stefans-law" element={<StefansLaw />} />
          <Route path="/thermal/newtons-cooling" element={<NewtonsLawCooling />} />
          <Route path="/thermal/conduction" element={<ConductionParallelSeries />} />
          <Route path="/thermal/radiation" element={<Radiation />} />
          <Route path="/thermal/pyq" element={<ThermalPYQ />} />

          <Route path="/friction" element={<ChapterFriction />} />
          <Route path="/friction/static" element={<StaticFriction />} />
          <Route path="/friction/kinetic" element={<KineticFriction />} />
          <Route path="/friction/limiting" element={<LimitingFriction />} />
          <Route path="/friction/fbd" element={<FreeBodyDiagrams />} />
          <Route path="/friction/applications" element={<ApplicationsOfFriction />} />
          <Route path="/friction/pyq" element={<FrictionPYQ />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
