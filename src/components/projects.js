export default class Projects {
  constructor() {
    if (this instanceof Projects) {
      throw new Error('A static class cannot be instantiated');
    }
  }

  static _projects = [];

  static get projects() {
    return this._projects;
  }

  static addProject(project) {
    this._projects.push(project);
  }

  static deleteProject(projectIndex) {
    delete this._projects[projectIndex];
  }
}
