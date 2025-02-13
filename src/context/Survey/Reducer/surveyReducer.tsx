import { surveyState, SurveyAction } from "../interfaces/survey";

export const surveyReducer = (state: surveyState, action: SurveyAction) => {
  switch (action.type) {
    case "UPDATE_AGE":
      if (/^(100|[1-9]?[0-9]|0)?$/.test(action.payload)) {
        return { ...state, age: action.payload };
      }
      return state;
    case "UPDATE_GENDER":
      if (action.payload != "") {
        return { ...state, gender: action.payload };
      }
      return state;
    case "UPDATE_HAS_LICENSE":
      return { ...state, hasLicense: action.payload };
    case "UPDATE_FIRST_CAR":
      return { ...state, isFirstCar: action.payload };
    case "UPDATE_DRIVETRAIN":
      return { ...state, drivetrain: action.payload };
    case "UPDATE_FUEL_EMI":
      return { ...state, fuelEmissionsConcern: action.payload };
    case "UPDATE_FAMILY_CARS":
      return { ...state, familyCars: action.payload };
    case "UPDATE_CAR_MAKE":
      const updateDataCarMake = [...state.carMake];
      updateDataCarMake[action.index] = action.payload;
      return { ...state, carMake: updateDataCarMake };
    case "UPDATE_CAR_MODEL":
      const updateDataCarModel = [...state.carModel];
      updateDataCarModel[action.index] = action.payload;
      return { ...state, carModel: updateDataCarModel };
    default:
      return state;
  }
};
