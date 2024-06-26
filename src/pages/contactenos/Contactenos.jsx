import React, { useEffect, useState } from 'react'
import portadaCom from './../../assets/img/contacto.png'
import './style.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

import { useForm } from 'react-hook-form'
import axios from 'axios'
const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/contacto-register'
const Contactenos = () => {
  const { handleSubmit, register, reset, watch } = useForm()
  const defaultForm = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion_inmueble: ''
  }
  const submit = data => {
    axios.post(URL, data)
      .then(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mensaje Enviado',
          showConfirmButton: false,
          timer: 1500
        })
        reset(defaultForm)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h2 className='contacto_h2'>Contáctenos</h2>
      <aside className='row mb-4 mx-5 local_contacto'>
        <div className='col-md'>
          <img src={portadaCom} className='img-fluid' alt="" />
        </div>
        <div className='col-md p-4'>

          <h4 className='contacto_h4'>Estás a un paso de nosotros...</h4>
          <form onSubmit={handleSubmit(submit)}>

            <div className="row mb-4">
              <div className="col-md">
                <label htmlFor="nombre" className="form-label text-light">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre"  {...register('nombre')} />
              </div>
              <div className="col-md">
                <label htmlFor="apellido" className="form-label text-light">Apellido</label>
                <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido" {...register('apellido')} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md">
                <label htmlFor="celular" className="form-label text-light">Teléfono</label>
                <input type="text" className="form-control" id="celular" placeholder="Ingrese su número de telefono" {...register('telefono')} />
              </div>
              <div className="col-md">
                <label htmlFor="email" className="form-label text-light">Correo</label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" {...register('email')} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md">
                <label htmlFor="mensaje" className="form-label text-light">Mensaje</label>
                <textarea type="text" className="form-control" id="mensaje" placeholder="Quiero información sobre..." {...register('direccion_inmueble')} />
              </div>

            </div>

            <button className='btn btn-primary button_local'>
              Contactar
            </button>
          </form>

        </div>
      </aside>
      <aside className='iframe-container'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.0329462398222!2d-76.25047007604407!3d-9.95847327495017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd76a6968f%3A0x8be9c01235f3c666!2sCLAS%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1685504700720!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.484690020141!2d-99.15859788574933!3d19.39145311802366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff0f2fd1543b%3A0xa41d0f54cbb8f2bd!2sC.%20J.%20Enrique%20Pestalozzi%20583%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2spe!4v1686775015949!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </aside>
    </>
  )
}

export default Contactenos