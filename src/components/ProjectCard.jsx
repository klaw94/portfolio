import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const visualLanguages = props.languages.map((language, index) => {
    return index < props.languages.length - 1 ? (
      <span>{`${language}, `}</span>
    ) : (
      <span>{`${language}`}</span>
    );
  });
  return (
    <div className="projectCard">
      <img src={`../../${props.photo}`} alt="" />
      <h4>{props.title}</h4>
      <div className="languages">{visualLanguages}</div>
    </div>
  );
}
