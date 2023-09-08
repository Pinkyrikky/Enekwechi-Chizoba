
import Header from "./components/Header";
import "./App.css";

import pic1 from '../src/pictures/pic1.png'
import pic2 from '../src/pictures/IMG_4687-removebg2.png'
import React, {useState, useRef } from "react";

import Navbar from "./components/Navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function Home() {
    
  

    
  return (
    <>
     <Navbar />
      <section>
        <Header />
        <div className="imgSide">
       
        <div className="pic">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        // navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img className="pic" src={pic2}/></SwiperSlide>
        <SwiperSlide ><img className="pic" src={pic1}/></SwiperSlide>
        
      </Swiper>
        </div>
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