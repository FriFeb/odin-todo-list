import App from '../services/app';

function createDOMProjectElement(name, id) {
  return `<div id='${id}' class='row my-3'>
      <div class="col project-name">${name}</div>
      <div class="col-auto read">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>

      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getProjectElements() {
  const projectNames = App.getProjectNames();

  return projectNames.map((name, index) =>
    createDOMProjectElement(name, index)
  );
}

export function renderProjectElements() {
  const projects = document.getElementById('projects');

  projects.innerHTML = '';

  const projectElements = getProjectElements();

  projectElements.forEach((projectElement) =>
    projects.insertAdjacentHTML('beforeend', projectElement)
  );
}

function createDOMTaskElement(name, id) {
  return `<div id='${id}' class='row my-3'>
      <div class="col task-name">${name}</div>
      <div class="col-auto read">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>
      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getTaskElements() {
  const taskNames = App.getCurrentProjectTasksNames();

  return taskNames.map((name, index) => createDOMTaskElement(name, index));
}

export function renderTaskElements() {
  const tasks = document.getElementById('tasks');

  tasks.innerHTML = '';

  const taskElements = getTaskElements();

  taskElements.forEach((taskElement) =>
    tasks.insertAdjacentHTML('beforeend', taskElement)
  );
}
