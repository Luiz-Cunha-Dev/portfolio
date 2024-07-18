'use client';
import Image from "next/image";
import logo from "../assets/logo-preto.png";
import { MdOutlineColorLens } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header 
        className="flex w-full justify-around items-center bg-[#111827] pt-4 pb-4"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.5 }}
        >
            <Image src={logo} alt="logo" width={70} height={70} />
            <ul className="flex space-x-12">
                <li className="hover:text-sky-800">
                    <a href="#about-me">About Me</a>
                </li>
                <li className="hover:text-sky-800">
                    <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-sky-800">
                    <a href="#professional-experience">Professional Experience</a>
                </li>
                <li className="hover:text-sky-800">
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
            <MdOutlineColorLens size={35} className="cursor-pointer hover:text-sky-800"/>
        </motion.header>
    );
};

export default Header;