import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardAsesor from './CardAsesor'
const URL = 'http://127.0.0.1:8000/api/v1/asesor-publico'
const Asesor = () => {
    const [asesors, setAsesors] = useState()
    useEffect(() => {
        axios.get(URL)
            .then(res => setAsesors(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='text-center'>
            <h2 className='my-4'>Nuestro Equipo</h2>
            <div className='container d-flex flex-wrap gap-4'>
                {/* <div className='row'> */}
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
                    {
                        asesors?.map(asesor => (
                            <CardAsesor
                                key={asesor.id}
                                asesor={asesor}
                            />
                        ))
                    }
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