import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contactenos from './pages/contactenos/Contactenos'
import Propiedad from './pages/propiedades/Propiedad'
import QuienesSomos from './pages/quienesSomos/QuienesSomos'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/propiedades' element={<Propiedad />} />
        <Route path='/quienessomos' element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
