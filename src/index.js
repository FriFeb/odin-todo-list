import App from './services/app';

// App.createProject('1');
// App.createProject('2');
// App.createTask('task 1', 'desc');
// App.createTask('task 2', 'desc');

App.fetchStorageProjects();
console.log(...App.getProjects());

// App.createProject('3');
// App.createTask('new');
// App.createTask('task 2', 'desc');
// App.setProjectTitle('new', 6);
// App.getProject(1);
// App.setTaskTitle('Ultra absolute', 1);
// App.deleteTask(0);
// App.deleteProject(2);

console.log(...App.getProjects());
