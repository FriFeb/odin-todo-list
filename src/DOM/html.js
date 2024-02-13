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
          <label for="new-project-name" class="form-label">Name</label>
        </div>

        <div class="col">
          <input type="text" class="form-control" id="new-project-name" minlength="3" required>
          <div id="new-project-name-feedback" class="invalid-feedback"></div>
        </div>

      </div>

      <button id="new-project-add" class="col-2 btn btn-light">Add</button>
      <button id="new-project-close" class="col-2 btn btn-dark">Close</button>

    </form>

    <div id="projects" class='text-start mx-3'></div>

  </div>`;
}
