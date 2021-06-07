import { add, formatISO, toDate, parse } from "date-fns";

const dom = {
  projectShelf: document.getElementById("project_list"),
  taskShelf: document.getElementById("project_tasks_container"),
  projectTaskContainer: document.getElementById("project_container"),
  projectAddForm: document.getElementById("add_project_container"),
  projectAddNameIn: document.getElementById("project_name_form"),
  projectLinks: document.querySelectorAll("a"),
  projectTitle: document.getElementById("project_title"),
  addTaskButton: document.getElementById("add_task"),
  addTaskForm: document.getElementById("add_task_container"),
  appendTask: (currentTask, id) => {
    const singleTask = document.createElement("div");
    singleTask.id = `${id}_${currentTask.title}`;
    singleTask.className = "todo_task";
    singleTask.innerHTML = `        
          <table>
            <tr>
              <th colspan="2" id="task_title">${currentTask.title}</th>
            </tr>
            <tr>
              <td id="task_desc">
                ${currentTask.desc}

              </td>
              <td>
                <button id="task_edit_button">Edit</button>
                <button id="task_delete_button">Delete</button>
              </td>
            </tr>
            <tr>
              <td id="date_made">Created on ${currentTask.dateMade}</td>
              <th id="date_due">
                Due on: ${currentTask.dateDue}<button id="done_button">Done</button>
              </th>
            </tr>
          </table>        
        `;
    dom.taskShelf.appendChild(singleTask);
  },
  appendProject: (id) => {
    const myProject = document.createElement("a");
    myProject.href = "";
    myProject.id = id;
    myProject.innerText = `${Project.myProjects[id].projectName}`;
    myProject.addEventListener("click", swapProject);
    dom.projectShelf.appendChild(myProject);
    dom.projectShelf.appendChild(dom.makeProjectDeleteButton(id));
    dom.projectAddNameIn.value = "";
    myProject.click();
  },
  makeProjectDeleteButton: (id) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.id = `${id}_del_button`;
    deleteButton.addEventListener("click", (e) => {
      if (id !== 1 && confirm("Are you sure you want to delete this project?"))
        Project.deleteProject(e.target.id[0]);
    });
    return deleteButton;
  },
  renderProject: (projectID) => {
    const projectObject = Project.myProjects[projectID];
    dom.projectTitle.innerText = projectObject.projectName;

    projectObject.taskList.forEach((x) => {
      dom.appendTask(x, projectID);
    });
  },
  refreshProjects: () => {
    dom.projectShelf.innerHTML = "";
    for (const key in Project.myProjects) {
      dom.appendProject(key);
    }
  },
  eventListeners: () => {
    document.getElementById("dateDue_form").min = getNowFormatted();
    document
      .getElementById("add_project_button")
      .addEventListener("click", projectFormVisibility);
    document
      .getElementById("add_task_button")
      .addEventListener("click", taskFormVisibility);
    document
      .getElementById("confirm_project")
      .addEventListener("click", newProject);
    document
      .getElementById("cancel_project")
      .addEventListener("click", projectFormVisibility);
    document
      .getElementById("confirm_task")
      .addEventListener("click", makeNewTask);
    document
      .getElementById("cancel_task")
      .addEventListener("click", taskFormVisibility);
    dom.projectLinks.forEach((a) => a.addEventListener("click", swapProject));
  },
};

class Task {
  constructor(dateDue, title, desc, priority) {
    if (dateDue !== "" && dateDue !== undefined)
      dateDue = formatISO(dateDue, { representation: "date" });
    this.dateDue = dateDue;
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.dateMade = formatISO(Date.now(), { representation: "date" });
  }
}

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
    dom.refreshProjects();
  }
}

function getNowFormatted() {
  return formatISO(Date.now(), { representation: "date" });
}

function newProject(e, name) {
  if (name === undefined) name = dom.projectAddNameIn.value;
  const project = new Project(name);
  const date = Date.now();
  const defaultTask = new Task(
    date,
    "Task Name",
    "This is a description of your upcoming task.",
    0
  );
  project.addTask(defaultTask);
  Project.myProjects[Project.idCount] = project;
  dom.appendProject(Project.idCount);
  projectFormVisibility();
  Project.idCount++;
}

function makeNewTask(e) {
  e.preventDefault();
  const form = dom.addTaskForm.querySelectorAll("input");
  const task = new Task();
  form.forEach((field) => {
    task[field.id.substring(0, field.id.indexOf("_"))] = field.value;
    field.value = "";
  });
  taskFormVisibility();
  Project.myProjects[Project.activeProject].addTask(task);
}

function projectFormVisibility() {
  dom.projectAddForm.classList.toggle("add_project_container_hidden");
}
function taskFormVisibility() {
  dom.addTaskForm.classList.toggle("add_task_container_hidden");
}

function swapProject(e) {
  e.preventDefault();
  Project.activeProject = this.id;
  dom.renderProject(this.id);
}

dom.eventListeners();
newProject("", "example");
