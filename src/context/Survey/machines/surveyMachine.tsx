import { RadioOption } from "../../../components/RadioOption";
import { SelectOption } from "../../../components/SelectOption";
import {
  StateMachineConfig,
  StepNames,
  SurveyAction,
  surveyState,
} from "../interfaces/survey";
import { carMakes, gender } from "../Options";

export const stateMachineConifg: StateMachineConfig<surveyState, StepNames> = {
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
    submit: {
      canAdvance: () => ({
        next: false,
        modal: { open: true, text: "Thanks for answering the survey" },
      }),
    },
  },
  views: {
    step1: ({ state, dispatch }) => (
      <>
        <div className="mb-1 w-full">
          <label className="block text-base font-semibold text-gray-900">
            Age *
          </label>
          <input
            type="text"
            name="age"
            min={1}
            value={state?.age}
            onChange={(e) =>
              dispatch({ type: "UPDATE_AGE", payload: e.target.value })
            }
            className="mt-1 block w-full p-2.5 border border-gray-300
                            rounded-md shadow-sm focus:outline-none focus:border-blue-500
                            bg-gray-300 transition duration-200"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-1 w-full">
          <SelectOption
            data={gender}
            input={{
              label: "Gender *",
              name: "gender",
              value: state.gender,
            }}
            onChange={(e: any) =>
              dispatch({ type: "UPDATE_GENDER", payload: e.target.value })
            }
          />
        </div>
        <div className="mb-1 w-full">
          <RadioOption
            data={[
              { label: "YES", key: "true" },
              {
                label: "No, I prefer using other transport",
                key: "false",
              },
            ]}
            input={{
              label: "Do you own a car driving license? *",
              name: "hasLicense",
            }}
            onChange={(e: any) =>
              dispatch({ type: "UPDATE_HAS_LICENSE", payload: e.target.value })
            }
          />
        </div>
      </>
    ),
    step2: ({ state, dispatch }) => (
      <>
        <div className="mb-1 w-full">
          <RadioOption
            data={[
              { label: "YES", key: "true" },
              { label: "NO", key: "false" },
            ]}
            input={{
              label: "Is this your first car? *",
              name: "isFirstCar",
            }}
            onChange={(e) =>
              dispatch({ type: "UPDATE_FIRST_CAR", payload: e.target.value })
            }
          />
        </div>
      </>
    ),
    submit: ({ state, dispatch }) => (
      <div>
        <p>
          {state.age} is {state.carMake} years old.
        </p>
      </div>
    ),
  },
};
