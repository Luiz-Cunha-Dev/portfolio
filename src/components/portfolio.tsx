"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import github from "@/assets/github.jpg";

type Project = {
  id: number;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  html_url: string;
  fork: boolean;
};

const Portflio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [mobilePage, setMobilePage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.github.com/users/Luiz-Cunha-Dev/repos")
        .then((response) => response.json())
        .then((data: Project[]) =>
          setProjects(
            data
              .filter(
                (project) => !project.fork && project.name !== "luiz-cunha-dev"
              )
              .sort((a, b) => b.id - a.id)
          )
        );
    }
    fetchData();
  }, []);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-start w-full pt-48 max-sm:pt-20 max-sm:mt-40 max-sm:w-11/12"
    >
      <motion.h1
        className="text-7xl mb-28 max-sm:text-3xl max-sm:mb-12"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Portfolio
      </motion.h1>

      <div className="flex justify-between w-5/6 max-sm:hidden min-h-96 space-x-2">
        {page > 1 ? (
          <Button
            className="text-[--highlighted-text] h-32 mt-48"
            onClick={() => {
              page > 1 ? setPage(page - 1) : "";
            }}
          >
            <MdArrowBackIosNew size={20} />
          </Button>
        ) : (
          <Button disabled={true} className=" h-32 mt-48">
            <MdArrowBackIosNew size={20} />
          </Button>
        )}

        {projects
          .map((project, index) => {
            const newIndex = index - 4 * Math.floor(index / 4);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{
                  duration: 0.3,
                  delay: index > 3 ? newIndex * 0.1 : index * 0.1,
                }}
              >
                <Card className="w-64 h-full">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={github.src}
                      alt="project image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={project.html_url} target="_blank">
                        Repository
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            );
          })
          .slice((page - 1) * 4, page * 4)}

        {page < projects.length / 4 ? (
          <Button
            className="text-[--highlighted-text]  h-32 mt-48"
            onClick={() => {
              page < projects.length / 4 ? setPage(page + 1) : "";
            }}
          >
            <MdArrowForwardIos size={20} />
          </Button>
        ) : (
          <Button disabled={true} className=" h-32 mt-48">
            <MdArrowForwardIos size={20} />
          </Button>
        )}
      </div>

      <div className="flex justify-center w-full sm:hidden items-center">
        {mobilePage > 1 ? (
          <Button
            className="text-[--highlighted-text] w-12 p-0 mr-2 h-12 flex"
            onClick={() => {
              mobilePage > 1 ? setMobilePage(mobilePage - 1) : "";
            }}
          >
            <MdArrowBackIosNew size={20} />
          </Button>
        ) : (
          <Button disabled={true} className=" w-12 p-0 mr-2 h-12 flex">
            <MdArrowBackIosNew size={20} />
          </Button>
        )}

        {projects
          .map((project) => {
            return (
              <motion.div
                className="max-h-96 min-h-96"
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                }}
              >
                <Card className="h-full">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={github.src}
                      alt="project image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={project.html_url} target="_blank">
                        Repository
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            );
          })
          .slice(mobilePage - 1, mobilePage)}

        {mobilePage < projects.length ? (
          <Button
            className="text-[--highlighted-text] w-12 p-0 ml-2 h-12 flex"
            onClick={() => {
              mobilePage < projects.length ? setMobilePage(mobilePage + 1) : "";
            }}
          >
            <MdArrowForwardIos size={20} />
          </Button>
        ) : (
          <Button disabled={true}>
            <MdArrowForwardIos size={20} />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Portflio;
