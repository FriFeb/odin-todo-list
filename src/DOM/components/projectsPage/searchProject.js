import App from '../../../services/app';

function hideRedundantProjects(projectNames, searchName) {
  projectNames.forEach((projectName, index) => {
    if (!projectName.toLowerCase().includes(searchName.toLowerCase().trim())) {
      document.getElementById(index).hidden = true;
    } else {
      document.getElementById(index).hidden = false;
    }
  });
}

export function searchProject() {
  const input = document.getElementById('search-project');

  const projectNames = App.getProjectNames();

  input.addEventListener('input', () => {
    hideRedundantProjects(projectNames, input.value);
  });
}
