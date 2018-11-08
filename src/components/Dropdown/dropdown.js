import $ from 'jquery';

const getHeadsInDropdown = (headsArray) => {
  let domString = '';
  headsArray.forEach((head) => {
    domString += `<a class="dropdown-item" id="${head.id}">${head.id}</a>`;
  });
  $('#head-select').html(domString);
};

const getTorsosInDropdown = (torsosArray) => {
  let domString = '';
  torsosArray.forEach((torso) => {
    domString += `<a class="dropdown-item" id="${torso.id}">${torso.id}</a>`;
  });
  $('#torso-select').html(domString);
};

const getLegsInDropdown = (legsArray) => {
  let domString = '';
  legsArray.forEach((leg) => {
    domString += `<a class="dropdown-item" id="${leg.id}">${leg.id}</a>`;
  });
  $('#leg-select').html(domString);
};

export default {
  getHeadsInDropdown,
  getLegsInDropdown,
  getTorsosInDropdown,
};
