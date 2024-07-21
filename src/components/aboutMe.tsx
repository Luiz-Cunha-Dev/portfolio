"use client";
import Link from "next/link";
import { MdOutlineMouse, MdArrowDownward, MdDownload  } from "react-icons/md";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-screen w-9/12 flex flex-col items-center justify-start pt-48 relative max-sm:w-full max-sm:pt-20 max-sm:p-8"
    >
      <motion.h1
        className="text-7xl mb-28 max-sm:text-3xl max-sm:mb-12"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      <div className="text-xl space-y-5 max-sm:text-xs">
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hello! I&apos;m 24 years old and a full stack web developer passionate about technology. I hold a technical degree in mechatronics from the technical school at UNICAMP and I am currently studying Systems Analysis and Development at the Federal Institute of São Paulo (IFSP).
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        My journey as a web developer began after completing the Integrated Technical Course at Driven Education, with over 1200 hours of study and more than 30 practical projects using the main Front-end and Back-end technologies in the market.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Currently, I am focused on specializing more and more in web development, but I also have a strong interest in Mobile and Artificial Intelligence.
      </motion.p>
      </div>

      {/* //botão para baixar curriculo */}

      <motion.div
      className="mt-14"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4, delay: 1 }}
      >
        <Link target="_blank" href="/CV- Luiz Miguel da Cunha.pdf" download={true}>
          <button className="bg-[--highlighted-text]  px-5 py-2 rounded-lg hover:bg-[--highlighted-text]">
            <MdDownload size={20} className="inline-block mr-2" />
            Download my resume
            </button>
        </Link>
      </motion.div>

      <motion.div className="absolute bottom-20 max-sm:bottom-32"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.4, delay: 1.3 }}
      >
        <Link href="#skills" className="flex justify-center items-center w-fit h-fit space-x-2 cursor-pointer hover:translate-y-1">
          <MdOutlineMouse size={30} className="text-[--highlighted-text]" />
          <span>Scroll down!</span>
          <MdArrowDownward size={30} className="text-[--highlighted-text]" />
        </Link>
      </motion.div>

    </section>
  );
};

export default AboutMe;
