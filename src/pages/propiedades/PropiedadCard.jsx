import React from 'react'
import img from './../../assets/img/portada2.png'
import './style.css'
const PropiedadCard = () => {
    return (
        <div className="mx-4 mb-5 propiedad_card">
            <img src={img} className='img-fluid w-100' alt="" />
            <div className="propiedad_card-description">
                <h2>Estado de mexico</h2>
                <p>Dirección</p>
                <p>Estado</p>
                <p>Baños</p><p>Precio</p>
            </div>
        </div>
    )
}

export default PropiedadCard