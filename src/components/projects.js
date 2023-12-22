class Projects {
  _projects = [];

  _currentProjectIndex = null;

  get projects() {
    return this._projects;
  }

  set currentProjectIndex(projectIndex) {
    this._currentProjectIndex = projectIndex;
  }

  addProject(project) {
    this._projects.push(project);
  }

  getCurrentProject() {
    return this._projects[this._currentProjectIndex];
  }

  deleteProject(projectIndex) {
    this._projects.splice(projectIndex, 1);
  }
}

export default new Projects();
