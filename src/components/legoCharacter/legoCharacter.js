import $ from 'jquery';
import partsData from '../../data/partsData';

const writeSelectedHead = (clickedHead) => {
  let domString = '';
  domString += `
    <div id='${clickedHead[0].id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedHead[0].imageUrl}
    </div>`;
  $('#head').html(domString);
  $('#head-name').html(clickedHead[0].name);
};

const writeSelectedTorso = (clickedTorso) => {
  let domString = '';
  domString += `
    <div id='${clickedTorso[0].id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedTorso[0].imageUrl}
    </div>`;
  $('#torso').html(domString);
  $('#torso-name').html(clickedTorso[0].name);
};

const writeSelectedLeg = (clickedLeg) => {
  let domString = '';
  domString += `
    <div id='${clickedLeg[0].id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedLeg[0].imageUrl}
    </div>`;
  $('#leg').html(domString);
  $('#leg-name').html(clickedLeg[0].name);
};

const selectedHead = (clickedHeadId) => {
  partsData.getHeadsData().then((heads) => {
    const allHeads = heads.data;
    const clickedHead = allHeads.filter(head => head.id === clickedHeadId);
    writeSelectedHead(clickedHead);
  });
};

const selectedTorso = (clickedTorsoId) => {
  partsData.getTorsosData().then((torsos) => {
    const allTorsos = torsos.data;
    const clickedTorso = allTorsos.filter(torso => torso.id === clickedTorsoId);
    writeSelectedTorso(clickedTorso);
  });
};

const selectedLeg = (clickedLegId) => {
  partsData.getLegsData().then((legs) => {
    const allLegs = legs.data;
    const clickedLeg = allLegs.filter(leg => leg.id === clickedLegId);
    writeSelectedLeg(clickedLeg);
  });
};

export default {
  selectedHead,
  selectedLeg,
  selectedTorso,
};
