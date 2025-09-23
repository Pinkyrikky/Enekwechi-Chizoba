import Location from "../components/Location";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-20 md:mt-40 px-6">
      {/* Breadcrumb */}
      <Location />

<p>
</p>
      {/* Heading */}
      <div className="text-center mt-8">
        <h1
          className="text-4xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Contact Us
        </h1>
        <p
          className="mt-3 text-gray-600 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
         Reach out to us through any of the platforms below. we&apos;d be happy to collaborate and work alongside your team.
        </p>
      </div>

      {/* Contact Options */}
      <div className="mt-10 max-w-md mx-auto space-y-5">
        {/* WhatsApp */}
        <a
           href="https://wa.me/2348119335795?text=Hello,%20I%20want%20to%20make%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-green-50 transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaWhatsapp className="text-green-500 text-2xl" />
          <p className="text-gray-700">WhatsApp</p>
        </a>

       
        {/* Email */}
        <a
          href="mailto:rikkypinky20@gmail.com"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-red-50 transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <MdEmail className="text-red-500 text-2xl" />
          <p className="text-gray-700">Email</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/chizoba-enekwechi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-blue-100 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaLinkedin className="text-blue-600 text-2xl" />
          <p className="text-gray-700">LinkedIn</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+2347080786147"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-gray-300 transition"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <FaPhoneAlt className="text-gray-700 text-2xl" />
          <p className="text-gray-600">Phone</p>
        </a>

          <a
          href="https://github.com/pinkyrikky"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-gray-100 transition"
          target="_blank"
          rel="noopener noreferrer"
            data-aos="fade-up"
          data-aos-delay="600"
        >
          <FaGithub className="text-black text-2xl" />
          <p className="text-gray-700">GitHub</p>
        </a>


         {/* Twitter */}
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border hover:bg-blue-50 transition"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <FaTwitter className="text-blue-400 text-2xl" />
          <p className="text-gray-700">Twitter</p>
        </a>

      </div>
    </div>
  );
}
