import * as constants from '../helpers/constants';

export default class Task {
  constructor(title, description) {
    this._title = title;
    this._description = description;
    this._priorities = constants.PRIORITIES;
    this._priorityIndex = constants.PRIORITY_COUNT - 1;
    this._priority = this._priorities[this._priorityIndex];
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

  set priorityIndex(priorityIndex) {
    if (priorityIndex >= 0 && priorityIndex <= constants.PRIORITY_COUNT - 1) {
      this._priorityIndex = priorityIndex;
    }
  }

  get priority() {
    return this._priority[this._priorityIndex];
  }
}
