import React, { useRef } from 'react'
import logo from './../../assets/img/logo2.png'
import './style/style.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const navbar = useRef()

  const modoAdmin = () => {
    window.open('http://admin.alven-inmobiliaria.com.mx')
  }

  const modoDocumentos = () => {
    window.open('http://docs.alven-inmobiliaria.com.mx/')
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
          {/* <div className='mx-4 '>
            ALVEN <br />
            Inmobiliaria
          </div> */}
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
                    Quiénes Somos
                  </li>
                </NavLink>

                <NavLink to='/contactenos'
                  // className="navlink_local"
                  className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                >
                  <li className="nav-item">
                    Contáctenos
                  </li>
                </NavLink>         


              </ul>
            </div>
            <div className="navbar align-self-center gap-3 d-flex" onClick={modoAdmin}>
              <span className="links_local">
                <i className='bx bx-user'></i>
                Ingresar
              </span>

            </div>
            <div className="navbar align-self-center gap-3 d-flex mx-2" onClick={modoDocumentos}>
              <span className="links_local">
                <i className='bx bx-folder'></i>
                Documentos
              </span>

            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header