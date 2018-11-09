import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import populatePartDropdowns from './components/Dropdown/dropdown';
import dropdownEvent from './components/Dropdown/dropdownEvent';
import savedCharEvent from './components/SavedCharacter/savedCharacter';

const initApp = () => {
  populatePartDropdowns();
  dropdownEvent.selectedHeadEvent();
  dropdownEvent.selectedTorsoEvent();
  dropdownEvent.selectedLegEvent();
  savedCharEvent();
};

initApp();

$('#click-btn').on('click', () => {
  $('#output').append('yo');
});
