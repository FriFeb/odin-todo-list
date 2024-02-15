import App from '../../../services/app';

function hideRedundantProjects(projectTitles, searchName) {
  projectTitles.forEach((projectTitle, index) => {
    if (!projectTitle.toLowerCase().includes(searchName.toLowerCase().trim())) {
      document.getElementById(index).hidden = true;
    } else {
      document.getElementById(index).hidden = false;
    }
  });
}

export function searchProject() {
  const input = document.getElementById('search-project');

  const projectTitles = App.getProjectTitles();

  input.addEventListener('input', () => {
    hideRedundantProjects(projectTitles, input.value);
  });
}
