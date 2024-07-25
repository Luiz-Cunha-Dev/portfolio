"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-96 justify-center items-center bg-[--header-bg] relative mt-60 max-sm:w-full max-sm:mt-32">
      <div className="w-4/6 h-4/6 flex space-x-20 max-sm:space-x-0 mb-10 max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <motion.div
          className="flex flex-col justify-center items-center w-fit"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={logo}
            alt="logo"
            width={90}
            height={90}
            className="w-20 h-20"
          />
          <h2 className="text-3xl mb-2 mt-2">Luiz Cunha</h2>
          <p className="text-base">Full Stack Developer</p>
        </motion.div>

        <motion.ul
          className="flex space-x-16 max-sm:text-xs max-sm:justify-around max-sm:items-center max-sm:mt-7 max-sm:w-screen max-sm:m-0 max-sm:space-x-0 max-sm:p-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <li className="hover:text-[--highlighted-text] min-w-fit">
            <Link href="#about-me" scroll={true}>
              About Me
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <Link href="#skills" scroll={true}>
              Skills
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text] text-center max-sm:max-w-20">
            <Link href="#professional-experience" scroll={true}>
              Professional Experience
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <Link href="#portfolio" scroll={true}>
              Portfolio
            </Link>
          </li>
        </motion.ul>

        <motion.ul
          className="flex space-x-16 max-sm:text-xs max-sm:justify-around max-sm:items-center max-sm:mt-0 max-sm:w-screen max-sm:m-0 max-sm:space-x-0 max-sm:p-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <li className="hover:text-[--highlighted-text]">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/luizmcunha/"
            >
              <AiOutlineLinkedin size={30} className="max-sm:w-8" />
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <Link target="_blank" href="https://github.com/Luiz-Cunha-Dev">
              <AiFillGithub size={30} className="max-sm:w-8" />
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <Link target="_blank" href="mailto:luizcunha.dev99@gmail.com">
              <AiOutlineMail size={30} className="max-sm:w-8" />
            </Link>
          </li>
          <li className="hover:text-[--highlighted-text]">
            <Link
              target="_blank"
              href="https://wa.me/5519987292994?text=Olá,%20Luiz!%20Encontrei%20seu%20portfólio%20online.%20Você%20está%20disponível%20para%20uma%20conversa?"
            >
              <AiOutlineWhatsApp size={30} className="max-sm:w-8" />
            </Link>
          </li>
        </motion.ul>
      </div>

      <motion.p
        className="text-base max-sm:text-xs"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        © Luiz Cunha (Luiz-Cunha-Dev) 2024 - All rights reserved.
      </motion.p>

      <motion.div
        className="absolute bottom-8 right-8 max-sm:top-6 max-sm:right-4 w-12 h-8 flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Link href="#" scroll={true}>
          <Button className="text-[--highlighted-text]">
            <MdKeyboardArrowUp size={30} />
          </Button>
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
