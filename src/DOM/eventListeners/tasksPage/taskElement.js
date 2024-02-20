import App from '../../../services/app';

let tasks;

function getTaskId(targetTask) {
  return targetTask.closest('.row').id;
}

export function initTaskElements() {
  tasks = document.getElementById('tasks');
}

export function deleteTask() {
  tasks.addEventListener('click', (event) => {
    if (!event.target.closest('.delete')) return;

    const taskId = getTaskId(event.target);

    App.deleteCurrentProjectTask(taskId);
    renderProjectElements();
  });
}
