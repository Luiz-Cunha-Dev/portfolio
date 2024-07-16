"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

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
    fetch("https://api.github.com/users/Luiz-Cunha-Dev/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div
      id="portfolio"
      className="min-h-screen w-9/12 flex flex-col items-center justify-start w-full pt-48"
    >
      <h1 className="text-7xl text-white mb-28">Portflio</h1>
      <div className="flex justify-between w-5/6">
        <Button
          onClick={() => {
            page > 1 ? setPage(page - 1) : "";
          }}
        >
          <MdArrowBackIosNew size={20} />
        </Button>
        {projects
          .map((project, index) => {
            return (
              <Card key={index} className="w-64">
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
                    <Link href={project.html_url} target="_blank" >Repository</Link>
                  </Button>
                </CardActions>
              </Card>
            );
          })
          .slice((page - 1) * 5, page * 5)}
        <Button
          onClick={() => {
            page < projects.length / 5 ? setPage(page + 1) : "";
          }}
        >
          <MdArrowForwardIos size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Portflio;
