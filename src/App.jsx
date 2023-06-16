import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contactenos from './pages/contactenos/Contactenos'
import Propiedad from './pages/propiedades/Propiedad'
import QuienesSomos from './pages/quienesSomos/QuienesSomos'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import PropiedadCardInfo from './pages/propiedades/PropiedadCardInfo'


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
        <Route path='/propiedad-info/:id' element={<PropiedadCardInfo />} />
      </Routes>
      <Footer />
      <a href="https://wa.link/npttir" className="btn-whatsapp" target="_blank">
            <i className='bx bxl-whatsapp'></i>
          </a>
    </>
  )
}

export default App
