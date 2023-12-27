import App from './services/app';

// App.fetchStorageProjects();

App.createProject('first');
App.createTask('123', '123');
App.createTask('second');

console.log(...App.getProjectTasks());
App.setTaskTitle('first', 0);
App.setTaskDescription('desc', 0);
App.setTaskPriorityIndex(0, 0);
console.log(...App.getProjectTasks());
// App.setTaskDescription('first', 0);
// App.setTaskPriorityIndex(5, 0);
// console.log(App.getProjectTask(0));
// App.deleteTask(0);
// console.log(...App.getProjectTasks());
