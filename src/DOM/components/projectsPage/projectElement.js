import App from '../../../services/app';
import {
  renderProjectElements,
  renderTaskElements,
} from '../../dynamicElements';
import { renderTasksHTML } from '../../html';

function getProjectId(targetProject) {
  return targetProject.closest('.row').id;
}

function updateProjectName(name, id) {
  App.setProjectTitle(name, id);
  renderProjectElements();
}

function createProjectNameInput(text, targetProjectId) {
  const input = document.createElement('input');
  input.classList.add('col');
  input.style.backgroundColor = '#212529';
  input.style.border = 'none';
  input.value = text;

  input.addEventListener('change', () => {
    updateProjectName(input.value, targetProjectId);
  });

  return input;
}

export function readProject() {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.read')) return;

    const projectId = getProjectId(event.target);
    App.getProject(projectId);

    renderTasksHTML();
    renderTaskElements();
  });
}

export function updateProject() {
  document.addEventListener('click', (event) => {
    const projectNameElement = event.target.closest('.project-name');
    if (!projectNameElement) return;

    const projectNameInput = createProjectNameInput(
      projectNameElement.innerText,
      getProjectId(event.target)
    );

    projectNameElement.replaceWith(projectNameInput);
    projectNameInput.focus();
  });
}

export function deleteProject() {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.delete')) return;

    const projectId = getProjectId(event.target);

    App.deleteProject(projectId);
    renderProjectElements();
  });
}