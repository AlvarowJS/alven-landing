import React from 'react'
import portada1 from './../../assets/img/portada1.png'
import portada2 from './../../assets/img/portada2.png'
import './style.css'
const QuienesSomos = () => {
  return (
    <>
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
          <button className='button_home'>
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
          <button className='button_home'>
            Ver mas
          </button>

        </div>
        <img className='img-fluid portada3' src={portada2} alt="" />

      </aside>

      <aside className='container_misiovision'>
        <div className='mision_container'>
          <h4>Misión</h4>
          <p>
            Proporcionar un Servicio Inmobiliario de la más alta calidad, teniendo
            como principal objetivo brindarles a nuestros clientes el servicio y trato que merecen.
            El único parámetro que aceptaremos para medir este objetivo es la decisión del cliente
            y sólo cuando demos más de lo que el cliente esperaba consideraremos cumplida nuestra misión.
            Debemos rebasar las expectativas de nuestros clientes y cumplir al doble lo que prometemos,
            sólo así podremos afirmar que somos congruentes con la filosofía de la empresa y que estamos cumpliendo
            nuestra misión comercial.
          </p>
        </div>
        <div className='vision_container'>
          <h4>Visión</h4>
          <p>
            Llegar a ser la empresa líder en servicios inmobiliarios en la ciudad de México,
            ya que contamos con la infraestructura para estar a la vanguardia en los procesos
            técnicos y comerciales y en la prestación de servicios inmobiliarios.
          </p>
        </div>
      </aside>

      <aside>
        <div className='subtitulo_center'>
          <h3>
            VALORES
          </h3>
        </div>
      </aside>
    </>
  )
}

export default QuienesSomos