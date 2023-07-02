import React, { useState, useEffect } from 'react'
import portada1 from './../../assets/img/portada1.png'
import portada2 from './../../assets/img/portada2.png'
import portada3 from './../../assets/img/portada3.png'
import './style.css'
import { useNavigate } from "react-router-dom";
import Asesor from '../asesor/Asesor'
import PropiedadAleatoria from '../propiedades/PropiedadAleatoria'
import axios from 'axios'
const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/propiedades-publico'
const Home = () => {
  const navigate = useNavigate()
  const [propiedads, setPropiedads] = useState()
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        const limitedData = res.data.slice(0, 3);
        setPropiedads(limitedData);
      })
      .catch(err => console.log(err))
  }, [])

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
      <h2 className='text-center my-4' style={{ color: '#EE8178' }}>Propiedades</h2>
      <div className='d-flex gap-4 flex-wrap justify-content-center'>
        {
          propiedads?.map(propiedad => (
            <PropiedadAleatoria
              key={propiedad.id}
              propiedad={propiedad}
            />
          ))
        }
      </div>
      <Asesor />

      <h2 className='text-center my-4' style={{ color: '#EE8178' }}>Datos Generales y Ubicación</h2>
      <aside className='text-center'>
        <p>Teléfono: +52 1 55 2217 4030</p>
        <p>Dirección: C. J. Enrique Pestalozzi 583 - CDMX, México </p>
      </aside>
      <aside className='iframe-container'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.0329462398222!2d-76.25047007604407!3d-9.95847327495017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd76a6968f%3A0x8be9c01235f3c666!2sCLAS%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1685504700720!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.484690020141!2d-99.15859788574933!3d19.39145311802366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff0f2fd1543b%3A0xa41d0f54cbb8f2bd!2sC.%20J.%20Enrique%20Pestalozzi%20583%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1686775015949!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </aside>
    </>
  )
}

export default Home