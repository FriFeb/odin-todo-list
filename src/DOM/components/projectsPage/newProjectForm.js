import App from '../../../services/app';
import { renderProjectElements } from '../../dynamicElements';
import { setInvalid, setValid, resetValidity } from '../../helpers/validation';

let btn, form, input, inputFeedback, closeBtn, addBtn;

function toggleForm() {
  form.toggleAttribute('hidden');
}

function clearFormElementsFields() {
  input.value = '';
}

function setInputValidity() {
  setValid(input);

  if (input.value.length < 3) {
    setInvalid(input);
    inputFeedback.innerHTML = 'Should be at least 3 characters in length';
  }
}

function setFormElementsValidity() {
  setInputValidity();
}

function resetFormElementsValidity() {
  resetValidity(input);
}

export function initElements() {
  btn = document.getElementById('new-project');
  form = document.getElementById('new-project-form');
  input = document.getElementById('new-project-name');
  inputFeedback = document.getElementById('new-project-name-feedback');
  closeBtn = document.getElementById('new-project-close');
  addBtn = document.getElementById('new-project-add');
}

export function toggleNewProjectForm() {
  btn.addEventListener('click', () => {
    toggleForm();
  });
}

export function closeNewProjectForm() {
  closeBtn.addEventListener('click', () => {
    toggleForm();

    resetFormElementsValidity();
  });
}

export function addNewProject() {
  addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    setFormElementsValidity();

    if (!form.checkValidity()) return;

    const projectName = input.value;
    App.createProject(projectName);

    toggleForm();
    clearFormElementsFields();
    resetFormElementsValidity();

    renderProjectElements();
  });
}

export function validateNewProjectName() {
  input.addEventListener('focusout', () => {
    setInputValidity();
  });
}
