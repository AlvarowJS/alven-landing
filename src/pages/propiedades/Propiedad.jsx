import React from 'react'
import PropiedadCard from './PropiedadCard'

const Propiedad = () => {
  return (
    <>
      <h2 className='contacto_h2'>Propiedades</h2>

      <div className='row px-4 mx-5'>
        <div className='col-2 p-4'>
          <div class="input-group mb-3">
            <div class="input-group-text">
              <i className='bx bx-search-alt-2 display-7' ></i>
            </div>
            <input type="text" className='form-control' placeholder='Buscar propiedad' />
          </div>

          Estado
          <div class="form-check mx-4">
            <input class="form-check-input" type="checkbox" value="" id="mexico" />
            <label class="form-check-label" for="mexico">
              Estado de Mexico
            </label>
          </div>
          <div class="form-check mx-4">
            <input class="form-check-input" type="checkbox" value="" id="michoacan" />
            <label class="form-check-label" for="michoacan">
              Michoacán
            </label>
          </div>
          <div class="form-check mx-4 mb-4">
            <input class="form-check-input" type="checkbox" value="" id="sinaloa" />
            <label class="form-check-label" for="sinaloa">
              Sinaloa
            </label>
          </div>

          Tipo de propiedad
          <div class="form-check mx-4">
            <input class="form-check-input" type="checkbox" value="" id="mexico" />
            <label class="form-check-label" for="mexico">
              Departamento
            </label>
          </div>
          <div class="form-check mx-4">
            <input class="form-check-input" type="checkbox" value="" id="michoacan" />
            <label class="form-check-label" for="michoacan">
              Casas
            </label>
          </div>
          <div class="form-check mx-4">
            <input class="form-check-input" type="checkbox" value="" id="sinaloa" />
            <label class="form-check-label" for="sinaloa">
              Oficinas
            </label>
          </div>

          Precio
          <div className='d-flex'>
            <div className=''>
              <input type="text" className='form-control' placeholder='00.00'/>
            </div>
            <div className='mx-4'>
              a
            </div>
            <div className=''>
              <input type="text" className='form-control' placeholder='100.00'/>
            </div>
          </div>
        </div>
        <div className='col-8 d-flex flex-wrap g-2'>
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
        </div>
      </div>
    </>
  )
}

export default Propiedad