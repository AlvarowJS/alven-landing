import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import logo from './../../assets/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet, faBed, faKitchenSet, faWarehouse, faLayerGroup, faHouse, faSort, faSquareCheck, faMoneyBill, faDog, faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [videoLink, setVideoLink] = useState()

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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

                let video = res?.data?.publicidad?.video_url
                let videoId = video.split('v=')[1]
                setVideoLink(videoId)

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
                <div className='col-12 col-md-6 order-2 order-md-1'>
                    <p><FontAwesomeIcon className='descripcion-icono' icon={faMoneyBill} />Precio: {'$ ' + Number(propiedades?.publicidad?.precio_venta).toLocaleString()}</p>
                    {propiedades?.publicidad?.descripcion.split('\n').map((linea, index) => (
                        <p key={index}>{linea}</p>
                    ))}
                    <p>
                        <h3> Con las siguientes caracteristicas </h3><br />
                        {
                            propiedades?.caracteristica?.mascotas ?
                                <p><FontAwesomeIcon className='descripcion-icono' icon={faDog} /> Mascotas: {propiedades?.caracteristica?.mascotas}</p>
                                : null
                        }
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
                    {propiedades?.basico?.superficie_terreno > 0 > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Superficie del terreno: {propiedades.basico.superficie_terreno}
                        </p>
                    )}

                    {propiedades?.basico?.superficie_construccion > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Superfice de construcción: {propiedades.basico.superficie_construccion}
                        </p>
                    )}

                    {propiedades?.basico?.banios > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faToilet} />
                            Baños: {propiedades.basico.banios}
                        </p>
                    )}

                    {propiedades?.basico?.medios_banios > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faToilet} />
                            Medios Baños: {propiedades.basico.medios_banios}
                        </p>
                    )}

                    {propiedades?.basico?.recamaras > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faBed} />
                            Recamaras: {propiedades.basico.recamaras}
                        </p>
                    )}

                    {propiedades?.basico?.cocinas > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faKitchenSet} />
                            Cocinas: {propiedades.basico.cocinas}
                        </p>
                    )}

                    {propiedades?.basico?.estacionamiento > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faWarehouse} />
                            Estacionamiento: {propiedades.basico.estacionamiento}
                        </p>
                    )}

                    {propiedades?.basico?.niveles_construidos > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faLayerGroup} />
                            Niveles construidos: {propiedades.basico.niveles_construidos}
                        </p>
                    )}

                    {propiedades?.basico?.numero_casas > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faHouse} />
                            Número de casas: {propiedades.basico.numero_casas}
                        </p>
                    )}

                    {propiedades?.basico?.numero_elevadores > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSort} />
                            Número de elevadores: {propiedades.basico.numero_elevadores}
                        </p>
                    )}

                    {propiedades?.basico?.piso_ubicado > 0 && (
                        <p>
                            <FontAwesomeIcon className='descripcion-icono' icon={faSquareCheck} />
                            Piso Ubicado: {propiedades.basico.piso_ubicado}
                        </p>
                    )}
                    {propiedades?.basico?.edad > 0 && (
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
                <div className='col-12 col-md-6 order-1 order-md-2'>
                    <p> <FontAwesomeIcon icon={faLocationDot} className='descripcion-icono' />
                        {propiedades?.direccion?.calle} - {propiedades?.direccion?.numero} - {propiedades?.direccion?.municipio} - {propiedades?.direccion?.estado}
                    </p>
                    <img src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/${propiedades?.foto[0]?.fotos}`} style={{ width: '100%' }} alt="" />

                    <h4>Galeria de fotos</h4>
                    {/* <div className='d-flex justify-content-center flex-wrap gap-4 ' style={{ width: '100%' }}>
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
                    </div> */}
                    <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                            {propiedades?.foto?.map((foto, index) => (
                                <div key={index} onClick={() => openModal(index)}>
                                    <img
                                        src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/${foto?.fotos}`}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '500px',
                                            boxShadow: '0 0 5px rgba(0, 0, 0, 1)'
                                        }}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    {
                        videoLink == null ? null : (
                            <>
                                <h4>Video: </h4>
                                <YouTube
                                    videoId={videoLink}
                                    opts={{
                                        width: '100%',
                                        height: '500px',
                                    }}
                                />
                            </>
                        )
                    }
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
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Imagen en Popup"
                style={{
                    content: {
                        // zIndex: 100,
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '1300px',
                        height: '800px',
                        overflow: 'hidden', // Oculta el overflow para evitar scrollbars
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'gray'

                    },
                    overlay: {
                        zIndex: '9999' // Asegúrate de que la superposición tenga un z-index alto
                    }
                }}
            >
                <button className='btn btn-warning' onClick={closeModal} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '99999' }}>x</button>
                <Carousel selectedItem={selectedIndex} showThumbs={false} infiniteLoop useKeyboardArrows autoPlay style={{ width: '100%', height: '100%' }} >
                    {propiedades?.foto?.map((foto, index) => (
                        <div key={index}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                        >

                            <img
                                src={`https://backend.alven-inmobiliaria.com.mx/storage/${propiedades?.id}/${foto?.fotos}`}
                                style={{
                                    objectFit: 'contain',
                                    marginTop: 50,
                                    maxWidth: '100%',
                                    maxHeight: '600px',
                                }}
                                alt=""
                            />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </>
    )
}

export default PropiedadCardInfo