import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import logo from './../../assets/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet, faBed, faKitchenSet, faWarehouse, faLayerGroup, faHouse, faSort, faSquareCheck, faMoneyBill, faDog, faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/ver-propiedad'
const PropiedadCardInfo = () => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const id = useParams();
    const [propiedades, setPropiedades] = useState()
    const [espacios, setEspacios] = useState()
    const [instalaciones, setInstalaciones] = useState()
    const [resctricciones, setResctricciones] = useState()

    useEffect(() => {
        axios.get(`${URL}/${id.id}`)
            .then(res => {
                setPropiedades(res.data)

                let espacios = res?.data?.caracteristica?.espacios
                let jsonEspacios = JSON.parse(espacios)
                setEspacios(jsonEspacios)

                let instalaciones = res?.data?.caracteristica?.instalaciones
                let jsonInstalaciones = JSON.parse(instalaciones)
                setInstalaciones(jsonInstalaciones)

                let restricciones = res?.data?.caracteristica?.restricciones
                let jsonRestricciones = JSON.parse(restricciones)
                setResctricciones(jsonRestricciones)

            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Link to="/propiedades" className='volver'>
                <i className='bx bx-left-arrow-alt'></i>
                Volver
            </Link>
            <div className='d-flex justify-content-around mx-5'>
                <h1>{propiedades?.publicidad?.encabezado}</h1>
                <img src={logo} alt="" style={{ width: "100px", height: "100px" }} />
            </div>
            {/* <div className='d-flex flex-wrap justify-content-around mx-5'> */}
            <div className='row mx-5'>
                {/* <div className='datos-propiedad'> */}
                <div className='col'>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faMoneyBill} />Precio: {'$ ' + propiedades?.publicidad?.precio_venta}</p>
                    {propiedades?.publicidad?.descripcion.split('\n').map((linea, index) => (
                        <p key={index}>{linea}</p>
                    ))}
                    <p>
                        <h3> Con las siguientes caracteristicas </h3><br />
                        <FontAwesomeIcon className='descripcion-icono' icon={faDog} /> Mascotas: {propiedades?.caracteristica?.mascotas}
                    </p>

                    {
                        espacios == 'false' ? null : (
                            <>
                                <h4>Espacios: </h4>
                                {espacios && espacios?.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </>
                        )
                    }

                    {
                        instalaciones == 'false' ? null : (
                            <>
                                <h4>Instalaciones: </h4>
                                {instalaciones && instalaciones?.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </>
                        )
                    }
                    {
                        resctricciones == 'false' ? null : (
                            <>
                                <h4>Restricciones: </h4>
                                {resctricciones && resctricciones?.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </>
                        )

                    }



                    <h4>Basicos: </h4>
                    {propiedades?.basico?.superficie_terreno && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Superficie del terreno: {propiedades.basico.superficie_terreno}
                        </p>
                    )}

                    {propiedades?.basico?.superficie_construccion && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Superfice de construcción: {propiedades.basico.superficie_construccion}
                        </p>
                    )}

                    {propiedades?.basico?.banios && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faToilet} />
                            Baños: {propiedades.basico.banios}
                        </p>
                    )}

                    {propiedades?.basico?.medios_banios && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faToilet} />
                            Medios Baños: {propiedades.basico.medios_banios}
                        </p>
                    )}

                    {propiedades?.basico?.recamaras && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faBed} />
                            Recamaras: {propiedades.basico.recamaras}
                        </p>
                    )}

                    {propiedades?.basico?.cocinas && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faKitchenSet} />
                            Cocinas: {propiedades.basico.cocinas}
                        </p>
                    )}

                    {propiedades?.basico?.estacionamiento && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faWarehouse} />
                            Estacionamiento: {propiedades.basico.estacionamiento}
                        </p>
                    )}

                    {propiedades?.basico?.niveles_construidos && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faLayerGroup} />
                            Niveles construidos: {propiedades.basico.niveles_construidos}
                        </p>
                    )}

                    {propiedades?.basico?.numero_casas && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faHouse} />
                            Número de casas: {propiedades.basico.numero_casas}
                        </p>
                    )}

                    {propiedades?.basico?.numero_elevadores && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSort} />
                            Número de elevadores: {propiedades.basico.numero_elevadores}
                        </p>
                    )}

                    {propiedades?.basico?.piso_ubicado && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Piso Ubicado: {propiedades.basico.piso_ubicado}
                        </p>
                    )}
                    {propiedades?.basico?.edad && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Edad del Inmueble: {propiedades.basico.edad}
                        </p>
                    )}
                    {/* <p><FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />Superficie del terreno: {propiedades?.basico?.superficie_terreno}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />Superfice de construcción: {propiedades?.basico?.superficie_construccion}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faToilet} /> Baños: {propiedades?.basico?.banios}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faToilet} /> Medios Baños: {propiedades?.basico?.medios_banios}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faBed} /> Recamaras: {propiedades?.basico?.recamaras}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faKitchenSet} /> Cocinas: {propiedades?.basico?.cocinas}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faWarehouse} />Estacionamiento: {propiedades?.basico?.estacionamiento}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faLayerGroup} />Niveles construidos: {propiedades?.basico?.niveles_construidos}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faHouse} />Número de casas: {propiedades?.basico?.numero_casas}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faSort} />Número de elevadores: {propiedades?.basico?.numero_elevadores}</p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />Piso Ubicado: {propiedades?.basico?.piso_ubicado}</p> */}

                    <h4>Asesor Exclusivo</h4>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faUser} />Asesor: {propiedades?.cliente?.asesor?.nombre} {propiedades?.cliente?.asesor?.apellidos} </p>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faPhone} />Teléfono: {propiedades?.cliente?.asesor?.celular}</p>
                </div>
                {/* <div className='d-flex flex-column align-items-center flex-nowrap'> */}
                <div className='col'>
                    <p> <FontAwesomeIcon icon={faLocationDot} className='descripcion-icono' />
                        {propiedades?.direccion?.calle} - {propiedades?.direccion?.numero} - {propiedades?.direccion?.municipio} - {propiedades?.direccion?.estado}
                    </p>
                    <img src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/${propiedades?.foto[0]?.fotos}`} style={{ width: '500px' }} alt="" />

                    <h4>Galeria de fotos</h4>
                    <div className='d-flex justify-content-center flex-wrap gap-4 ' style={{ width: '100%' }}>
                        {propiedades?.foto?.map((foto, index) => (
                            <img
                                key={index}
                                src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/${foto?.fotos}`}
                                style={{
                                    width: '300px',
                                    height: 'auto',
                                    // marginRight: '10px',
                                    border: '',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 1)'
                                }}
                                alt=""
                            />
                        ))}
                    </div>

                    <h4>Ubicación</h4>

                    {
                        propiedades?.direccion?.mapa ? (
                            <div style={{
                                textAlign: 'center',
                                width: '100%',
                                overflowX: 'auto'
                            }}>
                                <div dangerouslySetInnerHTML={{ __html: mapa }} />
                            </div>
                        ) : 
                        propiedades?.publicidad?.mapa ? (
                            <div style={{
                                textAlign: 'center',
                                width: '100%',
                                overflowX: 'auto'
                            }}>
                                <img 
                                src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/mapa/${propiedades?.publicidad?.mapa}`} 
                                alt="" />
                            </div>
                        ) :
                        "Sin asignar"
                    }
                    {/* {propiedades?.direccion?.LAT && propiedades?.direccion?.LON ? (
                        <LoadScript
                            googleMapsApiKey="AIzaSyCq_n_0fxE6-qDWeqeFZBfahzXrGDy0U_Q"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                // onClick={handleMapClick}
                                center={{
                                    lat: parseFloat(propiedades?.direccion?.LAT),
                                    lng: parseFloat(propiedades?.direccion?.LON),
                                }}
                                zoom={15}
                            >

                            </GoogleMap>
                        </LoadScript>
                    ) : "Sin asignar"
                    } */}
                </div>
            </div>
        </>
    )
}

export default PropiedadCardInfo