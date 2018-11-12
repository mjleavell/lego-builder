import $ from 'jquery';
import partsData from '../../data/partsData';
import './legoCharacter.scss';

const writeSelectedHead = (clickedHead) => {
  let domString = '';
  domString += `
    <div id='${clickedHead.id}' class='card'>
      <img class='card-img' src=${clickedHead.imageUrl}
    </div>`;
  $('#head-name').html(clickedHead.name);
  $('#head').html(domString);
};

const writeSelectedTorso = (clickedTorso) => {
  let domString = '';
  domString += `
    <div id='${clickedTorso.id}' class='card'>
      <img class='card-img' src=${clickedTorso.imageUrl}
    </div>`;
  $('#torso-name').html(clickedTorso.name);
  $('#torso').html(domString);
};

const writeSelectedLeg = (clickedLeg) => {
  let domString = '';
  domString += `
    <div id='${clickedLeg.id}' class='card'>
      <img class='card-img' src=${clickedLeg.imageUrl}
    </div>`;
  $('#leg-name').html(clickedLeg.name);
  $('#leg').html(domString);
};

const selectedHead = (clickedHeadId) => {
  partsData.getHeadsData().then((heads) => {
    const clickedHead = heads.filter(head => head.id === clickedHeadId);
    writeSelectedHead(clickedHead[0]);
  });
};

const selectedTorso = (clickedTorsoId) => {
  partsData.getTorsosData().then((torsos) => {
    const clickedTorso = torsos.filter(torso => torso.id === clickedTorsoId);
    writeSelectedTorso(clickedTorso[0]);
  });
};

const selectedLeg = (clickedLegId) => {
  partsData.getLegsData().then((legs) => {
    const clickedLeg = legs.filter(leg => leg.id === clickedLegId);
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
