const barChartAverage =( labels:string[], data:number[], yName:string, xName:string)=> {
  return {
    title: { text: "" },
    tooltip: {
      trigger: "item"
    },
    xAxis: {
      type: "category",
      data: labels,
      name: xName, 
    },
    yAxis: { 
      type: "value",
      name: yName, 
    },
    series: [
      {
        name: yName,
        type: "bar",
        data,
        itemStyle: {
          color: (params: any) => (params.dataIndex % 2 === 0 ? "#5470c6" : "#91cc75"), 
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "Average Cars",
            },
          ],
          lineStyle: {
            color: "red",
            type: "dashed",
          },
          label: {
            formatter: "{c}",
            position: "end",
            color: "white",
          },
        },  
      },
    ],
  };
};

export { barChartAverage }