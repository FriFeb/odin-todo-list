import App from '../../../services/app';
import { renderProjectElements } from '../../dynamicElements';

let btn, form, input, closeBtn, addBtn;

function toggleForm() {
  form.toggleAttribute('hidden');
}

function clearInput() {
  input.value = '';
}

export function initElements() {
  btn = document.getElementById('new-project');
  form = document.getElementById('new-project-form');
  input = document.getElementById('new-project-name');
  closeBtn = document.getElementById('new-project-close');
  addBtn = document.getElementById('new-project-add');
}

export function toggleNewProjectForm() {
  btn.addEventListener('click', () => {
    toggleForm();
  });
}

export function closeNewProjectForm() {
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // It will toggle the form only if the one is shown
    toggleForm();
  });
}

export function addNewProject() {
  addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const projectName = input.value;
    App.createProject(projectName);

    clearInput();
    toggleForm();
    renderProjectElements();
  });
}

// function validateNewProjectName() {
//   input.addEventListener('focusout', () => {});
// }
