import React from 'react'
import portada1 from './../../assets/img/portada1.png'
import portada2 from './../../assets/img/portada2.png'
import portada3 from './../../assets/img/portada3.png'
import './style.css'
import { useNavigate } from "react-router-dom";
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
      <aside>
        <img className='img-fluid portada2' src={portada2} alt="" />
        <div className='subtitulo_right'>
          <h3>
            DEFINICIÓN Y OBJETIVO DE LA EMPRESA
          </h3>
        </div>
        <div className='text_right'>

          SERVICIOS PROFESIONALES INMOBILIARIOS ALVEN , es una empresa mexicana la cual se crea para prestar un servicio profesional inmobiliario de calidad, brindando a cada uno de nuestros clientes el trato y la atención que esperan y merecen.
          <br />
          <br />
          La empresa cubre una importante área geográfica ya que abarcamos el Distrito Federal y el área metropolitana contando con un grupo de asesores inmobiliarios calificados y la tecnología más avanzada de la industria.
          <br />
          <br />
          Nuestro compromiso es con la calidad del servicio y la finalidad es tener clientes de por vida, en ningún momento extensión y amplitud significa menor calidad, por el contrario, nuestro compromiso es con la calidad del servicio.
          <br />
          <button className='button_home' onClick={verMas}>
            Ver mas
          </button>
        </div>
      </aside>
      <aside>
        <div className='subtitulo_left'>
          <h3>
            DEFINICIÓN Y OBJETIVO DE LA EMPRESA
          </h3>
        </div>
        <div className='text_left'>
          ALVEN  es una empresa y justamente por ello hemos empeñado nuestra voluntad y esfuerzo sin límite para establecer lo que a
          nuestro juicio es el baluarte más importante en la cultura de una organización: la MISION, VISION y VALORES que integran la
          FILOSOFIA con que la empresa actuará y se desarrollará en cualquier circunstancia
          <br />
          <br />
          <button className='button_home' onClick={verMas}>
            Ver mas
          </button>

        </div>
        <img className='img-fluid portada3' src={portada3} alt="" />

      </aside>
    </>
  )
}

export default Home