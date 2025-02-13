import { RadioOption } from "../../../../../components/RadioOption";
import { SelectOption } from "../../../../../components/SelectOption";
import { SurveyAction, surveyState } from "../../../interfaces/survey";
import { gender } from "../../../Options";

const Step1: React.FC<{state:surveyState, dispatch:React.Dispatch<SurveyAction>}> = ({state, dispatch}) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
      </div>
    )
};

export { Step1 };