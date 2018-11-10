// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import populatePartDropdowns from './components/Dropdown/dropdown';
import dropdownEvent from './components/Dropdown/dropdownEvent';
import savedCharEvent from './components/SavedCharacter/savedCharacter';
import randomCharacter from './components/RandomCharacter/randomCharacter';


const initApp = () => {
  populatePartDropdowns();
  dropdownEvent.selectedHeadEvent();
  dropdownEvent.selectedTorsoEvent();
  dropdownEvent.selectedLegEvent();
  savedCharEvent();
  randomCharacter();
};

initApp();
