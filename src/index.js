import { add, formatISO, toDate, parse } from "date-fns";
import dom from "./dom.js";
import Task from "./task.js";
import Project from "./project.js";

function listeners() {
  document.getElementById("dateDue_form").min = formatISO(Date.now(), {
    representation: "date",
  });
  document
    .getElementById("add_project_button")
    .addEventListener("click", dom.projectFormVisibility);
  document
    .getElementById("add_task_button")
    .addEventListener("click", dom.taskFormVisibility);
  document
    .getElementById("confirm_project")
    .addEventListener("click", Project.newProject);
  document
    .getElementById("cancel_project")
    .addEventListener("click", dom.projectFormVisibility);
  document
    .getElementById("confirm_task")
    .addEventListener("click", Task.makeNewTask);
  document
    .getElementById("cancel_task")
    .addEventListener("click", dom.taskFormVisibility);
  dom.projectShelf
    .querySelectorAll("p")
    .forEach((a) => a.addEventListener("click", Project.swapProject));
  document
    .getElementById("cancel_changes")
    .addEventListener("click", dom.taskEditVisibility);
}
listeners();
Project.newProject("", "Example");
