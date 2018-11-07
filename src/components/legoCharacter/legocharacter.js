import $ from 'jquery';
import partsData from '../../data/partsData';

const writeHeads = (arrayOfHeads) => {
  let domString = '';
  arrayOfHeads.forEach((head) => {
    domString += `
    <div id='${head.id}' class='card col-1 p-1 m-2'>
      <img class='card-img-top' src=${head.imageUrl}
      <div class="card-body">
          <p class="card-title text-center p-2 m-0">${head.name}</p>
      </div>`;
  });
  $('#head').html(domString);
};

const writeTorsos = (arrayOfTorsos) => {
  let domString = '';
  arrayOfTorsos.forEach((torso) => {
    domString += `
    <div id='${torso.id}' class='card col-1 p-1 m-2'>
      <img class='card-img-top' src=${torso.imageUrl}
      <div class="card-body">
          <p class="card-title text-center p-2 m-0">${torso.name}</p>
      </div>`;
  });
  $('#torso').html(domString);
};

const writeLegs = (arrayOfLegs) => {
  let domString = '';
  arrayOfLegs.forEach((leg) => {
    domString += `
    <div id='${leg.id}' class='card col-1 p-1 m-2'>
      <img class='card-img-top' src=${leg.imageUrl}
      <div class="card-body">
          <p class="card-title text-center p-2 m-0">${leg.name}</p>
      </div>`;
  });
  $('#leg').html(domString);
};

const getHeads = () => {
  partsData.getHeadsData().then((heads) => {
    writeHeads(heads.data);
  }).catch((error) => {
    console.error(error);
  });
};

const getTorsos = () => {
  partsData.getTorsosData().then((torsos) => {
    writeTorsos(torsos.data);
  }).catch((error) => {
    console.error(error);
  });
};

const getLegs = () => {
  partsData.getLegsData().then((legs) => {
    writeLegs(legs.data);
  }).catch((error) => {
    console.error(error);
  });
};

const getAndPrintAllParts = () => {
  getHeads();
  getTorsos();
  getLegs();
};

export default getAndPrintAllParts;
