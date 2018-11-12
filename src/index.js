// import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import populatePartDropdowns from './components/Dropdown/dropdown';
import dropdownEvent from './components/Dropdown/dropdownEvent';
import savedCharEvent from './components/SavedCharacter/savedCharacter';
import randomCharacter from './components/RandomCharacter/randomCharacter';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  populatePartDropdowns();
  dropdownEvent.selectedHeadEvent();
  dropdownEvent.selectedTorsoEvent();
  dropdownEvent.selectedLegEvent();
  savedCharEvent();
  randomCharacter();
};

initApp();
