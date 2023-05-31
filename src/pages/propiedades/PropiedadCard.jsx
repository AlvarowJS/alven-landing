import React from 'react'
import img from './../../assets/img/portada2.png'
import './style.css'
const PropiedadCard = () => {
    return (
        // <div className="mx-4 mb-5 propiedad_card">
        //     <img src={img} className='img-fluid w-100' alt="" />
        //     <div className="propiedad_card-description">
        //         <h2>Estado de mexico</h2>
        //         <p>Dirección</p>
        //         <p>Estado</p>
        //         <p>Baños</p><p>Precio</p>
        //     </div>
        // </div>
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
    )
}

export default PropiedadCard