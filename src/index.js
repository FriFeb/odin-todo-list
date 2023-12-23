import App from './services/app';

App.fetchStorageProjects();

console.log(App.getProject(2));
console.log(App.getProjectTasks());
App.setTaskPriority('asdf', 1);
App.setTaskPriority(-1, 1);
App.setTaskPriority(45, 1);
App.setTaskPriority(0, 0);

console.log(...App.getProjects());
