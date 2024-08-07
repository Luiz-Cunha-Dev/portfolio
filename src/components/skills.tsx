"use client";
import Image from "next/image";
//buscar todas as imagens (svg) dentro da pasta ../assets/skills
import ant from "@/assets/skills/ant-design.svg";
import axios from "@/assets/skills/axios.svg";
import bootstrap from "@/assets/skills/Bootstrap.svg";
import css from "@/assets/skills/CSS3.svg";
import docker from "@/assets/skills/Docker.svg";
import dotenv from "@/assets/skills/dotenv.svg";
import express from "@/assets/skills/express.svg";
import figma from "@/assets/skills/Figma.svg";
import git from "@/assets/skills/git.svg";
import graphql from "@/assets/skills/GraphQL.svg";
import html from "@/assets/skills/HTML5.svg";
import insomnia from "@/assets/skills/Insomnia.svg";
import js from "@/assets/skills/javascript.svg";
import jest from "@/assets/skills/Jest.svg";
import json from "@/assets/skills/JSON.svg";
import knex from "@/assets/skills/knex.svg";
import material from "@/assets/skills/Material.svg";
import mongo from "@/assets/skills/mongo.svg";
import mysql from "@/assets/skills/mysql.svg";
import next from "@/assets/skills/next.svg";
import node from "@/assets/skills/node.svg";
import npm from "@/assets/skills/NPM.svg";
import pipefy from "@/assets/skills/pipefy.svg";
import postgresql from "@/assets/skills/postgresql.svg";
import postman from "@/assets/skills/Postman.svg";
import prisma from "@/assets/skills/prisma.svg";
import puppeteer from "@/assets/skills/puppeteer.svg";
import python from "@/assets/skills/Python.svg";
import react from "@/assets/skills/react.svg";
import redis from "@/assets/skills/Redis.svg";
import sass from "@/assets/skills/Sass.svg";
import slack from "@/assets/skills/Slack.svg";
import tailwind from "@/assets/skills/Tailwind.svg";
import tauri from "@/assets/skills/Tauri.svg";
import trello from "@/assets/skills/Trello.svg";
import ts from "@/assets/skills/ts.svg";
import ubuntu from "@/assets/skills/Ubuntu.svg";
import vercel from "@/assets/skills/Vercel.svg";
import vscode from "@/assets/skills/vscode.svg";
import webpack from "@/assets/skills/webpack.svg";
import yarn from "@/assets/skills/Yarn.svg";
import Link from "next/link";
import { MdOutlineMouse, MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    js,
    ts,
    python,
    html,
    css,
    json,
    react,
    next,
    express,
    node,
    jest,
    puppeteer,
    graphql,
    axios,
    sass,
    tailwind,
    material,
    ant,
    bootstrap,
    git,
    vscode,
    npm,
    yarn,
    docker,
    webpack,
    dotenv,
    tauri,
    postgresql,
    mysql,
    mongo,
    redis,
    knex,
    prisma,
    postman,
    insomnia,
    slack,
    trello,
    pipefy,
    figma,
    vercel,
    ubuntu,
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-start w-full pt-36 relative max-sm:w-full max-sm:pt-16 max-sm:p-8  max-xl:pt-16"
    >
      <motion.h1
        className="text-7xl mb-28 max-sm:text-3xl max-sm:mb-12 max-xl:text-4xl max-xl:mb-12"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="flex items-start"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.src}
              className="m-4 h-48 min-w-48 flex items-center justify-center max-sm:m-2 max-sm:min-w-44 max-xl:min-w-40 "
              initial={{ x: "3800px" }}
              animate={{ x: "-3800px" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              <Image src={skill} alt="skill" height={100} />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="absolute bottom-20 max-sm:bottom-32 max-xl:bottom-44"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Link
          href="#professional-experience"
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

export default Skills;
