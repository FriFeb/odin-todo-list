import Projects from '../components/projects';
import Project from '../components/project';
import Task from '../components/task';
import Storage from '../repository/storage';

export default class App {
  static _getStorageProjects() {
    return JSON.parse(Storage.getItem('Projects'));
  }

  static _updateStorageProjects() {
    Storage.setItem('Projects', JSON.stringify(Projects));
  }

  // static fetchStorageProjects() {
  //   const storageProjects = this._getStorageProjects();

  //   if (!storageProjects) return;

  //   storageProjects._projects.forEach((storageProject) => {
  //     const project = new Project(storageProject._title);

  //     storageProject._tasks.forEach((storageTask) => {
  //       const task = new Task(storageTask._title, storageTask._description);
  //       project.addTask(task);
  //     });

  //     Projects.createProject(project);
  //   });

  //   Projects.currentProjectIndex = storageProjects._currentProjectIndex;
  // }

  static createProject(title) {
    Projects.createProject(title);

    this._updateStorageProjects();
  }

  static getProjects() {
    return Projects.getProjects();
  }

  static getProject(projectIndex) {
    return Projects.getProject(projectIndex);
  }

  static setProjectTitle(title, projectIndex) {
    Projects.setProjectTitle(title, projectIndex);

    this._updateStorageProjects();
  }

  static deleteProject(projectIndex) {
    Projects.deleteProject(projectIndex);

    this._updateStorageProjects();
  }

  static createTask(title, description) {
    const task = new Task(title, description);
    const currentProject = Projects.getCurrentProject();
    currentProject.addTask(task);

    this._updateStorageProjects();
  }

  static getProjectTasks() {
    const currentProject = Projects.getCurrentProject();
    return currentProject.tasks;
  }

  static getProjectTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    return currentProject.getTask(taskIndex);
  }

  static setTaskTitle(title, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    const currentTask = currentProject.getTask(taskIndex);
    if (!currentTask) return;
    currentTask.title = title;
    this._updateStorageProjects();
  }

  static setTaskDescription(description, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    const currentTask = currentProject.getTask(taskIndex);
    if (!currentTask) return;
    currentTask.description = description;
    this._updateStorageProjects();
  }

  static setTaskPriority(priority, taskIndex) {
    const currentProject = Projects.getCurrentProject();
    const currentTask = currentProject.getTask(taskIndex);
    if (!currentTask) return;
    currentTask.priority = priority;
    this._updateStorageProjects();
  }

  static deleteTask(taskIndex) {
    const currentProject = Projects.getCurrentProject();
    currentProject.deleteTask(taskIndex);
    this._updateStorageProjects();
  }
}
