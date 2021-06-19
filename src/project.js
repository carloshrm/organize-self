import { dom, refreshList, projectFormVisibility } from "./dom.js";
import Task from "./task.js";

class Project {
  static myProjects = {};
  // object that keeps all the data { ID: Project Class Instance }
  static activeProject = 0;
  // active project is used to preserve which tab the user last clicked on,
  // to populate the task list with the contents of the project the user last viewed. also used in swapping styles.
  static projectIDTracker = 0;
  // this ID goes into the DOM objects, linking each button/tab to its respective project
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
    this.id = Project.projectIDTracker;
  }
  static newProject(e, name) {
    if (name === undefined) {
      // validation happens if an instance is created without sending a name in
      // undefined check only needed because of the default project,
      //TODO? - directly insert a project into the main object and simplify validation?
      if (dom.projectAddNameIn.value === "") {
        // stop the function if the name field is empty and give feedback to user through an alert,
        // TODO? - replace an alert with text directly on the form?
        alert("Write a name for your project.");
        return;
      }
      name = dom.projectAddNameIn.value;
    }
    let project = new Project(name);
    let defaultTask = new Task(date, "Example", "A description of your upcoming task.", 0);
    const date = Date.now();
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
