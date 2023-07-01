import React from 'react'

const CardAsesor = ({ asesor }) => {

    return (
        <>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={`http://127.0.0.1:8000/storage/asesor/${asesor?.foto}`} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{asesor.nombre} {asesor.apellidos}</h5>
                        <p class="card-text">Telefono: {asesor.celular}</p>
                    </div>
               
            </div>
        </>
    )
}

export default CardAsesor