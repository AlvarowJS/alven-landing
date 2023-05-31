import React from 'react'
import portadaCom from './../../assets/img/contacto.png'
import './style.css'
const Contactenos = () => {
  return (
    <>
      <h2 className='contacto_h2'>Contactenos</h2>
      <aside className='row mb-4 mx-5 local_contacto'>
        <div className='col-md'>
          <img src={portadaCom} className='img-fluid' alt="" />
        </div>
        <div className='col-md p-4'>

          <h4 className='contacto_h4'>Estas a un paso de nosotros...</h4>
          <div className="row mb-4">
            <div className="col-md">
              <label for="exampleFormControlInput1" className="form-label text-light">Nombre</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Juan" />
            </div>
            <div className="col-md">
              <label for="exampleFormControlInput1" className="form-label text-light">Apellido</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Perez" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md">
              <label for="exampleFormControlInput1" className="form-label text-light">Telefono</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="55 3434 3434" />
            </div>
            <div className="col-md">
              <label for="exampleFormControlInput1" className="form-label text-light">Correo</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md">
              <label for="exampleFormControlInput1" className="form-label text-light">Mensaje</label>
              <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Quiero información sobre..." />
            </div>

          </div>

          <button className='btn btn-primary button_local'>
            Contactar
          </button>
        </div>
      </aside>
      <aside className='iframe-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.0329462398222!2d-76.25047007604407!3d-9.95847327495017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd76a6968f%3A0x8be9c01235f3c666!2sCLAS%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1685504700720!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </aside>
    </>
  )
}

export default Contactenos