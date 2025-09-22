
import "../App.css";
import pic1 from '../../src/assets/images/Untitled16_202403111105372.png'

import pic2 from '../../src/assets/images/Untitled15_202403140859582.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Home() {
    
  

    
  return (
    <>
    <Navbar />
      <section>
        <Header />
        <div className="imgSide">
       
        <div className="pic" >
          
        <Swiper className="swiper"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        // navigation={true}
        modules={[Autoplay,Navigation]}
        
      >
        <SwiperSlide ><img  src={pic2}/></SwiperSlide>
        <SwiperSlide ><img  src={pic1}/></SwiperSlide>
        
      </Swiper>
        </div>
        {/* <img src={pic2} alt="" className="pic"/> */}
        </div>
      </section>

      
    </>
  );
}



export default Home

