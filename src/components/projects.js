export default class Projects {
  static _projects = [];

  static _currentProjectIndex = null;

  static get projects() {
    return this._projects;
  }

  static set currentProjectIndex(projectIndex) {
    this._currentProjectIndex = projectIndex;
  }

  static addProject(project) {
    this._projects.push(project);
  }

  static getCurrentProject() {
    return this._projects[this._currentProjectIndex];
  }

  static deleteProject(projectIndex) {
    this._projects.splice(projectIndex, 1);
  }
}
