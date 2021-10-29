import React, { useState, useEffect } from 'react';
import { Funnel } from '@ant-design/charts';
import { Column } from '@ant-design/charts';

const DemoFunnel = (props) => {
const {data} = props
  

var config = {
    data: data,
    isGroup: true,
    xField: 'Nombre',
    yField: 'Densidad',
    seriesField: 'Densidad',
    dodgePadding: 2,
    color: ['#29c6b4', '#c6c129', '#d62728'],    
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default DemoFunnel;





  
