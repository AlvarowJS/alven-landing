import React from 'react'
import './style/footer.css'
import privacidad from './../../assets/pdf/Aviso de Privacidad.pdf'
import carta from './../../assets/pdf/Carta de Derechos al Consumidor.pdf'
import cartaDisc from './../../assets/pdf/Carta de No Discriminacion.pdf'
import registro from './../../assets/pdf/Registro de Contrato de Adhesion de Prestacion de Servicios.pdf'

import logo from './../../assets/img/logo.png'
const Footer = () => {

  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Alven Inmobiliaria 2023</p>
      <ul className="redes">
        <li className="redes__items" onClick={() => window.open('https://www.facebook.com/Inmobiliaria.alven.7/')}>
          <a className="redes__links">
            <i className='bx bxl-facebook'></i>
          </a>
        </li>
        <li className="redes__items" onClick={() => window.open('https://www.instagram.com/alveninmo/')}>        
          <a href="" className="redes__links">
            <i className='bx bxl-instagram-alt'></i>
          </a>
        </li>
        <li className="redes__items" onClick={() => window.open('https://www.youtube.com/channel/UCxAc3sXB6zsZJCizmIhqWEA')}>
          <a href="" className="redes__links">
            <i className='bx bxl-youtube'></i>
          </a>
        </li>
      </ul>
      <div className='politicas'>
        <img src={logo} alt="logo" />
        <a href={carta} target="_blank" rel="noopener noreferrer">Derechos del cliente</a>
        |
        <a href={privacidad} target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
        |
        <a href={cartaDisc} target="_blank" rel="noopener noreferrer">Politica de no Discriminación</a>
        |
        <a href={registro} target="_blank" rel="noopener noreferrer">Registro de contrato de Adhesion de Prestación de Servicios</a>
      </div>
    </footer>
  )
}

export default Footer