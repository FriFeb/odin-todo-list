import Projects from './components/projects';
import Project from './components/project';
import Task from './components/task';

export default class App {
  static createProject(title) {
    const project = new Project(title);
    Projects.addProject(project);
    Projects.currentProjectIndex = Projects.projects.length - 1;
  }

  static getProjects() {
    return Projects.projects;
  }

  static getProject(projectIndex) {
    Projects.currentProjectIndex = projectIndex;
    return Projects.getCurrentProject();
  }

  // User can change any project title, so we should not use Projects.getCurrentProject()
  static setProjectTitle(title, projectIndex) {
    const currentProject = Projects.projects[projectIndex];
    currentProject.title = title;
  }

  static deleteProject(projectIndex) {
    Projects.deleteProject(projectIndex);
  }
}
