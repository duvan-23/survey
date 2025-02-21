const pieChart =( data:{value:number, name:string}[])=> {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '1%',
      left: 'center',
      textStyle: {color: "white"}
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold',
            color: "white"
          }
        },
        labelLine: {
          show: false
        },
        data
      }
    ]
  };
};

export { pieChart }