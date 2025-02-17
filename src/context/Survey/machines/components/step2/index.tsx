import { RadioOption } from "../../../../../components/RadioOption";
import { SurveyAction } from "../../../interfaces/survey";

const Step2: React.FC<{ dispatch:React.Dispatch<SurveyAction>}> = ({dispatch}) =>{
    return(
      <div className="flex justify-center items-center ">
        <div className="my-2 ">
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