import App from './services/app';

App.fetchProjects();
console.log(...App.getProjects());
console.log(...App.getCurrentProjectTasks());
