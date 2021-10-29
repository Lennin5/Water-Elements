import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';
import { RiseOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import ModalInfo from './ModalInfo'


const DemoLiquid = (props) => {

  const { data } = props;

  var config = {
    percent: data.Profundidad,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
      
    },
    wave: { length: 128 },
  };
  var Name = data.Nombre;

  return (
    <>
      <Card title={data.Nombre}>
        <Liquid {...config} />
    </Card>   
    
    </>
  )

};

export default DemoLiquid;