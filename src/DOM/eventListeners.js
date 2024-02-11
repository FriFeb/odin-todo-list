import { searchProject } from './components/projectsPage/search';
import {
  initElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
  validateNewProjectName,
} from './components/projectsPage/newProjectForm';

/*
  + onChange event to search the projects

  + onClick Create event for the 'add new project' button
    + Form appears in projects container:
      + project's name field
      + 2 buttons 'create' and 'cancel'
        +  on cancel - delete this form from the DOM
        +  on create - append new project with provided name
      + validation 
  
  - onClick Read Update Delete project 
*/

export function addProjectsEventListeners() {
  searchProject();
  initElements();
  toggleNewProjectForm();
  closeNewProjectForm();
  addNewProject();
  validateNewProjectName();
}
