import {
  IStateMachineConfig,
  StepNames,
  surveyState,
} from "../interfaces/survey";
import { Step1 } from "./components/step1";
import { Step2 } from "./components/step2";
import { Step3 } from "./components/step3";
import { Step4 } from "./components/step4";

export const stateMachineConifg: IStateMachineConfig<surveyState, StepNames> = {
  initialStep: "step1",
  steps: {
    step1: {
      canAdvance: (state) => {
        let response = { next: false, modal: { open: false, text: "" } };
        if (
          state.age !== "" &&
          state.gender !== "" &&
          state.hasLicense !== null
        ) {
          if (state.hasLicense === "true") {
            response = { next: true, modal: { open: false, text: "" } };
          } else {
            response = {
              next: false,
              modal: { open: true, text: "Thanks for your interest" },
            };
          }
        }
        return response;
      },
    },
    step2: {
      canAdvance: (state) => {
        let response = { next: false, modal: { open: false, text: "" } };
        if (state.isFirstCar !== null) {
          if (state.isFirstCar === "false") {
            response = { next: true, modal: { open: false, text: "" } };
          } else {
            response = {
              next: false,
              modal: {
                open: true,
                text: "We are targeting more experienced clients, thank you for your interest",
              },
            };
          }
        }
        return response;
      },
    },
    step3: {
      canAdvance: (state) => {
        let response = { next: false, modal: { open: false, text: "" } };
        if (state.drivetrain !== "" && state.fuelEmissionsConcern !== "") {
          response = { next: true, modal: { open: false, text: "" } };
        }
        return response;
      },
    },
    step4: {
      canAdvance: (state) => {
        let response = { next: false, modal: { open: false, text: "" } };
        const hasInvalidCarMake =  state.carMake.some(item => item === "" || item === undefined || item === null);
        const hasInvalidCarModel =  state.carModel.some(item => item === "" || item === undefined || item === null);
        if (state.familyCars !== "" && !hasInvalidCarMake && state.carMake.length === +state.familyCars && !hasInvalidCarModel && state.carModel.length === +state.familyCars) {
          response = { next: false, modal: { open: true, text: "Thanks for answering the survey" } };
        }
        return response;
      },
    },
  },
  views: {
    step1: ({ state, dispatch }) => (
      <Step1 state={state} dispatch={dispatch} />
    ),
    step2: ({ dispatch }) => (
      <Step2  dispatch={dispatch}/>
    ),
    step3: ({ dispatch }) => (
      <Step3 dispatch={dispatch}/>
    ),
    step4: ({ state, dispatch }) => (
      <Step4 state={state} dispatch={dispatch} />
    )
  },
};
