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
            I am a Web Developer. I specialize in JavaScript, TypeScript, React
            and Next.js.
          </p>
          <div className="info">
            <div>
              <p>Name:</p>
              <span style={{fontWeight:400}}>Chizoba Chukwunaza Enekwechi</span>
            </div>
            <div>
              <p>Date of Birth:</p>
              <span style={{fontWeight:400}}>29 January, 1999</span>
            </div>
            <div>
              <p>Address:</p>
              <span style={{fontWeight:400}}>49 Umushi Street, Awka, Anambra State</span>
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
          <button className="black">
            <a
              href="/Enekwechi-chizoba-cv.pdf"
              download="Chizoba_Enekwechi_CV.pdf"
              className="black"
              style={{textDecoration:"none"}}
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      <Skills />
      </div>

    </>
  );
}
