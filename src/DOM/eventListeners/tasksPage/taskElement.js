import App from '../../../services/app';
import { renderTaskElements } from '../../dynamicElements';

let tasks;

function getTaskId(targetTask) {
  return targetTask.closest('.task').id;
}

function updateTaskTitle(title, id) {
  App.setCurrentProjectTaskTitle(title, id);
  renderTaskElements();
}

function updateTaskDescription(description, id) {
  App.setCurrentProjectTaskDescription(description, id);
  renderTaskElements();
}

function updateTaskPriorityIndex(priorityIndex, id) {
  App.setCurrentProjectTaskPriorityIndex(priorityIndex, id);
  renderTaskElements();
}

function createTaskTitleInput(title, targetTaskId) {
  const input = document.createElement('input');
  input.classList.add('col');
  input.style.backgroundColor = '#212529';
  input.style.border = 'none';
  input.value = title;

  input.addEventListener('change', () => {
    updateTaskTitle(input.value, targetTaskId);
  });

  return input;
}

function createTaskDescriptionInput(description, targetTaskId) {
  const input = document.createElement('input');
  input.classList.add('col-12');
  input.style.backgroundColor = '#212529';
  input.style.border = 'none';
  input.value = description;

  input.addEventListener('change', () => {
    updateTaskDescription(input.value, targetTaskId);
  });

  return input;
}

export function initTaskElements() {
  tasks = document.getElementById('tasks');
}

export function changeTaskTitle() {
  tasks.addEventListener('click', (event) => {
    const taskTitleElement = event.target.closest('.task-title');
    if (!taskTitleElement) return;

    const taskTitleInput = createTaskTitleInput(
      taskTitleElement.innerText,
      getTaskId(event.target)
    );

    taskTitleElement.replaceWith(taskTitleInput);
    taskTitleInput.focus();
  });
}

export function changeTaskDescription() {
  tasks.addEventListener('click', (event) => {
    const taskDescriptionElement = event.target.closest('.task-description');
    if (!taskDescriptionElement) return;

    const taskTitleDescription = createTaskDescriptionInput(
      taskDescriptionElement.innerText,
      getTaskId(event.target)
    );

    taskDescriptionElement.replaceWith(taskTitleDescription);
    taskTitleDescription.focus();
  });
}

export function changeTaskPriority() {
  tasks.addEventListener('click', (event) => {
    const taskPriorityElement = event.target.closest('.task-priorities');
    if (!taskPriorityElement) return;

    const priorityIndex = event.target.closest('li').id;

    updateTaskPriorityIndex(priorityIndex, getTaskId(event.target));
  });
}

export function deleteTask() {
  tasks.addEventListener('click', (event) => {
    if (!event.target.closest('.delete')) return;

    const taskId = getTaskId(event.target);

    App.deleteCurrentProjectTask(taskId);
    renderTaskElements();
  });
}
