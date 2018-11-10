import $ from 'jquery';
import legoCharacter from '../LegoCharacter/legoCharacter';

const selectedHeadEvent = () => {
  $('#head-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    legoCharacter.selectedHead(clickedPartId);
  });
};

const selectedTorsoEvent = () => {
  $('#torso-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    legoCharacter.selectedTorso(clickedPartId);
  });
};

const selectedLegEvent = () => {
  $('#leg-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    legoCharacter.selectedLeg(clickedPartId);
  });
};

export default { selectedHeadEvent, selectedTorsoEvent, selectedLegEvent };
