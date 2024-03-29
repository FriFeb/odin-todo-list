import App from '../services/app';
import { TASK_PRIORITY_COLORS } from './helpers/flagPriorityColors';

function createDOMProjectElement(title, id) {
  return `<div id='${id}' class='row my-3'>
      <div class="col project-title">${title}</div>
      <div class="col-auto read">
        <i class="bi bi-box-arrow-in-right"></i>
      </div>

      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getProjectElements() {
  const projectTitles = App.getProjectTitles();

  return projectTitles.map((title, index) =>
    createDOMProjectElement(title, index)
  );
}

export function renderProjectElements() {
  const projects = document.getElementById('projects');

  projects.innerHTML = '';

  const projectElements = getProjectElements();

  projectElements.forEach((projectElement) =>
    projects.insertAdjacentHTML('beforeend', projectElement)
  );
}

function createDOMTaskElement(title, description, priorityIndex, id) {
  return `<div id='${id}' class='task row my-3 align-items-center'>
      <div class="row col">
        <div class="col task-title">${title}</div>
        <div class="col-12 task-description" style="font-size: 0.75rem;">
          ${description}
        </div>
      </div>

      <div class="col-auto task-priority">
        <button id="${priorityIndex}" class="btn" data-bs-toggle="dropdown">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${TASK_PRIORITY_COLORS[priorityIndex]}" class="bi bi-flag-fill" viewBox="0 0 16 16">
          <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg>
        </button>
        <ul class="dropdown-menu task-priorities">
          <li id="0" class="dropdown-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${TASK_PRIORITY_COLORS[0]}" class="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg> High
          </li>
          <li id="1" class="dropdown-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${TASK_PRIORITY_COLORS[1]}" class="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg> Middle
          </li>
          <li id="2" class="dropdown-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${TASK_PRIORITY_COLORS[2]}" class="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg> Low
          </li>
          <li id="3" class="dropdown-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${TASK_PRIORITY_COLORS[3]}" class="bi bi-flag-fill" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg> Common
          </li>
        </ul>
      </div>
      <div class="col-auto delete">
        <i class="bi bi-trash3"></i>
      </div>
    </div>`;
}

function getTaskElements() {
  const tasks = App.getCurrentProjectTasks();

  return tasks.map((task, index) =>
    createDOMTaskElement(
      task.title,
      task.description,
      task.priorityIndex,
      index
    )
  );
}

function highlightTaskPriority() {
  const taskPriorityElements = document.querySelectorAll('.task-priority');

  Array.from(taskPriorityElements).forEach((taskPriorityElement) => {
    const taskPriority = taskPriorityElement.firstElementChild.id;
    const taskPriorityList =
      taskPriorityElement.querySelector('.task-priorities');

    Array.from(taskPriorityList.children).forEach((priority) => {
      if (priority.id === taskPriority) {
        // priority.style.background = 'hsl(0 0% 50%)';
        priority.classList.add('active');
      }
    });
  });
}

export function renderTaskElements() {
  const tasks = document.getElementById('tasks');

  tasks.innerHTML = '';

  const taskElements = getTaskElements();

  taskElements.forEach((taskElement) => {
    tasks.insertAdjacentHTML('beforeend', taskElement);
    highlightTaskPriority();
  });
}
