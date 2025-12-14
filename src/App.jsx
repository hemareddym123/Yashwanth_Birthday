import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Exes from './pages/Exes'
import Intermission from './pages/Intermission'
import Crush from './pages/Crush'
import Roast from './pages/Roast'
import Finale from './pages/Finale'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/exes" element={<Exes />} />
      <Route path="/intermission" element={<Intermission />} />
      <Route path="/crush" element={<Crush />} />
      <Route path="/roast" element={<Roast />} />
      <Route path="/finale" element={<Finale />} />
    </Routes>
  )
}
