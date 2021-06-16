import { projectFormVisibility } from "./dom";
import { parseProjects } from "./parseProjects";
import Project from "./project";
(() => {
  if (localStorage.getItem("projectObject") === null) {
    Project.newProject("", "Project Example");
    projectFormVisibility();
  } else {
    parseProjects();
  }
})();
