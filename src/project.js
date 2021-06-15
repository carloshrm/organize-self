import { dom, displayProjectContents, refreshList, projectFormVisibility } from "./dom.js";
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
    Project.projectIDTracker++;
    if (name === undefined) name = dom.projectAddNameIn.value;
    let project = new Project(name);
    const date = Date.now();
    let defaultTask = new Task(date, "Example", "A description of your upcoming task.", 0);
    project.addTask(defaultTask);
    project.addTask(defaultTask);
    project.addTask(defaultTask);
    Project.myProjects[project.id] = project;
    Project.activeProject = project.id;
    refreshList();
    projectFormVisibility();
  }
  addTask(task) {
    this.taskList.push(task);
  }
}
export default Project;
