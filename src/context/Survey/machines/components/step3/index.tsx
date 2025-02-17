import { RadioOption } from "../../../../../components/RadioOption";
import { SurveyAction } from "../../../interfaces/survey";

const Step3: React.FC<{dispatch:React.Dispatch<SurveyAction>}> = ({ dispatch }) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="mb-1 w-full">
          <RadioOption
            data={[
              { label: "FWD", key: "fwd" },
              { label: "RWD", key: "rwd" },
              { label: "I don’t know", key: "idk" },
            ]}
            input={{
              label: "Which drivetrain do you prefer? *",
              name: "drivetrain",
            }}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DRIVETRAIN", payload: e.target.value })
            }
          />
        </div>

        <div className="mb-1 w-full">
          <RadioOption
            data={[
              { label: "YES", key: "yes" },
              { label: "NO", key: "no" },
            ]}
            input={{
              label: "Are you worried about fuel emissions? *",
              name: "fuelEmissionsConcern",
            }}
            onChange={(e) =>
              dispatch({ type: "UPDATE_FUEL_EMI", payload: e.target.value })
            }
          />
        </div>
      </div>
    );
};

export { Step3 };