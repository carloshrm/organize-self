import { format, formatISO } from "date-fns";
import Project from "./project.js";
import {
  dom,
  displayProjectContents,
  taskFormVisibility,
  taskEditVisibility,
  dateFormMinimum,
} from "./dom.js";

class Task {
  constructor(dateDue, title, desc, priority, id) {
    if (dateDue === undefined) dateDue = Date.now();
    this.dateDue = dateDue;
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.status = false;
    this.dateMade = formatISO(Date.now(), { representation: "date" });
    this.id = 0;
  }
  static makeNewTask(e) {
    e.preventDefault();
    const form = dom.addTaskForm.querySelectorAll("input");
    const task = new Task();
    for (let i = 0; i < form.length; i++) {
      if (form[i].value === "" || form[i].value === undefined) {
        alert("Fill in all fields to create a task.");
        return;
      }
      if (form[i].name === "dateDue") {
        task[form[i].name] = Date.parse(form[i].value);
        continue;
      }
      task[form[i].name] = form[i].value;
    }
    taskFormVisibility();
    form.forEach((x) => (x.value = ""));
    Project.myProjects[Project.activeProject].addTask(task);
    displayProjectContents(Project.activeProject);
  }
  static editTask(taskObject) {
    taskEditVisibility();
    dom.taskEditForm.querySelectorAll("input").forEach((x) => {
      if (x.name === "dateDue") {
        dateFormMinimum(x);
        x.value = format(taskObject[x.name], "yyyy-MM-dd'T'hh:mm");
        return;
      }
      if (x.type === "checkbox") {
        x.checked = taskObject[x.name];
      } else {
        x.value = taskObject[x.name];
      }
    });
    dom.taskEditConfirm.addEventListener("click", updateTask);
    function updateTask() {
      dom.taskEditForm.querySelectorAll("input").forEach((x) => {
        if (x.name === "dateMade") return;
        if (x.name === "dateDue") {
          taskObject[x.name] = Date.parse(x.value);
          return;
        }
        if (x.type !== "checkbox") {
          taskObject[x.name] = x.value;
          x.value = "";
        } else {
          taskObject[x.name] = x.checked;
          x.checked = false;
        }
        displayProjectContents(Project.activeProject);
      });
      taskEditVisibility();
      dom.taskEditConfirm.removeEventListener("click", updateTask);
    }
  }
}
export default Task;
