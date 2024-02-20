import { searchProject } from './eventListeners/projectsPage/searchProject';
import {
  initNewProjectFormElements,
  toggleNewProjectForm,
  closeNewProjectForm,
  addNewProject,
  validateNewProjectTitle,
} from './eventListeners/projectsPage/newProjectForm';
import {
  initProjectElements,
  openProjectTasks,
  changeProjectTitle,
  deleteProject,
} from './eventListeners/projectsPage/projectElement';

import { searchTasks } from './eventListeners/tasksPage/searchTask';
import {
  initNewTaskFormElements,
  toggleNewTaskForm,
  closeNewTaskForm,
  addNewTask,
  validateNewTaskTitle,
} from './eventListeners/tasksPage/newTaskForm';
import {
  initTaskElements,
  changeTaskAttribute,
  deleteTask,
  changeTaskDescription,
  changeTaskTitle,
  changeTaskPriority,
} from './eventListeners/tasksPage/taskElement';

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
   
  + Task:
    + Update 
      + title
      + description
      + priority
    + Delete 
*/

export function addTasksEventListeners() {
  // search
  searchTasks();

  // form
  initNewTaskFormElements();
  toggleNewTaskForm();
  closeNewTaskForm();
  addNewTask();
  validateNewTaskTitle();

  // tasks
  initTaskElements();
  // changeTaskAttribute('.task-title');
  // changeTaskAttribute('.task-description');
  changeTaskTitle();
  changeTaskDescription();
  changeTaskPriority();
  deleteTask();
}
