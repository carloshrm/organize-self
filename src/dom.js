import Project from "./Project.js";

const dom = {
  projectShelf: document.getElementById("project_list"),
  taskShelf: document.getElementById("project_tasks_container"),
  projectTaskContainer: document.getElementById("project_container"),
  projectAddForm: document.getElementById("add_project_container"),
  projectAddNameIn: document.getElementById("project_name_form"),
  projectTitle: document.getElementById("project_title"),
  addTaskButton: document.getElementById("add_task"),
  addTaskForm: document.getElementById("add_task_container"),
  appendTask: (currentTask, id) => {
    const singleTask = document.createElement("div");
    singleTask.dataset.taskID = `${id}_${currentTask.title}`;
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
                <td id="date_made"><span>Created on ${
                  currentTask.dateMade
                }</span>
                <span>Status: ${
                  currentTask.status ? "Complete" : "Pending"
                }</span>
                </td>
                <th id="date_due">
                  Due on: ${
                    currentTask.dateDue
                  }<button id="done_button">Done</button>
                </th>
              </tr>
            </table>        
          `;
    dom.taskShelf.appendChild(singleTask);
  },
  appendProject: (id) => {
    const projTab = document.createElement("div");
    projTab.className = "project_tab";
    projTab.dataset.project = id;
    projTab.innerHTML = `<p>${Project.myProjects[id].projectName}</p>`;
    projTab.addEventListener("click", Project.swapProject);
    projTab.appendChild(dom.makeProjectDeleteButton(id));
    dom.projectShelf.appendChild(projTab);
    dom.projectAddNameIn.value = "";
    projTab.click();
  },
  makeProjectDeleteButton: (id) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.id = "project_delete_button";
    deleteButton.dataset.project = id;
    deleteButton.addEventListener("click", (e) => {
      if (
        id !== 1 &&
        confirm(
          "Are you sure you want to delete this project and all its tasks?"
        )
      )
        Project.deleteProject(e.target.dataset.project);
    });
    return deleteButton;
  },
  displayProjectContents: (projectID) => {
    const projectObject = Project.myProjects[projectID];
    dom.projectTitle.innerText = projectObject.projectName;
    dom.taskShelf.innerHTML = "";
    projectObject.taskList.forEach((x) => {
      dom.appendTask(x, projectID);
    });
  },
  refreshList: () => {
    dom.projectShelf.innerHTML = "";
    for (const key in Project.myProjects) {
      dom.appendProject(key);
    }
  },
  projectFormVisibility: () => {
    dom.projectAddForm.classList.toggle("add_project_container_hidden");
  },
  taskFormVisibility: () => {
    dom.addTaskForm.classList.toggle("add_task_container_hidden");
  },
};
export default dom;
