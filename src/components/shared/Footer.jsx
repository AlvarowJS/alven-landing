import React from 'react'
import './style/footer.css'
import privacidad from './../../assets/pdf/Aviso de Privacidad.pdf'
import carta from './../../assets/pdf/Carta de Derechos del Consumidor.pdf'
import logo from './../../assets/img/logo.png'
const Footer = () => {

  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Alven Inmobiliaria 2023</p>
      <ul className="redes">
        <li className="redes__items">
          <a className="redes__links">
            <i className='bx bxl-facebook'></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className='bx bxl-linkedin-square'></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className='bx bxl-youtube'></i>
          </a>
        </li>
      </ul>
      <div className='politicas'>
        <img src={logo} alt="logo" />
        <a href={carta} target="_blank" rel="noopener noreferrer">Derechos del cliente</a>
        <a href={privacidad} target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
      </div>
    </footer>
  )
}

export default Footer