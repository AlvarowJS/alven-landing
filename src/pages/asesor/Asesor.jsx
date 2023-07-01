import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardAsesor from './CardAsesor'
const URL = 'https://backend.alven-inmobiliaria.com.mx/api/v1/asesor-publico'
const Asesor = () => {
    const [asesors, setAsesors] = useState()
    useEffect(() => {
        axios.get(URL)
            .then(res => setAsesors(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='text-center' style={{color: '#EE8178'}}>
            <h2 className='my-4'>Nuestro Equipo</h2>
            <div className='container d-flex flex-wrap justify-content-center gap-4'>
                {/* <div className='row'> */}
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                
                {/* </div> */}
            </div>
        </div>
    )
}

export default Asesor