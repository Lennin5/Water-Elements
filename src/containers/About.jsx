import React,{ useState } from 'react'
import { Col, Row, Statistic, Spin } from 'antd';

import DemoLiquid from '../components/charts/DemoLiquid';
import ModalInfo from '../components/charts/ModalInfo';

const About = () => {

    const [show, setShow] = useState(false)
    const [dataModal, setDataModal] = useState({})
    const [loading, setLoading] = useState(true)

    const mostrarModal = (e) => {
        setDataModal(e)
        setShow(true)
    }

    setTimeout(()=>{
        setLoading(false)
    },5000)
       const Datos = [
        {
            Id: 0,
            Nombre: 'Agua de Rio',
            Ph: 2,
            Densidad: 10,
            Temperatura: 15,
            Profundidad:0.10
        },
        {
            Id: 2,
            Nombre: 'Agua de Mar',
            Ph: 4,
            Densidad: 8,
            Temperatura: 20,
            Profundidad:0.40
        },
        {
            Id: 3,
            Nombre: 'Agua de cristal',
            Ph: 3,
            Densidad: 3,
            Temperatura: 9,
            Profundidad:0.5
        },
        {
            Id: 4,
            Nombre: 'Agua de lago',
            Ph: 0.15,
            Densidad: 20,
            Temperatura: 2,
            Profundidad:0.70
        },
        {
            Id: 5,
            Nombre: 'Agua de laguna',
            Ph: 8,
            Densidad: 1,
            Temperatura: 25,
            Profundidad:0.8
        },
        {
            Id: 6,
            Nombre: 'Agua de vaso',
            Ph: 8,
            Densidad: 10,
            Temperatura: 15,
            Profundidad:0.7
        }
    ];

    let mapeo = Datos.map((e, i) => {
        return (
            <>
                <div className="col-lg-3 pt-5" onClick={() => mostrarModal(e)}>
                    <DemoLiquid data={e} key={i} />

                </div>
            </>
        )
    })

    return (
        <>
          
            <br />
            <div className="container" >
               
                <br />
                {
                    loading ?
                        <>
                            <div className="mySpin">
                                <Spin></Spin>
                            </div>
                        </>
                        :
                        <>
                            <div className="row" style={{paddingBottom:'50px'}}>
                                {mapeo}
                            </div>
                        </>
                }

                <ModalInfo show={show} setShow={setShow} data={dataModal}></ModalInfo>

            </div>

          

        </>
    );

}

export default About
