export default class Storage {
  static getItem(itemKey) {
    return localStorage.getItem(itemKey);
  }

  static setItem(itemKey, itemValue) {
    localStorage.setItem(itemKey, itemValue);
  }
}
