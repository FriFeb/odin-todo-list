import { searchProject } from './eventListeners/projectsPage/searchProject';
import {
  initNewProjectFormElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
  validateNewProjectTitle as validateNewProjectTitle,
} from './eventListeners/projectsPage/newProjectForm';
import {
  changeProjectTitle,
  deleteProject,
  initProjectElements,
  openProjectTasks,
} from './eventListeners/projectsPage/projectElement';
import { searchTasks } from './eventListeners/tasksPage/searchTask';
import {
  addNewTask,
  closeNewTaskForm,
  initTaskElements,
  toggleNewTaskForm,
  validateNewTaskTitle,
} from './eventListeners/tasksPage/newTaskForm';

export function addProjectsEventListeners() {
  // search
  searchProject();

  // form
  initNewProjectFormElements();
  toggleNewProjectForm();
  closeNewProjectForm();
  addNewProject();
  validateNewProjectTitle();

  // projects
  initProjectElements();
  openProjectTasks();
  changeProjectTitle();
  deleteProject();
}

/*
  + Search of the tasks

  + Add new task
    + Form:
      + task name 
      + task description
      + task priority      

      + 2 buttons 'add' and 'cancel'
        +  on cancel - hide the form
        +  on add - append new task with provided name, desc, priority
      + validation 
   
  - Task:
    - Update 
    - Delete 
*/

export function addTasksEventListeners() {
  // search
  searchTasks();

  // form
  initTaskElements();
  toggleNewTaskForm();
  closeNewTaskForm();
  addNewTask();
  validateNewTaskTitle();

  // tasks
}
