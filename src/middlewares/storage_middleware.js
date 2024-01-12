import Storage from '../repository/storage';

function getStorageProjects() {
  return JSON.parse(Storage.getItem('Projects'));
}

export function updateStorageProjects(Projects) {
  Storage.setItem('Projects', JSON.stringify(Projects));
}

export function fetchStorageProjects(Projects) {
  const storageProjects = getStorageProjects();

  if (!storageProjects) return;

  storageProjects._projects.forEach((storageProject) => {
    Projects.createProject(storageProject._title);

    storageProject._tasks.forEach((storageTask) => {
      Projects.getCurrentProject().createTask(
        storageTask._title,
        storageTask._description,
        storageTask._priorityIndex
      );
    });
  });

  Projects._currentProjectIndex = storageProjects._currentProjectIndex;
}
