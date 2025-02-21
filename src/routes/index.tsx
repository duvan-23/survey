import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home";
import { Survey } from "../pages/Survey";
import { HomeProvider } from "../context/Home";
import { SurveyProvider } from "../context/Survey";
import { Statistics } from "../pages/Statistics";
import { StatisticsProvider } from "../context/Statistics";

const AppRoutes = ()=>{
 return (
    <Routes>
      <Route path="/" element={ 
        <HomeProvider>
          <Home />
        </HomeProvider>
      }/>
      <Route path="/survey" element={
        <SurveyProvider>
          <Survey />
        </SurveyProvider>
      }/>
      <Route path="/statistics" element={
        <StatisticsProvider>
          <Statistics />
        </StatisticsProvider>
      }/>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
 )
}

export { AppRoutes };