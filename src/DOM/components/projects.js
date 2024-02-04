import App from '../../services/app';

/*  
  + search bar
  - 'add new project' button
  + empty projects container 
  - onChange event to search the projects
  - onClick Create event for the 'add new project' button
    Form appears in projects container:
      Name input field with default name
      2 buttons 'create' and 'cancel'
        on cancel - delete this form from the DOM
        on create - append new project with provided name
*/
function appendHTML() {
  const main = document.getElementById('main');

  main.innerHTML = ` 
  <div class="text-center my-3">

    <h1 class="my-5">Projects</h1>
    <div class="row m-3">
      <input type="text" placeholder="Search project">
    </div>

    <div id="projects" class='text-start mx-3'>  
    </div>
  </div>
  `;
}

/*  
  + title
  + id of a project as an index in the Projects obj
  + read (icon that opens tasks)
  - update (edit icon that allows to edit proj title)
  - delete (x icon that deletes proj)
  - onClick Read Update Delete events 
*/
function createDOMProjectElement(name, id) {
  return `<div class='row'>
      <div class="col">${name}</div>
      <div id='${id}' class="col-1">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>
    </div>`;
}

function appendProjects() {
  App.fetchProjects();

  const projectNames = App.getProjects().map((project) => project.title);

  const projectElements = [];

  projectNames.forEach((name, id) => {
    projectElements.push(createDOMProjectElement(name, id));
  });

  const projects = document.getElementById('projects');
  projects.innerHTML = projectElements;
}

export function renderProjectsPage() {
  appendHTML();
  appendProjects();
}
