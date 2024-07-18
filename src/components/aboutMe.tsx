"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-screen w-9/12 flex flex-col items-center justify-start pt-48"
    >
      <motion.h1
        className="text-7xl text-white mb-28"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      <div className="text-xl space-y-5">
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
    </section>
  );
};

export default AboutMe;
