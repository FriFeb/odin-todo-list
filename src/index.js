import App from './app';

App.createProject('first');
App.createProject('second');

console.log(App.getProjects());

App.createTask('task 1', 'new');
App.createTask('task 2', 'new');
App.createTask('task 3', 'new');

console.log(App.getProjectTasks());
console.log(App.getProjectTask(0));
console.log(App.getProjectTask(1));
console.log(App.getProjectTask(2));

App.setTaskTitle('new title', 2);
App.setTaskDescription('new description', 2);

App.deleteTask(0);
console.log(App.getProjectTasks());
