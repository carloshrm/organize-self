import {
  dom,
  dateFormMinimum,
  projectFormVisibility,
  taskFormVisibility,
  taskEditVisibility,
  swapProject,
} from "./dom.js";
import { parseProjects } from "./parseProjects";
import Task from "./task.js";
import Project from "./project.js";

(() => {
  dateFormMinimum();
  document.getElementById("add_project_button").addEventListener("click", projectFormVisibility);
  document.getElementById("add_task_button").addEventListener("click", taskFormVisibility);
  document.getElementById("confirm_project").addEventListener("click", Project.newProject);
  document.getElementById("cancel_project").addEventListener("click", projectFormVisibility);
  document.getElementById("confirm_task").addEventListener("click", Task.makeNewTask);
  document.getElementById("cancel_task").addEventListener("click", taskFormVisibility);
  dom.projectShelf.querySelectorAll("p").forEach((a) => a.addEventListener("click", swapProject));
  document.getElementById("cancel_changes").addEventListener("click", taskEditVisibility);
  if (localStorage.getItem("projectObject") === null) {
    Project.newProject("", "Project Example");
    projectFormVisibility();
  } else {
    parseProjects();
  }
})();
