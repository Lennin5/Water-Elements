import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Thermometer from 'react-thermometer-component'
// import 'antd/dist/antd.css';

const ModalInfo = (props) => {
    const { show, setShow, data } = props

    const showModal = () => {
        setShow(true);
    };

    const handleOk = () => {
        setShow(false);
    };

    const handleCancel = () => {
        setShow(false);
    };

    return (
        <>

            <Modal
                title="Datos del card"
                visible={show}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="row">
                    <div className="col-lg-6">
                        <p>Nombre: {data.Nombre}</p>
                        <p>Ph: {data.Ph}</p>
                        <p>Densidad: {data.Densidad}</p>
                        <p>Temperatura: {data.Temperatura}</p>
                  

                    </div>
                    <div className="col-lg-6">

                        <Thermometer
                            theme="dark"
                            value={data.Temperatura}
                            max="100"
                            steps=""
                            format="°C"
                            size="normal "


                        />

                    </div>


                </div>



            </Modal>
        </>
    );
};
export default ModalInfo;