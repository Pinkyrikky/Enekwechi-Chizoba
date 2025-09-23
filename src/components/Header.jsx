import Buttonwhite, { ButtonBlack } from "./Buttons";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>

      <div className="section">
        <div className="house">
        
        <div className="web">WEB DESIGNER & DEVELOPER</div>
        <h1 className="h1">I&apos;m Chizoba Enekwechi</h1>
       
       <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start">
         <ButtonBlack />
       <Link to= "/Contact">
        <Buttonwhite />
       </Link>
       </div>
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