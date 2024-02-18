const main = document.getElementById('main');

export function renderProjectsHTML() {
  main.innerHTML = `
  <div class="text-center my-3">

    <h1 class="my-5">
      Projects
    </h1>

    <div class="row m-3">
      <input id='search-project' type="text" placeholder="Search project">
    </div>

    <div id="new-project" class="text-secondary border rounded m-3 p-1">
      New project
    </div>

    <form id="new-project-form" class="row justify-content-center align-items-center my-5 p-1" hidden>
      <div class="row align-items-center my-3">

        <div class="col-auto">
          <label for="new-project-title" class="form-label">Title</label>
        </div>

        <div class="col">
          <input type="text" class="form-control" id="new-project-title" minlength="3" required>
          <div id="new-project-title-feedback" class="invalid-feedback"></div>
        </div>

      </div>

      <button id="new-project-add" class="col-2 btn btn-light">Add</button>
      <button type="reset" id="new-project-close" class="col-2 btn btn-dark">Close</button>

    </form>

    <div id="projects" class='text-start mx-3'></div>

  </div>`;
}

export function renderTasksHTML() {
  main.innerHTML = `
  <div class="text-center my-3">

    <h1 class="my-5">
      Tasks
    </h1>

    <div class="row m-3">
      <input id='search-task' type="text" placeholder="Search task">
    </div>

    <div id="new-task" class="text-secondary border rounded m-3 p-1">
      New task
    </div>

    <form id="new-task-form" class="row justify-content-center align-items-center my-5 p-1" hidden>
      <div class="row align-items-center my-3">

        <div class="row align-items-center my-3">
          <div class="col-4">
            <label for="new-task-title" class="form-label">Title*</label>
          </div>
          
          <div class="col">
            <input type="text" class="form-control" id="new-task-title" name="title" minlength="3" required>
            <div id="new-task-title-feedback" class="invalid-feedback"></div>
          </div>
        </div>

        <div class="row align-items-center my-3">
          <div class="col-4">
            <label for="new-task-description" class="form-label">Description</label>
          </div>
          
          <div class="col">
            <textarea class="form-control" id="new-task-description" name="description"></textarea>
          </div>
        </div>

      </div>

      <button id="new-task-add" class="col-2 btn btn-light" name="add">Add</button>
      <button type="reset" id="new-task-close" class="col-2 btn btn-dark" name="close">Close</button>

    </form>

    <div id="tasks" class='text-start mx-3'></div>

  </div>`;
}

{
  /* <div class="col-auto row text-start">
<label for="new-task-title" class="col-12 my-3 form-label">Title</label>
<label for="new-task-description" class="col-12 my-3 form-label">Description</label>
</div>

<div class="col">
<input type="text" class="my-3 form-control" id="new-task-title" name="title" minlength="3" required>
<div id="new-task-title-feedback" class="invalid-feedback"></div>
<input type="text" class="my-3 form-control" id="new-task-description" name="description" minlength="3" required>
</div> */
}
