import $ from 'jquery';
import partsData from '../../data/partsData';
import './dropdown.scss';

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

const getHeads = () => {
  partsData.getHeadsData()
    .then((heads) => {
      // const allHeads = heads.data;
      getHeadsInDropdown(heads);
    }).catch((error) => {
      console.error(error);
    });
};

const getTorsos = () => {
  partsData.getTorsosData()
    .then((torsos) => {
      getTorsosInDropdown(torsos);
    }).catch((error) => {
      console.error(error);
    });
};

const getLegs = () => {
  partsData.getLegsData()
    .then((legs) => {
      getLegsInDropdown(legs);
    }).catch((error) => {
      console.error(error);
    });
};

const populatePartDropdowns = () => {
  getHeads();
  getLegs();
  getTorsos();
};

export default populatePartDropdowns;
