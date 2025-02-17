import backgroundImage from "../../assets/background.webp";
import fromImage from "../../assets/form.webp";
import { useSurveyContext } from "../../context/Survey";
import { Modal } from "../../components/Modal";
import { MessageModal } from "../../components/MessageModal";

const Survey: React.FC = () => {
  const { 
    state, 
    dispatch, 
    handleNext, 
    StepComponent,
    mandatoryFields,
    currentStep,
    modal 
  } = useSurveyContext();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-grow items-start justify-center pt-16 lg:pt-16  ">
        <div className="relative w-full lg:flex lg:w-11/12 shadow-2xl ">
          <div className="w-full lg:flex lg:w-[35%] h-auto bg-gradient-to-b from-emerald-400 to-blue-400 min-h-[80vh] rounded hidden items-center justify-center">
            <img
              src={fromImage}
              alt="Form image"
              className="w-10/12 h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-[65%] w-full bg-gradient-to-b from-emerald-400 to-blue-400 flex items-center justify-center p-5 rounded">
            <div className="bg-white/20 shadow-xl rounded-lg p-5 w-full">
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6 italic shadow-sm">
                Automotive Sales Customer Survey
              </h2>

              <StepComponent state={state} dispatch={dispatch} />

              <div>
                {mandatoryFields&&(
                    <h3 className="text-red-500">Fields marked with * are required</h3>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleNext}
                  className="mt-5 px-6 py-3 rounded-2xl text-white font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105"
                >
                  {currentStep === "submit" ? "Submit" : "Next →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal.open && (
          <Modal>
            <MessageModal text={modal.text}/>
          </Modal>
        )}
    </div>
  );
};

export { Survey };
