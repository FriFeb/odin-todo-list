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

function createTaskAttributeInput(
  value,
  className,
  updateFunction,
  targetTaskId
) {
  const input = document.createElement('input');
  input.classList.add(className);
  input.style.backgroundColor = '#212529';
  input.style.border = 'none';
  input.value = value;

  input.addEventListener('change', () => {
    updateFunction(input.value, targetTaskId);
  });

  return input;
}

export function initTaskElements() {
  tasks = document.getElementById('tasks');
}

export function changeTaskAttribute(attribute) {
  tasks.addEventListener('click', (event) => {
    const taskAttributeElement = event.target.closest(attribute);
    if (!taskAttributeElement) return;

    let taskAttributeInput;

    switch (attribute) {
      case '.task-title':
        taskAttributeInput = createTaskAttributeInput(
          taskAttributeElement.innerText,
          'col',
          updateTaskTitle,
          getTaskId(event.target)
        );
        break;
      case '.task-description':
        taskAttributeInput = createTaskAttributeInput(
          taskAttributeElement.innerText,
          'col-12',
          updateTaskDescription,
          getTaskId(event.target)
        );
        break;
    }

    taskAttributeElement.replaceWith(taskAttributeInput);
    taskAttributeInput.focus();
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
