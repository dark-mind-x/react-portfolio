import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects' // <--- 1. Import

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Projects /> {/* <--- 2. Add this */}
    </div>
  )
}

export default App
