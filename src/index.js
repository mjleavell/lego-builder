import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/LegoCharacter/legoCharacter';
import dropdownEvent from './components/Dropdown/dropdownEvent';

const initApp = () => {
  legoCharacter.getAndPrintAllParts();
  dropdownEvent.selectedHeadEvent();
  dropdownEvent.selectedTorsoEvent();
  dropdownEvent.selectedLegEvent();
};

initApp();

$('#click-btn').on('click', () => {
  $('#output').append('yo');
});
