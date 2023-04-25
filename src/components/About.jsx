import React from "react";
import myself from "../assets/myself.png";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <img src={myself} />
      <div>
        <p>
          I get energy from solving puzzles and have developed a passion for
          coding. By thinking creatively, persevering, and learning quickly, I
          am able to tackle challenging projects and successfully complete them.
          I am also a team player and I love working with colleagues to come up
          with and implement the best solutions. That gives me energy.
        </p>

        <span>clausaji31@gmail.com</span>
      </div>
    </div>
  );
}
