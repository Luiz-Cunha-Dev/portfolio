"use client";
import { useState } from "react";
import Link from "next/link";
import {
  MdOutlineMouse,
  MdArrowDownward,
  MdCalendarMonth,
  MdWorkOutline,
  MdOutlineSchool,
} from "react-icons/md";
import { motion } from "framer-motion";

const ProfessionalExperience = () => {
  const academicBackground = [
    {
      course: "High School",
      institution: "Colégio Técnico de Campinas (UNICAMP)",
      year: "2017",
    },
    {
      course: "Mechatronics Technician",
      institution: "Colégio Técnico de Campinas (UNICAMP)",
      year: "2018",
    },
    {
      course: "Transportation Engineering",
      institution: "Faculdade de Tecnologia (UNICAMP)",
      year: "Completed up to the 4th semester (2022)",
    },
    {
      course: "Full Stack Web Development",
      institution: "Driven Education",
      year: "2023 (10 months)",
    },
    {
      course: "Systems Analysis and Development",
      institution: "Instituto Federal de São Paulo (IFSP)",
      year: "Currently in the 4th semester",
    },
  ];

  const professionalExperience = [
    {
      position: "Mechatronics Intern",
      company: "Drietto do Brasil – Campinas, São Paulo",
      year: "2018 to 2019 (8 months)",
    },
    {
      position: "Junior Mechatronics Technician",
      company: "Drietto do Brasil – Campinas, São Paulo",
      year: "2019 to 2021 (2 years and 3 months)",
    },
    {
      position: "Intern in Systems Analysis and Development",
      company: "Atuale Imobiliária – Hortolândia, São Paulo",
      year: "2023 (1 year and 4 months)",
    },
  ];

  const [showAcademicBackground, setShowAcademicBackground] = useState(true);

  return (
    <section
      id="professional-experience"
      className="min-h-screen w-9/12 flex flex-col items-center justify-start w-full pt-48 relative pb-40 mmax-sm:w-full max-sm:pt-20 max-sm:p-8"
    >
      <motion.h1
        className="text-7xl mb-28 max-sm:text-3xl max-sm:mb-12 max-sm:text-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Professional Experience
      </motion.h1>

      <div className="flex justify-between space-x-16 mb-12 max-sm:space-x-8">
        <motion.div
          className="flex items-center space-x-5 cursor-pointer hover:text-[--highlighted-text] max-sm:text-xs"
          onClick={() => setShowAcademicBackground(true)}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MdOutlineSchool size={50} className="max-sm:w-8" />
          <h2>Education</h2>
        </motion.div>

        <motion.div
          className="flex items-center space-x-5 cursor-pointer hover:text-[--highlighted-text] max-sm:text-xs"
          onClick={() => setShowAcademicBackground(false)}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MdWorkOutline size={50} className="max-sm:w-8" />
          <h2>Professional Experience</h2>
        </motion.div>
      </div>

      {showAcademicBackground
        ? academicBackground.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="flex max-sm:items-start min-h-32 h-full max-sm:w-full pl-2 pr-2"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {index % 2 == 0 ? (
                  <div
                    className={`w-56 max-sm:w-full ${
                      (item.course + item.institution).length > 55
                        ? "h-56 max-sm:h-40"
                        : "h-36"
                    }`}
                  >
                    <h3 className="font-bold text-lg max-sm:text-xs">{item.course}</h3>
                    <p className="text-lg mb-3 max-sm:text-xs">{item.institution}</p>
                    <div className="flex text-xs max-sm:justify-end">
                      <MdCalendarMonth min={20} size={20} className="mr-2" />
                      <span className="text-left">{item.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-56 max-sm:w-full"></div>
                )}



                <div
                  className={`w-32 max-sm:max-w-14 flex flex-col items-center justify-start  
              ${
                (item.course + item.institution).length > 55 ? "h-56 max-sm:h-40" : "h-36"
              }`}
                >
                  <div className="bg-[--highlighted-text] w-5 h-5 rounded-full"></div>
                  <div
                    className={`w-1 bg-[--highlighted-text] block ${
                      index != academicBackground.length - 1 ? "h-full" : "h-0"
                    }`}
                  ></div>
                </div>

                {index % 2 != 0 ? (
                  <div
                    className={`w-56 max-sm:w-full ${
                      (item.course + item.institution).length > 55
                        ? "h-56 max-sm:h-40"
                        : "h-36"
                    }`}
                  >
                    <h3 className="font-bold text-lg max-sm:text-xs">{item.course}</h3>
                    <p className="text-lg mb-3 max-sm:text-xs">{item.institution}</p>
                    <div className="flex text-xs">
                      <MdCalendarMonth min={20} size={20} className="mr-2" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-56 max-sm:w-full"></div>
                )}
              </motion.div>
            );
          })
        : professionalExperience.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="flex items-start min-h-32 h-full max-sm:w-full pl-2 pr-2"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {index % 2 == 0 ? (
                  <div
                    className={`w-56 max-sm:w-full max-sm:text-right ${
                      (item.position + item.company).length > 55
                        ? "h-56 max-sm:h-40"
                        : "h-36"
                    }`}
                  >
                    <h3 className="font-bold text-lg max-sm:text-xs">{item.position}</h3>
                    <p className="text-lg mb-3 max-sm:text-xs">{item.company}</p>
                    <div className="flex text-xs max-sm:text-xs max-sm:text-start">
                      <MdCalendarMonth min={20} size={20} className="mr-2" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-56 max-sm:w-full"></div>
                )}

                <div
                  className={`w-32 max-sm:max-w-14 flex flex-col items-center justify-start 
              ${(item.position + item.company).length > 55 ? "h-56 max-sm:h-40" : "h-36"}`}
                >
                  <div className="bg-[--highlighted-text] w-5 h-5 rounded-full"></div>
                  <div
                    className={`w-1 bg-[--highlighted-text] block ${
                      index != professionalExperience.length - 1
                        ? "h-full"
                        : "h-0"
                    }`}
                  ></div>
                </div>

                {index % 2 != 0 ? (
                  <div
                    className={`w-56 max-sm:w-full ${
                      (item.position + item.company).length > 55
                        ? "h-56 max-sm:h-40"
                        : "h-36"
                    }`}
                  >
                    <h3 className="font-bold text-lg max-sm:text-xs">{item.position}</h3>
                    <p className="text-lg mb-3 max-sm:text-xs">{item.company}</p>
                    <div className="flex text-xs">
                      <MdCalendarMonth min={20} size={20} className="mr-2" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-56 max-sm:w-full"></div>
                )}
              </motion.div>
            );
          })}

      <motion.div
        className="absolute bottom-20 max-sm:-bottom-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Link
          href="#portfolio"
          className="flex justify-center items-center w-fit h-fit space-x-2 cursor-pointer hover:translate-y-1"
        >
          <MdOutlineMouse size={30} className="text-[--highlighted-text]" />
          <span>Scroll down!</span>
          <MdArrowDownward size={30} className="text-[--highlighted-text]" />
        </Link>
      </motion.div>
    </section>
  );
};

export default ProfessionalExperience;
