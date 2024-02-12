import Task from './task';

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

  createTask(title, description, priorityIndex) {
    const task = new Task(title, description, priorityIndex);
    this._tasks.push(task);
  }

  getTasks() {
    return this._tasks;
  }

  getTask(taskIndex) {
    return this._tasks[taskIndex];
  }

  _setTaskProperty(property, propertyValue, taskIndex) {
    const targetTask = this.getTask(taskIndex);
    if (!targetTask) return;
    targetTask[property] = propertyValue;
  }

  setTaskTitle(title, taskIndex) {
    this._setTaskProperty('title', title, taskIndex);
  }

  setTaskDescription(description, taskIndex) {
    this._setTaskProperty('description', description, taskIndex);
  }

  setTaskPriorityIndex(priorityIndex, taskIndex) {
    this._setTaskProperty('priorityIndex', priorityIndex, taskIndex);
  }

  deleteTask(taskIndex) {
    if (!taskIndex) return;

    this._tasks.splice(taskIndex, 1);
  }
}
