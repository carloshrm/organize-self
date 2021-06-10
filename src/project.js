import dom from "./dom.js";
import Task from "./task.js";

class Project {
  static myProjects = {};
  static activeProject = 0;
  static projectIDTracker = 0;
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
    this.id = Project.projectIDTracker;
    Project.projectIDTracker++;
  }
  static newProject(e, name) {
    if (name === undefined) name = dom.projectAddNameIn.value;
    let project = new Project(name);
    const date = Date.now();
    let defaultTask = new Task(
      date,
      "Example",
      "Type in a description of what your task entails.",
      0
    );
    project.addTask(defaultTask);
    Project.myProjects[project.id] = project;
    dom.displayProjectTab(project);
    dom.projectFormVisibility();
  }
  addTask(task) {
    this.taskList.push(task);
  }
  static swapProject(e) {
    e.preventDefault();
    console.log("here");
    Project.activeProject = this.dataset.project;
    dom.displayProjectContents(this.dataset.project);
  }
}
export default Project;
