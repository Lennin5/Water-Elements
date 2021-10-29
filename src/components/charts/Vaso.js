import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const Vaso = (props) => {
  const {percentage} = props
  var config = {
    percent: percentage,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 5,
    },
    wave: { length: 228 },
    liquidStyle: {
        fill: '#00AF9C',
        fillOpacity: 0.9,
        stroke: '#00AF9C',
        strokeOpacity: 0.7,
        // lineWidth: 0,
        // lineDash: [4, 5],        
        // shadowColor: 'red',
        // shadowBlur: 10,        
        // shadowOffsetX: 5,
        // shadowOffsetY: 5,
        cursor: 'pointer'
    },
}

  return (    
    <div className="text-white">
      <Liquid {...config} />      
    </div>    
  )
};

export default Vaso;