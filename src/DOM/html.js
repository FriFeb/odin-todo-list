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

    <div id="new-project" class="text-secondary border rounded m-4 p-1">
      New project
    </div>

    <form id="new-project-form" class="row align-items-center my-5" hidden>
      <div class="col">
        <input type="text" class="form-control" id="new-project-name" placeholder='Project name'>
      </div>

      <button id="new-project-add" class="col-1 btn btn-light">Add</button>
      <button id="new-project-close" class="col-1 btn btn-dark">Close</button>
    </form>

    <div id="projects" class='text-start mx-3'></div>

  </div>`;
}
