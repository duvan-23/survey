import { ReactNode } from "react";

export interface ISurveyProviderProps {
    children: ReactNode;
}

export type surveyState = {
  age: string;
  gender: string;
  hasLicense: string | null;
  isFirstCar: string | null;
  drivetrain: string;
  fuelEmissionsConcern: string;
  familyCars: string;
  carMake: string[],
  carModel: string[],
};

export type SurveyAction =
  | { type: "UPDATE_AGE"; payload: string }
  | { type: "UPDATE_HAS_LICENSE"; payload: string }
  | { type: "UPDATE_FIRST_CAR"; payload: string }
  | { type: "UPDATE_DRIVETRAIN"; payload: string }
  | { type: "UPDATE_FUEL_EMI"; payload: string }
  | { type: "UPDATE_FAMILY_CARS"; payload: string }
  | { type: "UPDATE_CAR_MAKE"; payload: string, index:number }
  | { type: "UPDATE_CAR_MODEL"; payload: string, index:number }
  | { type: "UPDATE_GENDER"; payload: string };

export interface ISurveyContextType {
    state: surveyState;
    dispatch: React.Dispatch<SurveyAction>;
}

export type StepNames = "step1" | "step2" | "step3" | "step4" | "submit";

export interface StateMachineConfig <StateType, StepNames extends string>{
    initialStep: StepNames,
    steps: {
        [key in StepNames] : {
            canAdvance: (state: StateType) => { next:boolean, modal:{ open:boolean, text:string} };
        }
    };
    views: {
        [key in StepNames] : React.ComponentType <{
            state: StateType;
            dispatch: React.Dispatch<SurveyAction>;
        }>
    }
}

export const getStepView = <T, V extends string>(
    config: StateMachineConfig<T, V>,
    stepName: V
  ): React.ComponentType<{ state: T; dispatch: React.Dispatch<SurveyAction> }> =>
    config.views[stepName];