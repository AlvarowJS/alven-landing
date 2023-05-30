import React, { useRef } from 'react'
import logo from './../../assets/img/logo.png'
import './style/style.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const navbar = useRef()

  const sysdoc = () => {
    window.open('http://165.22.34.176/login')
  }
  const portalTrans = () => {
    window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s')

  }
  return (
    <>
      <nav ref={navbar} className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand text-success logo h1 align-self-center">
            <img src={logo} className="local_logo" alt="" />
          </a>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='mx-4 '>
            ALVEN <br />
            Inmobiliaria
          </div>
          <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex gap-3 mx-lg-auto">
                <NavLink to='/'
                  className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                >
                  <li className="nav-item">
                    Inicio
                  </li>
                </NavLink>

                <NavLink to='/propiedades'
                  // className="navlink_local"
                  className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                >
                  <li className="nav-item">
                    Propiedades
                  </li>
                </NavLink>

                <NavLink to='/quienessomos'
                  className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                >
                  <li className="nav-item">
                    Quienes Somos
                  </li>
                </NavLink>

                <NavLink to='/contactenos'
                  // className="navlink_local"
                  className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                >
                  <li className="nav-item">
                    Contactenos
                  </li>
                </NavLink>         


              </ul>
            </div>
            <div className="navbar align-self-center gap-3 d-flex">
              <span className="links_local" onClick={sysdoc}>
                <i className='bx bx-user'></i>
                Ingresar
              </span>

            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header