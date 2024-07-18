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
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex items-top justify-around min-h-full w-5/6 m-44"
    >
      <div className="h-full flex flex-col justify-center items-center pt-12">
        <motion.h1
          className="text-7xl text-white mb-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          Hi, my
          <br />
          name is <span className="text-[#597ae8]">Luiz Cunha</span>.
        </motion.h1>
        <motion.p
          className="text-3xl text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          I&apos;m a full-stack developer from Campinas, Brazil.
        </motion.p>
      </div>

      <div className="h-5/6 flex flex-col justify-center items-center">
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
            className="rounded-md mb-4"
          />
        </motion.div>
        <motion.ul
          className="flex space-x-16"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
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
    </section>
  );
};

export default Introduction;
