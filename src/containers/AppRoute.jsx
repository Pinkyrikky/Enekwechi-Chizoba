import "./../App.css";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experiences from "../pages/Experiences";
import Services from "../pages/Services";
import Work from "../pages/Work";
import { Route, Routes } from "react-router-dom";
import { ButtonBlack } from "../components/Buttons";
import DashBoardLayout from "./DashBoardLayout";
import Home from "../pages/Home";

function AppRoute() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
                <Route element={<DashBoardLayout />}>
                
      <Route path="/About" element={<About/>} />
                </Route>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Experiences" element={<Experiences/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<ButtonBlack/>}/>
     </Routes>
      
      
    </>
  );
}

export default AppRoute;
