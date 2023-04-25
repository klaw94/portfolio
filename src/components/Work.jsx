import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/ProjectData";
import { nanoid } from "nanoid";
import "./Work.css";

export default function Work() {
  const visualProjects = projects.map((project) => (
    <ProjectCard key={nanoid()} project={project} />
  ));

  return (
    <div className="workPage">
      <h1>My Projects</h1>
      <div className="projectsDiv">{visualProjects}</div>
    </div>
  );
}
