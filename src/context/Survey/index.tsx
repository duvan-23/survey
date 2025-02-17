import React, { useReducer, useState } from "react";
import { getStepView, ISurveyContextType, ISurveyProviderProps, StepNames, surveyState } from "./interfaces/survey";
import { surveyReducer } from "./Reducer/surveyReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { stateMachineConifg } from "./machines/surveyMachine";
import { useNavigate } from "react-router-dom";

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
        carMake: [''],
        carModel: [''],
    }
    const [state, dispatch] = useReducer(surveyReducer, initialState);
    const {item:data, saveItem:saveData} = useLocalStorage('dataSurvey',[], false);
    
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState<StepNames>(
        stateMachineConifg.initialStep
      );
    const StepComponent = getStepView(stateMachineConifg, currentStep);
    const [mandatoryFields, setMandatoryFields] = useState(false);
    const [modal, setModal] = useState({open:false, text:""});

    const handleNext = () => {
        const canAdvance = stateMachineConifg.steps[currentStep].canAdvance(state);
        if (canAdvance.next) {
            setMandatoryFields(false);
            if (currentStep === "step1") setCurrentStep("step2");
            else if (currentStep === "step2") setCurrentStep("step3");
            else if (currentStep === "step3") setCurrentStep("step4");
            else if (currentStep === "step4") setCurrentStep("submit");
        } else if(canAdvance.modal.open) {
            setMandatoryFields(false); 
            addData(state);
            setModal({open:true, text:canAdvance.modal.text});
            setTimeout(() => {
                setModal({open:false,text:""}); 
                navigate('/');
            }, 4000);
        } else{
            setMandatoryFields(true);
    }
    };
    
    const addData = (text:surveyState) =>{
        const newData = [...data];
        newData.push(text);
        saveData(newData)
    };

    return(
        <SurveyContext.Provider value={{
            state,
            dispatch,
            handleNext,
            StepComponent,
            mandatoryFields,
            currentStep,
            modal
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