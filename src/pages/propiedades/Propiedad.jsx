import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import PropiedadCard from './PropiedadCard'
import axios from 'axios'
const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/propiedades-publico'

const Propiedad = () => {
  const [propiedads, setPropiedads] = useState()
  const [propiedadSearch, setPropiedadSearch] = useState()
  const [filterPropiedad, setFilterPropiedad] = useState()
  const [precioMin, setPrecioMin] = useState()
  const [precioMax, setPrecioMax] = useState()
  const [pageNumber, setPageNumber] = useState(0)
  const propiedadesPerPage = 8

  const optionsTipo = [
    { value: "todos", label: "Todos" },
    { value: "venta", label: "Venta" },
    { value: "renta", label: "Renta" },

  ]

  const options = [
    { value: "todos", label: "Todos" },
    { value: "Aguascalientes", label: "Aguascalientes" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California Sur" },
    { value: "Campeche", label: "Campeche" },
    { value: "Ciudad de México", label: "Ciudad de México" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Colima", label: "Colima" },
    { value: "Durango", label: "Durango" },
    { value: "Estado de México", label: "Estado de México" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo León" },
    { value: "Oaxaca", label: "Oaxaca" },
    { value: "Puebla", label: "Puebla" },
    { value: "Querétaro", label: "Querétaro" },
    { value: "Quintana Roo", label: "Quintana Roo" },
    { value: "San Luis Potosí", label: "San Luis Potosí" },
    { value: "Sinaloa", label: "Sinaloa" },
    { value: "Sonora", label: "Sonora" },
    { value: "Tabasco", label: "Tabasco" },
    { value: "Tamaulipas", label: "Tamaulipas" },
    { value: "Tlaxcala", label: "Tlaxcala" },
    { value: "Veracruz", label: "Veracruz" },
    { value: "Yucatán", label: "Yucatán" },
    { value: "Zacatecas", label: "Zacatecas" }
  ];

  const selecionarTipo = (selectedOptionTipo) => {
    let opcionEstadoTipo = selectedOptionTipo?.value

    if (propiedads) {
      setFilterPropiedad(propiedads?.filter(e => e?.general?.tipo_operacion.toLowerCase().indexOf(opcionEstadoTipo?.toLowerCase()) !== -1))
    }

    if (opcionEstadoTipo == 'todos') {
      setFilterPropiedad(propiedads)
    }
  }
  const seleccionarEstado = (selectedOption) => {
    let opcionEstado = selectedOption?.value

    if (propiedads) {
      setFilterPropiedad(propiedads?.filter(e => e?.direccion?.estado.toLowerCase().indexOf(opcionEstado?.toLowerCase()) !== -1))
    }

    if (opcionEstado == 'todos') {
      setFilterPropiedad(propiedads)
    }
  }
  const handlePrecioMinChange = (event) => {
    setPrecioMin(event.target.value);
  }

  const handlePrecioMaxChange = (event) => {
    setPrecioMax(event.target.value);
  }

  const buscarPropiedad = e => {
    setPropiedadSearch(e.target.value)
    // console.log(e.target.value)
  }

  // const displayPropiedades = filterPropiedad
  //   ? filterPropiedad.map((propiedad) =>
  //   (
  //     <PropiedadCard key={propiedad?.id} propiedad={propiedad} />
  //   )
  //   )
  //   : propiedads
  //     ?.slice(pagesVisited, pagesVisited + propiedadesPerPage)
  //     .map((propiedad) =>
  //     (
  //       <PropiedadCard key={propiedad?.id} propiedad={propiedad} />
  //     )
  //     );
  const displayPropiedades = propiedads?.map(propiedad => (
    propiedad.estado ?
      <PropiedadCard
        key={propiedad?.id}
        propiedad={propiedad}
      />
      : null
  ))

  const buscarPorPrecio = () => {
    if (propiedads) {
      const filtradas = propiedads.filter(propiedad => {
        const precio = parseFloat(propiedad?.publicidad?.precio_venta);
        return precio >= parseFloat(precioMin) && precio <= parseFloat(precioMax);
      });
      setFilterPropiedad(filtradas);
    }
  }

  useEffect(() => {
    if (propiedads) {
      setFilterPropiedad(propiedads?.filter(e => e?.publicidad?.encabezado?.toLowerCase().indexOf(propiedadSearch?.toLowerCase()) !== -1))
    }

  }, [propiedadSearch])

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setPropiedads(res?.data)
      })

  }, [])


  return (
    <>
      <h2 className='contacto_h2'>Propiedades</h2>
      <div className="container">
        <div className='row '>
          <div className='col-lg-3 col-md-12 p-4'>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <i className='bx bx-search-alt-2 display-7' ></i>
              </div>
              <input type="text" className='form-control' placeholder='Buscar propiedad' onChange={buscarPropiedad} />
            </div>

            Estado
            <Select
              className='my-2'
              options={options}
              onChange={seleccionarEstado}
            />

            Tipo de propiedad
            <Select
              className='my-2'
              options={optionsTipo}
              onChange={selecionarTipo}
            />

            Precio
            <div className='d-flex'>
              <div className=''>
                <input type="text" className='form-control' placeholder='00.00' onChange={handlePrecioMinChange} />
              </div>
              <div className='mx-4'>
                a
              </div>
              <div className=''>
                <input type="text" className='form-control' placeholder='100.00' onChange={handlePrecioMaxChange} />
              </div>

            </div>
            <button className='btn btn-primary my-2' onClick={buscarPorPrecio}>Filtrar por precios</button>
            {/* <button className='btn btn-primary my-2' onClick={buscarPorPrecio}>Filtrar por precios</button> */}
          </div>
          <div className='col-lg-9 d-flex flex-wrap gap-4 justify-content-center'>
            {
              // displayPropiedades
              filterPropiedad ?
                filterPropiedad?.map(propiedad => (
                  propiedad.estado ?
                    <PropiedadCard
                      key={propiedad?.id}
                      propiedad={propiedad}
                    />
                    : null
                ))
                :
                propiedads?.map(propiedad => (
                  propiedad.estado ?
                    <PropiedadCard
                      key={propiedad?.id}
                      propiedad={propiedad}
                    />
                    : null
                ))
            }


          </div>
          
          {/* <div className='col-lg-8'>
            <ReactPaginate
              previousLabel={"Anterior"}
              nextLabel={"Siguiente"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="pagination"
              previousLinkClassName={"previousPage"}
              nextLinkClassName={"nextPage"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Propiedad