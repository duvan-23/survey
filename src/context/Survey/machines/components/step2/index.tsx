import { RadioOption } from "../../../../../components/RadioOption";
import { SurveyAction } from "../../../interfaces/survey";

const Step2: React.FC<{ dispatch:React.Dispatch<SurveyAction>}> = ({dispatch}) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
      </div>
    );
};

export { Step2 };