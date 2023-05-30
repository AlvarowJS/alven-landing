import React from 'react'
import portada1 from './../../assets/img/portada1.png'
import './style.css'
const Home = () => {
  return (
    <div class="banner">
      <img src={portada1} alt="portada" />
      <div class="title">
        Encuentra tu lugar ideal
      </div>
    </div>
  )
}

export default Home