import { SelectOption } from "../../../../../components/SelectOption";
import { SurveyAction, surveyState } from "../../../interfaces/survey";
import { carMakes } from "../../../Options";

const Step4: React.FC<{state:surveyState, dispatch:React.Dispatch<SurveyAction>}> = ({state, dispatch}) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="mb-1 w-[48%] col-span-2 col-start-1">
          <label className="block text-base font-semibold text-gray-900">
            How many cars do you have in your family? *
          </label>
          <input
            type="number"
            min={1}
            name="familyCars"
            value={state.familyCars}
            onChange={(e) =>
              dispatch({ type: "UPDATE_FAMILY_CARS", payload: e.target.value })
            }
            className="mt-1 block w-full p-2.5 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:border-blue-500 
              bg-gray-300 transition duration-200"
            required
          />
        </div>

        {Array.from(
          { length: +state.familyCars },
          (_, i) => (
            <div  className="col-span-2 col-start-1" key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="mb-1 w-full">
                  <SelectOption
                    data={carMakes}
                    input={{
                      label:
                        "Which car make and model do you drive? *",
                      name: `carMake${i}`,
                      value: state.carMake[i],
                    }}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_CAR_MAKE", payload: e.target.value, index:i })
                    }
                  />
                </div>

                <div className="mb-1 w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Model *
                  </label>
                  <input
                    type="text"
                    name={`carModel${i}`}
                    value={state.carModel[i] ?? ""}
                    onChange={(e) =>
                      dispatch({ type: "UPDATE_CAR_MODEL", payload: e.target.value, index:i })
                    }
                    className="mt-1 block w-full p-2.5 border border-gray-300 
                                          rounded-md shadow-sm focus:outline-none focus:border-blue-500 
                                          bg-gray-300 transition duration-200"
                    placeholder="Model name"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
};

export { Step4 };