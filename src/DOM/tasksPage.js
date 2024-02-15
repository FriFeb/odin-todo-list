import { renderTasksHTML } from './html';
import { renderTaskElements } from './dynamicElements';

export function renderTasksPage() {
  renderTasksHTML();
  renderTaskElements();
}
