import React from 'react'
import './style/footer.css'

const Footer = () => {
  const openFacebook = () => {
    window.open('https://www.facebook.com/MunicipalidadPillcoMarca')
  }
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Alven Inmobiliaria 2023</p>
      <ul className="redes">
        <li className="redes__items" onClick={openFacebook}>
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
    </footer>
  )
}

export default Footer