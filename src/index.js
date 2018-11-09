import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/LegoCharacter/legoCharacter';
import dropdownEvent from './components/Dropdown/dropdownEvent';
import savedCharEvent from './components/SavedCharacter/savedCharacter';

const initApp = () => {
  legoCharacter.getAndPrintAllParts();
  dropdownEvent.selectedHeadEvent();
  dropdownEvent.selectedTorsoEvent();
  dropdownEvent.selectedLegEvent();
  savedCharEvent();
};

initApp();

$('#click-btn').on('click', () => {
  $('#output').append('yo');
});
