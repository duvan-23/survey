import React from "react";
import { useStatisticsContext } from "../../context/Statistics";
import ReactECharts from 'echarts-for-react';
import { Nav } from "../../components/Nav";
import backgroundImage from '../../../public/background.webp';
const Statistics: React.FC = ()=>{ 
  const { 
    ageChart,
    licenseChart,
    carOwnerChart,
    customerTargetChart,
    fuelPercentageChart,
    driventrainPercentageChart,
    carAverageChart,
    carMakeModelChart,
    groupRepresentationChart
  } = useStatisticsContext();

  return(
    <div className="bg-[#12163A] min-h-screen text-white p-8 "style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Nav />
      <div className="w-[94%] mx-auto ">
        <h1 className="text-3xl font-bold mb-6 ">Survey Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div className="bg-[#1E214D] p-6 rounded-xl h-full">
            <h2 className="text-lg font-semibold text-center">Age Distribution</h2>
            {ageChart.series[0].data.length === 0 && (
                <h3 className="text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={ageChart} style={{ height: "225px" }}/> 
          </div>

          <div className="bg-[#1E214D] p-6 rounded-xl  h-full">
            <h2 className="text-lg font-semibold text-center">License Distribution</h2>
            {licenseChart.series[0].data[0].name === "" && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={licenseChart}  style={{ height: "225px" }}/>
          </div>

          <div className="bg-[#1E214D] p-6 rounded-xl h-full">
            <h2 className="text-lg font-semibold text-center">Owner car Distribution</h2>
            {carOwnerChart.series[0].data[0].name === "" && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={carOwnerChart} style={{ height: "225px" }}/> 
          </div>

          <div className="bg-[#1E214D] p-6 rounded-xl row-span-2 h-full flex flex-col">
            <h2 className="text-lg font-semibold text-center">Group representation</h2>
            <div className="flex-grow w-full min-h-[400px] mt-6">
              {groupRepresentationChart.series[0].name ==="" && (
                  <h3 className=" text-center text-red-500">No data yet</h3>
                )  
              }
              <ReactECharts option={groupRepresentationChart} style={{ height: "96%" }} />
            </div>
          </div>
          <div className="bg-[#1E214D] p-6 rounded-xl h-full">
            <h2 className="text-lg font-semibold text-center">Customers target</h2>
            {customerTargetChart.series[0].data[0].name === "" && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={customerTargetChart} style={{ height: "225px" }} className="mt-10"/>
          </div>

          <div className="bg-[#1E214D] p-6 rounded-xl h-full">
            <h2 className="text-lg font-semibold mb-6 text-center">The percentage of targetables that care about fuel emissions</h2>
            {fuelPercentageChart.series[0].data[0].value === 0 && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={fuelPercentageChart} style={{ height: "225px" }}/>
          </div>
          <div className="bg-[#1E214D] p-6 rounded-xl h-full">
            <h2 className="text-lg font-semibold text-center">The percentage of targetables that picked FWD or “I don’t know” for drivetrain</h2>
            {driventrainPercentageChart.series[0].data[0].value === 0 && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={driventrainPercentageChart} style={{ height: "225px" }}/>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1E214D] p-6 rounded-xl ">
            <h2 className="text-lg font-semibold text-center">The average amount of cars in a family</h2>
            {carAverageChart.series[0].data.length ===0 && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={carAverageChart} />
          </div>
          <div className="bg-[#1E214D] p-6 rounded-xl ">
            <h2 className="text-lg font-semibold text-center">The car make and model distribution</h2>
            {(carMakeModelChart.series[0].data === undefined || carMakeModelChart.series[0].data.length === 0 )  && (
                <h3 className=" text-center text-red-500">No data yet</h3>
              )  
            }
            <ReactECharts option={carMakeModelChart} />
          </div>
        </div>

      </div>
      
    </div>
  );
}

export { Statistics };