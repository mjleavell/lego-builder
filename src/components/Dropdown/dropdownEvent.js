import $ from 'jquery';
import legoCharacter from '../LegoCharacter/legoCharacter';

const selectedHeadEvent = () => {
  $('#head-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    console.log(clickedPartId);
    legoCharacter.selectedHead(clickedPartId);
  });
};

const selectedTorsoEvent = () => {
  $('#torso-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    console.log(clickedPartId);
    legoCharacter.selectedTorso(clickedPartId);
  });
};

const selectedLegEvent = () => {
  $('#leg-select').on('click', (e) => {
    const clickedPartId = $(e.target).closest('a').attr('id');
    console.log(clickedPartId);
    legoCharacter.selectedLeg(clickedPartId);
  });
};

export default { selectedHeadEvent, selectedTorsoEvent, selectedLegEvent };
