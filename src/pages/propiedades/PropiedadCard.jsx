import React from 'react'
import img from './../../assets/img/portada2.png'
import './style.css'
import { useNavigate } from 'react-router-dom'
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
                    <p class="card-text">Precio: {propiedad?.publicidad?.precio_venta} MXM</p>
                    <p class="card-text">{propiedad?.publicidad?.descripcion} MXM</p>
                    <p class="card-text">Dirección: {propiedad?.direccion?.estado} - {propiedad?.direccion?.municipio} - {propiedad?.direccion?.colonia} - {propiedad?.direccion?.calle} </p>
                    <p class="card-text">Tipo de propiedad: {propiedad?.general?.tipo_propiedad} </p>
                    <a href={propiedad?.publicidad?.video_url} class="card-text" target='_blank'>Video en Youtube</a>
                </div>
            </div>
        </>
    )
}

export default PropiedadCard