import App from './services/app';

App.fetchStorageProjects();

console.log(App.getProject(1));
console.log(App.getProjectTasks());
App.setTaskTitle('crazy', 0);
App.setTaskPriority(1, 0);

console.log(...App.getProjects());
