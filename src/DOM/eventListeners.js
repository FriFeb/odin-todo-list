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
  changeTaskPriority,
  deleteTask,
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
  changeTaskAttribute('.task-title');
  changeTaskAttribute('.task-description');
  changeTaskPriority();
  deleteTask();
}
