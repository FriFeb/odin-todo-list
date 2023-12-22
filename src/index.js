import App from './services/app';

// App.createProject('1');
// App.createProject('2');
// App.createTask('task 1', 'desc');
// App.createTask('task 2', 'desc');

App.fetchStorageProjects();

console.log(App.getProject(0));
console.log(App.getProject(1));
console.log(App.getProject(2));
console.log(App.getProject(123));
console.log(App.getProjectTasks());
console.log(App.getProjectTask(2));
App.setTaskTitle('asfsd', 1);
App.setTaskDescription('asdfasdf', 1);
App.deleteTask(1);

console.log(...App.getProjects());
