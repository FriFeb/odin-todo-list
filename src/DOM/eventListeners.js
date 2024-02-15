import { searchProject } from './components/projectsPage/searchProject';
import {
  initElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
  validateNewprojectTitle as validateNewProjectTitle,
} from './components/projectsPage/newProjectForm';
import {
  updateProject,
  deleteProject,
  readProject,
} from './components/projectsPage/projectElement';

export function addProjectsEventListeners() {
  searchProject();
  initElements();
  toggleNewProjectForm();
  closeNewProjectForm();
  addNewProject();
  validateNewProjectTitle();
  readProject();
  updateProject();
  deleteProject();
}

/*
  - Search of the tasks

  - Add new task
    - Form:
      - task name 
      - task description
      - task priority      

      - 2 buttons 'add' and 'cancel'
        -  on cancel - hide the form
        -  on add - append new task with provided name, desc, priority
      - validation 
  
  - Task:
    - Update 
    - Delete 
*/
