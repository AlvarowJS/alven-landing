import React from 'react'
import img from './../../assets/img/portada2.png'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const PropiedadCard = ({ propiedad }) => {

    const navigate = useNavigate()
    
    let img = `http://127.0.0.1:8000/storage/${propiedad?.id}/${propiedad?.foto[0]?.fotos}`

    const verPropiedad = (id) => {
        navigate(`/propiedad-info/${id}`)
    }

    return (
        <>
            <div class="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => verPropiedad(propiedad?.id)}>
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{propiedad?.publicidad?.encabezado}</h5>
                    <p class="card-text"><FontAwesomeIcon className='descripcion-icono' icon={faMoneyBill}/> Precio: {propiedad?.publicidad?.precio_venta.toLocaleString() + '$'} </p>
                    <p class="card-text">{propiedad?.publicidad?.descripcion} </p>
                    <p class="card-text"><FontAwesomeIcon className='descripcion-icono' icon={faLocationDot}/>Dirección: {propiedad?.direccion?.estado} - {propiedad?.direccion?.municipio} - {propiedad?.direccion?.colonia} - {propiedad?.direccion?.calle} </p>
                    <p class="card-text">Tipo de propiedad: {propiedad?.general?.tipo_operacion} </p>
                    <a href={propiedad?.publicidad?.video_url} class="card-text" target='_blank'> <FontAwesomeIcon className='descripcion-icono' icon={faYoutube}/>Video en Youtube</a>
                </div>
            </div>
        </>
    )
}

export default PropiedadCard