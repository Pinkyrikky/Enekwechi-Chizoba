import { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";
import { ButtonBlack } from "./components/Buttons";

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Experiences" element={<Experiences/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<ButtonBlack/>}/>
     </Routes>
      
      
    </>
  );
}

export default App;
