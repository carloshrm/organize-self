import Project from "./project.js";
import Task from "./task.js";
import { refreshList } from "./dom";

function parseProjects() {
  const storageProjects = JSON.parse(localStorage.getItem("projectObject"));
  for (const storedProjIndex in storageProjects) {
    //read each project, make a Project instance, and read the tasks
    const project = new Project(storageProjects[storedProjIndex].projectName);
    storageProjects[storedProjIndex].taskList.forEach((taskObject, i) => {
      // reading each task in the JSON object and instancing them
      const storedTask = new Task();
      for (const taskDataKey in taskObject) {
        // read the info inside each task and populate the fresh instance
        storedTask[taskDataKey] = taskObject[taskDataKey];
      }
      // populate the fresh Project with each task
      project.taskList[i] = storedTask;
    });
    // set the ID(convert from string)
    project.id = +storedProjIndex;
    // place the fresh project into the main data object
    Project.myProjects[project.id] = project;
  }
  Project.activeProject = localStorage.getItem("activeProject");
  Project.projectIDTracker = localStorage.getItem("idTracker");
  refreshList();
}

function storageSet() {
  // populate the local storage with the information required to preserve data across sessions
  localStorage.setItem("projectObject", JSON.stringify(Project.myProjects));
  localStorage.setItem("activeProject", Project.activeProject);
  localStorage.setItem("idTracker", Project.projectIDTracker);
}

export { parseProjects, storageSet };
