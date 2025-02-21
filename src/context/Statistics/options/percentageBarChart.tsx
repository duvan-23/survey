const percentageBarChart =( data:{ name:string, value:number, background:string, color:string}[])=> {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const info = data.map((item)=>{
    return {
      name: item.name,
      type: "bar",
      stack: "total",
      data: [item.value],
      itemStyle: { color: item.background },
      label: { show: true, position: "inside", color: item.color, fontSize: 14, formatter: "{c}%" },
    }
  })
  return {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a}: {c}%", 
    },
    legend: {
      show: true,
      top: 0, 
      padding: [0, 0, 10, 0],
      textStyle: { color: "#fff", fontSize: 13 }, 
    },
    xAxis: {
      type: "category",
      data: [""],
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: total > 100 ? total : 100,
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false }, 
    },
    series: info,
  };
}  
export { percentageBarChart }