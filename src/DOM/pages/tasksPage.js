import { renderTasksHTML } from '../html';
import { renderTaskElements } from '../dynamicElements';
import { addTasksEventListeners } from '../eventListeners';

export function renderTasksPage() {
  renderTasksHTML();
  renderTaskElements();
  addTasksEventListeners();
}
