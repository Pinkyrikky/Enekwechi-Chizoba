import "./../App.css";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experiences from "../pages/Experiences";
import Work from "../pages/Work";
import { Route, Routes } from "react-router-dom";
import DashBoardLayout from "./DashBoardLayout";
import Home from "../pages/Home";

function AppRoute() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
                <Route element={<DashBoardLayout />}>
                
      <Route path="/About" element={<About/>} />
      <Route path="/Experiences" element={<Experiences/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Works' element={<Work/>}/>
                </Route>
     </Routes>
      
      
    </>
  );
}

export default AppRoute;
