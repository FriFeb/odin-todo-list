import App from '../../../services/app';
import { renderTaskElements } from '../../dynamicElements';
import { setInvalid, setValid, resetValidity } from '../../helpers/validation';

let btn, form, titleFeedback;

function toggleForm() {
  form.toggleAttribute('hidden');
}

function clearFormElementsFields() {
  form.title.value = '';
  form.description.value = '';
  form.priority.value = '3';
}

function setTitleValidity() {
  setValid(form.title);

  if (form.title.value.length < 3) {
    setInvalid(form.title);
    titleFeedback.innerHTML = 'Should be at least 3 characters in length';
  }
}

function setFormElementsValidity() {
  setTitleValidity();
}

function resetFormElementsValidity() {
  resetValidity(form.title);
}

function resetForm() {
  toggleForm();
  clearFormElementsFields();
  resetFormElementsValidity();
}

function createNewTask(taskTitle, taskDescription, taskPriority) {
  App.createCurrentProjectTask(taskTitle, taskDescription, taskPriority);
}

export function initNewTaskFormElements() {
  btn = document.getElementById('new-task');
  form = document.getElementById('new-task-form');
  titleFeedback = document.getElementById('new-task-title-feedback');
}

export function toggleNewTaskForm() {
  btn.addEventListener('click', () => {
    toggleForm();
  });
}

export function closeNewTaskForm() {
  form.close.addEventListener('click', () => {
    resetForm();
  });
}

export function addNewTask() {
  form.add.addEventListener('click', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      setFormElementsValidity();
      return;
    }

    const taskTitle = form.title.value;
    const taskDescription = form.description.value;
    const taskPriority = form.priority.value;

    createNewTask(taskTitle, taskDescription, taskPriority);

    resetForm();

    renderTaskElements();
  });
}

// focusout event fires after submit button click (enterKey)
export function validateNewTaskTitle() {
  form.title.addEventListener('focusout', () => {
    setTitleValidity();
  });
}
