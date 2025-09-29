import Location from "../components/Location";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Scrella",
    description: "Official website for Scrella — a phone insurance company.",
    image: "/scrella.png",
    link: "https://scrella.com",
    technologies: "React, Typescript, Redux, Tailwind",
  },
  {
    id: 2,
    title: "PAYGYM",
    description: "A web platform for managing gym memberships and schedules.",
    image: "/paygym.png",
    link: "https://paygymapp.com",
    technologies: "React, Typescript, next.js, Tailwind",

  },
  {
    id: 3,
    title: "Bill Breeze",
    description: "A modern platform for managing bill payments, with extended features tailored for hospital use.",
    image: "/billbreeze.png",
      technologies: "React, Typescript, Redux, Tailwind",

  },
  {
    id: 4,
    title: "Gamex",
    description: "An engaging game website with dynamic interactions.",
    image: "/gamex.png",
    technologies: "React, Typescript, Tanstack React Query, Tailwind",

    // no link → will show "Work in Progress"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    image: "/portfolio.png",
    technologies: "React, JavaScript, Tailwind",
  },
];

export default function Work() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  // }, []);

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="block mt-20 md:mt-60">
        <Location />
        <p
          className="mt-2 text-4xl text-center font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Portfolio
        </p>
      </div>

      <div className="py-12 px-6 bg-gray-50">
        <h2
          className="text-xl font-bold text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Some of the projects I’ve contributed to are listed below.
        </h2>
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 mb-28 gap-6 items-center bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
            >
              {/* Left: Image */}
              <div data-aos="fade-up-right" data-aos-delay="200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>

<div
  className="p-6"
  data-aos="fade-up-left"
  data-aos-delay="200"
>
  <h3 className="text-2xl font-semibold">{project.title}</h3>
  <p className="text-gray-600 text-base mt-4">
    {project.description}
  </p>

  {/* Technologies */}
  {project.technologies && (
    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.split(",").map((tech, index) => (
        <p
          key={index}
          className="px-3 py-1 text-xs rounded-full border  text-gray-400 font-medium"
        >
          {tech.trim()}
        </p>
      ))}
    </div>
  )}

  {/* Links */}
  {project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-pink-500 font-medium hover:underline"
    >
      Visit Site <FaLink className="ml-2" />
    </a>
  ) : project.title !== "Portfolio Website" ? (
    <span className="mt-6 inline-block text-gray-500 italic">
      Work in Progress
    </span>
  ) : null}
</div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
