import { add, formatISO, toDate, parse } from "date-fns";

const dom = {
  projectShelf: document.getElementById("project_list"),
  projectContainer: document.getElementById("project_container"),
  projectAddForm: document.getElementById("add_project_container"),
  projectAddNameIn: document.getElementById("project_name_form"),
  projectLinks: document.querySelectorAll("a"),
  projectTitle: document.getElementById("project_title"),
  addTaskButton: document.getElementById("add_task"),
  appendTask: (currentTask, targetProject) => {
    const singleTask = document.createElement("div");
    singleTask.innerHTML = `
        <div class="todo_task" id="${currentTask.title}">
          <table>
            <tr>
              <th colspan="2" id="task_title">${currentTask.title}</th>
            </tr>
            <tr>
              <td id="task_desc">
                ${currentTask.desc}

              </td>
              <td>
                <button id="edit_button">Edit</button>
                <button id="delete_button">Delete</button>
              </td>
            </tr>
            <tr>
              <td id="date_made">Created on ${currentTask.dateMade}</td>
              <th id="date_due">
                Due on: ${currentTask.dateDue}<button id="done_button">Done</button>
              </th>
            </tr>
          </table>
        </div>
        `;
    dom.projectShelf.appendChild(singleTask);
  },
  appendProject: (project, id) => {
    const myProject = document.createElement("a");
    myProject.href = "";
    myProject.id = id;
    myProject.innerText = `${project.projectName}`;
    myProject.addEventListener("click", swapProject);
    dom.projectShelf.appendChild(myProject);
    dom.projectAddNameIn.value = "";
  },
  renderProject: (project) => {
    dom.projectTitle.innerText = project.projectName;
    project.taskList.forEach((x) => console.log(x));
  },
  eventListeners: () => {
    document
      .getElementById("add_project_button")
      .addEventListener("click", projectFormVisibility);
    document
      .getElementById("confirm_project")
      .addEventListener("click", newProject);
    document
      .getElementById("cancel_project")
      .addEventListener("click", projectFormVisibility);
    dom.projectLinks.forEach((a) => a.addEventListener("click", swapProject));
  },
};

class Task {
  constructor(dateDue, title, desc, priority) {
    this.dateDue = parse(dateDue, "yyyy-mm-dd", new Date());
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.dateMade = getTodayDate();
    // dom.appendTask(this);
  }
}

function getTodayDate() {
  let now = formatISO(Date.now(), { representation: "date" });
  return now;
}

class Project {
  static myProjects = {};
  static idCount = 1;
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
  }
  addTask = (task) => {
    this.taskList.push(task);
  };
  static readProjects() {
    this.myProjects.forEach((x) => dom.appendProject(x));
  }
}

dom.eventListeners();

function newProject(e) {
  const project = new Project(dom.projectAddNameIn.value);
  let defaultTask = new Task(getTodayDate, "Empty Task", "description", 0);
  project.addTask(defaultTask);
  Project.myProjects[Project.idCount] = project;
  dom.appendProject(project, Project.idCount);
  projectFormVisibility();
  Project.idCount++;
}
function projectFormVisibility() {
  dom.projectAddForm.classList.toggle("add_project_container_hidden");
}

function swapProject(e) {
  e.preventDefault();
  console.log(e);
  dom.renderProject(Project.myProjects[this.id]);
}
