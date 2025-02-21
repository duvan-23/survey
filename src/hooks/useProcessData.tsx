import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { surveyState } from "../context/Survey/interfaces/survey";
import { IProccessedData } from "../context/Statistics/interfaces/statistics";
import { initialData } from "../constants/dataSurvey";

export const useDashboardData = () => {
  
  const { item } = useLocalStorage('dataSurvey',initialData, false);

  const processedData:IProccessedData| null = useMemo(() => {
    if (!item.length) return null;

    const fuelPercentage = () =>{
        const total = item.filter((i:surveyState) => i.fuelEmissionsConcern !== "" ).length;
        const res = item.filter((i:surveyState) => i.fuelEmissionsConcern === "yes").length;
        return ((res/total)*100).toFixed();
    };
    const drivetrainPercentage = () =>{
        const total = item.filter((i:surveyState) => i.drivetrain !== "" ).length;
        const res = item.filter((i:surveyState) => (i.drivetrain === "fwd" || i.drivetrain === "idk")).length;
        return ((res/total)*100).toFixed();
    };
    const carMakeModel = () =>{
        const data = item.filter((i:surveyState) => i.carMake[0] !== "" );
        let filter:{ labels:string[], values:number[]} = {labels:[], values:[]};
        filter =  data.reduce((acc:{ labels:string[], values:number[]}, curr:surveyState) => {
            const carMakes = Array.isArray(curr.carMake) ? curr.carMake : [curr.carMake];
            const carModels = Array.isArray(curr.carModel) ? curr.carModel : [curr.carModel];
            carMakes.forEach((make, index) => {
                if (make !== "" && carModels[index] !== "" ) {
                    const key = `${make.toUpperCase()} - ${carModels[index].toUpperCase()}`;
                    if(!acc.labels){
                        acc.labels = [key];
                        acc.values = [1];
                    }else if (!acc.labels.includes(key)) {
                        acc.labels.push(key);
                        acc.values.push(1);
                    }else{
                        const index = acc.labels.indexOf(key);
                        acc.values[index] += 1;
                    }
                }
            });
        
            return acc;
        }, {} as { labels:string[], values:number[]})
        return filter;
    };

    const groupDistribution = () =>{
        const total = item.length;
        const adolecents = item.filter((i:surveyState) => +i.age < 18 ).length;
        const unlicensed = item.filter((i:surveyState) => i.hasLicense === "false" ).length;
        const firstCar = item.filter((i:surveyState) => i.isFirstCar ==="true" ).length;
        const target = item.filter((i:surveyState) => i.carMake[0] !== "" ).length;
        return [
            {name:"Adolecents",value:+((adolecents/total)*100).toFixed(), background: "#bf2138", color: "#fff"},
            {name:"Unlicensed",value:+((unlicensed/total)*100).toFixed(), background: "#c4b618", color: "#fff"},
            {name:"First car",value:+((firstCar/total)*100).toFixed(), background: "#5470c6", color: "#fff"},
            {name:"Target",value:+((target/total)*100).toFixed(), background: "#91cc75", color: "#fff"}
        ];
    };

    return {
        ageDistribution: [
            ["Adolecents","Adults"],
            [ item.filter((i:surveyState) => +i.age < 18).length, item.filter((i:surveyState) => +i.age > 17).length ],
            "People",
            ""
        ],
        licenseDistribution: [
            {value: item.filter((i:surveyState) => i.hasLicense ==="true" ).length, name: "Has License"},
            {value: item.filter((i:surveyState) => i.hasLicense === "false").length, name: "No License"}
        ],
        carOwnerDistribution: [
            {value: item.filter((i:surveyState) => i.isFirstCar ==="true" ).length, name: "First car"},
            {value: item.filter((i:surveyState) => i.isFirstCar === "false").length, name: "Already with a car"}
        ],
        customerTargetDistribution: [
            {value: item.filter((i:surveyState) => i.carMake[0] !== "" ).length, name: "Target"},
            {value: item.filter((i:surveyState) => i.carMake[0] === "").length, name: "Others"}
        ],
        fuelPercentageDistribution: {value: +fuelPercentage() || 0},
        drivetrainPercentageDistribution: {value: +drivetrainPercentage()|| 0},
        carAverageDistribution: [
            Array.from({ length: item.filter((i:surveyState) => i.familyCars !== "" ).length }, (_, i) => "F "+ (i + 1)),
            item.filter((i:surveyState) => i.familyCars !== "").map((i:surveyState)=> +i.familyCars) ,
            "Cars",
            "Family"
        ],
        carMakeModelDistribution: [
            carMakeModel().labels,
            carMakeModel().values,
            "Make - Model",
            ""
        ],
        groupDistribution:groupDistribution()
    };
  }, [item]);

  return { processedData };
};