const tasks = [];
let time = 0;
let timer = null;
let timerBrake = null;
let current = null;

//HTML REFERENCES
const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value != "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };
  tasks.unshift(newTask);
}

function renderTasks() {
  const html = tasks.map((task) => {
    return `
    <div class="task">
      <div class="completed">${
        task.completed
          ? `<span>Done</span>`
          : `<button class="start-button" data-id="${task.id}">Start</button>`
      }</div>
      <div class="title">${task.title}</div>
    </div>
    `;
  });
  const taskContainer = document.querySelector("#tasks");
  taskContainer.innerHTML = html.join("");
}
