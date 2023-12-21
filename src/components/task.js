export default class Task {
  constructor(title, description) {
    this._title = title;
    this._description = description;
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
}
