import Project from './project';

class Projects {
  _projects = [];
  _currentProjectIndex = null;

  _setCurrentProjectIndex(projectIndex) {
    // We should CRUD tasks only in existing projects
    // so it will return a last project
    if (projectIndex >= 0 && projectIndex < this._projects.length) {
      this._currentProjectIndex = projectIndex;
    }
  }

  createProject(title) {
    const project = new Project(title);
    this._projects.push(project);
    this._setCurrentProjectIndex(this._projects.length - 1);
  }

  getProjects() {
    return this._projects;
  }

  getProject(projectIndex) {
    this._setCurrentProjectIndex(projectIndex);
    return this._projects[projectIndex];
  }

  // To ease work with tasks
  getCurrentProject() {
    return this._projects[this._currentProjectIndex];
  }

  setProjectTitle(title, projectIndex) {
    const targetProject = this.getProject(projectIndex);
    if (!targetProject) return;
    targetProject.title = title;
  }

  deleteProject(projectIndex) {
    this._projects.splice(projectIndex, 1);
  }
}

export default new Projects();
