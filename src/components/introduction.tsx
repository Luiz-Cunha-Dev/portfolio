"use client";
import Image from "next/image";
import me from "../assets/me.jpg";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdOutlineMouse, MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex items-top justify-around items-center min-h-full min-w-full mt-44 relative max-sm:flex-col max-sm:w-full max-sm:mt-0 max-sm:flex-1 max-sm:justify-start max-sm:static max-xl:mt-16"
    >
      <div className="h-full flex flex-col justify-center items-center pt-12 max-sm:p-3 max-sm:pt-10">
        <motion.h1
          className="text-7xl mb-2 max-sm:text-4xl max-sm:min-w-full max-xl:text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          Hi, my
          <br />
          name is <span className="text-[--highlighted-text]">Luiz Cunha</span>.
        </motion.h1>
        <motion.p
          className="text-3xl max-sm:text-xl max-sm:text-wrap max-xl:text-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          I&apos;m a full-stack developer from Campinas, Brazil.
        </motion.p>
      </div>

      <div className="h-5/6 flex flex-col justify-center items-center max-sm:max-w-full max-sm:h-full max-sm:justify-start">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Image
            src={me}
            alt="me"
            width={425}
            height={425}
            className="rounded-md mb-4 max-sm:max-w-52 max-sm:mt-4 max-xl:max-w-72"
          />
        </motion.div>
        <motion.ul
          className="flex space-x-16 max-sm:space-x-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 1 }}
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

      <motion.div className="absolute -bottom-24 max-sm:bottom-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.4, delay: 1.4 }}
      >
        <Link href="#about-me" className="flex justify-center items-center w-fit h-fit space-x-2 cursor-pointer hover:translate-y-1">
          <MdOutlineMouse size={30} className="text-[--highlighted-text]" />
          <span>Scroll down!</span>
          <MdArrowDownward size={30} className="text-[--highlighted-text]" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Introduction;
