import App from './services/app';

// App.fetchStorageProjects();

App.createProject('first');
App.createProject('second');
App.createProject('third');

console.log(...App.getProjects());
App.setProjectTitle('new title', 0);
App.setProjectTitle('new', 4);
console.log(...App.getProjects());

// console.log(App.getProjectTasks());
// App.setTaskTitle('crazy', 0);
// App.setTaskPriority(1, 0);
