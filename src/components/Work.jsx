import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/ProjectData";
import { nanoid } from "nanoid";
import "./Work.css";

export default function Work() {
  const visualProjects = projects.map((project) => (
    <ProjectCard
      key={nanoid()}
      photo={project.photo}
      title={project.title}
      languages={project.languages}
    />
  ));

  return (
    <div>
      <h1>Work</h1>
      <div className="projectsDiv">{visualProjects}</div>
    </div>
  );
}
