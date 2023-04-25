import { Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import ProjectPage from "./components/ProjectPage";

export function ProjectsRoutes() {
  return (
    <>
      <Routes>
        {/* This is the default page */}
        <Route index element={<Work />} />

        {/* All elements here start with /books */}
        <Route path=":title" element={<ProjectPage />}></Route>
      </Routes>
    </>
  );
}
