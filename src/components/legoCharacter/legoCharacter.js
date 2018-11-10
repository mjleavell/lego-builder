import $ from 'jquery';
import partsData from '../../data/partsData';

const writeSelectedHead = (clickedHead) => {
  let domString = '';
  domString += `
    <div id='${clickedHead.id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedHead.imageUrl}
    </div>`;
  $('#head-name').html(clickedHead.name);
  $('#head').html(domString);
};

const writeSelectedTorso = (clickedTorso) => {
  let domString = '';
  domString += `
    <div id='${clickedTorso.id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedTorso.imageUrl}
    </div>`;
  $('#torso-name').html(clickedTorso.name);
  $('#torso').html(domString);
};

const writeSelectedLeg = (clickedLeg) => {
  let domString = '';
  domString += `
    <div id='${clickedLeg.id}' class='card col-3 p-1 m-2'>
      <img class='card-img-top' src=${clickedLeg.imageUrl}
    </div>`;
  $('#leg-name').html(clickedLeg.name);
  $('#leg').html(domString);
};

const selectedHead = (clickedHeadId) => {
  partsData.getHeadsData().then((heads) => {
    const allHeads = heads.data;
    const clickedHead = allHeads.filter(head => head.id === clickedHeadId);
    writeSelectedHead(clickedHead[0]);
  });
};

const selectedTorso = (clickedTorsoId) => {
  partsData.getTorsosData().then((torsos) => {
    const allTorsos = torsos.data;
    const clickedTorso = allTorsos.filter(torso => torso.id === clickedTorsoId);
    writeSelectedTorso(clickedTorso[0]);
  });
};

const selectedLeg = (clickedLegId) => {
  partsData.getLegsData().then((legs) => {
    const allLegs = legs.data;
    const clickedLeg = allLegs.filter(leg => leg.id === clickedLegId);
    writeSelectedLeg(clickedLeg[0]);
  });
};

export default {
  selectedHead,
  selectedLeg,
  selectedTorso,
  writeSelectedHead,
  writeSelectedLeg,
  writeSelectedTorso,
};
