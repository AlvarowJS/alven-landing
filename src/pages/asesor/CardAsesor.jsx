import React from 'react'

const CardAsesor = ({ asesor }) => {

    return (
        <div className='card p-2' style={{width: '15rem'}}>
            <div className="card-head" style={{ width: '13rem', overflow: 'hidden', borderRadius: '50%', aspectRatio: '1/1' }}>
                <img className="card-img-top" src={`https://backend.alven-inmobiliaria.com.mx/storage/asesor/${asesor?.foto}`} alt="Card image cap" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

            </div>
            <div className="card-body">
                <h5 className="card-title">{asesor.nombre} {asesor.apellidos}</h5>
                <p className="card-text">Telefono: {asesor.celular}</p>
            </div>
        </div>
    )
}

export default CardAsesor