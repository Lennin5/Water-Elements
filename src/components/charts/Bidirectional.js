import React, { useState, useEffect } from 'react';
import { BidirectionalBar } from '@ant-design/charts';

const Bidirectional  = (props) => {
  var {data} =props;
  var config = {
    data: data,
    xField: 'Nombre',
    xAxis: { position: 'bottom' },
    interactions: [{ type: 'active-region' }],
    yField: ['Ph', 'Densidad'],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
  };
  return <BidirectionalBar {...config} />;
};

export default Bidirectional;