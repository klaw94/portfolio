import React from "react";
import { useLocation } from "react-router-dom";

export default function ProjectPage(props) {
  const location = useLocation();
  const project = location.state;

  console.log(project);

  return <div>This is project x</div>;
}
