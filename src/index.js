import App from './app';

App.createProject('first');
App.createProject('second');

console.log(App.getProjects());

console.log(App.getProject(0));
App.setProjectTitle('new title', 0);
console.log(App.getProject(0));

console.log(App.getProject(0));
App.deleteProject(0);
console.log(App.getProject(0));

console.log(...App.getProjects());
