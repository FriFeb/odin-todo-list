import { renderProjectsHTML } from '../html';
import { renderProjectElements } from '../dynamicElements';
import { addProjectsEventListeners } from '../eventListeners';

export function renderProjectsPage() {
  renderProjectsHTML();
  renderProjectElements();
  addProjectsEventListeners();
}
