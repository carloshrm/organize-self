import Project from "./project.js";
import Task from "./task.js";
import { format, formatDistanceToNow, formatISO, differenceInDays } from "date-fns";

const dom = {
  projectShelf: document.getElementById("project_list"),
  taskShelf: document.getElementById("project_tasks_container"),
  projectTaskContainer: document.getElementById("project_container"),
  projectAddForm: document.getElementById("add_project_container"),
  projectAddNameIn: document.getElementById("project_name_form"),
  projectTitle: document.getElementById("project_title"),
  addTaskButton: document.getElementById("add_task"),
  addTaskForm: document.getElementById("add_task_container"),
  taskDelete: document.getElementById("task_delete_button"),
  taskEdit: document.getElementById("task_edit_button"),
  taskEditForm: document.getElementById("edit_task_container"),
  taskEditConfirm: document.getElementById("confirm_changes"),
};

function appendTask(currentTask, taskID, projectID) {
  const singleTask = document.createElement("div");
  singleTask.className = "todo_task";
  singleTask.dataset.task_id = taskID;
  singleTask.innerHTML = `
    <div id="title_div">
      <h3 id="task_title">
      ${currentTask.title}
      </h3>
        <button class="edit_button">Edit</button>
        <button class="delete_button">Delete</button>
    </div>
    <p id="task_desc">${currentTask.desc}</p>
    <div id='status_div'>
      <p>Status: ${currentTask.status ? "Done!" : "Pending"}</p> ${
    currentTask.status ? " " : `<button class="done_button">Done</button>`
  }
    </div>
    <h5 id="date_made">Created: ${currentTask.dateMade}</h5>
    <h4 id="date_due">Due: ${formatISO(currentTask.dateDue, {
      representation: "date",
    })} ( in ${formatDistanceToNow(currentTask.dateDue)} )</h4>
    `;
  makeTaskButtons(currentTask, singleTask, projectID, taskID);
  dom.taskShelf.appendChild(singleTask);
}
function makeTaskButtons(currentTask, singleTask, projectID, taskID) {
  if (!currentTask.status) {
    singleTask.querySelector(".done_button").addEventListener("click", (e) => {
      Project.myProjects[projectID].taskList[taskID].status = true;
      e.target.parentNode.innerHTML = "Status: Done!";
      e.target.remove();
    });
  }
  singleTask.querySelector(".delete_button").addEventListener("click", (e) => {
    Project.myProjects[projectID].taskList.splice(taskID, 1);
    displayProjectContents(projectID);
  });
  singleTask.querySelector(".edit_button").addEventListener("click", () => {
    Task.editTask(currentTask);
  });
}
function makeProjectTab(projectObject) {
  let projTab = document.createElement("div");
  projTab.className = "project_tab";
  projTab.dataset.project = projectObject.id;
  projTab.innerHTML = `<p>${projectObject.projectName}</p>`;
  projTab.addEventListener("click", swapProject);
  projTab.appendChild(makeProjectDeleteButton(projectObject.id));
  dom.projectShelf.appendChild(projTab);
  dom.projectAddNameIn.value = "";
}
function displayProjectContents(projectID) {
  const projectObject = Project.myProjects[projectID];
  dom.projectTitle.innerText = projectObject.projectName;
  dom.taskShelf.innerHTML = "";
  projectObject.taskList.forEach((x, ind) => {
    appendTask(x, ind, projectID);
  });
  // call full storage set here
  localStorage.setItem("projectObject", JSON.stringify(Project.myProjects));
  localStorage.setItem("activeProject", Project.activeProject);
  localStorage.setItem("idTracker", Project.projectIDTracker);
}
function makeProjectDeleteButton(id) {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = " x ";
  deleteButton.id = "project_delete_button";
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (
      Object.keys(Project.myProjects) !== 0 &&
      confirm("Are you sure you want to delete this project and all its tasks?")
    ) {
      delete Project.myProjects[id];
      refreshList();
    }
  });
  return deleteButton;
}
function refreshList() {
  dom.projectShelf.innerHTML = "";
  for (const key in Project.myProjects) {
    makeProjectTab(Project.myProjects[key]);
  }
  dom.projectShelf.querySelector(`[data-project="${Project.activeProject}"`).click();
}

function parseProjects() {
  const storageProjects = JSON.parse(localStorage.getItem("projectObject"));
  for (const storedProjIndex in storageProjects) {
    //make project, set name
    const project = new Project(storageProjects[storedProjIndex].projectName);
    //make tasks
    storageProjects[storedProjIndex].taskList.forEach((taskObject, i) => {
      const storedTask = new Task();
      for (const taskDataKey in taskObject) {
        storedTask[taskDataKey] = taskObject[taskDataKey];
      }
      project.taskList[i] = storedTask;
    });
    project.id = +storedProjIndex;
    console.log(Project.myProjects[project.id] == project);
    Project.myProjects[project.id] = project;
    Project.activeProject = project.id;
  }
  Project.activeProject = localStorage.getItem("activeProject");
  Project.projectIDTracker = localStorage.getItem("idTracker");
  refreshList();
}

function swapProject(e) {
  e.preventDefault();
  dom.projectShelf
    .querySelector(`[data-project="${Project.activeProject}"`)
    .classList.toggle("project_tab_selected");
  this.classList.add("project_tab_selected");
  Project.activeProject = this.dataset.project;
  displayProjectContents(this.dataset.project);
}

function projectFormVisibility() {
  dom.projectAddForm.classList.toggle("add_project_container_hidden");
}

function taskFormVisibility() {
  dom.addTaskForm.querySelector("#dateDue_form").value = format(Date.now(), "yyyy-MM-dd'T'hh:mm");
  dom.addTaskForm.classList.toggle("add_task_container_hidden");
}

function taskEditVisibility() {
  dom.taskEditForm.classList.toggle("edit_task_container_hidden");
}
function dateFormMinimum(form) {
  if (form === undefined) form = document.getElementById("dateDue_form");
  form.min = format(Date.now(), "yyyy-MM-dd'T'hh:mm");
}
export {
  dom,
  appendTask,
  dateFormMinimum,
  displayProjectContents,
  parseProjects,
  projectFormVisibility,
  refreshList,
  swapProject,
  taskFormVisibility,
  taskEditVisibility,
};
