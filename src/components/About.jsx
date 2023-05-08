import React from "react";
import myself from "../assets/myself.png";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <img src={myself} />
      <div className="pDiv">
        <p>
          Hello, I am Claudia. I come from Spain but I have lived the last 7
          years in The Netherlands. I have a great passion for experimental
          films and books, because they make you look at things differently. I
          divide my other hobbies between summer and winter. Perhaps that is
          because of my Spanish background. For example, in the summer I like to
          go swimming outside and in the winter I like to spend my free time
          playing complicated board games with friends, such as Gloomhaven or
          Pandemic. We then have evenings of fun together.
        </p>
        <p>
          My first contact with IT was with Python. During high school, Choose
          Your Own Adventure games were trendy and I made my own game with
          Ren'Py, a graphic novel development tool based on Python. Since then I
          have made versions of many classic games using JS and Java. In my work
          as a film distributor, I also maintained websites and created an
          accounting system for freelancers to do the administration as
          efficiently as possible.
        </p>
        <p>
          I think programming is the most fun aspect of IT, because of the
          search for solutions that work. Moreover, it requires a lot of
          analytical skills, making connections and puzzling. That fits me. I
          also like to work on projects with an impact. I enjoy it when a
          product really makes an impact and that it is written about in the
          media. That makes me proud!
        </p>

        <span>clausaji31@gmail.com</span>
      </div>
    </div>
  );
}
