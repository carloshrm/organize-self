import { add, formatISO, toDate, parse } from "date-fns";

const dom = {
  taskShelf: document.getElementById("todo_container"),
  appendTaskHTML: (currentTask) => {
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
    dom.taskShelf.appendChild(singleTask);
  },
};

class Task {
  constructor(dateDue, title, desc, priority = 0) {
    this.dateDue = parse(dateDue);
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.dateMade = getTodayDate();
    dom.appendTaskHTML(this);
  }
}

function getTodayDate() {
  let now = formatISO(Date.now(), { representation: "date" });
  return now;
}

class Section {
  constructor(task, sectionName, period) {
    this.sectionName = sectionName;
    this.task = task;
    this.period = period;
  }

  addTask = () => {};
}
