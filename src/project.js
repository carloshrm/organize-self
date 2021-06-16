import { dom, refreshList, projectFormVisibility } from "./dom.js";
import Task from "./task.js";

class Project {
  static myProjects = {};
  static activeProject = 0;
  static projectIDTracker = 0;
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
    this.id = Project.projectIDTracker;
  }
  static newProject(e, name) {
    if (name === undefined) {
      if (dom.projectAddNameIn.value === "") {
        alert("Write a name for your project.");
        return;
      }
      name = dom.projectAddNameIn.value;
    }
    let project = new Project(name);
    const date = Date.now();
    let defaultTask = new Task(date, "Example", "A description of your upcoming task.", 0);
    project.addTask(defaultTask);
    Project.myProjects[project.id] = project;
    Project.activeProject = project.id;
    Project.projectIDTracker++;
    refreshList();
    projectFormVisibility();
  }
  addTask(task) {
    this.taskList.push(task);
  }
}
export default Project;
