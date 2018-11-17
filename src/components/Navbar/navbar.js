import $ from 'jquery';

const displayNavbar = () => {
  let domString = '';
  domString += `
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <h4 class="navbar-brand m-0 text-danger p-0" id="lego-title">LEGO BUILDER</h4>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a class="btn dropdown-toggle text-white btn-danger" id="dropdown01" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Choose Head</a>
                <div class="dropdown-menu" id="head-select" aria-labelledby="dropdown04">
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="btn dropdown-toggle btn-warning text-white" id="dropdown02" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Choose Torso</a>
                <div class="dropdown-menu" id="torso-select" aria-labelledby="dropdown04">
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="dropdown-toggle btn btn-success text-white" id="dropdown03" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Choose Lego</a>
                <div class="dropdown-menu" id="leg-select" aria-labelledby="dropdown04">
                </div>
            </li>
            <li class="nav-item">
                <a class="bg-primary btn text-white" id="random-btn">Random Lego</a>
            </li>
            <li class="nav-item">
                <a class="bg-secondary btn text-white" id="save-btn">Save Lego</a>
            </li>
        </ul>
    </div>
  </nav>`;
  $('#navbar-output').html(domString);
};

export default displayNavbar;
