class Projects {
  _projects = [];

  _currentProjectIndex = null;

  get projects() {
    return this._projects;
  }

  set currentProjectIndex(projectIndex) {
    // We should CRUD tasks only in existing projects
    if (projectIndex < 0 || projectIndex >= this._projects.length) return;
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
