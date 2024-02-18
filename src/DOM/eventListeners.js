import { searchProject } from './eventListeners/projectsPage/searchProject';
import {
  initProjectElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
  validateNewProjectTitle as validateNewProjectTitle,
} from './eventListeners/projectsPage/newProjectForm';
import {
  updateProject,
  deleteProject,
  readProject,
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
  searchProject();
  initProjectElements();
  toggleNewProjectForm();
  closeNewProjectForm();
  addNewProject();
  validateNewProjectTitle();
  readProject();
  updateProject();
  deleteProject();
}

/*
  + Search of the tasks

  - Add new task
    - Form:
      + task name 
      + task description
      - task priority      

      - 2 buttons 'add' and 'cancel'
        +  on cancel - hide the form
        -  on add - append new task with provided name, desc, priority
      + validation 
  
  - Task:
    - Update 
    - Delete 
*/

export function addTasksEventListeners() {
  searchTasks();
  initTaskElements();
  toggleNewTaskForm();
  closeNewTaskForm();
  addNewTask();
  validateNewTaskTitle();
}
