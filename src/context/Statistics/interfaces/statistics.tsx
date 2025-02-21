import { ReactNode } from "react";

export interface IStatisticsProviderProps {
    children: ReactNode;
}
export interface IStatisticsContextType {
    ageChart:ChartOptions;
    licenseChart:pieOptions;
    carOwnerChart:halfPieOptions;
    customerTargetChart:pieBasicOptions;
    fuelPercentageChart:gaugeOptions;
    driventrainPercentageChart:gaugeOptions;
    carAverageChart:ChartaverageOptions;
    carMakeModelChart:ChartOptions;
    groupRepresentationChart:percentageBarChart;
}

export interface IProccessedData {
    ageDistribution:[string[], number[], string, string],
    licenseDistribution: {value:number, name:string}[];
    carOwnerDistribution: {value:number, name:string}[];
    customerTargetDistribution: {value:number, name:string}[];
    fuelPercentageDistribution: {value:number};
    drivetrainPercentageDistribution: {value:number};
    carAverageDistribution:[string[], number[], string, string],
    carMakeModelDistribution:[string[], number[], string, string],
    groupDistribution: { name: string, value: number, background: string, color: string }[]
}

export type ChartOptions = {
    title: {
        text: string;
    };
    tooltip: {};
    xAxis: {
        type: string;
        data: string[];
    };
    yAxis: {
        type: string;
    };
    series: {
        name: string;
        type: string;
        data: number[];
    }[];
}

export type pieOptions = {
    tooltip: {
        trigger: string;
    };
    legend: {
        top: string;
        left: string;
    };
    series: {
        name: string;
        type: string;
        radius: string[];
        avoidLabelOverlap: boolean;
        label: object;
        emphasis: object;
        labelLine: object;
        data: {value:number, name:string}[];
    }[];
}

export type halfPieOptions = {
    tooltip: {
        trigger: string;
    };
    legend: {
        top: string;
        left: string;
    };
    series: {
        name: string;
        type: string;
        radius: string[];
        center: string[];
        startAngle: number;
        endAngle: number;
        data: {value:number, name:string}[];
    }[];
}

export type pieBasicOptions = {
    tooltip: {
        trigger: string;
    };
    legend: {
        left: string;
        textStyle: {color: string};
    };
    series: {
        name: string;
        type: string;
        radius: string;
        avoidLabelOverlap: boolean;
        label: object;
        emphasis: object;
        data: {value:number, name:string}[];
    }[];
}

export type gaugeOptions = {
    series: {
        type: string;
        center: string[];
        startAngle: number;
        endAngle: number;
        min: number;
        max: number;
        itemStyle: {
            color: string;
        };
        pointer: object;
        progress: object;
        axisLine: object;
        splitLine: object;
        axisTick: object;
        axisLabel: object;
        data: {value:number}[];
        detail: object;
    }[];
    
}

export type ChartaverageOptions = {
    title: {
        text: string;
    };
    tooltip: object;
    xAxis: {
        type: string;
        data: string[];
    };
    yAxis: {
        type: string;
        name: string;
    };
    series: {
        name: string;
        type: string;
        data: number[];
        markLine: object;
    }[];
}

export type percentageBarChart = {
    title: {
        text: string;
    };
    tooltip: object;
    xAxis: object;
    yAxis: object;
    series: {
        name: string;
        type: string;
        stack: string;
        data: number[];
        itemStyle: object;
        label: object;
    }[];
    
}