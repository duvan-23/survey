const pieBasicChart =( data:{value:number, name:string}[])=> {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center',
      textStyle: {color: "white"}
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data
      }
    ]
  };
};

export { pieBasicChart }