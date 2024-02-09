import { renderProjectsHTML } from './html';
import { renderProjects } from './dynamicElements';

/*
  - onChange event to search the projects

  - onClick Create event for the 'add new project' button
    + Form appears in projects container:
    + Name input field with default name
    + 2 buttons 'create' and 'cancel'
        on cancel - delete this form from the DOM
      +  on create - append new project with provided name
      Add validation to the name
  
  - onClick Read Update Delete project 
*/

function createEventListeners() {
  // showNewProjectForm();
  // addNewProject();
}

export function renderProjectsPage() {
  renderProjectsHTML();
  renderProjects();
  createEventListeners();
}
