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
    Project.projectIDTracker++;
  }
  static newProject(e, name) {
    if (name === undefined) name = dom.projectAddNameIn.value;
    let project = new Project(name);
    const date = Date.now();
    let defaultTask = new Task(date, "Example", "A description of your upcoming task.", 0);

    project.addTask(defaultTask);
    Project.myProjects[project.id] = project;
    Project.activeProject = project.id;
    refreshList();
    projectFormVisibility();
  }
  addTask(task) {
    this.taskList.push(task);
  }
  static swapProject(e) {
    e.preventDefault();
    console.log(this);
    // if (Project.activeProject !== 0) {
    //   document
    //     .querySelector(`[data-project="${Project.activeProject}"`)
    //     .classList.toggle("project_tab_selected");
    // }
    Project.activeProject = this.dataset.project;
    this.classList.toggle("project_tab_selected");
    displayProjectContents(this.dataset.project);
  }
}
export default Project;
