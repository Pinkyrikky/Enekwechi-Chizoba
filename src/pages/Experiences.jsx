import Location from "../components/Location";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

   

  

export default function Experiences() {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="block mt-20 md:mt-60">
        <Location />
        <p className="mt-2 text-4xl text-center font-bold"  data-aos="fade-up" data-aos-delay="200">Experiences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 px-4 md:px-16 gap-4">
        <div className="bg-white p-5 pt-14 relative"  data-aos="fade-up" data-aos-delay="200">
          <p className="absolute -top-9 text-white bg-pink-250 p-4 rounded-full"><FaUserGraduate className="text-4xl" /></p>
          <p className="text-pink-250 font-medium">2016 - 2021</p>
          <p className="font-bold text-xl md:text-3xl mt-2">Bachelor's Degree of Science</p>
          <p className="mt-2 font-medium leading-loose text-gray-500">I earned a Bachelor of Science in Computer Science, during which I developed a strong  foundation in web development alongside core areas of computing.</p>
        </div>

        <div className="bg-white p-5 mt-10 md:mt-0 pt-14 relative"  data-aos="fade-up" data-aos-delay="200">
          <p className="absolute -top-9 text-white bg-pink-250 p-4 rounded-full"><FaLaptopCode className="text-4xl" /></p>
          <p className="text-pink-250 font-medium">April 2019 - November-2019</p>
          <p className="font-bold text-xl md:text-3xl mt-2">Industrial Training</p>
          <p className="mt-2 font-medium leading-loose text-gray-500">I did my Industrial Training at Tekhub Nigeria Limited, where I deepened my knowledge of web development. I learned PHP and JavaScript more in-depth and actively contributed to projects, which helped me apply my skills in practical scenarios.</p>
        </div>

        <div className="bg-white p-5 mt-10 pt-14 relative"  data-aos="fade-up" data-aos-delay="200">
          <p className="absolute -top-9 text-white bg-pink-250 p-4 rounded-full"><FaLaptopCode className="text-4xl" /></p>
          <p className="text-pink-250 font-medium">2022 - 2024</p>
          <p className="font-bold text-xl md:text-3xl mt-2">Web Developer (Intern)</p>
          <p className="mt-2 font-medium leading-loose text-gray-500">I was an intern at Innov8 Space, where I perfected my web development skills and advanced into using modern technologies such as React, TypeScript, Next.js, and Tailwind CSS. This experience gave me practical knowledge of building scalable and responsive web applications.</p>
        </div>

         <div className="bg-white p-5 mt-10 pt-14 relative"  data-aos="fade-up" data-aos-delay="200">
          <p className="absolute -top-9 text-white bg-pink-250 p-4 rounded-full"><FaLaptopCode className="text-4xl" /></p>
          <p className="text-pink-250 font-medium">2024 - till date</p>
          <p className="font-bold text-xl md:text-3xl mt-2">Web Developer (contract)</p>
          <p className="mt-2 font-medium leading-loose text-gray-500">I currently work at Intbit Technologies, where I am part of a collaborative team that develops modern, responsive websites. This role has allowed me to strengthen my teamwork skills while applying technologies like React, TypeScript, Next.js, and Tailwind CSS in real-world projects.</p>
        </div>
      </div>
    </>
  );
}
