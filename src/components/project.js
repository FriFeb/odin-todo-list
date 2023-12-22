export default class Project {
  constructor(title) {
    this._title = title;
    this._tasks = [];
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    this._tasks.push(task);
  }

  deleteTask(taskIndex) {
    this._tasks.splice(taskIndex, 1);
  }
}
