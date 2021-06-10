import { add, formatISO, toDate, parse } from "date-fns";
import { el } from "date-fns/locale";
import dom from "./dom.js";
import Project from "./project.js";

class Task {
  constructor(dateDue, title, desc, priority, id) {
    if (dateDue !== "" && dateDue !== undefined)
      dateDue = formatISO(dateDue, { representation: "date" });
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
      task[form[i].name] = form[i].value;
    }
    dom.taskFormVisibility();
    form.forEach((x) => (x.value = ""));
    Project.myProjects[Project.activeProject].addTask(task);
    dom.displayProjectContents(Project.activeProject);
  }
  static editTask(taskObject) {
    dom.taskEditVisibility();
    dom.taskEditForm.querySelectorAll("input").forEach((x) => {
      if (x.type === "checkbox") {
        x.checked = taskObject[x.name];
      } else {
        x.value = taskObject[x.name];
      }
    });
    dom.taskEditConfirm.addEventListener("click", updateTask);
    function updateTask() {
      dom.taskEditForm.querySelectorAll("input").forEach((x) => {
        console.log(x.value);
        if (x.name === "dateMade") return;
        if (x.type !== "checkbox") {
          taskObject[x.name] = x.value;
          x.value = "";
        } else {
          taskObject[x.name] = x.checked;
          x.checked = false;
        }
        dom.displayProjectContents(Project.activeProject);
      });
      dom.taskEditVisibility();
      dom.taskEditConfirm.removeEventListener("click", updateTask);
    }
  }
}

export default Task;
