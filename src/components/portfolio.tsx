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

type Project = {
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  html_url: string;
};

const Portflio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.github.com/users/Luiz-Cunha-Dev/repos")
        .then((response) => response.json())
        .then((data) => setProjects(data));
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <section
      id="portfolio"
      className="min-h-screen w-9/12 flex flex-col items-center justify-start w-full pt-48"
    >
      <motion.h1
        className="text-7xl text-white mb-28"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Portfolio
      </motion.h1>
      <div className="flex justify-between w-5/6">
        {page > 1 ? (
          <Button
            onClick={() => {
              page > 1 ? setPage(page - 1) : "";
            }}
          >
            <MdArrowBackIosNew size={20} />
          </Button>
        ) : (
          <Button
          disabled={true}
        >
          <MdArrowBackIosNew size={20} />
        </Button>
        )}

        {projects
          .map((project, index) => {
            
            const newIndex = index - 4 * Math.floor(index / 4);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 300 }}
                transition={{ duration: 0.3, delay: index > 3 ? newIndex * 0.1 : index * 0.1 }}
              >
                <Card className="w-64">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={project.owner.avatar_url}
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
            onClick={() => {
              page < projects.length / 4 ? setPage(page + 1) : "";
            }}
          >
            <MdArrowForwardIos size={20} />
          </Button>
        ) : (
          <Button
            disabled={true}
          >
            <MdArrowForwardIos size={20} />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Portflio;
