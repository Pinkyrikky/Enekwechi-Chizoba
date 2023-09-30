import React from "react";
import Buttonwhite, { ButtonBlack } from "./Buttons";
import "../assets/css/Header.css";

function Header() {
  return (
    <>
      <div className="section">
        <div className="house">
        
        <div className="web">WEB DESIGNER & DEVELOPER</div>
        <h1 className="h1">I'm Chizoba Enekwechi</h1>
        <ButtonBlack />
        <Buttonwhite />
        <Footer/>
        </div>
      </div>
      
    </>
  );
}

export default Header;


export function Footer() {
  return(
    <footer>
        Copyright ©2023 All rights reserved  | This portfolio belongs to <span>Pinky</span>
        </footer>
  )
}