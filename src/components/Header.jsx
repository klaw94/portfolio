import React from "react";
import "./Header.css";
import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";

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
              to="/"
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
          <li>
            <NavLink
              className="navLink"
              style={({ isActive }) => {
                return isActive ? { fontWeight: 700 } : {};
              }}
              to="/"
            >
              Work
            </NavLink>
          </li>
        </ul>
      </div>
      <h1>Claudia Sánchez Jiménez</h1>
    </nav>
  );
}
