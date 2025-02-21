const halfPieChart =( data:{value:number, name:string}[])=> {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {color: "white"}
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 360,
        data,
        labelLine: {show:false},
        label: {show:false},
      }
    ]
  };
};

export { halfPieChart }