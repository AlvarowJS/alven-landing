import React from 'react'
import portada1 from './../../assets/img/portada1.png'
import portada2 from './../../assets/img/portada2.png'
import portada3 from './../../assets/img/portada3.png'
import './style.css'
import { useNavigate } from "react-router-dom";
import Asesor from '../asesor/Asesor'
const Home = () => {
  const navigate = useNavigate()

  const verMas = () => {
    navigate('/quienessomos')
  };
  return (
    <>
      <div class="banner">
        <img src={portada1} alt="portada" />
        <div class="title">
          <h1>ALVEN INMOBILIARIA</h1>
          <h3>Encuentra tu lugar ideal</h3>
        </div>
      </div>
      <Asesor />
    </>
  )
}

export default Home