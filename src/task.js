import { add, formatISO, toDate, parse } from "date-fns";
import dom from "./dom.js";
import Project from "./Project.js";

class Task {
  constructor(dateDue, title, desc, priority) {
    if (dateDue !== "" && dateDue !== undefined)
      dateDue = formatISO(dateDue, { representation: "date" });
    this.dateDue = dateDue;
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.status = false;
    this.dateMade = formatISO(Date.now(), { representation: "date" });
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
  editTask() {
    const form = document.getElementById("edit_task_container");
    for (const key in this) {
    }
  }
}

export default Task;
