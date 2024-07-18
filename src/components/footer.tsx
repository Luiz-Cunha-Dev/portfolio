"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-preto.png";
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
    <footer className="flex flex-col w-full h-96 justify-center items-center bg-[#111827] relative mt-60">
      <div className="w-4/6 h-4/6 flex space-x-20 mb-10">
        <motion.div
          className="flex flex-col justify-center items-center w-fit"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" width={90} height={90} />
          <h2 className="text-3xl mb-2 mt-2">Luiz Cunha</h2>
          <p className="text-base">Desenvolvedor FullStack</p>
        </motion.div>

        <motion.ul
          className="flex space-x-16"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <li className="hover:text-sky-800">
            <Link href="#about-me" scroll={true}>
              About Me
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link href="#skills" scroll={true}>
              Skills
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link href="#professional-experience" scroll={true}>
              Professional Experience
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link href="#portfolio" scroll={true}>
              Portfolio
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/luizmcunha/"
            >
              <AiOutlineLinkedin size={30} />
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link target="_blank" href="https://github.com/Luiz-Cunha-Dev">
              <AiFillGithub size={30} />
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link target="_blank" href="mailto:luizcunha.dev99@gmail.com">
              <AiOutlineMail size={30} />
            </Link>
          </li>
          <li className="hover:text-sky-800">
            <Link
              target="_blank"
              href="https://wa.me/5519987292994?text=Olá,%20Luiz!%20Encontrei%20seu%20portfólio%20online.%20Você%20está%20disponível%20para%20uma%20conversa?"
            >
              <AiOutlineWhatsApp size={30} />
            </Link>
          </li>
        </motion.ul>
      </div>
      <motion.p
        className="text-base"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        © Luiz Cunha (Luiz-Cunha-Dev) 2024 - Todos os direitos reservados.
      </motion.p>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Link href="#" scroll={true}>
          <Button className="absolute bottom-6 right-6">
            <MdKeyboardArrowUp size={30} />
          </Button>
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
