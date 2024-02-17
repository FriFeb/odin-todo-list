import * as constants from '../helpers/constants';

export default class Task {
  constructor(title, description, priorityIndex) {
    this._title = title;
    this._description = description;
    this._priorities = constants.PRIORITIES;
    this._priorityIndex = priorityIndex;

    if (priorityIndex < 0 || priorityIndex > constants.PRIORITY_COUNT - 1) {
      this._priorityIndex = constants.PRIORITY_COUNT - 1;
    }
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

  get priorityIndex() {
    return this._priorityIndex;
  }

  get priorities() {
    return this._priorities;
  }

  get priority() {
    return this._priorities[this._priorityIndex];
  }
}
