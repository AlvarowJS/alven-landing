import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import logo from './../../assets/img/logo.png'
const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/ver-propiedad'
const PropiedadCardInfo = () => {
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
            <div className='d-flex flex-wrap justify-content-around mx-5'>
                <div className='datos-propiedad'>
                    <p>Precio      {propiedades?.publicidad?.precio_venta}</p>
                    <p>
                        {propiedades?.publicidad?.descripcion}
                    </p>
                    <p>
                        Con las siguientes caracteristicas <br />
                        Mascotas: {propiedades?.caracteristica?.mascotas}
                    </p>
                    <h4>Espacios: </h4>
                    {espacios?.map((item, index) => (
                        <p key={index}>- {item}</p>
                    ))}

                    <h4>Instalaciones: </h4>
                    {instalaciones?.map((item, index) => (
                        <p key={index}>- {item}</p>
                    ))}

                    <h4>Restricciones: </h4>
                    {resctricciones?.map((item, index) => (
                        <p key={index}>- {item}</p>
                    ))}

                    <h4>Basicos: </h4>
                    <p>Superficie del terreno: {propiedades?.basico?.superficie_terreno}</p>
                    <p>Superfice de construcción: {propiedades?.basico?.superficie_construccion}</p>
                    <p>Baños: {propiedades?.basico?.banios}</p>
                    <p>Medios Baños: {propiedades?.basico?.medios_banios}</p>
                    <p>Recamaras: {propiedades?.basico?.recamaras}</p>
                    <p>Cocinas: {propiedades?.basico?.cocinas}</p>
                    <p>Estacionamiento: {propiedades?.basico?.estacionamiento}</p>
                    <p>Niveles construidos: {propiedades?.basico?.niveles_construidos}</p>
                    <p>Número de casas: {propiedades?.basico?.numero_casas}</p>
                    <p>Número de elevadores: {propiedades?.basico?.numero_elevadores}</p>
                    <p>Piso Ubicado: {propiedades?.basico?.piso_ubicado}</p>

                </div>
                <div className='d-flex flex-column align-items-center flex-nowrap'>
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
                                    marginRight: '10px',
                                    border: '',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 1)'
                                }}
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropiedadCardInfo