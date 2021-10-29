import React from 'react'
import Bidirectional from '../components/charts/Bidirectional'
import DemoFunnel from '../components/charts/DemoFunnel'

const Elements = () => {
    const Datos = [
        {
            Id: 0,
            Nombre: 'Agua de Rio',
            Ph: 2,
            Densidad: 10,
            Temperatura: 15
        },
        {
            Id: 2,
            Nombre: 'Agua de Mar',
            Ph: 4,
            Densidad: 8,
            Temperatura: 20
        },
        {
            Id: 3,
            Nombre: 'Agua de cristal',
            Ph: 0,
            Densidad: 3,
            Temperatura: 9
        },
        {
            Id: 4,
            Nombre: 'Agua de lago',
            Ph: 15,
            Densidad: 20,
            Temperatura: 2
        },
        {
            Id: 5,
            Nombre: 'Agua de laguna',
            Ph: 8,
            Densidad: 1,
            Temperatura: 25
        },
        {
            Id: 6,
            Nombre: 'Agua de vaso',
            Ph: 1,
            Densidad: 10,
            Temperatura: 15
        }
    ];    
    return (
    <>
        <div className="div-class" >
            <div className="col-lg-9"  >
                <div className="padding">
                <Bidirectional data={Datos} />
                </div>
            </div>
        </div>    
        <div className="div-class" >
            <div className="col-lg-9"  >
                <div className="padding">
                <DemoFunnel data={Datos} />
                </div>
            </div>
        </div>           
    </>
    )
}

export default Elements
