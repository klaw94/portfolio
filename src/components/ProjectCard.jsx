import React from "react";
import "./ProjectCard.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const visualLanguages = props.project.languages.map((language, index) => {
    return index < props.project.languages.length - 1 ? (
      <span key={nanoid()}>{`${language}, `}</span>
    ) : (
      <span key={nanoid()}>{`${language}`}</span>
    );
  });
  return (
    <Link
      to={{
        pathname: `/projects/${props.project.title}`,
        state: props.project,
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="projectCard">
        <img src={`../../${props.project.photo}`} alt="" />
        <h4>{props.project.title}</h4>
        <div className="languages">{visualLanguages}</div>
      </div>
    </Link>
  );
}
