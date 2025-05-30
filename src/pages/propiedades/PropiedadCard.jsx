import React from 'react'
import img from './../../assets/img/portada2.png'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const PropiedadCard = ({ propiedad }) => {

    const navigate = useNavigate()

    let img = `https://backend.alven-inmobiliaria.com.mx/storage/${propiedad?.id}/${propiedad?.foto[0]?.fotos}`

    const verPropiedad = (id) => {
        navigate(`/propiedad-info/${id}`)
    }

    return (
        <>
            <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => verPropiedad(propiedad?.id)}>
                <img className="card-img-top custom-image" src={img} loading="lazy" alt="Card image cap" />
                <div className="card-body scrollable-card-body">
                    <h5 className="card-title">{propiedad?.publicidad?.encabezado}</h5>
                    <p className="card-text"><FontAwesomeIcon className='descripcion-icono' icon={faMoneyBill} />
                        {
                            propiedad?.publicidad?.precio_venta ?
                                (
                                    <>
                                        Precio:  {'$ ' + Number(propiedad?.publicidad?.precio_venta).toLocaleString()}
                                    </>
                                ) : 'Sin definir'
                        }
                        {/* Precio: {'$ ' + propiedad?.publicidad?.precio_venta} */}
                    </p>

                    {
                        propiedad?.publicidad?.descripcion ?
                            (
                                <>
                                    {propiedad?.publicidad?.descripcion?.split('\n').map((linea, index) => (
                                        <p className="card-text" key={index}>{linea}</p>
                                    ))}
                                </>
                            ) : ''
                    }

                    <p className="card-text"><FontAwesomeIcon className='descripcion-icono' icon={faLocationDot} />Dirección: {propiedad?.direccion?.estado} - {propiedad?.direccion?.municipio} - {propiedad?.direccion?.colonia} - {propiedad?.direccion?.calle} </p>
                    <p className="card-text">Tipo de propiedad: {propiedad?.general?.tipo_operacion} </p>                    
                    {
                        propiedad?.publicidad?.video_url == null ?
                            (
                                <>
                                    <a href={propiedad?.publicidad?.video_url} className="card-text" target='_blank'> <FontAwesomeIcon className='descripcion-icono' icon={faYoutube} />Video en Youtube</a>
                                </>
                            ) : ''
                    }
                </div>
            </div>

        </>
    )
}

export default PropiedadCard