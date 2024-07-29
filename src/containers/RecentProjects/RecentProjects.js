import React from "react";
import {
  Container,
  RecentProj,
  MyPortfolio,
  ProjectsContainer,
  ProjectCard,
  ProjectLink,
} from "./Styles.js";

export function RecentProjects() {
  const projects = [
    {
      title: "Ahuse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "https://example.com/ahuse",
      image: "/path/to/ahuse-image.png", // Adicione o caminho da imagem aqui
    },
    {
      title: "App Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "https://example.com/app-dashboard",
      image: "/path/to/app-dashboard-image.png", // Adicione o caminho da imagem aqui
    },
    {
      title: "Easy Rent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "https://example.com/easy-rent",
      image: "/path/to/easy-rent-image.png", // Adicione o caminho da imagem aqui
    },
    // Adicione mais projetos aqui
  ];

  return (
    <Container>
      <RecentProj>Recent Projects</RecentProj>
      <MyPortfolio>My Portfolio</MyPortfolio>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectLink href={project.link} target="_blank">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Container>
  );
}
