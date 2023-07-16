import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet, faBed, faKitchenSet, faWarehouse, faLayerGroup, faHouse, faSort, faSquareCheck, faMoneyBill, faDog, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const PropiedadAleatoria = ({ propiedad }) => {
    const navigate = useNavigate()
    const verPropiedad = (id) => {
        navigate(`/propiedad-info/${id}`)
    }
    return (

        <div className="card" style={{ width: '20rem',cursor: 'pointer' }} onClick={() => verPropiedad(propiedad?.id)}>
            <img
                className="card-img-top"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedad?.id}/${propiedad?.foto[0]?.fotos}`}
                alt=""
            />

            <div className="card-body">
                <h5 className="card-title">{propiedad?.publicidad?.encabezado}</h5>
                <p className='card-text'><FontAwesomeIcon className='descripcion-icono' icon={faMoneyBill} />Precio:  {'$ '+propiedad?.publicidad?.precio_venta.toLocaleString()}</p>
            </div>
        </div>

    )
}

export default PropiedadAleatoria