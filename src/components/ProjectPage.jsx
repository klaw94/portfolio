import React from "react";
import { useLocation } from "react-router-dom";
import "./ProjectPage.css";
import { nanoid } from "nanoid";

export default function ProjectPage(props) {
  const location = useLocation();
  const project = location.state?.data;

  console.log(project);
  const visualLanguages = project.languages.map((language, index) => {
    return index < project.languages.length - 1 ? (
      <span key={nanoid()}>{`${language}, `}</span>
    ) : (
      <span key={nanoid()}>{`${language}`}</span>
    );
  });

  const visualRepo = project.githubRepo.map((repo, index) =>
    index < project.githubRepo.length - 1 ? (
      <span>
        <a href={repo} target="_blank">
          {`Repository ${index + 1}`}
        </a>
        {`, `}
      </span>
    ) : (
      <a href={repo} target="_blank">
        {`Repository ${index + 1}`}
      </a>
    )
  );

  return (
    <>
      <div className="projectPage">
        <h1>{project.title}</h1>
        <img src={`../../${project.photo}`} />
        <p>{project.description}</p>
      </div>
      <div className="linksDiv">
        {project.link && (
          <span className="spanLink">
            Check it out:{" "}
            <a href={project.link} target="_blank">
              Click Here
            </a>
          </span>
        )}

        {project.githubRepo && (
          <span className="spanRepo">Check out the code: {visualRepo}</span>
        )}
        <div className="languagesDiv">{visualLanguages}</div>
      </div>
    </>
  );
}
