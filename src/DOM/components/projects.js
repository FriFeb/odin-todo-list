import App from '../../services/app';

function appendHTML() {
  const main = document.getElementById('main');

  main.innerHTML = ` 
  <div class="text-center my-3">

    <h1 class="my-5">Projects</h1>

    <div class="row m-3">
      <input type="text" placeholder="Search project">
    </div>

    <div id="new-project" class="text-secondary border rounded m-4 p-1">
      Add new project
    </div>

    <div id="projects" class='text-start mx-3'>  
    </div>

  </div>
  `;
}

function getProjectNames() {
  App.fetchProjects();

  return App.getProjects().map((project) => project.title);
}

function createDOMProjectElement(name, id) {
  return `<div id='${id}' class='row'>
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

function appendProjects() {
  const projects = document.getElementById('projects');

  projects.innerHTML = getProjectElements();
}

/*
  - onChange event to search the projects
  - onClick Create event for the 'add new project' button
    Form appears in projects container:
      Name input field with default name
      2 buttons 'create' and 'cancel'
        on cancel - delete this form from the DOM
        on create - append new project with provided name
  
  - onClick Read Update Delete project 
*/
// function createEventListeners() {}

export function renderProjectsPage() {
  appendHTML();
  appendProjects();
  // createEventListeners();
}
