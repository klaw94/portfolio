import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import { ProjectsRoutes } from "./ProjectsRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<ProjectsRoutes />} />
        {/* <Route path="/books/*" element={<ContactDetails />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
