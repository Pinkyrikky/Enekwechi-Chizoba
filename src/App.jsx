import Header from "./components/Header";
import "./App.css";
import menuIcon from '../src/pictures/menuIcon2.svg'
import close from '../src/pictures/x-thin-svgrepo-com.svg'
import pic1 from '../src/pictures/pic1.png'
import pic2 from '../src/pictures/pic2.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";

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

  function App(){
    const [open, setOpen] =useState (false)
    function dropdown(){
      if(open){
        setOpen(false)
      }else{
        setOpen(true)
      }
    }
  

    
  return (
    <>
      <section>
        <Header />
        <div className="imgSide">
       <div className="hamburg" onClick={dropdown}>
       {!open && <img className="hamburger" src={menuIcon} alt="hamburger icon" />}
       {open && <img className="hamburger" src={close} alt="hamburger icon" />}
        {open && <div  className="dropdown">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Experiences</li>
              <li>Work</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>}
       </div>
        <img className="pic" src={pic2} alt="" />
        </div>
      </section>
    </>
  );
}


export default App;


// export  class PauseOnHover extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       pauseOnHover: true
//     };
//     return (
//       <div>
//         <h2>Pause On Hover</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }