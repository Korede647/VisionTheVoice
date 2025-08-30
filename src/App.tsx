import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Routes>
         <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero />
              <Features />
              <GetStarted />
              <Footer />
            </>
          }
        />
        <Route path="#features" element={<div>Features Page</div>} />
        <Route path="/resources" element={<div>Resources Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/testimonials" element={<div>Stories Page</div>} />
        <Route path="/help" element={<div>Help Page</div>} />
        </Routes>
    </Router>
  )
}

export default App
