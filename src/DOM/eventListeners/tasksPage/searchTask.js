import App from '../../../services/app';

function isSearchValueFound(value, searchValue) {
  return value.toLowerCase().includes(searchValue.toLowerCase().trim());
}

function hideRedundantTasks(projectTasks, searchValue) {
  projectTasks.forEach((projectTask, index) => {
    if (
      isSearchValueFound(projectTask.title, searchValue) ||
      isSearchValueFound(projectTask.description, searchValue)
    ) {
      document.getElementById(index).hidden = false;
    } else {
      document.getElementById(index).hidden = true;
    }
  });
}

export function searchTasks() {
  const input = document.getElementById('search-task');

  const projectTasks = App.getCurrentProjectTasks();

  input.addEventListener('input', () => {
    hideRedundantTasks(projectTasks, input.value);
  });
}
