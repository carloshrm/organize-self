import Project from "./project.js";
import Task from "./task.js";

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
  appendTask: (currentTask, taskID, projectID) => {
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
    <h4 id="date_due">Due: ${currentTask.dateDue}</h4>
    `;
    if (!currentTask.status) {
      singleTask
        .querySelector(".done_button")
        .addEventListener("click", (e) => {
          Project.myProjects[projectID].taskList[taskID].status = true;
          e.target.parentNode.innerHTML = "Status: Done!";
          e.target.remove();
        });
    }
    singleTask
      .querySelector(".delete_button")
      .addEventListener("click", (e) => {
        Project.myProjects[projectID].taskList.splice(taskID, 1);
        dom.displayProjectContents(projectID);
      });
    singleTask.querySelector(".edit_button").addEventListener("click", (e) => {
      Task.editTask(currentTask);
    });
    dom.taskShelf.appendChild(singleTask);
  },
  displayProjectTab: (projectObject) => {
    const projTab = document.createElement("div");
    projTab.className = "project_tab";
    projTab.dataset.project = projectObject.id;
    projTab.innerHTML = `<p>${projectObject.projectName}</p>`;
    projTab.addEventListener("click", Project.swapProject);
    projTab.appendChild(dom.makeProjectDeleteButton(projectObject.id));
    dom.projectShelf.appendChild(projTab);
    dom.projectAddNameIn.value = "";
    projTab.click();
  },
  makeProjectDeleteButton: (id) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "del";
    deleteButton.id = "project_delete_button";
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (
        Object.keys(Project.myProjects) !== 0 &&
        confirm(
          "Are you sure you want to delete this project and all its tasks?"
        )
      ) {
        delete Project.myProjects[id];
        dom.refreshList();
      }
    });
    return deleteButton;
  },
  displayProjectContents: (projectID) => {
    const projectObject = Project.myProjects[projectID];
    dom.projectTitle.innerText = projectObject.projectName;
    dom.taskShelf.innerHTML = "";
    projectObject.taskList.forEach((x, ind) => {
      dom.appendTask(x, ind, projectID);
    });
  },
  refreshList: () => {
    dom.projectShelf.innerHTML = "";
    for (const key in Project.myProjects) {
      dom.displayProjectTab(Project.myProjects[key]);
    }
  },
  projectFormVisibility: () => {
    dom.projectAddForm.classList.toggle("add_project_container_hidden");
  },
  taskFormVisibility: () => {
    dom.addTaskForm.querySelector("#dateDue_form").valueAsDate = new Date();
    dom.addTaskForm.classList.toggle("add_task_container_hidden");
  },
  taskEditVisibility: () => {
    dom.taskEditForm.classList.toggle("edit_task_container_hidden");
  },
};
export default dom;
