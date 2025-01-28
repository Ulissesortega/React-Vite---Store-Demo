import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './data/data'
import Home from './components/Home'
import About from './components/About'
import Detail from './components/Detail'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
