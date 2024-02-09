import App from '../services/app';

function getProjectNames() {
  App.fetchProjects();

  return App.getProjects().map((project) => project.title);
}

function createDOMProjectElement(name, id) {
  return `<div id='${id}' class='row my-3'>
      <div class="col">${name}</div>
      <div class="col-auto">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>
      <div class="col-auto">
        <i class="bi bi-pencil"></i>
      </div>
      <div class="col-auto">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getProjectElements() {
  const projectNames = getProjectNames();

  return projectNames.map((name, index) =>
    createDOMProjectElement(name, index)
  );
}

export function renderProjects() {
  const projects = document.getElementById('projects');

  projects.innerHTML = '';

  const projectElements = getProjectElements();

  projectElements.forEach((projectElement) =>
    projects.insertAdjacentHTML('beforeend', projectElement)
  );
}
