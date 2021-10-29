import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn  = (props) => {
const {data} = props
  var config = {
    data: data,
    xField: 'Nombre',
    yField: 'Ph',
    columnWidthRatio: 0.8,
    color: '#09B2A0',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: 'Nombre' },
      Ph: { alias: 'Ph' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;