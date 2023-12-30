import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import SiteApps from './pages/SiteApps'
import Navbar from './components/Navbar'
import ClickTheButton from './apps/click-the-button'
import RealOne from './apps/real-one'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/apps" element={<SiteApps />} />
        <Route path="/apps/click-the-button" element={<ClickTheButton />} />
        <Route path="/apps/real-one" element={<RealOne />} />
      </Routes>
    </>
  )
}

export default App
