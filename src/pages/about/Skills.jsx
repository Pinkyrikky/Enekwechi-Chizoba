import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

   

function Skills() {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className=""  data-aos="fade-up" data-aos-delay="200">
      <p className="skills">SKILLS</p>
    <h1 style={{textAlign:"center", fontSize:'50px', color:"#323232"}}>My skills</h1>

      <div
        //   className="text-xl font-normal px-5 pb-12 grid grid-cols-1 gap-8 sm:px-9 md:px-10 md:grid-cols-2"
        //   data-aos="fade-up"
        style={{fontSize:"22px", display:"grid",  gridTemplateColumns:"repeat(3, 1fr)", gap:"40px", padding:"4em"}}
        >
          <div>
            <p className="text-start text-sm font-medium">HTML5</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[95%]"></div>
            </div>
          </div>

            <div>
            <p className="text-start text-sm font-medium">Javascript</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[80%]"></div>
            </div>
          </div>

            <div>
            <p className="text-start text-sm font-medium">CSS</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[95%]"></div>
            </div>
          </div>

           <div>
            <p className="text-start text-sm font-medium">Typescript</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[80%]"></div>
            </div>
          </div>

           <div>
            <p className="text-start text-sm font-medium">Tailwind</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[95%]"></div>
            </div>
          </div>

           <div>
            <p className="text-start text-sm font-medium">NextJs</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[90%]"></div>
            </div>
          </div>

           <div>
            <p className="text-start text-sm font-medium">SCSS</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[70%]"></div>
            </div>
          </div>

           <div>
            <p className="text-start text-sm font-medium">React.js</p>
            <div className="skillLevelContainer">
              <div className="skillLevel w-[85%]"/>
            </div>
          </div>

    
        

        
        </div>
    </div>
  )
}

export default Skills
