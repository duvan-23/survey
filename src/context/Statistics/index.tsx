import React from "react";
import { IStatisticsContextType, IStatisticsProviderProps } from "./interfaces/statistics";
import { useDashboardData } from "../../hooks/useProcessData";
import { barChart } from "./options/barChart";
import { pieChart } from "./options/pieChart";
import { halfPieChart } from "./options/halfPieChart";
import { pieBasicChart } from "./options/pieBasicChart";
import { gaugeChart } from "./options/gauge";
import { barChartAverage } from "./options/barChartAverage";
import { percentageBarChart } from "./options/percentageBarChart";

const StatisticsContext = React.createContext<IStatisticsContextType|null>(null);
const StatisticsProvider:React.FC<IStatisticsProviderProps> = ({ children })=>{
    const {
        processedData
    } = useDashboardData();
      
    const [labelsAge, dataAge, yNameAge, xNameAge] = processedData?.ageDistribution || [[],[], "", ""];
    const ageChart = barChart(labelsAge, dataAge, yNameAge, xNameAge, false);


    const licenseChart = pieChart(processedData?.licenseDistribution || [{value:0, name:""}]);
    
    const carOwnerChart = halfPieChart(processedData?.carOwnerDistribution || [{value:0, name:""}]);
    const customerTargetChart = pieBasicChart(processedData?.customerTargetDistribution || [{value:0, name:""}]);
    const fuelPercentageChart = gaugeChart(processedData?.fuelPercentageDistribution || {value:0});
    const driventrainPercentageChart = gaugeChart(processedData?.drivetrainPercentageDistribution || {value:0});

    const [labelsCar, dataCar, yNameCar, xNameCar] = processedData?.carAverageDistribution || [[],[], "", ""];
    const carAverageChart = barChartAverage(labelsCar, dataCar, yNameCar, xNameCar);
    
    const [labelsCarMakeModel, dataCarMakeModel, yNameCarMakeModel, xNameCarMakeModel] = processedData?.carMakeModelDistribution || [[],[], "", ""];
    const carMakeModelChart = barChart(labelsCarMakeModel, dataCarMakeModel, yNameCarMakeModel,xNameCarMakeModel, true);
    const groupRepresentationChart = percentageBarChart(processedData?.groupDistribution ||[{name:"",value:0, background: "#F44336", color: "#fff"}]);
    
    return(
        <StatisticsContext.Provider value={{
            ageChart,
            licenseChart,
            carOwnerChart,
            customerTargetChart,
            fuelPercentageChart,
            driventrainPercentageChart,
            carAverageChart,
            carMakeModelChart,
            groupRepresentationChart
        }}
        >
            {children}
        </StatisticsContext.Provider>
    );
}
const useStatisticsContext = () => {
    const context = React.useContext(StatisticsContext);
    if (!context) {
        throw new Error('useHomeContext must be used within a HomeProvider');
    }
    return context;
};
export { StatisticsProvider, useStatisticsContext }