import dom from "./dom.js";
import Task from "./task.js";

class Project {
  static myProjects = {};
  static idCount = 1;
  static activeProject = 0;
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
  }
  addTask(task) {
    this.taskList.push(task);
  }
  static deleteProject(id) {
    delete Project.myProjects[id];
    dom.refreshList();
  }
  static newProject(e, name) {
    if (name === undefined) name = dom.projectAddNameIn.value;
    const project = new Project(name);
    const date = Date.now();
    const defaultTask = new Task(
      date,
      "Example Task",
      "This is a description of your upcoming task.",
      0
    );
    project.addTask(defaultTask);
    Project.myProjects[Project.idCount] = project;
    dom.appendProject(Project.idCount);
    dom.projectFormVisibility();
    Project.idCount++;
  }
  static swapProject(e) {
    e.preventDefault();
    Project.activeProject = this.dataset.project;
    dom.displayProjectContents(this.dataset.project);
  }
}

export default Project;
