import Projects from '../components/projects';
import Project from '../components/project';
import Task from '../components/task';
import { updateStorageProjects } from '../middlewares/storage_middleware';
import * as constants from '../helpers/constants';

export default class App {
  static createProject(title) {
    Projects.createProject(title);

    // updateStorageProjects();
  }

  static getProjects() {
    return Projects.getProjects();
  }

  static getProject(projectIndex) {
    return Projects.getProject(projectIndex);
  }

  static setProjectTitle(title, projectIndex) {
    Projects.setProjectTitle(title, projectIndex);

    updateStorageProjects();
  }

  static deleteProject(projectIndex) {
    Projects.deleteProject(projectIndex);

    updateStorageProjects();
  }

  static createTask(
    title,
    description = '',
    priorityIndex = constants.PRIORITY_COUNT - 1
  ) {
    const currentProject = Projects.getCurrentProject();
    currentProject.createTask(title, description, priorityIndex);

    // updateStorageProjects();
  }

  static getProjectTasks() {
    const currentProject = Projects.getCurrentProject();
    return currentProject.getTasks();
  }

  static getProjectTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    return currentProject.getTask(taskIndex);
  }

  static setTaskTitle(title, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskTitle(title, taskIndex);

    // updateStorageProjects();
  }

  static setTaskDescription(description, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskDescription(description, taskIndex);

    // updateStorageProjects();
  }

  static setTaskPriorityIndex(priorityIndex, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskPriorityIndex(priorityIndex, taskIndex);

    // updateStorageProjects();
  }

  static deleteTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.deleteTask(taskIndex);

    updateStorageProjects();
  }
}
