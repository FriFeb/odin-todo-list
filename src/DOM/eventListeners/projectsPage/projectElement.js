import App from '../../../services/app';
import { renderProjectElements } from '../../dynamicElements';
import { renderTasksPage } from '../../pages/tasksPage';

function getProjectId(targetProject) {
  return targetProject.closest('.row').id;
}

function updateProjectTitle(name, id) {
  App.setProjectTitle(name, id);
  renderProjectElements();
}

function createProjectTitleInput(text, targetProjectId) {
  const input = document.createElement('input');
  input.classList.add('col');
  input.style.backgroundColor = '#212529';
  input.style.border = 'none';
  input.value = text;

  input.addEventListener('change', () => {
    updateProjectTitle(input.value, targetProjectId);
  });

  return input;
}

export function readProject() {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.read')) return;

    const projectId = getProjectId(event.target);
    App.getProject(projectId);

    renderTasksPage();
  });
}

export function updateProject() {
  document.addEventListener('click', (event) => {
    const projectTitleElement = event.target.closest('.project-title');
    if (!projectTitleElement) return;

    const projectTitleInput = createProjectTitleInput(
      projectTitleElement.innerText,
      getProjectId(event.target)
    );

    projectTitleElement.replaceWith(projectTitleInput);
    projectTitleInput.focus();
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