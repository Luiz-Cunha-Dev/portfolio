
'use client';
import { useState } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion";

const ProfessiolnalExperience = () => {
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
    }
  ];

  const [showAcademicBackground, setShowAcademicBackground] = useState(true);

  return (
    <section
      id="professional-experience"
      className="min-h-screen w-9/12 flex flex-col items-center justify-start w-full pt-48"
    >
      <motion.h1 className="text-7xl text-white mb-28"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      >Professiolnal Experience
      </motion.h1>

      <div className="flex justify-between space-x-16 mb-12">

        <motion.div 
        className="flex items-center space-x-5 cursor-pointer hover:text-sky-800"
        onClick={() => setShowAcademicBackground(true)}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MdOutlineSchool size={50} />
          <h2>Education</h2>
        </motion.div>

        <motion.div 
        className="flex items-center space-x-5 cursor-pointer  hover:text-sky-800"
        onClick={() => setShowAcademicBackground(false)}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MdWorkOutline size={50} />
          <h2>Professional Experience</h2>
        </motion.div>

      </div>

      { showAcademicBackground ?
      
      academicBackground.map((item, index) => {
        return (
          <motion.div key={index} className="flex items-start min-h-32 h-full"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >

              {index % 2 == 0 ? (

                <div className={`w-56 ${(item.course + item.institution).length > 55 ? "h-56" : "h-36"}`}>
                  <h3 className="font-bold text-lg">{item.course}</h3>
                  <p className="text-lg mb-3">{item.institution}</p>
                  <div className="flex text-xs">
                  <MdCalendarMonth min={20} size={20} className="mr-2"/>
                    <span>{item.year}</span>
                    </div>
                </div>

              ) : (

                <div className="w-56"></div>

              )}

            <div className={`w-32 flex flex-col items-center justify-start 
              ${(item.course + item.institution).length > 55 ? "h-56" : "h-36"}`}>
              <div className="bg-sky-700 w-5 h-5 rounded-full"></div>
              <div
                className={`w-1 bg-sky-700 block ${index != academicBackground.length - 1 ? "h-full" : "h-0"}`}
              ></div>
            </div>

              {index % 2 != 0 ? (

                <div className={`w-56 ${(item.course + item.institution).length > 55 ? "h-56" : "h-36"}`}>
                <h3 className="font-bold text-lg">{item.course}</h3>
                <p className="text-lg mb-3">{item.institution}</p>
                <div className="flex text-xs">
                <MdCalendarMonth min={20} size={20} className="mr-2"/>
                  <span>{item.year}</span>
                  </div>
              </div>

              ) : (

                <div className="w-56"></div>

              )}
            
          </motion.div>
        );
      })

      : 

      professionalExperience.map((item, index) => {
        return (
          <motion.div key={index} className="flex items-start min-h-32 h-full"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >

              {index % 2 == 0 ? (

                <div className={`w-56 ${(item.position + item.company).length > 55 ? "h-56" : "h-36"}`}>
                  <h3 className="font-bold text-lg">{item.position}</h3>
                  <p className="text-lg mb-3">{item.company}</p>
                  <div className="flex text-xs">
                  <MdCalendarMonth min={20} size={20} className="mr-2"/>
                    <span>{item.year}</span>
                    </div>
                </div>

              ) : (

                <div className="w-56"></div>

              )}

            <div className={`w-32 flex flex-col items-center justify-start 
              ${(item.position + item.company).length > 55 ? "h-56" : "h-36"}`}>
              <div className="bg-sky-700 w-5 h-5 rounded-full"></div>
              <div
                className={`w-1 bg-sky-700 block ${index != professionalExperience.length - 1 ? "h-full" : "h-0"}`}
              ></div>
            </div>

              {index % 2 != 0 ? (

                <div className={`w-56 ${(item.position + item.company).length > 55 ? "h-56" : "h-36"}`}>
                <h3 className="font-bold text-lg">{item.position}</h3>
                <p className="text-lg mb-3">{item.company}</p>
                <div className="flex text-xs">
                <MdCalendarMonth min={20} size={20} className="mr-2"/>
                  <span>{item.year}</span>
                  </div>
              </div>

              ) : (

                <div className="w-56"></div>

              )}
            
          </motion.div>
        );
      })
      
      }
    </section>
  );
};

export default ProfessiolnalExperience;
