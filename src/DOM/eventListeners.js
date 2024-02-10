import {
  initElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
} from './components/projectsPage/newProjectForm';

/*
  - onChange event to search the projects

  - onClick Create event for the 'add new project' button
    + Form appears in projects container:
    + 2 buttons 'create' and 'cancel'
      +  on cancel - delete this form from the DOM
      +  on create - append new project with provided name
      Add validation to the name
  
  - onClick Read Update Delete project 
*/

export function addProjectsEventListeners() {
  initElements();
  toggleNewProjectForm();
  closeNewProjectForm();
  addNewProject();
}
