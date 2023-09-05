
import Header from "./components/Header";
import "./App.css";

import pic1 from '../src/pictures/pic1.png'
import pic2 from '../src/pictures/IMG_4687-removebg2.png'
import React, {useState } from "react";

import Navbar from "./components/Navbar";


function Home() {
    
  

    
  return (
    <>
      <section>
        <Header />
        <div className="imgSide">
        <Navbar />
        <img className="pic" src={pic2} alt="" />
        </div>
      </section>

      
    </>
  );
}
  

export default Home

// function App() {
//   const [statement, setStatement]= useState({height:"300px", width: "100px", backgroundColor: "yellow"})

//   function addition(){
//     if(statement.backgroundColor === "yellow"){
//       setStatement({
//         ...statement, backgroundColor: "red"
//       })
//     }else{
//       setStatement({
//         ...statement, backgroundColor: 'yellow'
//       })
//     }
//   }

  // function App() {
  //   const [statement, setStatement]= useState(menuIcon)
  //   const [dropdown, setDropdown] = useState({display : 'none'})
  //   function addition(){
  //     if(statement=== menuIcon){
  //       setStatement(close)
  //       setDropdown({
  //         ...dropdown, display : "block"
  //       })
  //     }else{
  //       setStatement(menuIcon)
  //       setDropdown({
  //         ...dropdown, display: "none"
  //       })
  //     }
  //   }