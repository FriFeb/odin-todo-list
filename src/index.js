import App from './app';

App.createProject('first');
App.createProject('second');

App.setProjectTitle('new', 1);
console.log(...App.getProjects());

App.createTask('task 1', 'new');
App.createTask('task 2', 'new');
App.createTask('task 3', 'new');

App.setTaskTitle('new title', 2);
App.setTaskDescription('new description', 2);
console.log(...App.getProjectTasks());
