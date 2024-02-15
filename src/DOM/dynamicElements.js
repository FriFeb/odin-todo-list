import App from '../services/app';

function createDOMProjectElement(title, id) {
  return `<div id='${id}' class='row my-3'>
      <div class="col project-title">${title}</div>
      <div class="col-auto read">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>

      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getProjectElements() {
  const projectTitles = App.getProjectTitles();

  return projectTitles.map((title, index) =>
    createDOMProjectElement(title, index)
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

function createDOMTaskElement(title, description, priority, id) {
  return `<div id='${id}' class='row my-3 align-items-center'>
      <div class="row col">
        <div class="col task-title">${title}</div>
        <div class="col-12 task-description" style="font-size: 0.5rem;">
          ${description}
        </div>
      </div>
      <div class="col-auto task-priority">
        <i class="bi bi-flag"></i>
      </div>
      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getTaskElements() {
  const tasks = App.getCurrentProjectTasks();

  return tasks.map((task, index) =>
    createDOMTaskElement(task.title, task.description, task.priority, index)
  );
}

export function renderTaskElements() {
  const tasks = document.getElementById('tasks');

  tasks.innerHTML = '';

  const taskElements = getTaskElements();

  taskElements.forEach((taskElement) =>
    tasks.insertAdjacentHTML('beforeend', taskElement)
  );
}
