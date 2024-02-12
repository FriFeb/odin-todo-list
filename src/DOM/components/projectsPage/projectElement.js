import App from '../../../services/app';
import { renderProjectElements } from '../../dynamicElements';

export function deleteProject() {
  document.addEventListener('click', (event) => {
    if (event.target.closest('.delete')) {
      const targetProjectId = event.target.closest('.row').id;

      App.deleteProject(targetProjectId);
      renderProjectElements();
    }
  });
}
