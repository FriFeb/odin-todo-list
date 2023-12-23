export default class Task {
  constructor(title, description, priority = 3) {
    this._title = title;
    this._description = description;
    this._priorities = [1, 2, 3, 4];
    this._priority = this._priorities[priority];
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set description(description) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set priority(priority) {
    if (isNaN(priority) || priority < 0 || priority > 3) return;
    this._priority = this._priorities[priority];
  }

  get priority() {
    return this._priority;
  }
}
