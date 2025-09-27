import "../../assets/css/about/About.css";
import CountUp from "react-countup";
import "animate.css";
import Skills from "./Skills";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Location from "../../components/Location";

export default function AboutUs() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
  return (
    <>
      <div className="block mt-20 md:mt-60">
        <Location />
       <p className="mt-2 text-4xl text-center font-bold"  data-aos="fade-up" data-aos-delay="200">About Me</p>
      <div className="AboutUs">
        {/* Stats Section */}
        <div className="happyClient aboutMe animate__animated animate__fadeInUp animate__faster">
          <div>
            <h1>
              <CountUp start={0} end={4} duration={2.75} separator=" " />
            </h1>
            <p>Happy Clients</p>
          </div>

          <div>
            <h1>
              <CountUp start={0} end={6} duration={2.75} separator=" " />
            </h1>
            <p>Projects Done</p>
          </div>

          <div>
            <h1>
              <CountUp start={0} end={5} duration={2.75} separator=" " />
            </h1>
            <p>Cups Of Coffee</p>
          </div>

          <div>
            <h1>
              <CountUp
                start={0}
                end={5.87}
                duration={2.75}
                separator=" "
                decimals={2}
              />
            </h1>
            <p>Working Hours</p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="qualification aboutMe "
        data-aos="fade-up" data-aos-delay="100" >
          <h4>Hey there 👋</h4>
          <h1>A Web Designer & Developer Based In Nigeria</h1>
          <p>
          I’m a Web Developer passionate about building modern, responsive, and high-performing applications. I specialize in JavaScript, TypeScript, React, and Next.js, with a strong focus on creating seamless user experiences and clean, maintainable code.
<br/><br/>
I enjoy turning complex problems into elegant solutions and continuously improving my craft to stay ahead of industry trends. My goal is to deliver digital products that are not only functional but also impactful.
          </p>
          <div className="info">
            <div>
              <p>Name:</p>
              <span style={{fontWeight:400}}>Chizoba Chukwunaza Enekwechi</span>
            </div>
           
            <div>
              <p>Address:</p>
              <span style={{fontWeight:400}}>Awka, Anambra State</span>
            </div>
            <div>
              <p>Zip Code:</p>
              <span style={{fontWeight:400}}>45789</span>
            </div>
            <div>
              <p>Email:</p>
              <span style={{fontWeight:400}}>rikkypinky20@gmail.com</span>
            </div>
            <div>
              <p>Phone:</p>
              <span style={{fontWeight:400}}>07080786147</span>
            </div>
          </div>
          <a
              href="/Enekwechi-chizoba-cv.pdf"
              download="Chizoba_Enekwechi_CV.pdf"
             
              style={{textDecoration:"none"}}
            >
              <p  className="text-white bg-pink-250 w-full text-center py-3">  Download CV</p>
            
            
            </a>
        </div>
      </div>

      <Skills />
      </div>

    </>
  );
}
