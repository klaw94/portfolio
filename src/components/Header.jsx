import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import github from "../assets/github.png";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="list">
        <ul>
          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return isActive ? { fontWeight: 700 } : {};
              }}
              to="/projects"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return isActive ? { fontWeight: 700 } : {};
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <h1>Claudia Sánchez Jiménez</h1>
      <a
        href="https://github.com/klaw94"
        target="_blank"
        className="headerLogo"
      >
        <img src={github} />
      </a>
    </nav>
  );
}
