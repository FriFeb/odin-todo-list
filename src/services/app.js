import Projects from '../components/projects';
import {
  updateStorageProjects,
  fetchStorageProjects,
} from '../middlewares/storage_middleware';
import * as constants from '../helpers/constants';

export default class App {
  static fetchProjects() {
    fetchStorageProjects(Projects);
  }

  static createProject(title) {
    Projects.createProject(title);

    updateStorageProjects(Projects);
  }

  static getProjects() {
    return Projects.getProjects();
  }

  static getProject(projectIndex) {
    const project = Projects.getProject(projectIndex);

    updateStorageProjects(Projects);

    return project;
  }

  static setProjectTitle(title, projectIndex) {
    Projects.setProjectTitle(title, projectIndex);

    updateStorageProjects(Projects);
  }

  static deleteProject(projectIndex) {
    Projects.deleteProject(projectIndex);

    updateStorageProjects(Projects);
  }

  static createCurrentProjectTask(
    title,
    description = '',
    priorityIndex = constants.PRIORITY_COUNT - 1
  ) {
    const currentProject = Projects.getCurrentProject();
    currentProject.createTask(title, description, priorityIndex);

    updateStorageProjects(Projects);
  }

  static getCurrentProjectTasks() {
    const currentProject = Projects.getCurrentProject();
    return currentProject.getTasks();
  }

  static getCurrentProjectTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    return currentProject.getTask(taskIndex);
  }

  static setCurrentProjectTaskTitle(title, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskTitle(title, taskIndex);

    updateStorageProjects(Projects);
  }

  static setCurrentProjectTaskDescription(description, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskDescription(description, taskIndex);

    updateStorageProjects(Projects);
  }

  static setCurrentProjectTaskPriorityIndex(priorityIndex, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.setTaskPriorityIndex(priorityIndex, taskIndex);

    updateStorageProjects(Projects);
  }

  static deleteCurrentProjectTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.deleteTask(taskIndex);

    updateStorageProjects(Projects);
  }
}
