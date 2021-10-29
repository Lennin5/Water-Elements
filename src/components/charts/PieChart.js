import { Pie } from '@ant-design/charts';

const DePie = (props) => {
  const {data} = props;
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'Temperatura',
    colorField: 'Nombre',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DePie;