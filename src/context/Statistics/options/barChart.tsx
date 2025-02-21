const barChart =( labels:string[], data:number[], yName:string, xName:string, rotate:boolean)=> {
  return {
    title: { text: "" },
    tooltip: {},
    xAxis: {
      type: "category",
      name:xName,
      data: labels,
      axisLabel: {
        rotate: rotate?45:0, 
        interval: 0, 
        fontSize: rotate?8:12, 
        fontWeight: "bold",
        color: "#ffff",
        opacity: 0.7,
      },
    },
    yAxis: { 
        type: "value",
        name: yName,
      },
    series: [
      {
        name: yName,
        type: "bar",
        itemStyle: {
            color: (params: any) => (params.dataIndex % 2 === 0 ? "#5470c6" : "#91cc75"), // Bar color
          },
        data
      },
    ],
  };
};

export { barChart }