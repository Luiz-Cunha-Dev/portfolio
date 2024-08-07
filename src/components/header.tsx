"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import { MdOutlineColorLens, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [themeWindow, setThemeWindow] = useState(false);
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme == "system") setTheme("blue");
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menu]);

  return (
    <motion.header
      className="relative w-full"
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full justify-around items-center bg-[--header-bg] pt-4 pb-4 max-sm:p-2 max-sm:justify-between max-sm:pl-10 max-sm:pr-6">
        <Image
          src={logo}
          alt="logo"
          width={70}
          height={70}
          className="max-sm:w-12 max-xl:w-12"
        />
        <ul className="flex space-x-12 max-sm:hidden">
          <li className="hover:text-[--highlighted-text]">
            <a href="#about-me">About Me</a>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <a href="#professional-experience">Professional Experience</a>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center relative max-sm:hidden">
          <MdOutlineColorLens
            size={35}
            className="cursor-pointer hover:text-[--highlighted-text]"
            onClick={() => setThemeWindow(!themeWindow)}
          />
          <div
            className={`w-52 h-14 rounded-md bg-gray-800 absolute -bottom-16 justify-between items-center p-3 
            ${themeWindow ? "flex" : "hidden"}`}
          >
            <div
              onClick={() => {
                setTheme("blue");
                setThemeWindow(!themeWindow);
              }}
              className={`w-8 h-8 bg-sky-950 rounded-full border-4 cursor-pointer hover:translate-y-1`}
            ></div>

            <div
              onClick={() => {
                setTheme("red");
                setThemeWindow(!themeWindow);
              }}
              className={`w-8 h-8 bg-rose-900 rounded-full border-4 cursor-pointer hover:translate-y-1`}
            ></div>

            <div
              onClick={() => {
                setTheme("green");
                setThemeWindow(!themeWindow);
              }}
              className={`w-8 h-8 bg-green-800 rounded-full border-4 cursor-pointer hover:translate-y-1`}
            ></div>

            <div
              onClick={() => {
                setTheme("gray");
                setThemeWindow(!themeWindow);
              }}
              className={`w-8 h-8 bg-slate-500 rounded-full border-4 cursor-pointer hover:translate-y-1`}
            ></div>

            <div
              onClick={() => {
                setTheme("white");
                setThemeWindow(!themeWindow);
              }}
              className={`w-8 h-8 bg-white rounded-full border-4 cursor-pointer hover:translate-y-1`}
            ></div>
          </div>
        </div>

        <div className="sm:hidden">
          {menu ? (
            <MdClose
              onClick={() => setMenu(!menu)}
              size={35}
              className="cursor-pointer"
            />
          ) : (
            <MdMenu
              onClick={() => setMenu(!menu)}
              size={35}
              className="cursor-pointer"
            />
          )}
        </div>

        <div
          className={`sm:hidden fixed w-screen min-h-screen opacity-90 bg-[--bg] left-0 top-16 z-10 flex-col
          ${menu ? "flex" : "hidden"}`}
        >
          <ul className="flex flex-col items-center">
            <motion.li
              onClick={() => setMenu(!menu)}
              className="hover:text-[--highlighted-text] border-b-2 w-full text-center p-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.1 }}
            >
              <a href="#about-me">About Me</a>
            </motion.li>
            <motion.li
              onClick={() => setMenu(!menu)}
              className="hover:text-[--highlighted-text] border-b-2 w-full text-center p-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <a href="#skills">Skills</a>
            </motion.li>
            <motion.li
              onClick={() => setMenu(!menu)}
              className="hover:text-[--highlighted-text] border-b-2 w-full text-center p-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <a href="#professional-experience">Professional Experience</a>
            </motion.li>
            <motion.li
              onClick={() => setMenu(!menu)}
              className="hover:text-[--highlighted-text] border-b-2 w-full text-center p-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <a href="#portfolio">Portfolio</a>
            </motion.li>
            <motion.li
              className="hover:text-[--highlighted-text] border-b-2 w-full text-center p-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <div
                className={`w-full h-full rounded-md bg-[--bg] justify-between items-center p-3 flex`}
              >
                <div
                  onClick={() => {
                    setTheme("blue");
                    setMenu(!menu);
                  }}
                  className={`w-8 h-8 bg-sky-950 rounded-full border-4 cursor-pointer hover:translate-y-1`}
                ></div>

                <div
                  onClick={() => {
                    setTheme("red");
                    setMenu(!menu);
                  }}
                  className={`w-8 h-8 bg-rose-900 rounded-full border-4 cursor-pointer hover:translate-y-1`}
                ></div>

                <div
                  onClick={() => {
                    setTheme("green");
                    setMenu(!menu);
                  }}
                  className={`w-8 h-8 bg-green-800 rounded-full border-4 cursor-pointer hover:translate-y-1`}
                ></div>

                <div
                  onClick={() => {
                    setTheme("gray");
                    setMenu(!menu);
                  }}
                  className={`w-8 h-8 bg-slate-500 rounded-full border-4 cursor-pointer hover:translate-y-1`}
                ></div>

                <div
                  onClick={() => {
                    setTheme("white");
                    setMenu(!menu);
                  }}
                  className={`w-8 h-8 bg-white rounded-full border-4 cursor-pointer hover:translate-y-1`}
                ></div>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
