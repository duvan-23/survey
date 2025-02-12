import React, { useReducer } from "react";
import { ISurveyContextType, ISurveyProviderProps } from "./interfaces/survey";
import { surveyReducer } from "./Reducer/surveyReducer";

const SurveyContext = React.createContext<ISurveyContextType|null>(null);

const SurveyProvider:React.FC<ISurveyProviderProps> = ({ children })=>{
    const initialState = {
        age: '',
        gender: '',
        hasLicense: null,
        isFirstCar: null,
        drivetrain: '',
        fuelEmissionsConcern: '',
        familyCars: '',
        carMake: [""],
        carModel: [""],
    }
    const [state, dispatch] = useReducer(surveyReducer, initialState);

    return(
        <SurveyContext.Provider value={{
            state,
            dispatch,
        }}
        >
            {children}
        </SurveyContext.Provider>
    );
}
const useSurveyContext = () => {
    const context = React.useContext(SurveyContext);
    if (!context) {
        throw new Error('SurveyContext must be used within a HomeProvider');
    }
    return context;
};
export { SurveyContext, SurveyProvider, useSurveyContext }